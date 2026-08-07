// One-off batch fetch of Google Places data for every restaurant in
// src/data/restaurants.js. Writes results to src/data/placesData.js.
//
// Usage: npm run fetch-places
// Requires GOOGLE_PLACES_API_KEY in .env.local (loaded via `node --env-file`).

import { writeFile } from "node:fs/promises";
import { RESTAURANTS } from "../src/data/restaurants.js";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("Missing GOOGLE_PLACES_API_KEY. Add it to .env.local first.");
  process.exit(1);
}

const DELAY_MS = 150;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Miami Spice 2026 runs through August/September; reviews mentioning "spice"
// posted on/after this date get flagged as likely 2026 Spice-menu feedback.
const SPICE_MIN_TIME = Math.floor(Date.UTC(2026, 7, 1) / 1000);
const isSpiceMention = (rv) => rv.time >= SPICE_MIN_TIME && /\bspice\b/i.test(rv.text);
const reviewKey = (rv) => `${rv.author_name}|${rv.time}`;

async function findPlaceId(name) {
  const input = `${name} Miami FL restaurant`;
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", input);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== "OK" || !data.candidates?.length) {
    return { placeId: null, status: data.status };
  }
  return { placeId: data.candidates[0].place_id, status: "OK" };
}

async function fetchPlaceDetails(placeId, { fields, reviewsSort } = {}) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", fields.join(","));
  if (reviewsSort) url.searchParams.set("reviews_sort", reviewsSort);
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== "OK") return null;
  return data.result;
}

const MAIN_FIELDS = [
  "formatted_address",
  "geometry/location",
  "rating",
  "user_ratings_total",
  "formatted_phone_number",
  "website",
  "price_level",
  "opening_hours/weekday_text",
  "url",
  "reviews",
];

async function main() {
  const out = {};
  let ok = 0;
  let failed = [];

  for (let i = 0; i < RESTAURANTS.length; i++) {
    const { name } = RESTAURANTS[i];
    process.stdout.write(`[${i + 1}/${RESTAURANTS.length}] ${name} ... `);

    try {
      const { placeId, status } = await findPlaceId(name);
      if (!placeId) {
        console.log(`NOT FOUND (${status})`);
        failed.push(name);
        await sleep(DELAY_MS);
        continue;
      }

      await sleep(DELAY_MS);
      const details = await fetchPlaceDetails(placeId, { fields: MAIN_FIELDS });
      if (!details) {
        console.log("DETAILS FAILED");
        failed.push(name);
        await sleep(DELAY_MS);
        continue;
      }

      await sleep(DELAY_MS);
      const newest = await fetchPlaceDetails(placeId, { fields: ["reviews"], reviewsSort: "newest" });

      const relevant = (details.reviews || []).filter((rv) => rv.text?.trim());
      const newestReviews = (newest?.reviews || []).filter((rv) => rv.text?.trim());

      const seen = new Set();
      const merged = [];
      for (const rv of [...relevant, ...newestReviews]) {
        const key = reviewKey(rv);
        if (seen.has(key)) continue;
        seen.add(key);
        merged.push(rv);
      }

      // Spice-mentioning 2026 reviews float to the top; otherwise preserve
      // relevance/recency order (relevant reviews first, then newest-only ones).
      merged.sort((a, b) => (isSpiceMention(b) ? 1 : 0) - (isSpiceMention(a) ? 1 : 0));

      out[name] = {
        placeId,
        address: details.formatted_address || null,
        lat: details.geometry?.location?.lat ?? null,
        lng: details.geometry?.location?.lng ?? null,
        rating: details.rating ?? null,
        userRatingsTotal: details.user_ratings_total ?? null,
        phone: details.formatted_phone_number || null,
        website: details.website || null,
        priceLevel: details.price_level ?? null,
        openingHours: details.opening_hours?.weekday_text || null,
        mapsUrl: details.url || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
        reviews: merged.slice(0, 8).map((rv) => ({
          author: rv.author_name,
          authorPhoto: rv.profile_photo_url || null,
          rating: rv.rating,
          relativeTime: rv.relative_time_description,
          text: rv.text,
          isSpiceMention: isSpiceMention(rv),
        })),
      };
      ok++;
      console.log("ok");
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      failed.push(name);
    }

    await sleep(DELAY_MS);
  }

  // A mostly-failed run (e.g. a misconfigured/restricted API key) must never
  // clobber the last good output — better to abort than silently wipe data.
  if (ok < RESTAURANTS.length * 0.5) {
    console.log(`\nAborting without writing: only ${ok}/${RESTAURANTS.length} succeeded.`);
    console.log("Check GOOGLE_PLACES_API_KEY (application restrictions, billing, quota) and re-run.");
    process.exitCode = 1;
    return;
  }

  const header = `// Auto-generated by scripts/fetch-places-data.mjs — do not hand-edit.
// Keyed by exact restaurant name from data/restaurants.js.
`;
  const body = `export const PLACES_DATA = ${JSON.stringify(out, null, 2)};\n`;
  await writeFile(new URL("../src/data/placesData.js", import.meta.url), header + body);

  console.log(`\nDone. ${ok} succeeded, ${failed.length} failed.`);
  if (failed.length > 0) {
    console.log("Failed lookups:");
    failed.forEach((n) => console.log(` - ${n}`));
  }
}

main();

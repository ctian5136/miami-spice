import { RESTAURANTS } from "../data/restaurants";

export const CUISINES = ["All cuisines", ...new Set(RESTAURANTS.map((r) => r.cuisine))].sort(
  (a, b) => (a === "All cuisines" ? -1 : b === "All cuisines" ? 1 : a.localeCompare(b))
);

export function filterRestaurants(restaurants, { filter, hood, meal, cuisine }) {
  return restaurants.filter((r) => {
    if (filter !== "all" && !r.tags.includes(filter)) return false;
    if (hood !== "All areas" && r.hood !== hood) return false;
    if (cuisine !== "All cuisines" && r.cuisine !== cuisine) return false;
    if (meal === "Lunch" && r.meal === "Dinner") return false;
    if (meal === "Dinner" && r.meal === "Lunch") return false;
    return true;
  });
}

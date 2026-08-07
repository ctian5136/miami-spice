import React, { useEffect, useMemo, useRef, useState } from "react";
import { List, X } from "lucide-react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { PLACES_DATA } from "../data/placesData";
import { loadGoogleMaps } from "../lib/googleMaps";
import { styles } from "../styles";
import DetailModal from "./DetailModal";

const MIAMI_CENTER = { lat: 25.7617, lng: -80.1918 };

export function MapToggleButton({ panelOpen, onClick }) {
  return (
    <button style={styles.mapListToggleBtn} onClick={onClick}>
      {panelOpen ? <X size={14} strokeWidth={2.5} /> : <List size={14} strokeWidth={2.5} />}
      {panelOpen ? "Hide panel" : "View list"}
    </button>
  );
}

// Pin-clustered Google map with a persistent right-hand list/detail panel.
// `restaurants` may be any subset (all of Browse, a single saved list, etc) —
// only entries with known coordinates in PLACES_DATA get a pin. Panel state
// is controlled by the parent so a toggle button can live elsewhere on the
// page (e.g. inline with FilterBar's dropdowns) while still driving this map.
export default function RestaurantMap({
  restaurants, picks, user, embedded = false,
  panelMode, setPanelMode, selected, setSelected,
}) {
  const [loadError, setLoadError] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const mapDivRef = useRef(null);
  const mapRef = useRef(null);
  const clustererRef = useRef(null);
  const markersRef = useRef([]);

  const list = useMemo(() => {
    return restaurants.filter((r) => {
      const place = PLACES_DATA[r.name];
      return place?.lat != null && place?.lng != null;
    });
  }, [restaurants]);

  const panelOpen = panelMode !== "closed";

  const openDetail = (r) => {
    setSelected(r);
    setPanelMode("detail");
  };

  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then((maps) => {
        if (cancelled || !mapDivRef.current) return;
        mapRef.current = new maps.Map(mapDivRef.current, {
          center: MIAMI_CENTER,
          zoom: 12,
        });
        setMapReady(true);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mapReady || !mapRef.current || !window.google) return;
    const maps = window.google.maps;

    markersRef.current.forEach((m) => m.setMap(null));
    clustererRef.current?.clearMarkers();

    const markers = list.map((r) => {
      const place = PLACES_DATA[r.name];
      const marker = new maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        title: r.name,
      });
      marker.addListener("click", () => openDetail(r));
      return marker;
    });

    markersRef.current = markers;
    clustererRef.current = new MarkerClusterer({ map: mapRef.current, markers });

    if (list.length === 1) {
      const place = PLACES_DATA[list[0].name];
      mapRef.current.setCenter({ lat: place.lat, lng: place.lng });
      mapRef.current.setZoom(15);
    } else if (list.length > 1) {
      const bounds = new maps.LatLngBounds();
      list.forEach((r) => {
        const place = PLACES_DATA[r.name];
        bounds.extend({ lat: place.lat, lng: place.lng });
      });
      mapRef.current.fitBounds(bounds, 48);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, mapReady]);

  // Nudge Google Maps to recompute its size after the panel opens/closes,
  // since resizing the flex container doesn't fire a native resize event.
  useEffect(() => {
    if (!mapReady || !mapRef.current || !window.google) return;
    const timer = setTimeout(() => {
      const map = mapRef.current;
      const center = map.getCenter();
      window.google.maps.event.trigger(map, "resize");
      if (center) map.setCenter(center);
    }, 220);
    return () => clearTimeout(timer);
  }, [panelOpen, mapReady]);

  return loadError ? (
    <div style={styles.empty}>Couldn't load the map. Check your connection and try again.</div>
  ) : (
    <div style={embedded ? styles.mapSplitRowEmbedded : styles.mapSplitRow}>
      <div style={{ ...styles.mapContainer, ...(panelOpen ? styles.mapContainerNarrow : {}) }}>
        <div ref={mapDivRef} style={styles.mapCanvas} />
      </div>

      {panelOpen && (
        <div style={styles.mapPanel}>
          {panelMode === "list" ? (
            <>
              <p style={styles.mapPanelListHeader}>{list.length} spot{list.length === 1 ? "" : "s"}</p>
              {list.map((r) => {
                const place = PLACES_DATA[r.name];
                return (
                  <button key={r.name} style={styles.mapListRow} onClick={() => openDetail(r)}>
                    <p style={styles.mapListName}>{r.name}</p>
                    <p style={styles.mapListMeta}>
                      {r.hood} · {r.cuisine}
                      {place?.rating && ` · ★ ${place.rating} (${place.userRatingsTotal})`}
                    </p>
                  </button>
                );
              })}
              {list.length === 0 && (
                <p style={styles.detailEmptyNote}>None of these spots have map data yet.</p>
              )}
            </>
          ) : (
            <>
              <button style={styles.mapBackToListBtn} onClick={() => setPanelMode("list")}>
                ← Back to list
              </button>
              <DetailModal restaurant={selected} user={user} picks={picks} onClose={() => setPanelMode("list")} inline />
            </>
          )}
        </div>
      )}
    </div>
  );
}

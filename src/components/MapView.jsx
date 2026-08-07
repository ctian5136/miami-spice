import React, { useEffect, useMemo, useRef, useState } from "react";
import { List, X } from "lucide-react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { RESTAURANTS } from "../data/restaurants";
import { PLACES_DATA } from "../data/placesData";
import { filterRestaurants } from "../lib/filterRestaurants";
import { loadGoogleMaps } from "../lib/googleMaps";
import { styles } from "../styles";
import FilterBar from "./FilterBar";
import DetailModal from "./DetailModal";

const MIAMI_CENTER = { lat: 25.7617, lng: -80.1918 };

export default function MapView({ picks, user, stickyTop }) {
  const [filter, setFilter] = useState("all");
  const [hood, setHood] = useState("All areas");
  const [meal, setMeal] = useState("All");
  const [cuisine, setCuisine] = useState("All cuisines");
  const [loadError, setLoadError] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  // 'closed' | 'list' | 'detail' — the right-hand panel's current content.
  const [panelMode, setPanelMode] = useState("closed");
  const [selected, setSelected] = useState(null);

  const mapDivRef = useRef(null);
  const mapRef = useRef(null);
  const clustererRef = useRef(null);
  const markersRef = useRef([]);

  const list = useMemo(() => {
    return filterRestaurants(RESTAURANTS, { filter, hood, meal, cuisine }).filter((r) => {
      const place = PLACES_DATA[r.name];
      return place?.lat != null && place?.lng != null;
    });
  }, [filter, hood, meal, cuisine]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, mapReady]);

  // Nudge Google Maps to recompute its size after the panel opens/closes,
  // since resizing the flex container doesn't fire a native resize event.
  useEffect(() => {
    if (!mapReady || !mapRef.current || !window.google) return;
    const timer = setTimeout(() => {
      window.google.maps.event.trigger(mapRef.current, "resize");
      mapRef.current.setCenter(MIAMI_CENTER);
    }, 220);
    return () => clearTimeout(timer);
  }, [panelOpen, mapReady]);

  return (
    <>
      <FilterBar
        filter={filter} setFilter={setFilter}
        hood={hood} setHood={setHood}
        meal={meal} setMeal={setMeal}
        cuisine={cuisine} setCuisine={setCuisine}
        stickyTop={stickyTop}
        rightSlot={
          <button
            style={styles.mapListToggleBtn}
            onClick={() => setPanelMode(panelOpen ? "closed" : "list")}
          >
            {panelOpen ? <X size={14} strokeWidth={2.5} /> : <List size={14} strokeWidth={2.5} />}
            {panelOpen ? "Hide panel" : "View list"}
          </button>
        }
      />

      {loadError ? (
        <div style={styles.empty}>Couldn't load the map. Check your connection and try again.</div>
      ) : (
        <div style={styles.mapSplitRow}>
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
                    <p style={styles.detailEmptyNote}>No spots match those filters. Loosen one to see more.</p>
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
      )}
    </>
  );
}

import React, { useMemo, useState } from "react";
import { RESTAURANTS } from "../data/restaurants";
import { filterRestaurants } from "../lib/filterRestaurants";
import FilterBar from "./FilterBar";
import RestaurantMap, { MapToggleButton } from "./RestaurantMap";

export default function MapView({ picks, user, stickyTop }) {
  const [filter, setFilter] = useState("all");
  const [hood, setHood] = useState("All areas");
  const [meal, setMeal] = useState("All");
  const [cuisine, setCuisine] = useState("All cuisines");
  const [panelMode, setPanelMode] = useState("closed");
  const [selected, setSelected] = useState(null);

  const list = useMemo(() => {
    return filterRestaurants(RESTAURANTS, { filter, hood, meal, cuisine });
  }, [filter, hood, meal, cuisine]);

  return (
    <>
      <FilterBar
        filter={filter} setFilter={setFilter}
        hood={hood} setHood={setHood}
        meal={meal} setMeal={setMeal}
        cuisine={cuisine} setCuisine={setCuisine}
        stickyTop={stickyTop}
        rightSlot={
          <MapToggleButton
            panelOpen={panelMode !== "closed"}
            onClick={() => setPanelMode((m) => (m === "closed" ? "list" : "closed"))}
          />
        }
      />
      <RestaurantMap
        restaurants={list}
        picks={picks}
        user={user}
        panelMode={panelMode}
        setPanelMode={setPanelMode}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

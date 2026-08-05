import React, { useMemo, useState } from "react";
import { RESTAURANTS, FILTERS, HOODS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";
import ListPicker from "./ListPicker";

const CUISINES = ["All cuisines", ...new Set(RESTAURANTS.map((r) => r.cuisine))].sort(
  (a, b) => (a === "All cuisines" ? -1 : b === "All cuisines" ? 1 : a.localeCompare(b))
);

export default function BrowseView({ picks, onMarkEaten, onRemove, user, myLists, onListsChanged, stickyTop }) {
  const [filter, setFilter] = useState("all");
  const [hood, setHood] = useState("All areas");
  const [meal, setMeal] = useState("All");
  const [cuisine, setCuisine] = useState("All cuisines");
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [pickerRestaurant, setPickerRestaurant] = useState(null);

  const list = useMemo(() => {
    return RESTAURANTS.filter((r) => {
      if (filter !== "all" && !r.tags.includes(filter)) return false;
      if (hood !== "All areas" && r.hood !== hood) return false;
      if (cuisine !== "All cuisines" && r.cuisine !== cuisine) return false;
      if (meal === "Lunch" && r.meal === "Dinner") return false;
      if (meal === "Dinner" && r.meal === "Lunch") return false;
      return true;
    }).sort((a, b) => b.stars - a.stars);
  }, [filter, hood, meal, cuisine]);

  return (
    <>
      <div style={{ ...styles.controls, top: stickyTop }}>
        <div style={styles.chips}>
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const active = filter === f.id;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)}
                style={{ ...styles.chip, ...(active ? styles.chipActive : {}) }}>
                <Icon size={13} strokeWidth={2.5} />
                {f.label}
              </button>
            );
          })}
        </div>
        <div style={styles.selects}>
          <select value={hood} onChange={(e) => setHood(e.target.value)} style={styles.select}>
            {HOODS.map((h) => <option key={h}>{h}</option>)}
          </select>
          <select value={meal} onChange={(e) => setMeal(e.target.value)} style={styles.select}>
            {["All", "Lunch", "Dinner"].map((m) => <option key={m}>{m}</option>)}
          </select>
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} style={styles.select}>
            {CUISINES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div style={styles.grid} className="restaurant-grid">
        {list.map((r) => (
          <RestaurantCard
            key={r.name}
            restaurant={r}
            pick={picks[r.name]}
            onOpenListPicker={setPickerRestaurant}
            onMarkEaten={onMarkEaten}
            onRemove={onRemove}
            onOpenDetail={setDetailRestaurant}
          />
        ))}
      </div>

      {list.length === 0 && (
        <div style={styles.empty}>No spots match those filters. Loosen one to see more.</div>
      )}

      <footer style={styles.footer}>
        Days, prices & menus vary by restaurant and can change — drinks, tax & tip aren't included.
        Confirm each on the official Miami Spice site before booking.
      </footer>

      {detailRestaurant && (
        <DetailModal restaurant={detailRestaurant} user={user} picks={picks} onClose={() => setDetailRestaurant(null)} />
      )}

      {pickerRestaurant && (
        <ListPicker
          restaurantName={pickerRestaurant}
          user={user}
          myLists={myLists}
          onListsChanged={onListsChanged}
          onClose={() => setPickerRestaurant(null)}
        />
      )}
    </>
  );
}

import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { FILTERS, HOODS } from "../data/restaurants";
import { CUISINES } from "../lib/filterRestaurants";
import { styles } from "../styles";

export default function FilterBar({ filter, setFilter, hood, setHood, meal, setMeal, cuisine, setCuisine, stickyTop, rightSlot }) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeFilterCount =
    (filter !== "all" ? 1 : 0) + (hood !== "All areas" ? 1 : 0) + (meal !== "All" ? 1 : 0) + (cuisine !== "All cuisines" ? 1 : 0);

  return (
    <div style={{ ...styles.controls, top: stickyTop }}>
      <button
        className="filters-toggle-btn"
        style={styles.filtersToggleBtn}
        onClick={() => setFiltersOpen((o) => !o)}
      >
        <SlidersHorizontal size={14} strokeWidth={2.5} />
        Filters
        {activeFilterCount > 0 && <span style={styles.navCountBadge}>{activeFilterCount}</span>}
        <ChevronDown size={14} strokeWidth={2.5} style={{ transform: filtersOpen ? "rotate(180deg)" : "none" }} />
      </button>

      <div className={`filters-panel${filtersOpen ? " filters-panel-open" : ""}`} style={styles.filtersPanel}>
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
          {rightSlot && <div style={{ marginLeft: "auto" }}>{rightSlot}</div>}
        </div>
      </div>
    </div>
  );
}

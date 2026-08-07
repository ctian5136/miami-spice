import React, { useMemo, useState } from "react";
import { RESTAURANTS } from "../data/restaurants";
import { filterRestaurants } from "../lib/filterRestaurants";
import { styles } from "../styles";
import FilterBar from "./FilterBar";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";
import ListPicker from "./ListPicker";

export default function BrowseView({ picks, onMarkEaten, onRemove, user, myLists, onListsChanged, stickyTop, friendsEatenMap = {} }) {
  const [filter, setFilter] = useState("all");
  const [hood, setHood] = useState("All areas");
  const [meal, setMeal] = useState("All");
  const [cuisine, setCuisine] = useState("All cuisines");
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [pickerRestaurant, setPickerRestaurant] = useState(null);

  const list = useMemo(() => {
    return filterRestaurants(RESTAURANTS, { filter, hood, meal, cuisine }).sort((a, b) => b.stars - a.stars);
  }, [filter, hood, meal, cuisine]);

  return (
    <>
      <FilterBar
        filter={filter} setFilter={setFilter}
        hood={hood} setHood={setHood}
        meal={meal} setMeal={setMeal}
        cuisine={cuisine} setCuisine={setCuisine}
        stickyTop={stickyTop}
      />

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
            friendsEaten={friendsEatenMap[r.name]}
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

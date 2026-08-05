import React, { useState } from "react";
import { RESTAURANTS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";

const noop = () => {};

export default function MyListsView({
  picks,
  readOnly = false,
  onToggleWant = noop,
  onMarkEaten = noop,
  onRemove = noop,
  ownerLabel = "Your",
  user,
}) {
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const want = RESTAURANTS.filter((r) => picks[r.name]?.status === "want");
  const eaten = RESTAURANTS.filter((r) => picks[r.name]?.status === "eaten");

  return (
    <>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{ownerLabel} Want to Eat list</h2>
        <p style={styles.sectionSub}>{want.length} spot{want.length === 1 ? "" : "s"}</p>
      </div>
      {want.length === 0 ? (
        <div style={styles.empty}>Nothing here yet.</div>
      ) : (
        <div style={styles.grid}>
          {want.map((r) => (
            <RestaurantCard
              key={r.name}
              restaurant={r}
              pick={picks[r.name]}
              readOnly={readOnly}
              onToggleWant={onToggleWant}
              onMarkEaten={onMarkEaten}
              onRemove={onRemove}
              onOpenDetail={setDetailRestaurant}
            />
          ))}
        </div>
      )}

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{ownerLabel} Have Eaten list</h2>
        <p style={styles.sectionSub}>
          {eaten.length} spot{eaten.length === 1 ? "" : "s"} — compare notes and photos side by side
        </p>
      </div>
      {eaten.length === 0 ? (
        <div style={styles.empty}>Nothing here yet.</div>
      ) : (
        <div style={styles.grid}>
          {eaten.map((r) => (
            <RestaurantCard
              key={r.name}
              restaurant={r}
              pick={picks[r.name]}
              readOnly={readOnly}
              onToggleWant={onToggleWant}
              onMarkEaten={onMarkEaten}
              onRemove={onRemove}
              onOpenDetail={setDetailRestaurant}
            />
          ))}
        </div>
      )}

      {detailRestaurant && (
        <DetailModal restaurant={detailRestaurant} user={user} onClose={() => setDetailRestaurant(null)} />
      )}
    </>
  );
}

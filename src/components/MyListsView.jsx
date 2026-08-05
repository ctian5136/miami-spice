import React from "react";
import { RESTAURANTS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";

const noop = () => {};

export default function MyListsView({
  picks,
  readOnly = false,
  onToggleWant = noop,
  onMarkEaten = noop,
  onRemove = noop,
  ownerLabel = "Your",
}) {
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
            />
          ))}
        </div>
      )}
    </>
  );
}

import React from "react";
import { Star, MapPin, Heart, UtensilsCrossed, X } from "lucide-react";
import { styles, colors } from "../styles";

export default function RestaurantCard({
  restaurant,
  pick,
  readOnly = false,
  onToggleWant,
  onMarkEaten,
  onRemove,
  onOpenDetail,
}) {
  const r = restaurant;
  const status = pick?.status;

  const cardStyle = {
    ...styles.card,
    ...(status === "want" ? styles.cardWant : {}),
    ...(status === "eaten" ? styles.cardEaten : {}),
    ...(onOpenDetail ? { cursor: "pointer" } : {}),
  };

  return (
    <div style={cardStyle} onClick={() => onOpenDetail?.(r)}>
      <div style={styles.cardTop}>
        <div style={styles.cardHead}>
          {r.stars > 0 && (
            <div style={styles.starRow}>
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} size={14} fill={colors.accent} color={colors.accent} strokeWidth={0} />
              ))}
            </div>
          )}
          <h3 style={styles.cardName}>{r.name}</h3>
          <div style={styles.metaRow}>
            <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
            <span style={styles.metaDot}>·</span>
            <span>{r.cuisine}</span>
          </div>
        </div>
        {status && (
          <span style={{ ...styles.badge, ...(status === "want" ? styles.badgeWant : styles.badgeEaten) }}>
            {status === "want" ? "Want to eat" : "Eaten"}
          </span>
        )}
      </div>

      <p style={styles.cardNote}>{r.note}</p>

      {status === "eaten" && pick?.notes && <p style={styles.eatenNotes}>{pick.notes}</p>}
      {status === "eaten" && pick?.photos?.length > 0 && (
        <div style={styles.photoStrip}>
          {pick.photos.map((p, i) => (
            <img key={i} src={p.url} alt="" style={styles.photoThumb} />
          ))}
        </div>
      )}

      <div style={styles.cardFoot}>
        <span style={styles.priceTag}>{r.price}</span>
        <span style={styles.mealTag}>{r.meal}</span>
      </div>

      {!readOnly && (
        <div style={styles.cardActions} onClick={(e) => e.stopPropagation()}>
          <button
            style={{ ...styles.actionBtn, ...(status === "want" ? styles.actionBtnWant : {}) }}
            onClick={() => onToggleWant(r.name)}
          >
            <Heart size={13} strokeWidth={2.5} />
            {status === "want" ? "Wanting" : "Want to eat"}
          </button>
          <button
            style={{ ...styles.actionBtn, ...(status === "eaten" ? styles.actionBtnEaten : {}) }}
            onClick={() => onMarkEaten(r.name)}
          >
            <UtensilsCrossed size={13} strokeWidth={2.5} />
            {status === "eaten" ? "Edit" : "Mark eaten"}
          </button>
          {status && (
            <button style={styles.removeBtn} onClick={() => onRemove(r.name)} title="Remove from lists">
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

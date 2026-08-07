import React from "react";
import { MapPin, ListPlus, UtensilsCrossed, X } from "lucide-react";
import { styles } from "../styles";
import { PLACES_DATA } from "../data/placesData";
import MichelinStar from "./MichelinStar";

export default function RestaurantCard({
  restaurant,
  pick,
  readOnly = false,
  onOpenListPicker,
  onMarkEaten,
  onRemove,
  onOpenDetail,
}) {
  const r = restaurant;
  const status = pick?.status;
  const place = PLACES_DATA[r.name];

  const cardStyle = {
    ...styles.card,
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
                <MichelinStar key={i} size={14} />
              ))}
            </div>
          )}
          <h3 style={styles.cardName}>{r.name}</h3>
          <div style={styles.metaRow}>
            <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
            <span style={styles.metaDot}>·</span>
            <span>{r.cuisine}</span>
            {place?.rating && (
              <>
                <span style={styles.metaDot}>·</span>
                <span>★ {place.rating} ({place.userRatingsTotal})</span>
              </>
            )}
          </div>
        </div>
        <span style={{ ...styles.badge, ...styles.badgeEaten, ...(status === "eaten" ? {} : styles.badgeHidden) }}>
          Eaten
        </span>
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
          <button style={styles.actionBtn} onClick={() => onOpenListPicker(r.name)}>
            <ListPlus size={13} strokeWidth={2.5} />
            Add to list
          </button>
          <button
            style={{ ...styles.actionBtn, ...(status === "eaten" ? styles.actionBtnEaten : {}) }}
            onClick={() => onMarkEaten(r.name)}
          >
            <UtensilsCrossed size={13} strokeWidth={2.5} />
            {status === "eaten" ? "Edit" : "Mark eaten"}
          </button>
          <button
            style={{ ...styles.removeBtn, ...(status === "eaten" ? {} : styles.removeBtnHidden) }}
            onClick={() => onRemove(r.name)}
            title="Remove eaten status"
            tabIndex={status === "eaten" ? 0 : -1}
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  );
}

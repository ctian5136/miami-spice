import React from "react";
import { Star, MapPin, ExternalLink, CalendarCheck2, X } from "lucide-react";
import { styles } from "../styles";
import { RESTAURANT_DETAILS } from "../data/restaurantDetails";

export default function DetailModal({ restaurant, onClose }) {
  const r = restaurant;
  const details = RESTAURANT_DETAILS[r.name];

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBox} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            {r.stars > 0 && (
              <div style={styles.starRow}>
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} fill={styles.priceTag.color} color={styles.priceTag.color} strokeWidth={0} />
                ))}
              </div>
            )}
            <h3 style={styles.dialogTitle}>{r.name}</h3>
            <p style={styles.metaRow}>
              <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
              <span style={styles.metaDot}>·</span>
              <span>{r.cuisine}</span>
            </p>
          </div>
          <button onClick={onClose} style={styles.removeBtn}>
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        <p style={{ ...styles.cardNote, margin: "12px 0" }}>{r.note}</p>

        <div style={styles.cardFoot}>
          <span style={styles.priceTag}>{r.price}</span>
          <span style={styles.mealTag}>{r.meal}</span>
        </div>

        <div style={styles.detailLinks}>
          {details?.website ? (
            <a href={details.website} target="_blank" rel="noreferrer" style={styles.detailLinkBtn}>
              <ExternalLink size={13} strokeWidth={2.5} /> Website
            </a>
          ) : null}
          {details?.bookingUrl ? (
            <a href={details.bookingUrl} target="_blank" rel="noreferrer" style={styles.detailLinkBtn}>
              <CalendarCheck2 size={13} strokeWidth={2.5} /> Book a table
            </a>
          ) : null}
          {!details?.website && !details?.bookingUrl && (
            <a
              href="https://www.miamiandbeaches.com/deals/spice-restaurant-months"
              target="_blank"
              rel="noreferrer"
              style={styles.detailLinkBtn}
            >
              <ExternalLink size={13} strokeWidth={2.5} /> Official Miami Spice site
            </a>
          )}
        </div>

        <div style={styles.detailSectionTitle}>Spice menu highlights</div>
        {details?.spiceMenu?.length > 0 ? (
          <ul style={styles.spiceMenuList}>
            {details.spiceMenu.map((item, i) => (
              <li key={i} style={styles.spiceMenuItem}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={styles.detailEmptyNote}>
            Menu details not added yet — check the restaurant's website or the official Miami Spice
            page above for this year's Spice menu.
          </p>
        )}
      </div>
    </div>
  );
}

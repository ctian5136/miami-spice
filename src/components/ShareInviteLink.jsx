import React, { useState } from "react";
import { Copy, Share2, Check } from "lucide-react";
import { styles } from "../styles";
import { shareOrCopy } from "../lib/invite";

export default function ShareInviteLink({ url, title, text, label, sub }) {
  const [feedback, setFeedback] = useState("");

  const handleClick = async () => {
    const result = await shareOrCopy({ url, title, text });
    if (result === "copied") {
      setFeedback("Link copied!");
      setTimeout(() => setFeedback(""), 2500);
    }
  };

  return (
    <div style={styles.inviteLinkCard}>
      <p style={styles.detailSectionTitle}>{label}</p>
      {sub && <p style={{ ...styles.sectionSub, marginBottom: 12 }}>{sub}</p>}
      <div style={styles.inviteLinkRow}>
        <input style={styles.inviteLinkInput} value={url} readOnly onFocus={(e) => e.target.select()} />
        <button style={styles.secondaryBtn} onClick={handleClick} title="Copy or share invite link">
          {navigator.share ? (
            <>
              <Share2 size={14} strokeWidth={2.5} /> Share
            </>
          ) : (
            <>
              <Copy size={14} strokeWidth={2.5} /> Copy
            </>
          )}
        </button>
      </div>
      {feedback && (
        <p style={{ ...styles.detailEmptyNote, color: styles.primaryBtn.background, fontStyle: "normal", marginTop: 6 }}>
          <Check size={12} strokeWidth={3} style={{ verticalAlign: -1, marginRight: 4 }} />
          {feedback}
        </p>
      )}
    </div>
  );
}

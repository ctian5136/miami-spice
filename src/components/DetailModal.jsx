import React, { useEffect, useState } from "react";
import { Star, MapPin, ExternalLink, CalendarCheck2, X, Send } from "lucide-react";
import { styles, colors } from "../styles";
import { RESTAURANT_DETAILS } from "../data/restaurantDetails";
import { fetchFriends, getPicks } from "../lib/social";
import { fetchComments, addComment } from "../lib/lists";

export default function DetailModal({ restaurant, user, listId, onClose }) {
  const r = restaurant;
  const details = RESTAURANT_DETAILS[r.name];
  const [friendReviews, setFriendReviews] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      const friends = await fetchFriends(user.uid);
      const withPicks = await Promise.all(
        friends.map(async (friend) => {
          const picks = await getPicks(friend.uid);
          const pick = picks[r.name];
          return pick?.status === "eaten" ? { friend, pick } : null;
        })
      );
      if (!cancelled) setFriendReviews(withPicks.filter(Boolean));
    })();
    return () => {
      cancelled = true;
    };
  }, [user, r.name]);

  const loadComments = () => {
    if (!listId) return;
    fetchComments(listId, r.name).then(setComments);
  };

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listId, r.name]);

  const handlePostComment = async () => {
    const text = commentText.trim();
    if (!text) return;
    setPosting(true);
    try {
      await addComment(listId, r.name, user, text);
      setCommentText("");
      loadComments();
    } finally {
      setPosting(false);
    }
  };

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBoxWide} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <h3 style={styles.dialogTitle}>{r.name}</h3>
          <button onClick={onClose} style={styles.removeBtn}>
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        <div style={styles.detailGrid}>
          <div style={styles.detailMain}>
            {r.stars > 0 && (
              <div style={styles.starRow}>
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} fill={colors.accent} color={colors.accent} strokeWidth={0} />
                ))}
              </div>
            )}
            <p style={styles.metaRow}>
              <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
              <span style={styles.metaDot}>·</span>
              <span>{r.cuisine}</span>
            </p>

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

          <div style={styles.detailFriendsCol}>
            <div style={{ ...styles.detailSectionTitle, marginTop: 0 }}>What your friends think:</div>
            {friendReviews === null ? (
              <p style={styles.detailEmptyNote}>Loading…</p>
            ) : friendReviews.length === 0 ? (
              <p style={styles.detailEmptyNote}>No friends have tried {r.name} yet.</p>
            ) : (
              friendReviews.map(({ friend, pick }) => (
                <div key={friend.uid} style={styles.friendReviewRow}>
                  {friend.photoURL ? (
                    <img src={friend.photoURL} alt="" style={styles.friendReviewAvatar} />
                  ) : (
                    <div style={styles.friendReviewAvatar} />
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={styles.friendReviewName}>{friend.displayName || "A friend"}</p>
                    {pick.notes ? (
                      <p style={{ ...styles.eatenNotes, background: colors.bg }}>{pick.notes}</p>
                    ) : (
                      <p style={styles.detailEmptyNote}>Marked as eaten, no notes left.</p>
                    )}
                    {pick.photos?.length > 0 && (
                      <div style={{ ...styles.photoStrip, marginTop: 8 }}>
                        {pick.photos.map((p, i) => (
                          <img key={i} src={p.url} alt="" style={styles.photoThumb} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {listId && (
              <>
                <div style={styles.detailSectionTitle}>Comments</div>
                {comments === null ? (
                  <p style={styles.detailEmptyNote}>Loading…</p>
                ) : comments.length === 0 ? (
                  <p style={styles.detailEmptyNote}>No comments yet.</p>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} style={styles.commentRow}>
                      {c.authorPhoto ? (
                        <img src={c.authorPhoto} alt="" style={styles.commentAvatar} />
                      ) : (
                        <div style={styles.commentAvatar} />
                      )}
                      <div style={{ minWidth: 0 }}>
                        <p style={styles.commentAuthor}>{c.authorName || "Someone"}</p>
                        <p style={styles.commentText}>{c.text}</p>
                      </div>
                    </div>
                  ))
                )}
                <div style={styles.commentForm}>
                  <input
                    style={styles.input}
                    placeholder="Add a comment…"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handlePostComment()}
                  />
                  <button style={styles.primaryBtn} onClick={handlePostComment} disabled={posting || !commentText.trim()}>
                    <Send size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

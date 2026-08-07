import React, { useEffect, useMemo, useState } from "react";
import { MapPin, Phone, ExternalLink, CalendarCheck2, Navigation, X, Send, ChevronDown } from "lucide-react";
import { styles, colors } from "../styles";
import { RESTAURANT_DETAILS } from "../data/restaurantDetails";
import { PLACES_DATA } from "../data/placesData";
import MichelinStar from "./MichelinStar";
import Lightbox from "./Lightbox";
import { fetchFriends, getPicks } from "../lib/social";
import { fetchComments, addComment } from "../lib/lists";

const REVIEW_TRUNCATE_LENGTH = 240;

function truncate(text, max) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export default function DetailModal({ restaurant, user, listId, picks, onClose, inline = false }) {
  const r = restaurant;
  const details = RESTAURANT_DETAILS[r.name];
  const place = PLACES_DATA[r.name];
  const myPick = picks?.[r.name];
  const [friendReviews, setFriendReviews] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [posting, setPosting] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState(() => new Set());
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Higher-rated reviews lead so the reviews that show by default (before
  // "show more") skew positive; spice mentions break ties so they still
  // surface without overriding a genuinely negative review's low rating.
  const sortedReviews = useMemo(() => {
    if (!place?.reviews) return [];
    return [...place.reviews].sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return (b.isSpiceMention ? 1 : 0) - (a.isSpiceMention ? 1 : 0);
    });
  }, [place]);

  const toggleReviewExpanded = (i) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

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

  const content = (
    <>
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
                  <MichelinStar key={i} size={14} />
                ))}
              </div>
            )}
            <p style={styles.metaRow}>
              <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
              <span style={styles.metaDot}>·</span>
              <span>{r.cuisine}</span>
              {place?.rating && (
                <>
                  <span style={styles.metaDot}>·</span>
                  <span>★ {place.rating} ({place.userRatingsTotal})</span>
                </>
              )}
            </p>

            {place?.address && (
              <p style={styles.placeAddress}>
                <MapPin size={11} strokeWidth={2.5} /> {place.address}
                {place.phone && (
                  <>
                    <span style={styles.metaDot}>·</span>
                    <Phone size={11} strokeWidth={2.5} /> {place.phone}
                  </>
                )}
              </p>
            )}

            <p style={{ ...styles.cardNote, margin: "12px 0" }}>{r.note}</p>

            <div style={styles.cardFoot}>
              <span style={styles.priceTag}>{r.price}</span>
              <span style={styles.mealTag}>{r.meal}</span>
            </div>

            <div style={styles.detailLinks}>
              {place?.mapsUrl && (
                <a href={place.mapsUrl} target="_blank" rel="noreferrer" style={styles.detailLinkBtn}>
                  <Navigation size={13} strokeWidth={2.5} /> Get directions
                </a>
              )}
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

            {place?.openingHours && (
              <>
                <div style={styles.detailSectionTitle}>Hours</div>
                <ul style={styles.hoursList}>
                  {place.openingHours.map((line, i) => {
                    const [day, ...rest] = line.split(": ");
                    return (
                      <li key={i} style={styles.hoursItem}>
                        <span style={styles.hoursDay}>{day}</span> {rest.join(": ")}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

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

          <div style={inline ? { ...styles.detailFriendsCol, borderLeft: "none", paddingLeft: 0 } : styles.detailFriendsCol}>
            {myPick?.status === "eaten" && (
              <>
                <div style={{ ...styles.detailSectionTitle, marginTop: 0 }}>Your review:</div>
                <div style={styles.friendReviewRow}>
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" style={styles.friendReviewAvatar} />
                  ) : (
                    <div style={styles.friendReviewAvatar} />
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={styles.friendReviewName}>{user.displayName || "You"}</p>
                    {myPick.notes ? (
                      <p style={{ ...styles.eatenNotes, background: colors.bg }}>{myPick.notes}</p>
                    ) : (
                      <p style={styles.detailEmptyNote}>Marked as eaten, no notes left.</p>
                    )}
                    {myPick.photos?.length > 0 && (
                      <div style={{ ...styles.photoStrip, marginTop: 8 }}>
                        {myPick.photos.map((p, i) => (
                          <img key={i} src={p.url} alt="" style={styles.photoThumb} onClick={() => setLightboxSrc(p.url)} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            <div style={myPick?.status === "eaten" ? styles.detailSectionTitle : { ...styles.detailSectionTitle, marginTop: 0 }}>
              What your friends think:
            </div>
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
                          <img key={i} src={p.url} alt="" style={styles.photoThumb} onClick={() => setLightboxSrc(p.url)} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {sortedReviews.length > 0 && (
              <>
                <div style={styles.detailSectionTitle}>Reviews from Google</div>
                {(showAllReviews ? sortedReviews : sortedReviews.slice(0, 3)).map((rv, i) => {
                  const isLong = rv.text.length > REVIEW_TRUNCATE_LENGTH;
                  const isExpanded = expandedReviews.has(i);
                  return (
                    <div key={i} style={styles.friendReviewRow}>
                      {rv.authorPhoto ? (
                        <img src={rv.authorPhoto} alt="" style={styles.friendReviewAvatar} referrerPolicy="no-referrer" />
                      ) : (
                        <div style={styles.friendReviewAvatar} />
                      )}
                      <div style={{ minWidth: 0 }}>
                        <p style={styles.friendReviewName}>
                          {rv.author}
                          {rv.isSpiceMention && <span style={styles.spiceBadge}>🌶️ 2026 Miami Spice</span>}
                        </p>
                        <p style={styles.googleReviewMeta}>
                          {"★".repeat(rv.rating)}
                          {"☆".repeat(5 - rv.rating)} · {rv.relativeTime}
                        </p>
                        <p style={{ ...styles.eatenNotes, background: colors.bg }}>
                          {isExpanded || !isLong ? rv.text : truncate(rv.text, REVIEW_TRUNCATE_LENGTH)}
                        </p>
                        {isLong && (
                          <button style={styles.reviewToggleBtn} onClick={() => toggleReviewExpanded(i)}>
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                {sortedReviews.length > 3 && (
                  <button
                    style={{ ...styles.reviewToggleBtn, marginTop: 2, marginBottom: 12 }}
                    onClick={() => setShowAllReviews((s) => !s)}
                  >
                    {showAllReviews ? "Show fewer reviews" : `Show ${sortedReviews.length - 3} more reviews`}
                    <ChevronDown size={13} strokeWidth={2.5} style={{ transform: showAllReviews ? "rotate(180deg)" : "none" }} />
                  </button>
                )}
              </>
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

        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );

  if (inline) return content;

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBoxWide} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}

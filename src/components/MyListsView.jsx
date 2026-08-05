import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { RESTAURANTS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";
import ListDetailView from "./ListDetailView";
import { createList, fetchListItems } from "../lib/lists";

const noop = () => {};

export default function MyListsView({
  picks,
  readOnly = false,
  onMarkEaten = noop,
  onRemove = noop,
  ownerLabel = "Your",
  user,
  myLists = [],
  onListsChanged = noop,
  openListId: openListIdProp,
  onOpenList: onOpenListProp,
}) {
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [internalOpenListId, setInternalOpenListId] = useState(null);
  const openListId = openListIdProp !== undefined ? openListIdProp : internalOpenListId;
  const setOpenListId = onOpenListProp || setInternalOpenListId;
  const [counts, setCounts] = useState({});
  const [newListName, setNewListName] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (readOnly || myLists.length === 0) return;
    let cancelled = false;
    Promise.all(myLists.map(async (l) => [l.id, (await fetchListItems(l.id)).length])).then((pairs) => {
      if (!cancelled) setCounts(Object.fromEntries(pairs));
    });
    return () => {
      cancelled = true;
    };
  }, [myLists, readOnly]);

  const handleCreateList = async () => {
    const name = newListName.trim();
    if (!name) return;
    setCreating(true);
    try {
      await createList(user, name);
      setNewListName("");
      await onListsChanged();
    } finally {
      setCreating(false);
    }
  };

  const eaten = RESTAURANTS.filter((r) => picks[r.name]?.status === "eaten");

  const openList = myLists.find((l) => l.id === openListId);
  if (openList) {
    return (
      <ListDetailView
        list={openList}
        user={user}
        picks={picks}
        onMarkEaten={onMarkEaten}
        onRemove={onRemove}
        myLists={myLists}
        onListsChanged={onListsChanged}
        onBack={() => setOpenListId(null)}
      />
    );
  }

  return (
    <>
      {!readOnly && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Lists</h2>
          <p style={styles.sectionSub}>Make as many as you want, and invite people to plan together.</p>

          {myLists.length > 0 && (
            <div style={styles.listsGrid}>
              {myLists.map((l) => (
                <button key={l.id} style={styles.listCard} onClick={() => setOpenListId(l.id)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <h3 style={styles.listCardName}>{l.name}</h3>
                    {l.isPersonal && <span style={{ ...styles.badge, ...styles.badgeWant }}>Personal</span>}
                  </div>
                  <span style={styles.listCardMeta}>
                    {counts[l.id] ?? "…"} spot{counts[l.id] === 1 ? "" : "s"}
                    {l.memberIds.length > 1 ? ` · ${l.memberIds.length} people` : ""}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div style={styles.newListRow}>
            <input
              style={styles.input}
              placeholder="New list name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreateList()}
            />
            <button style={styles.primaryBtn} onClick={handleCreateList} disabled={creating || !newListName.trim()}>
              <Plus size={14} strokeWidth={2.5} /> New list
            </button>
          </div>
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
        <div style={styles.grid} className="restaurant-grid">
          {eaten.map((r) => (
            <RestaurantCard
              key={r.name}
              restaurant={r}
              pick={picks[r.name]}
              readOnly={readOnly}
              onMarkEaten={onMarkEaten}
              onRemove={onRemove}
              onOpenDetail={setDetailRestaurant}
            />
          ))}
        </div>
      )}

      {detailRestaurant && (
        <DetailModal restaurant={detailRestaurant} user={user} picks={picks} onClose={() => setDetailRestaurant(null)} />
      )}
    </>
  );
}

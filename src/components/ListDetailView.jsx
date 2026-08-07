import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft, UserPlus, Trash2, LogOut, X, Map as MapIcon, LayoutGrid } from "lucide-react";
import { RESTAURANTS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";
import RestaurantMap from "./RestaurantMap";
import ListPicker from "./ListPicker";
import InviteModal from "./InviteModal";
import {
  fetchListMembers, fetchListItems, removeItemFromList,
  deleteList, leaveList, removeMember,
} from "../lib/lists";

export default function ListDetailView({ list, user, picks, onMarkEaten, onRemove, myLists, onListsChanged, onBack, friendsEatenMap = {} }) {
  const [members, setMembers] = useState([]);
  const [items, setItems] = useState(null);
  const [showInvite, setShowInvite] = useState(false);
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [pickerRestaurant, setPickerRestaurant] = useState(null);
  const [view, setView] = useState("list");
  const [mapPanelMode, setMapPanelMode] = useState("closed");
  const [mapSelected, setMapSelected] = useState(null);

  const load = useCallback(async () => {
    const [m, i] = await Promise.all([fetchListMembers(list), fetchListItems(list.id)]);
    setMembers(m);
    setItems(i);
  }, [list]);

  useEffect(() => {
    load();
  }, [load]);

  const restaurants = items === null ? [] : items
    .map((item) => ({ item, restaurant: RESTAURANTS.find((r) => r.name === item.name) }))
    .filter((x) => x.restaurant);

  const handleRemoveItem = async (name) => {
    await removeItemFromList(list.id, name);
    load();
  };

  const isOwner = list.ownerId === user.uid;

  const handleDelete = async () => {
    await deleteList(list.id);
    await onListsChanged();
    onBack();
  };

  const handleLeave = async () => {
    await leaveList(list.id, user.uid);
    await onListsChanged();
    onBack();
  };

  const handleRemoveMember = async (uid) => {
    await removeMember(list.id, uid);
    await onListsChanged();
  };

  return (
    <div style={styles.section}>
      <button
        style={{ ...styles.secondaryBtn, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 18 }}
        onClick={onBack}
      >
        <ArrowLeft size={14} strokeWidth={2.5} /> Back to lists
      </button>

      <div style={styles.listHeaderRow}>
        <h2 style={styles.sectionTitle}>{list.name}</h2>
        <div style={{ display: "flex", gap: 8 }}>
          {restaurants.length > 0 && (
            <button
              style={styles.secondaryBtn}
              onClick={() => setView((v) => (v === "list" ? "map" : "list"))}
            >
              {view === "list" ? (
                <><MapIcon size={14} strokeWidth={2.5} /> Map view</>
              ) : (
                <><LayoutGrid size={14} strokeWidth={2.5} /> List view</>
              )}
            </button>
          )}
          {!list.isPersonal && (
            <button style={styles.secondaryBtn} onClick={() => setShowInvite(true)}>
              <UserPlus size={14} strokeWidth={2.5} /> Invite
            </button>
          )}
          {!list.isPersonal && (
            isOwner ? (
              <button style={styles.removeBtn} onClick={handleDelete} title="Delete list">
                <Trash2 size={14} strokeWidth={2.5} />
              </button>
            ) : (
              <button style={styles.removeBtn} onClick={handleLeave} title="Leave Shared List">
                <LogOut size={14} strokeWidth={2.5} />
              </button>
            )
          )}
        </div>
      </div>

      <div style={styles.listMembersRow}>
        {members.map((m) => (
          <span key={m.uid} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {m.photoURL ? (
              <img src={m.photoURL} alt="" style={styles.friendReviewAvatar} />
            ) : (
              <div style={styles.friendReviewAvatar} />
            )}
            <span style={styles.listPickerMeta}>{m.displayName || m.email}</span>
            {isOwner && m.uid !== user.uid && (
              <button
                onClick={() => handleRemoveMember(m.uid)}
                title="Remove from list"
                style={{ background: "none", border: "none", color: "#9A7358", cursor: "pointer", padding: 0, display: "flex" }}
              >
                <X size={12} strokeWidth={2.5} />
              </button>
            )}
          </span>
        ))}
      </div>

      {items === null ? (
        <div style={styles.empty}>Loading…</div>
      ) : restaurants.length === 0 ? (
        <div style={styles.empty}>No restaurants on this list yet — add some from Browse.</div>
      ) : view === "map" ? (
        <RestaurantMap
          restaurants={restaurants.map((x) => x.restaurant)}
          picks={picks}
          user={user}
          embedded
          panelMode={mapPanelMode}
          setPanelMode={setMapPanelMode}
          selected={mapSelected}
          setSelected={setMapSelected}
        />
      ) : (
        <div style={styles.grid} className="restaurant-grid">
          {restaurants.map(({ item, restaurant }) => (
            <div key={restaurant.name}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9A7358", marginBottom: 4, padding: "0 2px" }}>
                <span>Added by {item.addedByName || "someone"}</span>
                <button
                  onClick={() => handleRemoveItem(restaurant.name)}
                  style={{ background: "none", border: "none", color: "#9A7358", cursor: "pointer", padding: 0 }}
                  title="Remove from this list"
                >
                  <X size={13} strokeWidth={2.5} />
                </button>
              </div>
              <RestaurantCard
                restaurant={restaurant}
                pick={picks[restaurant.name]}
                onOpenListPicker={setPickerRestaurant}
                onMarkEaten={onMarkEaten}
                onRemove={onRemove}
                onOpenDetail={(r) => setDetailRestaurant(r)}
                friendsEaten={friendsEatenMap[restaurant.name]}
              />
            </div>
          ))}
        </div>
      )}

      {detailRestaurant && (
        <DetailModal
          restaurant={detailRestaurant}
          user={user}
          picks={picks}
          listId={list.id}
          onClose={() => setDetailRestaurant(null)}
        />
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

      {showInvite && (
        <InviteModal
          list={list}
          user={user}
          onClose={() => setShowInvite(false)}
          onListsChanged={onListsChanged}
        />
      )}
    </div>
  );
}

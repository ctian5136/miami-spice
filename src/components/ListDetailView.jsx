import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft, UserPlus, Trash2, LogOut, X, Search } from "lucide-react";
import { RESTAURANTS } from "../data/restaurants";
import { styles } from "../styles";
import RestaurantCard from "./RestaurantCard";
import DetailModal from "./DetailModal";
import ListPicker from "./ListPicker";
import {
  fetchListMembers, fetchListItems, removeItemFromList,
  deleteList, leaveList, inviteToList,
} from "../lib/lists";
import { searchUsers } from "../lib/social";

export default function ListDetailView({ list, user, picks, onMarkEaten, onRemove, myLists, onListsChanged, onBack }) {
  const [members, setMembers] = useState([]);
  const [items, setItems] = useState(null);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteText, setInviteText] = useState("");
  const [inviteResults, setInviteResults] = useState([]);
  const [inviteMsg, setInviteMsg] = useState("");
  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [pickerRestaurant, setPickerRestaurant] = useState(null);

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

  const handleInviteSearch = async (e) => {
    e.preventDefault();
    setInviteMsg("");
    const found = await searchUsers(inviteText, user.uid);
    const nonMembers = found.filter((p) => !list.memberIds.includes(p.uid));
    setInviteResults(nonMembers);
    if (nonMembers.length === 0) {
      setInviteMsg("No one found with that name/email — they may need a Miami Spice account first.");
    }
  };

  const handleInvite = async (uid) => {
    await inviteToList(list.id, uid);
    setInviteResults((r) => r.filter((p) => p.uid !== uid));
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
          <button style={styles.secondaryBtn} onClick={() => setShowInvite((s) => !s)}>
            <UserPlus size={14} strokeWidth={2.5} /> Invite
          </button>
          {isOwner ? (
            <button style={styles.removeBtn} onClick={handleDelete} title="Delete list">
              <Trash2 size={14} strokeWidth={2.5} />
            </button>
          ) : (
            <button style={styles.removeBtn} onClick={handleLeave} title="Leave list">
              <LogOut size={14} strokeWidth={2.5} />
            </button>
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
          </span>
        ))}
      </div>

      {showInvite && (
        <div style={{ marginBottom: 20 }}>
          <form onSubmit={handleInviteSearch} style={styles.searchRow}>
            <input
              style={styles.input}
              placeholder="Name or email"
              value={inviteText}
              onChange={(e) => setInviteText(e.target.value)}
              autoFocus
            />
            <button type="submit" style={styles.primaryBtn}>
              <Search size={14} strokeWidth={2.5} />
            </button>
          </form>
          {inviteMsg && <p style={styles.errorText}>{inviteMsg}</p>}
          {inviteResults.map((p) => (
            <div key={p.uid} style={styles.personRow}>
              {p.photoURL ? <img src={p.photoURL} alt="" style={styles.personAvatar} /> : <div style={styles.personAvatar} />}
              <div style={styles.personInfo}>
                <p style={styles.personName}>{p.displayName || p.email}</p>
              </div>
              <button style={styles.secondaryBtn} onClick={() => handleInvite(p.uid)}>Add</button>
            </div>
          ))}
        </div>
      )}

      {items === null ? (
        <div style={styles.empty}>Loading…</div>
      ) : restaurants.length === 0 ? (
        <div style={styles.empty}>No restaurants on this list yet — add some from Browse.</div>
      ) : (
        <div style={styles.grid}>
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
              />
            </div>
          ))}
        </div>
      )}

      {detailRestaurant && (
        <DetailModal
          restaurant={detailRestaurant}
          user={user}
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
    </div>
  );
}

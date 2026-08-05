import React, { useEffect, useState } from "react";
import { X, Plus, Check, Users } from "lucide-react";
import { styles } from "../styles";
import { createList, addItemToList, removeItemFromList, fetchListMembershipForRestaurant } from "../lib/lists";

export default function ListPicker({ restaurantName, user, myLists, onClose, onListsChanged }) {
  const [membership, setMembership] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchListMembershipForRestaurant(myLists, restaurantName).then((set) => {
      if (!cancelled) setMembership(set);
    });
    return () => {
      cancelled = true;
    };
  }, [myLists, restaurantName]);

  const toggle = async (listId) => {
    const isMember = membership.has(listId);
    const next = new Set(membership);
    isMember ? next.delete(listId) : next.add(listId);
    setMembership(next);
    if (isMember) {
      await removeItemFromList(listId, restaurantName);
    } else {
      await addItemToList(listId, restaurantName, user);
    }
  };

  const handleCreate = async () => {
    const name = newListName.trim();
    if (!name) return;
    setCreating(true);
    try {
      const listId = await createList(user, name);
      await addItemToList(listId, restaurantName, user);
      setNewListName("");
      setShowCreate(false);
      await onListsChanged();
      setMembership((prev) => new Set([...(prev || []), listId]));
    } finally {
      setCreating(false);
    }
  };

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBox} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <h3 style={styles.dialogTitle}>Save {restaurantName}</h3>
            <p style={styles.dialogSub}>Choose one or more lists</p>
          </div>
          <button onClick={onClose} style={styles.removeBtn}>
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        {membership === null ? (
          <p style={styles.detailEmptyNote}>Loading…</p>
        ) : myLists.length === 0 ? (
          <p style={styles.detailEmptyNote}>You don't have any lists yet — create one below.</p>
        ) : (
          myLists.map((list) => {
            const checked = membership.has(list.id);
            return (
              <div
                key={list.id}
                style={{ ...styles.listPickerRow, ...(checked ? styles.listPickerRowChecked : {}) }}
              >
                <div>
                  <p style={styles.listPickerName}>{list.name}</p>
                  {list.memberIds.length > 1 && (
                    <div style={styles.listPickerRowMeta}>
                      <Users size={12} strokeWidth={2.5} />
                      Shared with {list.memberIds.length} people
                    </div>
                  )}
                </div>
                <button
                  onClick={() => toggle(list.id)}
                  style={{ ...styles.listPickerAddBtn, ...(checked ? styles.listPickerAddedBtn : {}) }}
                >
                  {checked ? (
                    <>
                      <Check size={14} strokeWidth={2.5} /> Added
                    </>
                  ) : (
                    <>
                      <Plus size={14} strokeWidth={2.5} /> Add
                    </>
                  )}
                </button>
              </div>
            );
          })
        )}

        {showCreate ? (
          <div style={styles.newListRow}>
            <input
              style={styles.input}
              placeholder="New list name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              autoFocus
            />
            <button style={styles.primaryBtn} onClick={handleCreate} disabled={creating || !newListName.trim()}>
              <Plus size={14} strokeWidth={2.5} />
            </button>
          </div>
        ) : (
          <button style={styles.createListLink} onClick={() => setShowCreate(true)}>
            <Plus size={14} strokeWidth={2.5} /> Create a new list
          </button>
        )}

        <button style={{ ...styles.primaryBtn, ...styles.dialogDoneBtn }} onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

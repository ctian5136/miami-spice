import React, { useEffect, useState, useCallback } from "react";
import { ArrowLeft, Check, X, UserPlus, Search, Users } from "lucide-react";
import { styles, colors } from "../styles";
import MyListsView from "./MyListsView";
import ShareInviteLink from "./ShareInviteLink";
import { buildInviteUrl } from "../lib/invite";
import {
  searchUsers, sendFriendRequest, cancelFriendRequest,
  fetchIncomingRequests, fetchOutgoingRequests,
  acceptFriendRequest, declineFriendRequest,
  fetchFriends, removeFriend, getProfile, getPicks,
} from "../lib/social";

function PersonRow({ person, subtitle, children }) {
  return (
    <div style={styles.personRow}>
      {person.photoURL ? (
        <img src={person.photoURL} alt="" style={styles.personAvatar} />
      ) : (
        <div style={styles.personAvatar} />
      )}
      <div style={styles.personInfo}>
        <p style={styles.personName}>{person.displayName || person.email || "Unknown"}</p>
        <p style={styles.personMeta}>{subtitle}</p>
      </div>
      <div style={styles.personActions}>{children}</div>
    </div>
  );
}

function restaurantCountLabel(person) {
  const n = person.picksCount || 0;
  return `${n} restaurant${n === 1 ? "" : "s"} tracked`;
}

function BackRow({ onBack, label = "Back" }) {
  return (
    <button
      style={{ ...styles.secondaryBtn, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 18 }}
      onClick={onBack}
    >
      <ArrowLeft size={14} strokeWidth={2.5} /> {label}
    </button>
  );
}

export default function FriendsView({ user }) {
  const [mode, setMode] = useState("friends"); // 'friends' | 'search' | 'requests'

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchMsg, setSearchMsg] = useState("");

  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [friendFilter, setFriendFilter] = useState("");

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedPicks, setSelectedPicks] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    const [inReqs, outReqs, friendList] = await Promise.all([
      fetchIncomingRequests(user.uid),
      fetchOutgoingRequests(user.uid),
      fetchFriends(user.uid),
    ]);
    const [inWithProfiles, outWithProfiles] = await Promise.all([
      Promise.all(inReqs.map(async (r) => ({ ...r, profile: await getProfile(r.from) }))),
      Promise.all(outReqs.map(async (r) => ({ ...r, profile: await getProfile(r.to) }))),
    ]);
    setIncoming(inWithProfiles.filter((r) => r.profile));
    setOutgoing(outWithProfiles.filter((r) => r.profile));
    setFriends(friendList);
    setLoading(false);
  }, [user.uid]);

  useEffect(() => {
    load();
  }, [load]);

  const friendUids = new Set(friends.map((f) => f.uid));
  const outgoingUids = new Set(outgoing.map((r) => r.to));
  const incomingUids = new Set(incoming.map((r) => r.from));

  const visibleFriends = friendFilter.trim()
    ? friends.filter((f) =>
        (f.displayName || f.email || "").toLowerCase().includes(friendFilter.trim().toLowerCase())
      )
    : friends;

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchMsg("");
    setSearching(true);
    try {
      const found = await searchUsers(searchText, user.uid);
      setResults(found);
      if (found.length === 0) setSearchMsg("No one found. Try their exact email or the start of their name.");
    } finally {
      setSearching(false);
    }
  };

  const handleSend = async (toUid) => {
    setSearchMsg("");
    try {
      await sendFriendRequest(user, toUid);
      await load();
    } catch (err) {
      setSearchMsg(err.message);
    }
  };

  const handleAccept = async (req) => {
    await acceptFriendRequest(req);
    await load();
  };
  const handleDecline = async (req) => {
    await declineFriendRequest(req);
    await load();
  };
  const handleCancel = async (req) => {
    await cancelFriendRequest(req.from, req.to);
    await load();
  };
  const handleRemove = async (friendUid) => {
    await removeFriend(user.uid, friendUid);
    await load();
  };

  const openFriend = async (friend) => {
    setSelectedFriend(friend);
    setSelectedPicks(null);
    const picks = await getPicks(friend.uid);
    setSelectedPicks(picks);
  };

  if (selectedFriend) {
    return (
      <div style={styles.section}>
        <BackRow onBack={() => setSelectedFriend(null)} label="Back to friends" />
        {selectedPicks === null ? (
          <div style={styles.empty}>Loading…</div>
        ) : (
          <MyListsView picks={selectedPicks} readOnly ownerLabel={`${selectedFriend.displayName || "Their"}'s`} user={user} />
        )}
      </div>
    );
  }

  if (mode === "search") {
    return (
      <div style={styles.section}>
        <BackRow onBack={() => setMode("friends")} />
        <h2 style={styles.sectionTitle}>Add a friend</h2>
        <p style={styles.sectionSub}>Search by name or email. They'll need to accept before you see each other's lists.</p>

        <form onSubmit={handleSearch} style={styles.searchRow}>
          <input
            style={styles.input}
            placeholder="Name or email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
          <button type="submit" style={styles.primaryBtn} disabled={searching}>
            <Search size={14} strokeWidth={2.5} />
          </button>
        </form>
        {searchMsg && <p style={styles.errorText}>{searchMsg}</p>}

        {results.map((person) => {
          const isFriend = friendUids.has(person.uid);
          const isOutgoing = outgoingUids.has(person.uid);
          const isIncoming = incomingUids.has(person.uid);
          return (
            <PersonRow key={person.uid} person={person} subtitle={restaurantCountLabel(person)}>
              {isFriend && <span style={{ ...styles.badge, ...styles.badgeEaten }}>Friends</span>}
              {!isFriend && isOutgoing && <span style={{ ...styles.badge, ...styles.badgeWant }}>Requested</span>}
              {!isFriend && isIncoming && <span style={{ ...styles.badge, ...styles.badgeWant }}>Sent you a request</span>}
              {!isFriend && !isOutgoing && !isIncoming && (
                <button style={styles.secondaryBtn} onClick={() => handleSend(person.uid)}>
                  <UserPlus size={14} strokeWidth={2.5} /> Add
                </button>
              )}
            </PersonRow>
          );
        })}
      </div>
    );
  }

  if (mode === "requests") {
    return (
      <div style={styles.section}>
        <BackRow onBack={() => setMode("friends")} />
        <h2 style={styles.sectionTitle}>Friend requests</h2>

        {incoming.length === 0 && outgoing.length === 0 ? (
          <div style={styles.empty}>No pending requests.</div>
        ) : (
          <>
            {incoming.length > 0 && (
              <>
                <h3 style={{ ...styles.sectionTitle, fontSize: 16 }}>Incoming</h3>
                {incoming.map((req) => (
                  <PersonRow key={req.id} person={req.profile} subtitle={restaurantCountLabel(req.profile)}>
                    <button style={{ ...styles.actionBtn, ...styles.actionBtnEaten }} onClick={() => handleAccept(req)}>
                      <Check size={14} strokeWidth={2.5} /> Accept
                    </button>
                    <button style={styles.removeBtn} onClick={() => handleDecline(req)}>
                      <X size={14} strokeWidth={2.5} />
                    </button>
                  </PersonRow>
                ))}
              </>
            )}

            {outgoing.length > 0 && (
              <>
                <h3 style={{ ...styles.sectionTitle, fontSize: 16, marginTop: 24 }}>Sent</h3>
                {outgoing.map((req) => (
                  <PersonRow key={req.id} person={req.profile} subtitle="Waiting for them to accept">
                    <button style={styles.removeBtn} onClick={() => handleCancel(req)}>Cancel</button>
                  </PersonRow>
                ))}
              </>
            )}
          </>
        )}
      </div>
    );
  }

  const pendingCount = incoming.length;

  return (
    <div style={styles.section}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 4 }}>
        <h2 style={styles.sectionTitle}>Friends</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ ...styles.secondaryBtn, position: "relative" }} onClick={() => setMode("requests")}>
            Requests
            {pendingCount > 0 && (
              <span
                style={{
                  position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, borderRadius: 999,
                  background: colors.accent, color: "#fff", fontSize: 10.5, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px",
                }}
              >
                {pendingCount}
              </span>
            )}
          </button>
          <button style={styles.primaryBtn} onClick={() => setMode("search")}>
            <UserPlus size={14} strokeWidth={2.5} /> Add friend
          </button>
        </div>
      </div>
      <p style={styles.sectionSub}>See what your friends want to eat and have eaten.</p>

      <ShareInviteLink
        url={buildInviteUrl(user.uid)}
        title="Join me on Miami Spice"
        text="Track Miami Spice restaurants with me — open this to add me as a friend:"
        label="Invite friends"
        sub="Share this link — anyone who opens it and signs in becomes your friend."
      />

      {friends.length > 5 && (
        <input
          style={{ ...styles.input, marginBottom: 14 }}
          placeholder="Filter friends by name or email"
          value={friendFilter}
          onChange={(e) => setFriendFilter(e.target.value)}
        />
      )}

      {loading ? (
        <div style={styles.empty}>Loading…</div>
      ) : friends.length === 0 ? (
        <div style={styles.empty}>
          <Users size={22} style={{ marginBottom: 8, opacity: 0.5 }} />
          <div>No friends yet.</div>
          <button style={{ ...styles.secondaryBtn, marginTop: 12 }} onClick={() => setMode("search")}>
            <UserPlus size={14} strokeWidth={2.5} /> Add your first friend
          </button>
        </div>
      ) : visibleFriends.length === 0 ? (
        <div style={styles.empty}>No friends match "{friendFilter}".</div>
      ) : (
        visibleFriends.map((friend) => (
          <PersonRow key={friend.uid} person={friend} subtitle={restaurantCountLabel(friend)}>
            <button style={styles.secondaryBtn} onClick={() => openFriend(friend)}>View lists</button>
            <button style={styles.removeBtn} onClick={() => handleRemove(friend.uid)}>
              <X size={14} strokeWidth={2.5} />
            </button>
          </PersonRow>
        ))
      )}
    </div>
  );
}

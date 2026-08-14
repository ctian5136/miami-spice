// Shareable invite links: ?invite=<inviterUid> (add as friends on open) and
// an optional &list=<listId> (also join that shared list).

export function buildInviteUrl(uid, listId) {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set("invite", uid);
  if (listId) url.searchParams.set("list", listId);
  return url.toString();
}

export function readInviteParams() {
  const params = new URLSearchParams(window.location.search);
  const inviterUid = params.get("invite");
  if (!inviterUid) return null;
  return { inviterUid, listId: params.get("list") || null };
}

export function clearInviteParams() {
  const url = new URL(window.location.href);
  url.searchParams.delete("invite");
  url.searchParams.delete("list");
  window.history.replaceState({}, "", url.toString());
}

// Native share sheet (covers Messages/SMS on mobile) when available,
// otherwise falls back to the clipboard.
export async function shareOrCopy({ url, title, text }) {
  if (navigator.share) {
    try {
      await navigator.share({ url, title, text });
      return "shared";
    } catch (err) {
      if (err.name === "AbortError") return "cancelled";
      // fall through to clipboard on other errors (e.g. share not permitted)
    }
  }
  await navigator.clipboard.writeText(url);
  return "copied";
}

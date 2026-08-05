# Miami Spice 2026 Planner

A React + Vite app for browsing Miami Spice 2026 restaurants. Sign in with Google to keep a "Want
to Eat" list and a "Have Eaten" list (with notes and photos), and add friends to see their lists.

**Live at:** https://miami-spice-tracker.web.app

## 1. One-time Firebase setup

Auth and Firestore are already configured for this deployment. **Cloud Storage (for eaten-review
photos) still needs one manual step from you**, since it requires billing to be enabled:

1. [console.firebase.google.com/project/miami-spice-tracker/usage/details](https://console.firebase.google.com/project/miami-spice-tracker/usage/details)
   → **Modify plan** → upgrade to **Blaze** (pay-as-you-go). This app's usage stays well within the
   free-tier quotas Blaze still includes, but Google requires a card on file to unlock Storage.
2. **Build → Storage → Get started** → create the default bucket (any region is fine).
3. Once that's done, deploy the storage rules from this repo:

   ```
   npm run build
   npx firebase-tools deploy --only storage
   ```

   Until this step is done, "Mark eaten" still works for notes — the photo upload button will just
   error if clicked.

## 2. Data model & security rules

- `users/{uid}` — profile (name, email, photo, `picksCount`). Readable by any signed-in user so
  friend search/preview works; only the owner can write their own doc.
- `users/{uid}/friends/{friendUid}` — presence = friendship. Either party can write their own side
  of a mutual-accept, which is what lets the accepting user create both directions in one action.
- `friendRequests/{fromUid}_{toUid}` — pending friend requests; only the two parties involved can
  read/update/delete.
- `userPicks/{uid}` — `{ picks: { [restaurantName]: { status: 'want'|'eaten', notes, photos, updatedAt } } }`.
  Owner has full access; accepted friends get read-only access; nobody else can read it.
- Storage `eatenPhotos/{uid}/...` — only the owner can upload (max 5MB, images only, max 3 per
  review, enforced in the UI); any signed-in user can read (Firebase's `getDownloadURL()` tokens
  bypass further rule checks anyway, so this is a soft boundary — fine for casual food photos, not
  for anything sensitive).

Rules live in `firestore.rules` and `storage.rules` and deploy via the Firebase CLI (see below).

The `firebaseConfig` values in `src/firebase.js` are safe to commit — they're public client
identifiers, not secrets. Security is enforced entirely by the rules files.

## 3. Local development

```
npm install
npm run dev
```

## 4. Deploying (Firebase Hosting)

```
npx firebase-tools login   # one-time, opens a browser
npm run deploy              # build + deploy hosting, firestore rules, storage rules
```

Firebase Hosting serves from the domain root, so `base: '/'` in `vite.config.js` is correct — don't
change it. The `.firebaserc` file pins the deploy target to the `miami-spice-tracker` project.

Firebase Hosting's own domains (`*.web.app`, `*.firebaseapp.com`) are auto-authorized for
Google sign-in — no manual "authorized domains" step needed.

## 5. Gotchas

- **`firebase login` says "Cannot run login in non-interactive mode"** → run it from a real terminal
  window, not through an automated/non-TTY shell.
- **Sign-in gets stuck on the login screen** → this was a real bug (Firebase Auth's default
  IndexedDB persistence can silently fail when the sign-in popup steals focus from the opener tab).
  Fixed by switching to `browserLocalPersistence` in `src/firebase.js` — don't revert that.
- **Photo upload errors** → you haven't done the Blaze upgrade + Storage setup in section 1 yet.
- **Assets 404 / blank page after deploy** → check `base` in `vite.config.js` is still `/`.
- **Restaurant data is a point-in-time snapshot.** Prices, days, and participants change — the
  source of truth is [miamiandbeaches.com/deals/spice-restaurant-months](https://www.miamiandbeaches.com/deals/spice-restaurant-months).

# Miami Spice 2026 Planner

A React + Vite app for browsing Miami Spice 2026 restaurants and saving your picks. Sign in with
Google and your list is saved to your account (Firestore) and follows you across devices.

**Live at:** https://miami-spice-tracker.web.app

## 1. One-time Firebase setup (already done for this deployment)

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (`miami-spice-tracker`).
2. **Build → Authentication → Sign-in method** → enabled **Google** as a provider.
3. **Build → Firestore Database** → created (production mode).
4. **Project settings → General → Your apps → Web app** → registered, `firebaseConfig` pasted into
   `src/firebase.js`.
5. Security rules (`firestore.rules` in this repo) deployed via the Firebase CLI:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /userPicks/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

   Only a signed-in user may read or write the document whose ID equals their own `uid` — no user
   can touch another user's picks.

The `firebaseConfig` values in `src/firebase.js` are safe to commit — they're public client
identifiers, not secrets. Security is enforced entirely by the Firestore rules above.

## 2. Local development

```
npm install
npm run dev
```

## 3. Deploying (Firebase Hosting)

```
npx firebase-tools login   # one-time, opens a browser
npm run build
npx firebase-tools deploy --only hosting,firestore:rules
```

Firebase Hosting serves from the domain root, so `base: '/'` in `vite.config.js` is correct — don't
change it unless you're hosting from a subpath. The `.firebaserc` file pins the deploy target to the
`miami-spice-tracker` project.

Firebase Hosting's own domains (`*.web.app`, `*.firebaseapp.com`) are auto-authorized for
Google sign-in — no manual "authorized domains" step needed, unlike GitHub Pages.

## 4. Gotchas

- **`firebase login` says "Cannot run login in non-interactive mode"** → run it from a real terminal
  window, not through an automated/non-TTY shell.
- **Assets 404 / blank page after deploy** → check `base` in `vite.config.js` matches how the site is
  served (`/` for Firebase Hosting root; a subpath like `/repo-name/` only applies to GitHub Pages).
- **Restaurant data is a point-in-time snapshot.** Prices, days, and participants change — the
  source of truth is [miamiandbeaches.com/deals/spice-restaurant-months](https://www.miamiandbeaches.com/deals/spice-restaurant-months).

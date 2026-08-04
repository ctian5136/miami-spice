# Miami Spice 2026 Planner

A React + Vite app for browsing Miami Spice 2026 restaurants and saving your picks. Sign in with
Google and your list is saved to your account (Firestore) and follows you across devices.

## 1. One-time Firebase setup

You need a free Firebase project before this app will work. Takes about 5 minutes, no credit card
required (Spark/free plan).

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**.
2. In the project: **Build → Authentication → Get started** → enable **Google** as a sign-in provider.
3. **Build → Firestore Database → Create database → Start in production mode** (the security rules
   below lock it down — you'll paste them in step 5).
4. **Project settings (gear icon) → General → Your apps → Web app (`</>`)** → register the app →
   copy the `firebaseConfig` object it gives you.
5. Paste that object into `src/firebase.js`, replacing the empty `firebaseConfig = {}`.
6. **Firestore Database → Rules**, replace the contents with:

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

   Click **Publish**. This means: only a signed-in user may read or write the document whose ID
   equals their own `uid` — no user can touch another user's picks.

7. **Authentication → Settings → Authorized domains** → add `<your-username>.github.io` so login
   works once the app is deployed (see below). `localhost` is already allowed by default for local dev.

The `firebaseConfig` values are safe to commit — they're public client identifiers, not secrets.
Security is enforced entirely by the Firestore rules above, not by hiding the config.

## 2. Local development

```
npm install
npm run dev
```

## 3. Deploying to GitHub Pages

The repo name and the `base` in `vite.config.js` must match exactly (`/miami-spice/`), which they
already do.

```
npm run deploy
```

This builds the app and pushes `dist/` to a `gh-pages` branch. Then, on GitHub:
**Settings → Pages → Source → Deploy from branch → `gh-pages` / root**.

The site will be live at `https://<your-username>.github.io/miami-spice/`.

If you rename the repo, update `base` in `vite.config.js` to match, or assets will 404 on the
live site.

## 4. Gotchas

- **Google sign-in fails on the deployed site but works locally** → you forgot to add
  `<your-username>.github.io` to Firebase's Authorized domains list (step 7 above).
- **Assets 404 / blank page on GitHub Pages** → `base` in `vite.config.js` doesn't match the repo name.
- **Restaurant data is a point-in-time snapshot.** Prices, days, and participants change — the
  source of truth is [miamiandbeaches.com/deals/spice-restaurant-months](https://www.miamiandbeaches.com/deals/spice-restaurant-months).

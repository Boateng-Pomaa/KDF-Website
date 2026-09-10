/**
 * Firebase project configuration.
 *
 * BLOCKED: no Firebase project exists yet — waiting on the client to create
 * one (or grant access to an existing Google Cloud account) per docs/ROADMAP.md
 * Phase 3. Replace every value below with the real config snippet from
 * Firebase Console → Project settings → General → Your apps, once available.
 *
 * These placeholders are safe to ship as-is: `initializeApp()` only stores
 * this object client-side — nothing here triggers a network call, so the
 * app builds and prerenders fine before the project exists. Firestore/Storage
 * reads will simply fail at runtime until real values are in place, which is
 * why no page reads from them yet (see core/content/site-content.ts).
 */
export const firebaseConfig = {
  apiKey: 'TBC',
  authDomain: 'TBC',
  projectId: 'TBC',
  storageBucket: 'TBC',
  messagingSenderId: 'TBC',
  appId: 'TBC',
};

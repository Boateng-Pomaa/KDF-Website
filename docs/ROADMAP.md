# KDF Website — Development Roadmap

Source material: `NGO_Website_Initial_Requirements (1).docx` (requirements) and
`KDF Website Prototype (standalone).html` (design reference for the public site).
Backend direction: Firebase (Hosting, Auth, Firestore, Storage, Cloud Functions) — proposed,
not yet finalized.

Two requirements-doc questions block accurate scoping and are called out where they bite.

---

## Phase 0 — Decisions & Project Setup

Blocking before real estimates can be made:

- [ ] **Donations**: external link to a payment page, or on-site payments (Mobile Money/card)?
      The prototype builds the full on-site flow — this materially changes Phase 8 scope.
- [ ] **Events with registration** — in scope or not? Not in the prototype or nav.
- [ ] Confirm Firebase as final backend direction.
- [ ] Confirm admin roles/count, and whether a publish approval step is required.
- [ ] Confirm email provider for notifications.

Setup work (not blocked):

- [ ] Create Firebase project; wire up Hosting, Auth, Firestore, Storage, Functions.
- [ ] Confirm Angular workspace conventions against `.claude/CLAUDE.md` (standalone components,
      signals, `OnPush`, `input()`/`output()`, Reactive Forms) — applies to every phase below.

---

## Phase 1 — Foundation & Design System ✅

- [x] Route structure: lazy-loaded feature routes for Home, About, Programs, News, Gallery,
      Contact, and a separate `/admin` feature area (plus a wildcard 404 route).
- [x] Shared layout: header/nav (with active-link state and skip-to-content link), footer,
      `<main>` content landmark.
- [x] Ported the prototype's design tokens into SCSS custom properties in `src/styles.scss`:
      Barlow / Barlow Condensed type, accent (burnt-orange) + neutral tonal ramps, spacing,
      radius, shadow scale — plus base resets and a visible focus-ring for WCAG 2.4.7.
- [x] Core shared components (standalone, `OnPush`, accessible): `Button` (directive on native
      `<button>`/`<a>`), `Card`, `Tag`, `Field` (implements `ControlValueAccessor` for Reactive
      Forms), and a `PagePlaceholder` used by every route until Phase 2 fills in real content.
- [x] `NgOptimizedImage` wired up for the header logo (`public/kdf-logo.png`); asset pipeline
      ready for real photography once supplied.

Verified: `ng build` succeeds (routes prerender, lazy chunks split per feature) and
`ng test` passes.

---

## Phase 2 — Public Website (static content, no backend) ✅

Built all six routes against the prototype, with placeholder copy where the client hasn't
supplied final wording yet:

- [x] Home — hero, impact stats, areas of work, latest activities, founder's message, gallery
      strip, donate block (frequency toggle, amount presets, custom amount), volunteer/partner
      forms (Reactive Forms, validated, not yet wired to a backend).
- [x] About — vision, mission, core values, history, founder's message, board/trustees, staff,
      legal/registration.
- [x] Programs — 5 program areas, each with objectives/activities/impact.
- [x] News — listing + in-page detail view (signal-toggled; becomes a routed `/news/:id` once
      Phase 3 gives each article a real backing document).
- [x] Gallery — filterable by program area (signal-driven, matches the prototype's 9 placeholder
      photos across 3 real reference images).
- [x] Contact — info, social links, map placeholder, contact form (Reactive Forms).
- [x] Placeholder content centralised in `core/content/site-content.ts` (typed against
      `content.models.ts`) so Phase 3 swaps the data source without touching templates.
- [x] Corrected Phase 1's `Card` component to match the prototype's actual rendered style
      (bordered, rounded, no corner ticks — the generic corner-tick treatment is hidden by the
      prototype's own site-specific override).
- [x] Extracted the prototype's 3 real reference photos (plus the logo) out of its bundled
      resource map into `public/images/`, used via `NgOptimizedImage` throughout.

Not yet done (by design, deferred to later phases): scroll-reveal animation, AXE audit pass
(Phase 9), and actually persisting form submissions (Phase 4).

Verified: `ng build` succeeds (all routes prerender) and `ng test` passes.

---

## Phase 3 — Data Layer & Firebase Integration 🚧

**Blocked:** no Firebase project exists yet — waiting on the client to create one (or grant
access to an existing Google account). Everything below that doesn't need a live project is
done; everything that does is on hold until then.

- [x] Firestore schema designed — see `docs/FIRESTORE_SCHEMA.md`.
- [x] `firebase` + `@angular/fire@next` installed (the `next`/RC tag, because the `latest`
      dist-tag only peers on Angular ^20 — revisit and move to a stable release once
      `@angular/fire` ships one for Angular 21).
- [x] `provideFirebaseApp` / `provideFirestore` / `provideStorage` wired into `app.config.ts`,
      reading from `src/environments/firebase.config.ts` (placeholder `'TBC'` values — safe to
      ship since `initializeApp()` doesn't make a network call, so the site still builds,
      prerenders and serves exactly as before).
- [x] Angular budgets/build config adjusted for the Firebase SDK's added weight
      (`angular.json`: initial bundle warning threshold, `@grpc/*` CommonJS allowlist).
- [ ] **Blocked** — Create the actual Firebase project; paste real values into
      `firebase.config.ts`.
- [ ] **Blocked** — Seed the collections from `FIRESTORE_SCHEMA.md`.
- [ ] **Blocked** — Content services (single responsibility, `providedIn: 'root'`, `inject()`)
      reading each collection.
- [ ] **Blocked** — Swap static placeholder content (`site-content.ts`) for the Firestore-backed
      services above. Same shapes, so this is a data-source change only — no template rewrites.
- [ ] **Blocked** — Firebase Storage for images (currently in `public/images/`).

Verified: `ng build` and `ng test` still pass with the Firebase providers registered.

---

## Phase 4 — Engagement Forms & Public Submissions

- [ ] Volunteer, Partner, Contact forms wired to Reactive Forms with accessible validation states.
- [ ] Cloud Functions to persist submissions to Firestore and trigger notification emails.
- [ ] Success/error UI states.

---

## Phase 5 — Admin Authentication & Security

- [ ] Firebase Auth: login, password reset.
- [ ] Roles: Super Admin (full access), Content Manager, Viewer/Editor — route guards per role.
- [ ] Session management, audit log of admin actions.
- [ ] Admin area isolated as its own lazy-loaded feature route.

---

## Phase 6 — Admin CMS: Content Management

- [ ] Create / Edit / Preview / Publish / Unpublish / Delete for: homepage content, About,
      Programs, Projects, News/Activities, Events *(pending Phase 0 decision)*, Impact stats,
      Gallery, Team, Founder's message, Board, Publications.
- [ ] Draft → preview → publish workflow (state machine per content item).

---

## Phase 7 — Admin CMS: Inboxes & Notifications

- [ ] Volunteer submissions, partnership inquiries, contact messages — list/detail/status views.
- [ ] Email notifications per submission type (provider from Phase 0).

---

## Phase 8 — Donations *(scope depends on Phase 0 decision)*

- **If external link**: trivial — a styled link, done in Phase 2.
- **If on-site payments**: payment provider integration (Mobile Money/card), Cloud Functions
  for charge processing + receipt email, admin donation log with failed/pending tracking.

---

## Phase 9 — Non-Functional Hardening 🚧

- [x] **Full AXE + WCAG AA audit across the public site and admin placeholder** — every route
      (Home, About, Programs, News listing + detail, Gallery default + filtered, Contact +
      validation-error state, Admin, 404) checked against `axe-core` with the `wcag2a`,
      `wcag2aa`, `wcag21aa` rule sets, against the real SSR server (not just the static prerender
      output). Zero violations after fixes below.
  - Fixed: `--color-neutral-600` (muted body text, used almost everywhere) was `#7a7a7d` —
    3.82:1 against the page background, failing the 4.5:1 text minimum. Darkened to `#6b6b6e`
    (~4.75:1). The two remaining `--color-neutral-500` *text* usages were moved onto the fixed
    600 step, since 500 is too light to pass at any reasonable text weight against this
    background.
  - Fixed: `.btn-primary` and the active donate-frequency tab used `--color-bg` as text-on-accent
    colour — 4.47:1 against `--color-accent`, just under 4.5:1. Introduced `--color-on-accent`
    (`#fff`) and switched both to it.
  - Fixed (severe): the footer's dark CTA band rendered its "Volunteer" link in near-black text
    on a near-black background (1.05:1, effectively invisible) — `.btn-secondary`'s global dark
    text was overriding the light text the dark band needs. The prototype had hand-overridden
    this exact instance; the override was lost in the Phase 1 rebuild. Restored, scoped to
    `.footer-cta .btn-secondary`.
  - Found and fixed two SSR bugs uncovered only by testing the actual `node server.mjs` server
    (not just `ng build`'s own prerender step, which doesn't exercise this code path):
    - `angular.json`'s `security.allowedHosts` was `[]`, silently rejecting every request's Host
      header and degrading every non-Home route to a client-only shell with the wrong title
      (SSR was effectively broken for the whole site). Set to `["localhost"]` for local
      testing — **the real production domain must be added here before Phase 10 launch.**
    - `app.routes.server.ts` gave the wildcard route `RenderMode.Prerender`, which has no static
      file for a genuinely unknown URL — the Node server fell through to Express's raw
      "Cannot GET" page instead of the styled `NotFound` component. Split into explicit
      `Prerender` entries per known route plus `RenderMode.Server` for the true `**` fallback.
- [ ] Performance pass — verify lazy loading, image optimization, Lighthouse scores.
- [ ] SEO (meta tags, sitemap, structured data) if in scope. Noted in passing: the 404 page now
      renders correctly but still returns HTTP 200 (a "soft 404") rather than 404 — fine for
      users, not ideal for search engines; revisit here.
- [ ] Security review — Firestore rules, admin access boundaries, form spam/rate limiting.
- [ ] Backup/recovery plan for Firestore + Storage.
- [ ] Browser compatibility check.

Verified: `ng build`, `ng test`, and a full re-run of the axe audit all pass after the fixes above.

---

## Phase 10 — Content, QA & Launch

- [ ] Real content, photography, and legal/registration details supplied by the client.
- [ ] End-to-end QA across public + admin.
- [ ] Deploy via Firebase Hosting.
- [ ] Handover/maintenance documentation.

---

## Critical path notes

- Phase 0's two open questions (donations, events) should be resolved as early as possible —
  they change the size of Phase 6 and Phase 8 significantly.
- Phases 1–2 (foundation + static public site) can start immediately regardless of the Phase 0
  answers.
- Phases 3–7 depend on the Firebase decision being confirmed.

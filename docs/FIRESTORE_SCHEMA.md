# Firestore Schema — Phase 3 Design

Design only — no project exists yet to create these collections in (see
`docs/ROADMAP.md` Phase 3). Written now so seeding is mechanical once a project
exists: create the collections below, or point the Phase 3 content services at
whatever structure is actually seeded, keeping the same TypeScript shapes in
`src/app/core/content/content.models.ts`.

Every public-content document carries `status: 'draft' | 'published'` and
`updatedAt` (Firestore `Timestamp`), since Phase 6's CMS workflow
(Create → Edit → Preview → Publish → Unpublish → Delete) needs both. Public
reads always filter `status == 'published'`; the admin CMS reads everything.

## Public content collections

| Collection | Doc id | Fields | Notes |
|---|---|---|---|
| `programs` | slug (e.g. `wash`) | `order, title, summary, objectives, activities, impact, image, imageAlt, status, updatedAt` | Matches `Program` |
| `news` | auto-id | `category, publishedAt (Timestamp), location?, title, summary, body, image, imageAlt, status, updatedAt` | Matches `NewsItem`; format `publishedAt` for display in the service/pipe, not by calling `new Date()` in a component |
| `galleryPhotos` | auto-id | `category, label, caption, image, imageAlt, order, status, updatedAt` | Matches `GalleryPhoto` |
| `impactStats` | auto-id | `value, label, order, updatedAt` | Homepage stat cards |
| `coreValues` | auto-id | `title, description, order, updatedAt` | About page |
| `teamMembers` | auto-id | `group ('board' \| 'staff'), initials, name, role, order, updatedAt` | Replaces the separate `BOARD_MEMBERS`/`STAFF_MEMBERS` arrays |

## Singleton content documents

Page-level copy that isn't a repeating list — one document per page, under a
`siteContent` collection:

| Doc | Fields |
|---|---|
| `siteContent/home` | `heroEyebrow, heroTitle, heroLede, missionTagline` |
| `siteContent/about` | `pageIntro, vision, mission, historyTitle, historyBody, founderQuote, founderName, founderRole, founderMessage` |
| `siteContent/legal` | `registeredName, registrationNumber, countryOfRegistration, dateIncorporated, taxId, registeredAddress` |
| `siteContent/contact` | `address, email, phone, facebookUrl?, instagramUrl?, xUrl?, linkedinUrl?` — shared by the footer and the Contact page |

## Storage

Images referenced by `image` fields above live in Firebase Storage (not
Firestore); documents store the Storage path or download URL. Bucket layout
mirrors the collections: `programs/`, `news/`, `gallery/`, `team/`.

## Deferred to later phases (not part of Phase 3)

- `volunteerSubmissions`, `partnershipInquiries`, `contactMessages`, `donations`
  — written by Cloud Functions in Phase 4, read by the admin inbox in Phase 7.
- Firebase Auth custom claims for the three admin roles (Super Admin, Content
  Manager, Viewer/Editor) — Phase 5.

/**
 * Placeholder public-site content, ported from the approved prototype
 * (docs/KDF Website Prototype). Replaced by Firestore-backed services in
 * Phase 3 — the shapes are kept identical so that swap is a data-source
 * change only, not a template rewrite.
 */
import {
  CoreValue,
  GalleryPhoto,
  ImpactStat,
  NewsItem,
  Program,
  TeamMember,
} from './content.models';

/** The three reference photos supplied with the prototype, with their intrinsic
 *  pixel dimensions (required by `NgOptimizedImage`). Resized/compressed for
 *  web delivery — see docs/ROADMAP.md Phase 9 (originals were 1.1-2.4 MB PNGs). */
const CLEANUP_1 = { image: 'images/cleanup-1.jpg', imageWidth: 900, imageHeight: 596 } as const;
const GROUP_WIDE = { image: 'images/group-wide.jpg', imageWidth: 1000, imageHeight: 614 } as const;
const TEAM_PORTRAIT = {
  image: 'images/team-portrait.jpg',
  imageWidth: 750,
  imageHeight: 1000,
} as const;

export const IMPACT_STATS: ImpactStat[] = [
  { value: '1,240', label: 'Volunteers mobilised' },
  { value: '68', label: 'Clean-up exercises' },
  { value: '14', label: 'Communities reached' },
  { value: '3,500', label: 'Items donated' },
];

export const PROGRAMS: Program[] = [
  {
    slug: 'wash',
    order: '01',
    title: 'WASH & Environmental Sustainability',
    summary: 'Water, sanitation, hygiene and community clean-up work.',
    objectives:
      'Improve access to clean water and sanitation; reduce open dumping in target communities.',
    activities:
      'Community clean-up exercises, desilting, waste clearance, hygiene education sessions.',
    impact: 'Placeholder — client to supply figures (sites cleared, households reached).',
    ...CLEANUP_1,
    imageAlt: 'Volunteers clearing overgrowth for a WASH clean-up',
  },
  {
    slug: 'health',
    order: '02',
    title: 'Health & Community Well-being',
    summary: 'Screening days, referrals and wellness support in underserved communities.',
    objectives: 'Increase access to basic health screening and referral services.',
    activities:
      'Health screening days, awareness campaigns, referral partnerships with local clinics.',
    impact: 'Placeholder — client to supply figures (people screened, referrals made).',
    ...GROUP_WIDE,
    imageAlt: 'KDF volunteers at a community health outreach',
  },
  {
    slug: 'women-girls',
    order: '03',
    title: 'Women & Girls Empowerment',
    summary: 'Skills training, mentorship and support for women and girls.',
    objectives:
      'Build economic and social opportunity for women and girls in target communities.',
    activities:
      'Skills training workshops, mentorship circles, small-grant or savings group support.',
    impact: 'Placeholder — client to supply figures (participants, groups formed).',
    ...TEAM_PORTRAIT,
    imageAlt: 'Women-led KDF volunteer team',
  },
  {
    slug: 'youth',
    order: '04',
    title: 'Youth Development & Education',
    summary: 'Training, mentorship and educational support for young people.',
    objectives: 'Support youth into education, training or volunteering pathways.',
    activities: 'Mentorship programmes, volunteer training, educational support and supplies.',
    impact: 'Placeholder — client to supply figures (youth trained, volunteers placed).',
    ...TEAM_PORTRAIT,
    imageAlt: 'Youth volunteers on a KDF service day',
  },
  {
    slug: 'poverty-reduction',
    order: '05',
    title: 'Poverty Reduction & Sustainable Community Development',
    summary: 'Livelihood support and community-led development projects.',
    objectives:
      'Reduce household poverty through livelihood and community-led development support.',
    activities: 'Donation drives, livelihood grants, community-led development projects.',
    impact: 'Placeholder — client to supply figures (households supported, items donated).',
    ...GROUP_WIDE,
    imageAlt: 'Tools and supplies handed to a neighbourhood team',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'kasoa-community-wall',
    category: 'Clean-up',
    date: '12 Aug 2026',
    location: 'Kasoa',
    title: 'Weeding and waste clearance at the Kasoa community wall',
    summary:
      'Two days of clearing overgrowth and dumped refuse from a stretch residents had stopped using.',
    body: 'Two days of clearing overgrowth and dumped refuse from a stretch residents had stopped using. Forty volunteers, three neighbourhood teams and the municipal sanitation crew worked the site together.',
    ...CLEANUP_1,
    imageAlt: 'Volunteers clearing overgrowth',
  },
  {
    id: 'august-service-day',
    category: 'Volunteers',
    date: '02 Aug 2026',
    title: 'Forty volunteers turn out for the August service day',
    summary: 'Residents, sanitation workers and KDF staff worked the same site from dawn.',
    body: 'Residents, sanitation workers and KDF staff worked the same site from dawn.',
    ...TEAM_PORTRAIT,
    imageAlt: 'KDF volunteer team with tools',
  },
  {
    id: 'tools-handover',
    category: 'Donations',
    date: '21 Jul 2026',
    title: 'Tools and supplies handed to three neighbourhood teams',
    summary:
      'Brooms, wheelbarrows and protective gear so teams can keep sites clear between visits.',
    body: 'Brooms, wheelbarrows and protective gear so teams can keep sites clear between visits.',
    ...GROUP_WIDE,
    imageAlt: 'Group photo at the end of a service day',
  },
  {
    id: 'health-screening-recap',
    category: 'Health',
    date: '05 Jul 2026',
    title: 'Placeholder — health screening day recap',
    summary: 'Placeholder body text — client to supply.',
    body: 'Placeholder body text — client to supply.',
    ...CLEANUP_1,
    imageAlt: 'Placeholder — health screening day recap',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'g1', category: 'wash', label: 'WASH', caption: 'Kasoa · Aug 2026', ...GROUP_WIDE, imageAlt: 'Volunteers after a service day' },
  { id: 'g2', category: 'wash', label: 'WASH', caption: 'Kasoa community wall · Aug 2026', ...CLEANUP_1, imageAlt: 'Clearing overgrowth' },
  { id: 'g3', category: 'youth', label: 'Youth', caption: 'Service day · Aug 2026', ...TEAM_PORTRAIT, imageAlt: 'Volunteer team with tools' },
  { id: 'g4', category: 'health', label: 'Health', caption: 'Community outreach · Jul 2026', ...GROUP_WIDE, imageAlt: 'Health screening day' },
  { id: 'g5', category: 'women', label: 'Women & girls', caption: 'Kasoa · Jul 2026', ...CLEANUP_1, imageAlt: 'Women-led team clearing a site' },
  { id: 'g6', category: 'youth', label: 'Youth', caption: 'Training day · Jun 2026', ...TEAM_PORTRAIT, imageAlt: 'Youth training session' },
  { id: 'g7', category: 'poverty', label: 'Poverty reduction', caption: 'Neighbourhood teams · Jun 2026', ...GROUP_WIDE, imageAlt: 'Livelihood support handover' },
  { id: 'g8', category: 'health', label: 'Health', caption: 'Screening day · May 2026', ...CLEANUP_1, imageAlt: 'Sanitation education session' },
  { id: 'g9', category: 'poverty', label: 'Poverty reduction', caption: 'Kasoa · May 2026', ...TEAM_PORTRAIT, imageAlt: 'Tools handed to a service team' },
];

export const CORE_VALUES: CoreValue[] = [
  { title: 'Integrity', description: 'Placeholder description.' },
  { title: 'Empowerment', description: 'Placeholder description.' },
  { title: 'Service', description: 'Placeholder description.' },
  { title: 'Equality', description: 'Placeholder description.' },
  { title: 'Compassion', description: 'Placeholder description.' },
  { title: 'Accountability', description: 'Placeholder description.' },
  { title: 'Sustainability', description: 'Placeholder description.' },
  { title: 'Collaboration', description: 'Placeholder description.' },
  { title: 'Leadership', description: 'Placeholder description.' },
  { title: 'Excellence', description: 'Placeholder description.' },
];

export const BOARD_MEMBERS: TeamMember[] = [
  { initials: 'PN', name: 'Placeholder Name', role: 'Board Chair' },
  { initials: 'PN', name: 'Placeholder Name', role: 'Vice Chair' },
  { initials: 'PN', name: 'Placeholder Name', role: 'Treasurer' },
  { initials: 'PN', name: 'Placeholder Name', role: 'Trustee' },
];

export const STAFF_MEMBERS: TeamMember[] = [
  { initials: 'PN', name: 'Placeholder Name', role: 'Executive Director' },
  { initials: 'PN', name: 'Placeholder Name', role: 'Programs Manager' },
  { initials: 'PN', name: 'Placeholder Name', role: 'Volunteer Coordinator' },
];

/**
 * Static content shapes for the public site. These are placeholder,
 * hand-authored types for Phase 2 — Phase 3 replaces `site-content.ts` with
 * Firestore-backed services returning the same shapes.
 */

export interface Program {
  readonly slug: string;
  readonly order: string;
  readonly title: string;
  readonly summary: string;
  readonly objectives: string;
  readonly activities: string;
  readonly impact: string;
  readonly image: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly imageAlt: string;
}

export interface NewsItem {
  readonly id: string;
  readonly category: string;
  readonly date: string;
  readonly location?: string;
  readonly title: string;
  readonly summary: string;
  readonly body: string;
  readonly image: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly imageAlt: string;
}

export type GalleryCategory = 'wash' | 'health' | 'women' | 'youth' | 'poverty';

export interface GalleryPhoto {
  readonly id: string;
  readonly category: GalleryCategory;
  readonly label: string;
  readonly caption: string;
  readonly image: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly imageAlt: string;
}

export interface ImpactStat {
  readonly value: string;
  readonly label: string;
}

export interface CoreValue {
  readonly title: string;
  readonly description?: string;
}

export interface TeamMember {
  readonly initials: string;
  readonly name: string;
  readonly role: string;
  /** Square headshot under public/, shown in place of the initials tile when set. */
  readonly photo?: string;
}

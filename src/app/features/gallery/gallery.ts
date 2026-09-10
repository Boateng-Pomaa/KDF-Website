import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Card } from '../../shared/ui/card/card';
import { GalleryCategory } from '../../core/content/content.models';
import { GALLERY_PHOTOS } from '../../core/content/site-content';

interface GalleryFilter {
  readonly value: GalleryCategory | 'all';
  readonly label: string;
}

const FILTERS: GalleryFilter[] = [
  { value: 'all', label: 'All' },
  { value: 'wash', label: 'WASH' },
  { value: 'health', label: 'Health' },
  { value: 'women', label: 'Women & girls' },
  { value: 'youth', label: 'Youth' },
  { value: 'poverty', label: 'Poverty reduction' },
];

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Card],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly filters = FILTERS;
  protected readonly activeFilter = signal<GalleryCategory | 'all'>('all');

  protected readonly filteredPhotos = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === filter);
  });

  protected setFilter(filter: GalleryCategory | 'all'): void {
    this.activeFilter.set(filter);
  }
}

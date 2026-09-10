import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Tag } from '../../shared/ui/tag/tag';
import { NEWS_ITEMS } from '../../core/content/site-content';

@Component({
  selector: 'app-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Tag],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {
  protected readonly newsItems = NEWS_ITEMS;

  private readonly selectedId = signal<string | null>(null);
  protected readonly selectedArticle = computed(
    () => this.newsItems.find((item) => item.id === this.selectedId()) ?? null,
  );

  protected select(id: string): void {
    this.selectedId.set(id);
  }

  protected back(): void {
    this.selectedId.set(null);
  }
}

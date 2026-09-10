import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tag } from '../tag/tag';

/**
 * Stand-in for a routed page's content until Phase 2 builds it out.
 * Project extra markup (e.g. a link) via content projection.
 */
@Component({
  selector: 'app-page-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tag],
  template: `
    <section class="page-placeholder">
      <app-tag outline>Page in progress</app-tag>
      <h1>{{ heading() }}</h1>
      <p>{{ note() }}</p>
      <ng-content />
    </section>
  `,
  styles: `
    .page-placeholder {
      padding: var(--space-8);
      max-width: 60ch;
    }

    app-tag {
      margin-bottom: var(--space-4);
    }
  `,
})
export class PagePlaceholder {
  readonly heading = input.required<string>();
  readonly note = input('Full content for this page is built out in Phase 2.');
}

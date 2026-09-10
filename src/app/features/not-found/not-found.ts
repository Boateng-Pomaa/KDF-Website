import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagePlaceholder } from '../../shared/ui/page-placeholder/page-placeholder';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PagePlaceholder, RouterLink],
  template: `
    <app-page-placeholder heading="Page not found" note="The page you're looking for doesn't exist.">
      <a routerLink="/">Return home</a>
    </app-page-placeholder>
  `,
})
export class NotFound {}

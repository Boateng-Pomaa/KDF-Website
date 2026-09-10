import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PagePlaceholder } from '../../shared/ui/page-placeholder/page-placeholder';

@Component({
  selector: 'app-admin-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PagePlaceholder],
  template: `
    <app-page-placeholder
      heading="Admin CMS"
      note="Authentication and content management arrive in later phases."
    />
  `,
})
export class AdminShell {}

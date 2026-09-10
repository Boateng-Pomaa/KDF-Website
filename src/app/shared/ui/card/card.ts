import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Bordered, rounded content block matching the approved prototype's `.card`
 * treatment. Usage: `<app-card>...</app-card>`
 */
@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'card' },
  template: `<ng-content />`,
})
export class Card {}

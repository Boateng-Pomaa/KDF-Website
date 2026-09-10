import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';

/**
 * Small labelled badge. Usage: `<app-tag outline>Placeholder</app-tag>`
 */
@Component({
  selector: 'app-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'tag',
    '[class.tag-outline]': 'outline()',
  },
  template: `<ng-content />`,
})
export class Tag {
  readonly outline = input(false, { transform: booleanAttribute });
}

import { Directive, booleanAttribute, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Applies KDF button styling to a native `<button>` or `<a>` element, keeping
 * native semantics (focus, keyboard activation, form submission) intact.
 *
 * Usage: `<a appButton variant="secondary" routerLink="/contact">Contact us</a>`
 */
@Directive({
  selector: 'button[appButton], a[appButton]',
  host: {
    class: 'btn',
    '[class.btn-primary]': 'variant() === "primary"',
    '[class.btn-secondary]': 'variant() === "secondary"',
    '[class.btn-ghost]': 'variant() === "ghost"',
    '[class.btn-block]': 'block()',
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly block = input(false, { transform: booleanAttribute });
}

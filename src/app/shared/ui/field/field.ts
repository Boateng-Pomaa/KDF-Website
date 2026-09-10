import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextFieldId = 0;

export type FieldType = 'text' | 'email' | 'tel';

/**
 * Accessible label + input pairing that implements `ControlValueAccessor`,
 * so it can be bound directly with `formControlName` / `[formControl]`.
 *
 * Usage: `<app-field label="Email" type="email" formControlName="email" />`
 */
@Component({
  selector: 'app-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Field),
      multi: true,
    },
  ],
  template: `
    <div class="field" [class.is-invalid]="invalid()">
      <label [for]="id">{{ label() }}</label>
      <input
        [id]="id"
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        [disabled]="disabled()"
        [required]="required()"
        [attr.aria-describedby]="hint() ? id + '-hint' : null"
        [attr.aria-invalid]="invalid() || null"
        class="input"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
      @if (hint()) {
        <span [id]="id + '-hint'" class="field-hint">{{ hint() }}</span>
      }
    </div>
  `,
})
export class Field implements ControlValueAccessor {
  readonly label = input.required<string>();
  readonly type = input<FieldType>('text');
  readonly placeholder = input('');
  readonly hint = input('');
  readonly invalid = input(false);
  readonly required = input(false, { transform: booleanAttribute });

  protected readonly id = `field-${nextFieldId++}`;
  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }
}

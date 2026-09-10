import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../shared/ui/button/button';
import { Card } from '../../shared/ui/card/card';
import { Field } from '../../shared/ui/field/field';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Button, Card, Field],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  protected readonly submitted = signal(false);

  protected onSubmit(): void {
    this.submitForm(this.contactForm, this.submitted);
  }

  protected isInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  private submitForm(form: FormGroup, submitted: WritableSignal<boolean>): void {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    submitted.set(true);
    form.reset();
  }
}

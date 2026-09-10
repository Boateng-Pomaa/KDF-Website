import { ChangeDetectionStrategy, Component, WritableSignal, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/ui/button/button';
import { Card } from '../../shared/ui/card/card';
import { Field } from '../../shared/ui/field/field';
import { Tag } from '../../shared/ui/tag/tag';
import { IMPACT_STATS, NEWS_ITEMS, PROGRAMS } from '../../core/content/site-content';

type DonateFrequency = 'once' | 'monthly';

const PRESET_AMOUNTS = [50, 100, 250, 500] as const;

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, ReactiveFormsModule, Button, Card, Field, Tag],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly fb = inject(FormBuilder);

  protected readonly impactStats = IMPACT_STATS;
  protected readonly programs = PROGRAMS;
  protected readonly latestNews = NEWS_ITEMS.slice(0, 3);
  protected readonly presetAmounts = PRESET_AMOUNTS;

  // Donate widget state.
  protected readonly donateFrequency = signal<DonateFrequency>('once');
  protected readonly donateAmount = signal<number>(50);
  protected readonly donateCustomAmount = signal('');
  protected readonly donateLabel = computed(() => {
    const custom = this.donateCustomAmount().trim();
    const amount = custom || String(this.donateAmount());
    const suffix = this.donateFrequency() === 'monthly' ? ' monthly' : '';
    return `Give GHS ${amount}${suffix}`;
  });

  protected setDonateFrequency(frequency: DonateFrequency): void {
    this.donateFrequency.set(frequency);
  }

  protected setDonateAmount(amount: number): void {
    this.donateAmount.set(amount);
    this.donateCustomAmount.set('');
  }

  protected onCustomAmountInput(event: Event): void {
    this.donateCustomAmount.set((event.target as HTMLInputElement).value);
  }

  // Engagement forms — UI and validation only; wired to the backend in Phase 4.
  protected readonly donateForm = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    paymentMethod: [''],
  });

  protected readonly volunteerForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    interest: [''],
    availability: [''],
  });

  protected readonly partnerForm = this.fb.nonNullable.group({
    organisation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    interest: [''],
    message: [''],
  });

  protected readonly donateSubmitted = signal(false);
  protected readonly volunteerSubmitted = signal(false);
  protected readonly partnerSubmitted = signal(false);

  protected onDonateSubmit(): void {
    this.submitForm(this.donateForm, this.donateSubmitted);
  }

  protected onVolunteerSubmit(): void {
    this.submitForm(this.volunteerForm, this.volunteerSubmitted);
  }

  protected onPartnerSubmit(): void {
    this.submitForm(this.partnerForm, this.partnerSubmitted);
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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Card } from '../../shared/ui/card/card';
import { PROGRAMS } from '../../core/content/site-content';

@Component({
  selector: 'app-programs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Card],
  templateUrl: './programs.html',
  styleUrl: './programs.scss',
})
export class Programs {
  protected readonly programs = PROGRAMS;
}

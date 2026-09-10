import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}

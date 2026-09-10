import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}

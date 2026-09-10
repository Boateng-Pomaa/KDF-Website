import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Card } from '../../shared/ui/card/card';
import { BOARD_MEMBERS, CORE_VALUES, STAFF_MEMBERS } from '../../core/content/site-content';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Card],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly coreValues = CORE_VALUES;
  protected readonly boardMembers = BOARD_MEMBERS;
  protected readonly staffMembers = STAFF_MEMBERS;

  protected readonly legalDetails = [
    { label: 'Registered name', value: 'Kuukua Davis Foundation' },
    { label: 'Registration number', value: 'Placeholder — TBC' },
    { label: 'Country of registration', value: 'Ghana' },
    { label: 'Date incorporated', value: 'Placeholder — TBC' },
    { label: 'Tax identification number', value: 'Placeholder — TBC' },
    { label: 'Registered address', value: 'Takoradi, Ghana' },
  ];
}

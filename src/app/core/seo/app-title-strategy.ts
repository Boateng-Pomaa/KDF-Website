import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DefaultTitleStrategy, RouterStateSnapshot } from '@angular/router';

const DEFAULT_DESCRIPTION =
  'Kuukua Davis Foundation — community clean-ups, donation drives and neighbourhood support across Ghana.';

/**
 * Extends the router's default title handling to also set a per-route meta
 * description (and, for non-public routes, a noindex robots tag) from each
 * route's `data`. Angular's Router only ships a title strategy out of the box
 * — this is the documented extension point for adding the meta description
 * alongside it.
 */
@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends DefaultTitleStrategy {
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    super.updateTitle(snapshot);

    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const description = (route.data['description'] as string | undefined) ?? DEFAULT_DESCRIPTION;
    const robots = (route.data['robots'] as string | undefined) ?? 'index, follow';

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
  }
}

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Every route with static, parameter-free content is prerendered at build
  // time. Keep this list in sync with app.routes.ts as routes are added.
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'programs', renderMode: RenderMode.Prerender },
  { path: 'news', renderMode: RenderMode.Prerender },
  { path: 'gallery', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'admin', renderMode: RenderMode.Prerender },
  // Anything else (a genuinely unmatched URL) has no prerendered file to
  // serve, so it must be rendered on demand — otherwise the Node server falls
  // through to Express's generic "Cannot GET" page instead of our NotFound
  // component.
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];

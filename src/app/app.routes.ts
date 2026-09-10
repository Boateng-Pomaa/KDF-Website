import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Kuukua Davis Foundation',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About — Kuukua Davis Foundation',
  },
  {
    path: 'programs',
    loadComponent: () => import('./features/programs/programs').then((m) => m.Programs),
    title: 'Programs — Kuukua Davis Foundation',
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news').then((m) => m.News),
    title: 'News — Kuukua Davis Foundation',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery').then((m) => m.Gallery),
    title: 'Gallery — Kuukua Davis Foundation',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact — Kuukua Davis Foundation',
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin-shell').then((m) => m.AdminShell),
    title: 'Admin — Kuukua Davis Foundation',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found — Kuukua Davis Foundation',
  },
];

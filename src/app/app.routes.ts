import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Kuukua Davis Foundation',
    data: {
      description:
        'Kuukua Davis Foundation mobilises volunteers in Ghana for community clean-ups, donation drives and neighbourhood support.',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About — Kuukua Davis Foundation',
    data: {
      description:
        'Vision, mission, core values, history, board and leadership of the Kuukua Davis Foundation, a Ghana-based community service non-profit.',
    },
  },
  {
    path: 'programs',
    loadComponent: () => import('./features/programs/programs').then((m) => m.Programs),
    title: 'Programs — Kuukua Davis Foundation',
    data: {
      description:
        'Five areas of work: WASH & environmental sustainability, health & community well-being, women & girls empowerment, youth development, and poverty reduction.',
    },
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news').then((m) => m.News),
    title: 'News — Kuukua Davis Foundation',
    data: {
      description:
        'Latest activities and service days from the Kuukua Davis Foundation’s volunteer teams across Ghana.',
    },
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery').then((m) => m.Gallery),
    title: 'Gallery — Kuukua Davis Foundation',
    data: {
      description:
        'Photos from Kuukua Davis Foundation clean-ups, health outreach days and volunteer service across Ghana.',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact — Kuukua Davis Foundation',
    data: {
      description: 'Get in touch with the Kuukua Davis Foundation, based in Takoradi, Ghana.',
    },
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin-shell').then((m) => m.AdminShell),
    title: 'Admin — Kuukua Davis Foundation',
    data: {
      description: 'Kuukua Davis Foundation content administration.',
      robots: 'noindex, nofollow',
    },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found — Kuukua Davis Foundation',
    data: {
      description: 'The page you are looking for could not be found.',
      robots: 'noindex, nofollow',
    },
  },
];

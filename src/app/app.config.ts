import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { firebaseConfig } from '../environments/firebase.config';
import { AppTitleStrategy } from './core/seo/app-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
    ),
    provideClientHydration(withEventReplay()),
    { provide: TitleStrategy, useClass: AppTitleStrategy },
    // Firebase — see src/environments/firebase.config.ts. Config is a placeholder
    // until the client's project exists.
    //
    // Only the core app is provided here. Firestore/Storage are deliberately NOT
    // provided app-wide: doing so put ~350 KiB of unused SDK into the initial
    // bundle of every page (the main cause of Home's poor Lighthouse score).
    // Provide them at the route level, alongside the services that use them.
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ]
};

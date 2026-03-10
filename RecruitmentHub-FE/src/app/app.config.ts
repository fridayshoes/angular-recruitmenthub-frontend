import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

// Global Angular application configuration.
// This replaces the old AppModule in standalone Angular apps.
export const appConfig: ApplicationConfig = {
  providers: [

    // Registers the application's routes so Angular's router can navigate
    // between components based on the URL.
    provideRouter(routes),

    // Enables hydration for server-side rendering (SSR).
    // withEventReplay() ensures user interactions made before hydration
    // (like clicks or typing) are not lost.
    provideClientHydration(withEventReplay()),

    // Makes HttpClient available throughout the app.
    // Required for making API calls (GET, POST, etc.).
    provideHttpClient()

  ]
};
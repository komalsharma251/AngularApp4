import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Enables Angular routing system (navigation between pages/components)
import { provideRouter } from '@angular/router';

// Enables Angular animations (required for Angular Material components)
import { provideAnimations } from '@angular/platform-browser/animations';

// Enables HTTP features (used for API calls like json-server)
import { provideHttpClient } from '@angular/common/http';

// Application routes configuration (all app navigation paths)
import { routes } from './app.routes';

// Global application configuration object
export const appConfig: ApplicationConfig = {
  providers: [
    // Handles global JavaScript errors in Angular app
    provideBrowserGlobalErrorListeners(),

    // Registers application routes
    provideRouter(routes),

    // Enables animations for UI components (Material, transitions)
    provideAnimations(),

    // Enables HTTP client for API requests (GET, POST, etc.)
    provideHttpClient()
  ]
};
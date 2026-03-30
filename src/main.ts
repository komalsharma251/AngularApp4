// Import Angular function to start a standalone Angular app
import { bootstrapApplication } from '@angular/platform-browser';

// Root component of the application
import { AppComponent } from './app/app';

// Global app configuration (providers like HttpClient, routing, etc.)
import { appConfig } from './app/app.config';

// Bootstrapping (starting) the Angular application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Log any startup errors in console
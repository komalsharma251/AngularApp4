// Angular routing module type
import { Routes } from '@angular/router';

// Importing all application components used in routing
import { CreateEventComponent } from './components/create-event/create-event';
import { EventListComponent } from './components/event-list/event-list';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form';
import { ContactComponent } from './components/contact/contact';

// Application routes configuration
export const routes: Routes = [
  // Redirect default URL to events page
  { path: '', redirectTo: 'events', pathMatch: 'full' },

  // Event listing page
  { path: 'events', component: EventListComponent },

  // Create new event page
  { path: 'create-event', component: CreateEventComponent },

  // RSVP form page
  { path: 'rsvp', component: RsvpFormComponent },

  // Contact form page
  { path: 'contact', component: ContactComponent }
];
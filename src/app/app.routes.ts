import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },

  {
    path: 'events',
    loadComponent: () =>
      import('./components/event-list/event-list')
        .then(m => m.EventListComponent)
  },

  {
    path: 'create-event',
    loadComponent: () =>
      import('./components/create-event/create-event')
        .then(m => m.CreateEventComponent)
  },

  {
    path: 'rsvp',
    loadComponent: () =>
      import('./components/rsvp-form/rsvp-form')
        .then(m => m.RsvpFormComponent)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact')
        .then(m => m.ContactComponent)
  }
];
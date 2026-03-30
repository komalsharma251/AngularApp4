// Angular form validation utilities
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

// RxJS operators for async validation handling
import { map, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Service used to check if event title already exists
import { EventService } from '../services/event';

/**
 * Async validator to check if event title is unique
 * Used in reactive forms to prevent duplicate event titles
 */
export function uniqueTitleValidator(eventService: EventService): AsyncValidatorFn {

  // Returns validator function
  return (control: AbstractControl): Observable<ValidationErrors | null> => {

    const title = control.value?.trim(); // Get and clean input value

    // If no title entered, skip validation
    if (!title) return of(null);

    // Call backend/service to check if title exists
    return eventService.checkTitleExists(title).pipe(

      delay(400), // Simulate server delay for realistic UX

      // If title exists → return validation error, otherwise null
      map(exists => (exists ? { titleTaken: true } : null))
    );
  };
}
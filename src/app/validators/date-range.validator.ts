// Angular form validation types
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator to check if end date is after or equal to start date
 * Used for reactive forms (event creation form)
 */
export const dateRangeValidator = (): ValidatorFn => {

  // Returns validator function for form group
  return (control: AbstractControl): ValidationErrors | null => {

    // Get start and end date values from form
    const start = control.get('startDate')?.value;
    const end = control.get('endDate')?.value;

    // If either date is missing, skip validation
    if (!start || !end) return null;

    // Convert string values into Date objects
    const startDate = new Date(start);
    const endDate = new Date(end);

    // Return error if end date is before start date
    return endDate >= startDate ? null : { invalidDateRange: true };
  };
};
// Core Angular component
import { Component } from '@angular/core';

// Common Angular utilities (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Reactive Forms modules for complex form handling
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

// Angular Material UI modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Service to handle event API logic
import { EventService } from '../../services/event';

// Custom validators
import { dateRangeValidator } from '../../validators/date-range.validator';
import { uniqueTitleValidator } from '../../validators/unique-title.validator';

@Component({
  selector: 'app-create-event',

  // Standalone component (no module required)
  standalone: true,

  // Imported modules used in this component
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  templateUrl: './create-event.html', // HTML template
  styleUrl: './create-event.css' // CSS styles
})
export class CreateEventComponent {

  // Reactive form group
  eventForm: FormGroup;

  // Loading state for submit button
  submitting = false;

  // Dropdown options for category
  categories = ['Technology', 'Business', 'Education', 'Social', 'Community'];

  constructor(
    private fb: FormBuilder, // Form builder service
    private eventService: EventService, // Event API service
    private snackBar: MatSnackBar // Snackbar notifications
  ) {

    // Initialize reactive form with validation rules
    this.eventForm = this.fb.group(
      {
        title: [
          '',
          [Validators.required, Validators.minLength(3)],
          [uniqueTitleValidator(this.eventService)] // async validator
        ],
        description: ['', [Validators.required, Validators.minLength(10)]],
        category: ['', Validators.required],
        location: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        organizerEmail: ['', [Validators.required, Validators.email]],
        attendees: [1, [Validators.required, Validators.min(1)]]
      },

      // Custom validator for date range
      { validators: dateRangeValidator() }
    );
  }

  /**
   * Submit form and create event
   */
  onSubmit(): void {

    // Stop if form is invalid
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();

      this.snackBar.open(
        'Please fix the form errors before submitting.',
        'Close',
        { duration: 3000 }
      );
      return;
    }

    this.submitting = true;

    // Prepare cleaned form data
    const formValue = {
      ...this.eventForm.value,
      startDate: this.formatDate(this.eventForm.value.startDate),
      endDate: this.formatDate(this.eventForm.value.endDate)
    };

    // Call service to save event
    this.eventService.addEvent(formValue).subscribe({
      next: () => {
        this.submitting = false;

        this.snackBar.open('Event created successfully!', 'Close', {
          duration: 3000
        });

        this.eventForm.reset();
      },

      error: () => {
        this.submitting = false;

        this.snackBar.open(
          'Something went wrong while saving the event.',
          'Close',
          { duration: 4000 }
        );
      }
    });
  }

  /**
   * Convert Date object to YYYY-MM-DD format
   */
  private formatDate(date: Date): string {
    return new Date(date).toISOString().split('T')[0];
  }

  /**
   * Shortcut to access form controls in template
   */
  get f() {
    return this.eventForm.controls;
  }
}
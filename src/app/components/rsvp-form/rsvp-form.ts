// Core Angular component
import { Component } from '@angular/core';

// Common Angular directives (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Template-driven forms support
import { FormsModule, NgForm } from '@angular/forms';

// Angular Material form UI components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Angular Material snackbar for user notifications
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rsvp-form',

  // Standalone component (no module required)
  standalone: true,

  // Imported Angular + Material modules
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],

  templateUrl: './rsvp-form.html', // HTML template
  styleUrl: './rsvp-form.css' // CSS styles
})
export class RsvpFormComponent {

  // RSVP form model (template-driven form)
  rsvp = {
    name: '',
    email: '',
    guests: 1,
    message: ''
  };

  constructor(
    private snackBar: MatSnackBar // Snackbar for notifications
  ) {}

  /**
   * Submit RSVP form
   */
  submitRsvp(form: NgForm): void {

    // Validate form before submission
    if (form.invalid) {
      this.snackBar.open(
        'Please complete the RSVP form correctly.',
        'Close',
        { duration: 3000 }
      );
      return;
    }

    // Success message
    this.snackBar.open(
      'RSVP submitted successfully!',
      'Close',
      { duration: 3000 }
    );

    // Reset form after submit
    form.resetForm({
      name: '',
      email: '',
      guests: 1,
      message: ''
    });
  }
}
// Core Angular component decorator
import { Component } from '@angular/core';

// Common Angular directives (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// HTTP client for API calls (json-server POST request)
import { HttpClient } from '@angular/common/http';

// Template-driven forms support
import { FormsModule, NgForm } from '@angular/forms';

// Angular Material snackbar for notifications
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Angular Material UI form field modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',

  // Standalone component (no module required)
  standalone: true,

  // Imported modules used in this component
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],

  templateUrl: './contact.html', // HTML template file
  styleUrl: './contact.css' // Component styles file
})
export class ContactComponent {

  // Inject HttpClient for API requests and MatSnackBar for notifications
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Handles form submission
   * Sends contact data to json-server API
   */
  submit(form: NgForm) {

    // Stop submission if form is invalid
    if (form.invalid) return;

    // Send POST request to save contact message
    this.http.post('http://localhost:3000/contacts', form.value)
      .subscribe({
        // Success response
        next: (res: any) => {

          // Show success message
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 3000
          });

          // Reset form after submission
          form.reset();
        },

        // Error response
        error: () => {
          this.snackBar.open('Failed to send message!', 'Close', {
            duration: 3000
          });
        }
      });
  }
}
// Core Angular component
import { Component, OnInit } from '@angular/core';

// Common Angular utilities (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Template-driven forms support (for filters/search UI)
import { FormsModule } from '@angular/forms';

// Service that handles event data (API / json-server)
import { EventService } from '../../services/event';

// Event data model (TypeScript interface)
import { EventItem } from '../../models/event.model';

// Angular Material UI components
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

// Material form controls (for filter bar)
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-event-list',

  // Standalone component (no module required)
  standalone: true,

  // Imported Angular + Material modules
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  templateUrl: './event-list.html', // HTML template
  styleUrl: './event-list.css' // CSS styles
})
export class EventListComponent implements OnInit {

  // Full event list from API
  events: EventItem[] = [];

  // Filtered list shown in UI
  filteredEvents: EventItem[] = [];

  // Loading state for UI feedback
  loading = true;

  // Search input value
  searchTerm: string = '';

  // Selected category filter
  selectedCategory: string = 'All';

  // Category dropdown options
  categories: string[] = [
    'All',
    'Technology',
    'Business',
    'Education',
    'Social',
    'Community'
  ];

  constructor(
    private eventService: EventService, // API service
    private snackBar: MatSnackBar // UI notifications
  ) {}

  /**
   * Load events when component initializes
   */
  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.filteredEvents = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;

        this.snackBar.open('Could not load events.', 'Close', {
          duration: 3000
        });
      }
    });
  }

  /**
   * Apply search + category filters
   */
  applyFilters(): void {
    this.filteredEvents = this.events.filter(event => {

      // Match search text (title or description)
      const matchesSearch =
        event.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Match selected category
      const matchesCategory =
        this.selectedCategory === 'All' ||
        event.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }
}
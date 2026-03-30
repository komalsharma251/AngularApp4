// Core Angular component decorator
import { Component } from '@angular/core';

// Router directives for navigation links
import { RouterLink, RouterLinkActive } from '@angular/router';

// Angular Material toolbar UI
import { MatToolbarModule } from '@angular/material/toolbar';

// Angular Material button UI
import { MatButtonModule } from '@angular/material/button';

// Angular Material icon UI
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',

  // Standalone component (no module required)
  standalone: true,

  // Imported modules used in navbar
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],

  templateUrl: './navbar.html', // HTML template
  styleUrl: './navbar.css' // CSS styles
})
export class NavbarComponent {}
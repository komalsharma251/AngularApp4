#  AngularApp4 - Event Management System

## 📌 Project Overview
AngularApp4 is a modern **Event Management Web Application** built using Angular.  
It allows users to create, view, filter, and manage events along with RSVP and Contact features.  
The project demonstrates Angular Forms, Angular Material UI, validation, and JSON-server integration.

---

## 🚀 Features

### 🎯 Event Management
- Create new events using **Reactive Forms**
- View all events in a clean UI
- Filter events by:
  - Category
  - Search keyword
- Display event details using Angular Material cards

---

### 📝 Forms Implemented

#### 1. Reactive Form (Create Event)
- Full validation system:
  - Required fields
  - Email validation
  - Minimum length checks
  - Custom validation:
    - ✅ Unique event title (async validator)
    - ✅ Date range validation
- Angular Material UI components used:
  - `mat-form-field`
  - `mat-input`
  - `mat-select`
  - `mat-datepicker`

---

#### 2. Template-driven Forms
- RSVP Form
- Contact Form
- Basic validation with user-friendly messages
- Snackbar notifications on submit

---

##  Validation Features
- Required field validation
- Email format validation
- Minimum character validation
- Custom synchronous validation (date range)
- Custom asynchronous validation (unique title check)

---

## 🎨 UI/UX (Angular Material)
- Clean and responsive design
- Angular Material components:
  - Toolbar
  - Cards
  - Buttons
  - Forms
  - Snackbar notifications
- Modern UI styling with Material Design 3

---

## 🌐 Backend (JSON Server)
This project uses **json-server** as a fake REST API.

### Endpoints:
- `/events` → Event data
- `/contacts` → Contact form submissions

### Run JSON Server:
```bash
json-server --watch db.json --port 3000on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

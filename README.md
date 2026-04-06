# 🎉 Event Planner App (Angular Assignment)

A modern **Event Management Web Application** built using Angular, Angular Material, and JSON Server.  
This project demonstrates core Angular concepts including components, services, pipes, routing, reactive UI, and API integration.

---

# 📌 Project Overview

The Event Planner App allows users to:
- View upcoming events
- Search and filter events
- View event status (Upcoming / Ongoing / Completed)
- Highlight events dynamically
- Manage event data using a JSON backend

---

# 🚀 Features

## 🧩 Core Features
- 📋 Event listing from API (JSON Server)
- 🔍 Search events by title/description
- 📂 Filter by category
- 📊 Event status indicator (custom pipe)
- 🎨 Highlight upcoming/ongoing/completed events
- ⚡ Loading state handling
- 📭 Empty state handling

## 🛠 CRUD Features
- ➕ Add event (Reactive Form)
- 📖 View event list
- ❌ Delete event (optional feature)

---

# 🧠 Angular Concepts Used

- Components (Modular structure)
- Services (API communication using HttpClient)
- Pipes (Custom event status pipe)
- Routing (Lazy loading modules)
- Reactive Forms
- Observables (RxJS)
- Angular Material UI components

---

# 📁 Folder Structure


src/app/
│
├── components/
│ ├── event-list/
│ ├── create-event/
│ ├── contact/
│
├── services/
│ └── event.service.ts
│
├── pipes/
│ └── event-status.pipe.ts
│
├── models/
│ └── event.model.ts
│
├── pages/
│ └── home/


---

# 🔌 Backend (JSON Server)

This project uses JSON Server as a mock backend.

## ▶ Run backend:
```bash
json-server --watch db.json
📂 API Endpoint:
http://localhost:3000/events
⚙️ Installation & Setup
1️⃣ Install dependencies
npm install
2️⃣ Run Angular app
ng serve
3️⃣ Run JSON server
json-server --watch db.json
🧪 Testing & Debugging

The application was tested using:

Chrome Developer Tools (Console)
Network tab (API verification)
JSON Server response validation
UI testing (search, filter, CRUD operations)
⚡ Production Build (Optimization)

The application was optimized using Angular production build:

ng build --configuration production
✔ Optimizations included:
Code minification
Lazy loading chunks
Tree shaking
Reduced bundle size
Optimized asset loading
📦 Production Output

The production build is generated in:

dist/event-planner/browser
🖼 UI Screenshots Included
Home page with event list
Search and filter functionality
Event status highlighting
Loading & empty states
Production build output
👨‍💻 Developer Notes
Built as part of Angular Assignment 5
Focus on modular architecture and reusability
Clean separation of components, services, and pipes
API-driven architecture using JSON Server
🤖 AI Usage Reflection

AI tools were used to:

Debug Angular service and routing issues
Improve UI structure and layout design
Optimize folder structure and best practices
Learning Outcome:
Better understanding of Angular architecture
Improved knowledge of RxJS and services
Learned production build optimization process
📌 Author

Komal Sharma
Angular Development Assignment
2026
json-server --watch db.json --port 3000on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

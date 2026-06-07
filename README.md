# Lendsqr Frontend Engineering Assessment

## Overview

This project is a frontend implementation of the Lendsqr Admin Console assessment built with React, TypeScript, and SCSS.

The application includes:

* Login Page
* Dashboard Layout
* Users Page
* User Details Page
* Responsive Design
* Filtering
* Pagination
* Local Storage Persistence
* Unit Testing

The goal of this project was to create a production-ready frontend experience while following the design specifications provided in the Figma file.

---

## Live Demo

Deployment URL:

```txt
https://your-vercel-url.vercel.app
```

---

## Repository

GitHub Repository:

```txt
https://github.com/codezzoom/lendsqr-fe-test
```

---

## Tech Stack

* React
* TypeScript
* SCSS
* React Router DOM
* Lucide React Icons
* Jest
* React Testing Library
* Vite

---

## Features

### Authentication

* Login page implementation
* Form validation
* Responsive layout

### Dashboard Layout

* Fixed header
* Responsive sidebar
* Mobile hamburger menu
* Protected dashboard structure

### Users Page

* Users statistics cards
* Data table
* Search and filtering
* Status filtering
* Pagination
* Loading state
* Empty state
* Error state

### User Details Page

* Dynamic user details page
* Local storage persistence
* Detailed user information
* Responsive layout

### Responsiveness

The application supports:

* Desktop
* Tablet
* Mobile

Tables become horizontally scrollable on smaller devices and the sidebar converts into a mobile navigation menu.

---

## Project Structure

```txt
src
│
├── assets
├── components
│   ├── Header
│   ├── Sidebar
│   ├── Table
│   ├── Pagination
│   ├── StatCard
│   ├── FilterPanel
│   └── StateMessage
│
├── layouts
│   └── MainLayout
│
├── pages
│   ├── Login
│   ├── Users
│   └── UserDetails
│
├── services
├── types
├── data
└── test
```

---

## Data Handling

The assessment requires handling 500 user records.

The application generates and manages 500 users and implements:

* Client-side pagination
* Search filtering
* Status filtering

Pagination is used to ensure smooth rendering and avoid displaying all records simultaneously.

---

## Local Storage

When a user selects **View Details** from the Users table:

1. The selected user is saved to Local Storage.
2. The User Details page retrieves the saved data.
3. The page renders user-specific information.

This satisfies the persistence requirement specified in the assessment.

---

## Testing

The project includes unit tests for:

* Login page rendering
* Users page loading state
* Users page success state
* Users page error state
* Users page empty state
* Pagination interactions
* Filter interactions
* User Details page localStorage retrieval

Run tests:

```bash
npm run test
```

---

## Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Design Decisions

### Pagination

Instead of rendering all 500 users at once, pagination was implemented to improve performance and usability.

### Local Storage

Local Storage was selected for persistence because it satisfies the assessment requirements while keeping the implementation simple.

### Responsive Design

The original design focused primarily on desktop layouts. Additional responsive behavior was introduced for tablet and mobile experiences while maintaining visual consistency.

### Component Architecture

Reusable components were created for:

* Sidebar navigation
* Header
* Statistics cards
* Filters
* Pagination
* State handling

This improves maintainability and scalability.

---

## Author

Amritvir Randhawa

Frontend Engineer Assessment Submission

# Library Management System (MERN Stack)

## Project Structure

```text
library-management
│
├── backend
│   │
│   ├── config
│   │   └── multer.js
│   │
│   ├── models
│   │   ├── Book.js
│   │   └── Request.js
│   │
│   ├── routes
│   │   └── bookRoutes.js
│   │
│   ├── uploads
│   │
│   ├── .env
│   │
│   ├── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── AddBookForm.js
│   │   │   ├── BookCard.js
│   │   │   └── Navbar.js
│   │   │
│   │   ├── pages
│   │   │   ├── AddBookPage.js
│   │   │   ├── BooksPage.js
│   │   │   ├── Home.js
│   │   │   └── UpdateBookPage.js
│   │   │
│   │   ├── styles
│   │   │   ├── App.css
│   │   │   ├── BookCard.css
│   │   │   ├── Form.css
│   │   │   └── Navbar.css
│   │   │
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── structure.md
└── README.md
```

---

# Backend Description

## Config

- multer.js → Handles image upload using Multer.

## Models

- Book.js → MongoDB schema for books.
- Request.js → MongoDB schema for book requests.

## Routes

- bookRoutes.js → REST API routes for CRUD operations and request handling.

## Server

- server.js → Express server configuration and MongoDB connection.

---

# Frontend Description

## Components

- Navbar.js → Navigation bar.
- AddBookForm.js → Form to add books.
- BookCard.js → Card UI for displaying books.

## Pages

- Home.js → Home page.
- BooksPage.js → Displays all books dynamically.
- AddBookPage.js → Add book page.
- UpdateBookPage.js → Placeholder update page.

## Styles

- App.css → Global styling.
- Navbar.css → Navbar styling.
- BookCard.css → Book card styling.
- Form.css → Add book form styling.

---

# Features Implemented

- MERN Stack Architecture
- CRUD Operations
- MongoDB Integration
- REST APIs
- Image Upload
- Dynamic React Frontend
- React Router Navigation
- Responsive UI
- Book Request System
- Aggregation Filtering
- Count Increment Logic

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Add Book |
| GET | /api/books | Fetch All Books |
| PUT | /api/books/:id | Update Book |
| DELETE | /api/books/:id | Delete Book |
| POST | /api/books/request | Request Book |
| GET | /api/books/filter | Filter Books |

---

# Technologies Used

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS

---

# Developed By

Koushik Das



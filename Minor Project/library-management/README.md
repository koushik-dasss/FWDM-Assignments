# Library Management System (MERN Stack)

A Full Stack MERN Library Management System built using:

- MongoDB
- Express.js
- React.js
- Node.js

This project allows users to manage digital books using PDF uploads and dynamic CRUD operations.

---

# Features

- Add Books
- Upload PDF Files
- View All Books
- Delete Books
- Request Books
- Dynamic Request Count
- MongoDB Integration
- REST APIs
- React Router Navigation
- Responsive User Interface

---

# Project Architecture

```text
React Frontend
       ↓
Axios API Calls
       ↓
Express Backend
       ↓
MongoDB Database
```

---

# Project Structure

```text
library-management
│
├── backend
│
├── frontend
│
├── structure.md
│
├── README.md
└── .gitignore
```

---

# Frontend Technologies

- React.js
- React Router DOM
- Axios
- CSS3

---

# Backend Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Run backend

```bash
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

# MongoDB Setup

Ensure MongoDB is installed and running locally.

Database used:

```text
library-management
```

---

# Main Functionalities

## Add Book

Users can:
- Add book title
- Add author name
- Upload PDF

---

## View Books

Displays:
- Book Title
- Author
- Request Count
- Open PDF Link

---

## Request Book

When user requests a book:

- Existing book → count increments
- New book → created automatically

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Add Book |
| GET | /api/books | Get All Books |
| PUT | /api/books/:id | Update Book |
| DELETE | /api/books/:id | Delete Book |
| POST | /api/books/request | Request Book |
| GET | /api/books/filter | Filter Books |

---

# Screens Included

- Home Page
- Books Page
- Add Book Page
- Update Book Page

---

# Future Improvements

- Authentication
- Search Functionality
- Pagination
- Advanced Filtering

---

# Developed By

Koushik Das
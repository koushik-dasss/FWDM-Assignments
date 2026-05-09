# Library Management System Backend

Backend server for the MERN Stack Library Management System.

This backend provides REST APIs for:

- Adding books
- Fetching books
- Updating books
- Deleting books
- Requesting books
- PDF upload handling
- MongoDB data storage

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS

---

# Folder Structure

```text
backend
│
├── config
│   └── multer.js
│
├── models
│   ├── Book.js
│   └── Request.js
│
├── routes
│   └── bookRoutes.js
│
├── uploads
│
├── .env
│
├── server.js
│
├── package.json
└── README.md
```

---

# Features

- REST API Architecture
- CRUD Operations
- MongoDB Integration
- PDF Upload Support
- Request Count Increment Logic
- Aggregation Filtering
- Express Routing
- File Upload Handling

---

# Installation

## Install Dependencies

```bash
npm install
```

---

# Run Backend Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

# MongoDB Connection

MongoDB is connected using Mongoose.

Database Name:

```text
library-management
```

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

# Uploads

Uploaded PDF files are stored in:

```text
uploads/
```

---

# Book Request Logic

When a book is requested:

- If book exists → count increases
- If book does not exist → new book is created

This prevents duplicate entries and tracks popularity.

---

# Developed By

Koushik Das
# Library Management System Frontend

A responsive Full Stack MERN Library Management System frontend built using React.js.

This project allows users to:

- Add books
- Upload PDF files
- View all books
- Request books
- Delete books
- Navigate between pages using React Router

---

# Frontend Features

- Responsive UI
- React Router Navigation
- Add Book Form
- Dynamic Book Display
- PDF Upload Support
- Request Book Functionality
- Delete Book Functionality
- Modular Component Structure
- API Integration using Axios

---

# Technologies Used

- React.js
- React Router DOM
- Axios
- CSS3

---

# Folder Structure

```text
frontend
│
├── public
│
├── src
│   │
│   ├── components
│   │   ├── AddBookForm.js
│   │   ├── BookCard.js
│   │   └── Navbar.js
│   │
│   ├── pages
│   │   ├── AddBookPage.js
│   │   ├── BooksPage.js
│   │   ├── Home.js
│   │   └── UpdateBookPage.js
│   │
│   ├── styles
│   │   ├── App.css
│   │   ├── BookCard.css
│   │   ├── Form.css
│   │   └── Navbar.css
│   │
│   ├── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

# Available Pages

| Route | Description |
|------|-------------|
| / | Home Page |
| /books | View All Books |
| /add-book | Add New Book |
| /update/:id | Update Book Page |

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

# Install Dependencies

```bash
npm install
```

---

# Run Frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Backend Requirement

Ensure backend server is running on:

```text
http://localhost:5000
```

Backend API base URL used:

```js
http://localhost:5000/api/books
```

---

# API Integration

The frontend communicates with backend REST APIs using Axios.

Implemented API Operations:

- Fetch Books
- Add Book
- Delete Book
- Request Book
- Filter Books

---

# UI Components

## Navbar

Used for navigation between pages.

## AddBookForm

Used to upload books and PDF files.

## BookCard

Displays book information dynamically.

---

# Styling

Custom CSS is used for:

- Responsive Layout
- Navigation Bar
- Book Cards
- Forms
- Buttons

---

# Future Improvements

- Update Book Functionality
- Search Books
- Authentication
- Advanced Filtering

---

# Developed By

Koushik Das
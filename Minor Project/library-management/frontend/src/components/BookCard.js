import React from "react";
import "../styles/BookCard.css";
function BookCard({ book, onDelete, onRequest }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Count: {book.count}</p>
      {
        book.pdf &&
        <a
          href={`http://localhost:5000/uploads/${book.pdf}`}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
        </a>
      }
      <div className="btn-group">
        <button onClick={() => onRequest(book.title)}>
          Request
        </button>
        <button onClick={() => onDelete(book._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookCard;
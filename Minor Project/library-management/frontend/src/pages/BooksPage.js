import React, { useEffect,useState } from "react";
import api from "../api";
import BookCard from "../components/BookCard";
function BooksPage() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const fetchBooks = async () => {
    try {
      const response = await api.get("/");
      setBooks(response.data);
    }
    catch(error) {
      console.log(error);
      setError("Backend connection failed");
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const deleteBook = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchBooks();
    }
    catch(error) {
      console.log(error);
    }
  };
  const requestBook = async (title) => {
    try {
      await api.post("/request", {
        title,
        user: "Koushik"
      });
      fetchBooks();
    }
    catch(error) {
      console.log(error);
    }
  };
  return (
    <div>
      {
       error &&
        <h2>{error}</h2>
      }
      <div className="books-grid">
        {
          books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onDelete={deleteBook}
              onRequest={requestBook}
            />
          ))
        }
      </div>
    </div>
  );
}
export default BooksPage;
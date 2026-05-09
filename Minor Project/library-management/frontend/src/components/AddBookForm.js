import React, { useState } from "react";
import api from "../api";
import "../styles/Form.css";
function AddBookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pdf, setPdf] = useState(null);
    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("pdf", pdf);
    try {
        await api.post("/", formData);
        alert("Book Added Successfully");
        setTitle("");
        setAuthor("");
        setImage(null);
    }
    catch(error) {
        console.log(error);
    }
};
return (
    <div className="form-container">
        <h2>Add Book</h2>
     <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setPdf(e.target.files[0])}
        />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
   );
}
export default AddBookForm;
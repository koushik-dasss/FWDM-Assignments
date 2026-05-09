import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage";
import UpdateBookPage from "./pages/UpdateBookPage";
import "./styles/App.css";
function App() {
  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/books" element={<BooksPage />} />
         <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/update/:id" element={<UpdateBookPage />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
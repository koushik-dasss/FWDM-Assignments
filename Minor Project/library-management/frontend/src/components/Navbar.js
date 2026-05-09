import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
    return (
    <nav className="navbar">
       <h2>Library Management</h2>
       <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/books">Books</Link>
         <Link to="/add-book">Add Book</Link>
        </div>
    </nav>
    );
}
export default Navbar;
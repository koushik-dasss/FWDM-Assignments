// backend/server.js

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const app = express();
app.use(cors()); // MIDDLEWARE
app.use(express.json());
app.use("/uploads", express.static("uploads")); // STATIC FOLDER
// DB CONNECTION - Using process.env to load the URI
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });
app.use("/api/books", bookRoutes); // ROUTES
// SERVER
const PORT = 5000;
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});





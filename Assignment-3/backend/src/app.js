// QS. 6 
const express = require('express');
const cors = require('cors');
const initDatabase = require("./db/init");
const postsRoutes = require("./routes/posts");
const app = express();
// middleware
app.use(cors); 
app.use(express.json()); // body parser (middleware)
initDatabase(); // DB connection
app.use("/api",postsRoutes); // routes connected , if posts.js uses express.Router()
app.listen(3000 , () => {
    console.log("Server running on port 3000"); // server start display message 
});
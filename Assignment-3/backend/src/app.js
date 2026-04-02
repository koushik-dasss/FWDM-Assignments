// QS. 6 

const express = require('express');
const initDatabase = require("./db/init");
const postsRoutes = require("./routes/posts");
const app = express();
app.use(express.json()); // body parser (middleware)
initDatabase(); // DB connection
app.use(postsRoutes); // routes connected 
app.listen(3000 , () => {
    console.log("Server running on port 3000"); // server start display message 
});
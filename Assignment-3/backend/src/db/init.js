// Qs. 1 
const mongoose = require("mongoose");
require("dotenv").config();
async function initDatabase() {
    try {
        // Display messages 
        mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
        mongoose.connection.on("error", (err) => console.error("DB Runtime Error:", err));
        // Connection
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (err) {
        console.error("Critical Database connection error:", err);
        process.exit(1); // Stop the app if DB fails
    }
}

module.exports = initDatabase;

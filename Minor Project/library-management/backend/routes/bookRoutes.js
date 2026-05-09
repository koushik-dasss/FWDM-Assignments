// routes/bookRoutes.js

const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Request = require("../models/Request");
const upload = require("../config/multer");
const { log } = require("node:console");

// BOOK ADDITION 
router.post("/", upload.single("pdf"), async (req, res) => {
    try {
        const { title, author } = req.body;
        let book = await Book.findOne({ title: title });
        // IF BOOK EXISTS 
        if (book) {
            book.count += 1;
            await book.save();
            return res.json({
                message: "Book already exists. Count increased. ",
                book
            });
        }
        // CREATION OF NEW BOOK
        const newBook = new Book({
            title,
            author,
            pdf: req.file ? req.file.filename : "",
            count: 1
        });
        await newBook.save();
        res.json({
            message: "New book added successfully",
            newBook
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
// GET ALL BOOKS
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching books"
        });
    }
});
// UPDATE BOOK
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({
            message: "Update failed"
        });
    }
});
// DELETE BOOK
router.delete("/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({
            message: "Book deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: "Delete failed"
        });
    }
});
// REQUEST BOOK
router.post("/request", async (req, res) => {
    try {
        const { title, user } = req.body;
        let book = await Book.findOne({ title });
        // IF BOOK EXISTS
        if (book) {
            book.count += 1;
            await book.save();
        }
        // CREATE BOOK IF EXISTS
        else {
            book = new Book({
                title,
                author: "Unknown",
                count: 1
            });
            await book.save();
        }
        // SAVE REQUEST
        const request = new Request({
            bookTitle: title,
            requestedBy: user
        });
        await request.save();
        res.json({
            message: "Book requested successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Request failed"
        });
    }
});
// FILTERING THE BOOKS 
router.get("/filter", async (req, res) => {
    try {
        const min = parseInt(req.query.min);
        const max = parseInt(req.query.max);
        const books = await Book.aggregate([
            {
                $match: {
                    count: {
                        $gte: min,
                        $lte: max
                    }
                }
            }
        ]);
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: "Filter failed"
        });
    }
});
module.exports = router;

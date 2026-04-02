// Qs. 2
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true
        },
        price : Number,
        category : String,
        stock : Number
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Product", ProductSchema);
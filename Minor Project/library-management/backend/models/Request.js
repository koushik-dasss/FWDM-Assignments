// models/Request.js

const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
    bookTitle:{type: String,required: true},
    requestedBy:{type: String,required: true},
    date:{type: Date,default: Date.now}
});
module.exports = mongoose.model("Request",requestSchema);
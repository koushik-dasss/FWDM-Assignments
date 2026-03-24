const fs = require('fs');
const now = new Date().toString();
fs.appendFileSync("log.txt", now + "\n");
console.log("Log updated successfully.");

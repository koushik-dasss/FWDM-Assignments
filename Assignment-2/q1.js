const fs = require('fs');
const data = "Name,Marks\nKoushik,85\nRoman,65\nDean,75";
fs.writeFileSync("data.csv",data);
console.log("data.csv file created successfully.");

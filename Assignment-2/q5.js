const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    const student = {
        name : "Koushik",
        marks: 90
    };
    res.end(JSON.stringify(student));
});
server.listen(5000,()=>{
    console.log("JSON Server running at http://localhost:5000/");
    
})
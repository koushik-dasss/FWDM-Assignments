const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello Students</h1>");
    res.end();
});
server.listen(4000,()=>{
    console.log("Server running at http://localhost:4000/");
});
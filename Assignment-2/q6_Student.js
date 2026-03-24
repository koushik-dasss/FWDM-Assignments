const http = require('http');
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
http.createServer(async(req,res)=>{
    await client.connect();
    const db = client.db("School");
    const collection = db.collection("Student");
    const data = await collection.find().toArray();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));  
}).listen(3000, ()=>{ // changed port to 3000 from 6000 as 6000 is reserved for X11 and will throw a ERR_UNSAFE_PORT error 
    console.log("Server running at http://localhost:3000/");    
});
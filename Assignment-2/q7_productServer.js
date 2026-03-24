const http = require('http');
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
http.createServer(async (req,res) => {
    await client.connect();
    const db = client.db("ecommerce");
    const collection = db.collection("product");
    const data = await collection.find().toArray();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(7000, () => { // port 7000 works (not like port 6000)
    console.log("Product Server running at http://localhost:7000/");
});
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(express.json());
let users = [];
const SECRET_KEY = "mysecretkey";
app.post("/register", async(req,res) => {
    const{ username,email,password } = req.body;
    const existingUser = users.find(
        (user) => user.email === email
    );
    if(existingUser){
        return res.status(400).json({
            message:"User already exists",
        });
    }
    const hashedPassword =
    await bcrypt.hash(password,10);
    users.push({
        username,
        email,
        password:hashedPassword,
    });
    res.json({
        message:"Registration Successful",
    });
});
app.post("/login", async(req,res) => {
    const{ email,password } = req.body;
    const user = users.find(
        (u) => u.email === email
    );
    if(!user){
        return res.status(400).json({
            message:"User not found",
        });
    }
    const isMatch =
    await bcrypt.compare(
        password,
        user.password
    );
    if(!isMatch){
        return res.status(400).json({
            message:"Invalid Password",
        });
    }
    const token = jwt.sign(
        { email:user.email },
        SECRET_KEY,
        { expiresIn:"1h" }
    );
    res.json({
        message:"Login Successful",
        token,
    });
});
function verifyToken(req,res,next){
    const authHeader =
    req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message:"Token missing",
        });
    }
    const token =
    authHeader.split(" ")[1];
    try{
        const verified =
        jwt.verify(token,SECRET_KEY);
        req.user = verified;
        next();
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token",
        });
    }
}
app.get("/products",verifyToken,(req,res) => {
    res.json([
        {
            id:1,
            name:"Laptop",
            price:50000,
        },
        {
            id:2,
            name:"Phone",
            price:25000,
        }
    ]);
});
app.listen(5000,() => {
    console.log(
        "Server running on port 5000"
    );
});
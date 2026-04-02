// Qs. 5
const express = require('express');
const router = express.Router();
let posts = []; // temp. storage creation
// GET POSTS
router.get("/api/v1/posts", (req,res) => {
    const{author,tag} = req.query;
    if(author && tag){
        return res.status(400).json({error : "Cannot use both filters."});
    }
    let result = posts;
    if(author){
        result = posts.filter(p => p.author === author);
    }
    if(tag){
        result = posts.filter(p => p.tag === tag);
    }
    res.json(result);
});
// GET BY ID 
router.get("/api/v1/posts/:id", (req,res) => {
    const post = posts.find(p => p.id == req.params.id);
    if(!post){
        return res.status(404).send("Not Found");
    }
    res.json(post);
});
// UPDATE
router.patch("/api/v1/posts/:id" , (req,res) => {
    const post = post.find( p => p.id == req.params.id);
    if(!post){
        return res.status(404).send("Not Found");
    }
    Object.assign(post , req.body);
    res.json(post);
});
// DELETE
router.delete("/api/v1/posts/:id" , (req,res) => {
    const index = posts.findIndex(p => p.id == req.params.id);
    if(index == -1){
        return res.status(404).send("Not Found");
    }
    posts.splice(index,1);
    res.status(204).send();
});
module.exports = router;
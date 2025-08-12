const express = require("express");
const router = express.Router();

//Index
router.get("/", (req,res) =>{
    res.send("GET for posts");
});

//Show
router.get("/:id", (req,res) =>{
    res.send("GET for post id");
});

//Post
router.get("/", (req,res) =>{
    res.send("POST for posts");
});

//Delete
router.get("/:id", (req,res) =>{
    res.send("Delete for posts id");
});

module.exports = router;
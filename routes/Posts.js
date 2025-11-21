const express = require("express");
const router = express.Router();
const { allPosts, createPost } = require("../controllers/Posts.js");
router.get("/", allPosts);
router.post("/create", createPost);
module.exports = router;

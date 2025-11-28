const express = require("express");
const router = express.Router();

const {
  allPosts,
  createPost,
  specificPost,
} = require("../controllers/Posts.js");
router.get("/", allPosts);
router.get("/:id", specificPost);
router.post("/create", createPost);
module.exports = router;

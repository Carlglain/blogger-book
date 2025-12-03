const express = require("express");
const router = express.Router();

const { createComment, displayComment } = require("../controllers/Comments.js");
router.post("/", createComment);
router.get("/:postId", displayComment);
module.exports = router;

const { Posts } = require("../models");
const allPosts = (req, res) => {
  res.send("Helloworld!");
};
const createPost = async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
};

module.exports = { allPosts, createPost };

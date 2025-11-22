const { Posts } = require("../models");
const allPosts = async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
};
const createPost = async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
};

module.exports = { allPosts, createPost };

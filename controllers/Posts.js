const { Posts } = require("../models");
const allPosts = async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
};
const specificPost = async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.status(200).json(post);
};
const createPost = async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.status(201).json(post);
};

module.exports = { allPosts, createPost, specificPost };

const { Comments } = require("../models");
const createComment = async (req, res) => {
  const comment = req.body;
  const createdComment = await Comments.create(comment);
  res
    .status(201)
    .json({ message: " comment succesfully created ", data: createdComment });
};
module.exports = { createComment };

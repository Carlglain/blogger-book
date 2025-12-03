const { Comments } = require("../models");
const createComment = async (req, res) => {
  const comment = req.body;
  console.log("BODY RECEIVED:", req.body);

  const createdComment = await Comments.create(comment);
  res
    .status(201)
    .json({ message: " comment succesfully created ", data: createdComment });
};
const displayComment = async (req, res) => {
  const postId = req.params.postId;
  const comment = await Comments.findAll({
    where: {
      PostId: postId,
    },
  });
  res.status(200).json(comment);
};
module.exports = { createComment, displayComment };

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts, {
      foreignKey: "PostId",
    });
  };

  return Comments;
};

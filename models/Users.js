const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.NUMBER,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Posts, {
      onDelete: "cascade",
    });
  };
  return User;
};

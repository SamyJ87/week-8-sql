const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

// Author model
const Author = connection.define("Author", {
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Author;

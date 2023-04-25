const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

// Genre model
const Genre = connection.define("Genre", {
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  
  module.exports = Genre;

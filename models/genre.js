const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Define genre model
const Genre = sequelize.define(
  "Genre",
  {
    GenreID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Genre;

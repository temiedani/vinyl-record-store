const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Define track model
const Track = sequelize.define(
  "Track",
  {
    TrackID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    AlbumID: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Track;

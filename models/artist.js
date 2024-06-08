const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artist = sequelize.define(
  "Artist",
  {
    ArtistID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);


module.exports = Artist;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Define User model
const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Address: {
      type: DataTypes.STRING,
    },
    PhoneNumber: {
      type: DataTypes.STRING,
    },
    Role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

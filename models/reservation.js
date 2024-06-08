const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const VinylRecord = require("./vinylRecord");

const Reservation = sequelize.define(
  "Reservation",
  {
    ReservationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "UserID",
      },
    },
    VinylRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "VinylRecords",
        key: "RecordID",
      },
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
    },
    Notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

// Define associations
Reservation.belongsTo(User, { foreignKey: "UserID" });
Reservation.belongsTo(VinylRecord, { foreignKey: "VinylRecordID" });

module.exports = Reservation;

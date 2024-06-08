const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Define VinylRecord model
const VinylRecord = sequelize.define(
  "VinylRecord",
  {
    RecordID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Genre: {
      type: DataTypes.STRING,
    },
    ReleaseDate: {
      type: DataTypes.DATE,
    },
    Label: {
      type: DataTypes.STRING,
    },
    CatalogNumber: {
      type: DataTypes.STRING,
    },
    Format: {
      type: DataTypes.STRING,
    },
    Speed: {
      type: DataTypes.STRING,
    },
    Condition: {
      type: DataTypes.STRING,
    },
    Weight: {
      type: DataTypes.STRING,
    },
    Color: {
      type: DataTypes.STRING,
    },
    TrackList: {
      type: DataTypes.JSON,
    },
    Barcode: {
      type: DataTypes.STRING,
    },
    MatrixNumber: {
      type: DataTypes.STRING,
    },
    Country: {
      type: DataTypes.STRING,
    },
    Edition: {
      type: DataTypes.STRING,
    },
    Notes: {
      type: DataTypes.TEXT,
    },
    OwnerID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "UserID",
      },
    },
    AcquisitionDate: {
      type: DataTypes.DATE,
    },
    PurchasePrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    CurrentValue: {
      type: DataTypes.DECIMAL(10, 2),
    },
    AvailabilityStatus: {
      type: DataTypes.STRING,
    },
    Location: {
      type: DataTypes.STRING,
    },
    LoanPeriod: {
      type: DataTypes.INTEGER,
    },
    LoanStatus: {
      type: DataTypes.STRING,
    },
    CoverImage: {
      type: DataTypes.STRING,
    },
    AdditionalImages: {
      type: DataTypes.JSON,
    },
    LoanedToID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "UserID",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = VinylRecord;

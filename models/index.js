const sequelize = require("../config/database");
const User = require("./user");
const VinylRecord = require("./vinylRecord");

User.hasMany(VinylRecord, { foreignKey: "OwnerID" });
VinylRecord.belongsTo(User, { foreignKey: "OwnerID" });

User.hasMany(VinylRecord, { foreignKey: "LoanedToID", as: "LoanedRecords" });
VinylRecord.belongsTo(User, { foreignKey: "LoanedToID", as: "LoanedTo" });

module.exports = {
  sequelize,
  User,
  VinylRecord,
};

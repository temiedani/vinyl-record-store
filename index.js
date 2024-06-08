const express = require("express");
const { sequelize } = require("./models");
const vinylRecordsRouter = require("./routes/vinylRecords");
const usersRouter = require("./routes/users");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve exports folder
app.use("/exports", express.static(path.join(__dirname, "exports")));

// Vinyl Records routes
app.use("/vinyl-records", vinylRecordsRouter);

// Users routes
app.use("/users", usersRouter);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

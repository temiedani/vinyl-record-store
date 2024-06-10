const express = require("express");
const { sequelize } = require("./models");
const vinylRecordsRouter = require("./routes/vinylRecords");
const usersRouter = require("./routes/users");
const reservationsRouter = require("./routes/reservations");
const tracksRouter = require("./routes/tracks");
const genresRouter = require("./routes/genres");
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

// Reservations routes
app.use("/reservations", reservationsRouter);

// Tracks routes
app.use("/tracks", tracksRouter);

// Genre routes
app.use("/genres", genresRouter);

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

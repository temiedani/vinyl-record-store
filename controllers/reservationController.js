const Reservation = require("../models/reservation");

// Create a reservation
exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Check if a record is available
exports.checkAvailability = async (req, res) => {
  try {
    const reservation = await Reservation.findOne({
      where: {
        vinylRecordId: req.params.recordId,
        returnDate: null,
      },
    });
    if (reservation) {
      res.json({ available: false });
    } else {
      res.json({ available: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Confirm a reservation
exports.confirmReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      reservation.Status = "Confirmed";
      await reservation.save();
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reject a reservation
exports.rejectReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      reservation.Status = "Rejected";
      await reservation.save();
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get all reservations
exports.getAllReservations = async (req, res) => {
  try {
    const { status, userId, vinylRecordId } = req.query;
    const whereClause = {};
    if (status) whereClause.Status = status;
    if (userId) whereClause.userId = userId;
    if (vinylRecordId) whereClause.vinylRecordId = vinylRecordId;

    const reservations = await Reservation.findAll({ where: whereClause });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single reservation
exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a reservation
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      await reservation.update(req.body);
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
  try {
    const numDeleted = await Reservation.destroy({
      where: { id: req.params.id },
    });
    if (numDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reservations for a user
exports.getReservationsForUser = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: { userId: req.params.userId },
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reservations for a vinyl record
exports.getReservationsByVinylRecord = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: { vinylRecordId: req.params.recordId },
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

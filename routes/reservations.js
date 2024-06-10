const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.post("/", reservationController.createReservation);
router.get("/availability/:recordId", reservationController.checkAvailability);
router.put("/:id/confirm", reservationController.confirmReservation);
router.put("/:id/reject", reservationController.rejectReservation);
router.get("/", reservationController.getAllReservations);
router.get("/:id", reservationController.getReservation);
router.put("/:id", reservationController.updateReservation);
router.delete("/:id", reservationController.deleteReservation);
router.get("/user/:userId", reservationController.getReservationsForUser);
router.get(
  "/vinyl-record/:vinylRecordId",
  reservationController.getReservationsByVinylRecord
);

module.exports = router;

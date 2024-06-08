const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.post("/", reservationController.createReservation);
router.get("/availability/:recordId", reservationController.checkAvailability);
router.put("/:id/confirm", reservationController.confirmReservation);
router.put("/:id/reject", reservationController.rejectReservation);

module.exports = router;

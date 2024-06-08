const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.post("/", reservationController.createReservation);
router.get("/availability/:recordId", reservationController.checkAvailability);
module.exports = router;

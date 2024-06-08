const express = require("express");
const router = express.Router();
const vinylRecordController = require("../controllers/vinylRecordController");

router.get("/", vinylRecordController.getAllRecords);
router.get("/:id", vinylRecordController.getRecordById);
router.post("/", vinylRecordController.createRecord);
router.put("/:id", vinylRecordController.updateRecord);
router.delete("/:id", vinylRecordController.deleteRecord);
router.get("/export/excel", vinylRecordController.exportToExcel);

module.exports = router;

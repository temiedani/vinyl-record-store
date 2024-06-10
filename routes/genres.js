const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/", genreController.getAllGenres);
router.get("/:id", genreController.getGenreById);
router.post("/", genreController.createGenre);
router.put("/:id", genreController.updateGenre);
router.delete("/:id", genreController.deleteGenre);
router.get("/export/excel", genreController.exportToExcel);

module.exports = router;

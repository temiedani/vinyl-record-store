const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artistController");

router.get("/artists", artistController.getArtists);
router.get("/:artistId", artistController.getArtist);
router.post("/", artistController.createArtist);
router.put("/:id", userController.updateArtist);
router.delete("/:id", userController.deleteArtist);

module.exports = router;

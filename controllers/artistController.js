const Artist = require("../models/artist");

// Get artist
exports.getAllArtists = async (req, res) => {
    try {
      const artists = await Artist.findAll();
      res.json(artists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 // Get single artist 
  exports.getArtistById = async (req, res) => {
    try {
      const artist = await Artist.findByPk(req.params.id);
      if (artist) {
        res.json(artist);
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


// Create a artist
exports.createArtist = async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a reservation
exports.createArtist = async (req, res) => {
    try {
      const artist = await Artist.create(req.body);
      res.status(201).json(artist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.updateArtist = async (req, res) => {
    try {
      const artist = await Artist.findByPk(req.params.id);
      if (artist) {
        await artist.update(req.body);
        res.json(artist);
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteArtist = async (req, res) => {
    try {
      const artist = await Artist.findByPk(req.params.id);
      if (artist) {
        await artist.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
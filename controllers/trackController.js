const Track = require("../models/track");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const jsonToExcel = (tracks, filePath) => {
  const worksheet = XLSX.utils.json_to_sheet(tracks);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Tracks");
  XLSX.writeFile(workbook, filePath);
};

exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.findAll();
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrackById = async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);
    if (track) {
      res.json(track);
    } else {
      res.status(404).json({ error: "Track not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTrack = async (req, res) => {
  try {
    const track = await Track.create(req.body);
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTrack = async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);
    if (track) {
      await track.update(req.body);
      res.json(track);
    } else {
      res.status(404).json({ error: "track not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTrack = async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);
    if (track) {
      await track.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "track not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportToExcel = async (req, res) => {
  try {
    const track = await Track.findAll();
    const exportsDir = path.join(__dirname, "../exports");
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    const filePath = path.join(exportsDir, "Tracks.xlsx");
    jsonToExcel(tracks, filePath);
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

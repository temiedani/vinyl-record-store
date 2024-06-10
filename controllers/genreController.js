const Genre = require("../models/genre");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const jsonToExcel = (genres, filePath) => {
  const worksheet = XLSX.utils.json_to_sheet(genres);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Genres");
  XLSX.writeFile(workbook, filePath);
};

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.update(req.body);
      res.json(genre);
    } else {
      res.status(404).json({ error: "genre not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "genre not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportToExcel = async (req, res) => {
  try {
    const genre = await Genre.findAll();
    const exportsDir = path.join(__dirname, "../exports");
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    const filePath = path.join(exportsDir, "Genres.xlsx");
    jsonToExcel(genres, filePath);
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

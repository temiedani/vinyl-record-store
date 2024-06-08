const VinylRecord = require("../models/vinylRecord");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const jsonToExcel = (records, filePath) => {
  const worksheet = XLSX.utils.json_to_sheet(records);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "VinylRecords");
  XLSX.writeFile(workbook, filePath);
};

exports.getAllRecords = async (req, res) => {
  try {
    const records = await VinylRecord.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecordById = async (req, res) => {
  try {
    const record = await VinylRecord.findByPk(req.params.id);
    if (record) {
      res.json(record);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRecord = async (req, res) => {
  try {
    const newRecord = await VinylRecord.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const record = await VinylRecord.findByPk(req.params.id);
    if (record) {
      await record.update(req.body);
      res.json(record);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const record = await VinylRecord.findByPk(req.params.id);
    if (record) {
      await record.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportToExcel = async (req, res) => {
  try {
    const records = await VinylRecord.findAll();
    const exportsDir = path.join(__dirname, "../exports");
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    const filePath = path.join(exportsDir, "vinylRecords.xlsx");
    jsonToExcel(records, filePath);
    res.download(filePath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

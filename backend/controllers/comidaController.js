const Comida = require("../models/comida");
exports.getAll = (req, res) => {
  Comida.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};
exports.getById = (req, res) => {
  Comida.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json(err);
    if (!row) return res.status(404).json({ error: "No encontrado" });
    res.json(row);
  });
};
exports.create = (req, res) => {
  Comida.create(req.body, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(data);
  });
};
exports.update = (req, res) => {
  Comida.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: "Comida actualizada" });
  });
};
exports.delete = (req, res) => {
  Comida.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: "Comida eliminada" });
  });
};

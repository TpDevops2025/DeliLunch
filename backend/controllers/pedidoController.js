const Pedido = require("../models/pedido");
exports.create = (req, res) => {
  const { cliente, fecha_entrega, tipo_envio } = req.body;
  if (!cliente || !fecha_entrega || !tipo_envio) {
    return res.status(400).json({ error: "Todos los campos son obligatorios (cliente, fecha_entrega, tipo_envio)." });
  }
  console.log("Datos recibidos para crear pedido:", req.body);
  Pedido.create(req.body, (err, data) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json(data);
  });
};
exports.getAll = (req, res) => {
  Pedido.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};
exports.update = (req, res) => {
  const id = req.params.id;
  Pedido.update(id, req.body, (err, data) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(data);
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Pedido.delete(id, (err, data) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(data);
  });
};
exports.getIngresosMensuales = (req, res) => {
Pedido.getIngresosMensuales((err, data) => {
if (err) return res.status(500).json({ error: err.message });
res.json(data);
});
};


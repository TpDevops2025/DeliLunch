const db = require('../db/db');
const Comida = {
  getAll: (callback) => {
    db.all("SELECT * FROM comidas", callback);
  },
  getById: (id, callback) => {
    db.get("SELECT * FROM comidas WHERE id = ?", [id], callback);
  },
  create: (comida, callback) => {
    const { nombre, descripcion, stock } = comida;
    db.run(
      "INSERT INTO comidas (nombre, descripcion, stock) VALUES (?, ?, ?)",
      [nombre, descripcion, stock],
      function (err) {
        callback(err, { id: this.lastID, ...comida });
      }
    );
  },
  update: (id, comida, callback) => {
    const { nombre, descripcion, stock } = comida;
    db.run(
      "UPDATE comidas SET nombre = ?, descripcion = ?, stock = ? WHERE id = ?",
      [nombre, descripcion, stock, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.run("DELETE FROM comidas WHERE id = ?", [id], callback);
  },
  updateStock: (id, cantidad, callback) => {
    db.run(
      "UPDATE comidas SET stock = stock - ? WHERE id = ? AND stock >= ?",
      [cantidad, id, cantidad],
      callback
    );
  },
};
module.exports = Comida;

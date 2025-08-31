const db = require('../db/db'); 
const Pedido = {
  create: (pedido, callback) => {
    const query = `
      INSERT INTO pedidos (cliente, fecha_entrega, tipo_envio, estado, precio)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      pedido.cliente,
      pedido.fecha_entrega,
      pedido.tipo_envio,
      pedido.estado || 'Pendiente' ,
      pedido.precio
    ];
    db.run(query, values, function (err) {
      if (err) {
        console.error("❌ ERROR AL INSERTAR PEDIDO:", err);
        return callback(err);
      }
      callback(null, { id: this.lastID, ...pedido });
    });
  },
  getAll: (callback) => {
    db.all("SELECT * FROM pedidos", [], (err, rows) => {
      if (err) return callback(err);
      callback(null, rows);
    });
  },
  update: (id, pedido, callback) => {
    const query = `
      UPDATE pedidos
      SET cliente = ?, fecha_entrega = ?, tipo_envio = ?, estado = ?, precio = ?
      WHERE id = ?
    `;
    const values = [
      pedido.cliente,
      pedido.fecha_entrega,
      pedido.tipo_envio,
      pedido.estado,
      pedido.precio,
      id
    ];
    db.run(query, values, function (err) {
      if (err) return callback(err);
      callback(null, { id, ...pedido });
    });
  },
  delete: (id, callback) => {
    db.run("DELETE FROM pedidos WHERE id = ?", [id], function (err) {
      if (err) return callback(err);
      callback(null, { deletedId: id });
    });
  },
  getIngresosMensuales: (callback) => {
    const query = `
      SELECT strftime('%Y-%m', fecha_entrega) AS mes, SUM(precio) AS total_ingresos
      FROM pedidos
      GROUP BY mes
      ORDER BY mes ASC
    `;
    db.all(query, [], (err, rows) => {
      if (err) return callback(err);
      callback(null, rows);
    });
  }
};
module.exports = Pedido;

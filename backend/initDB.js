const db = require('./db/db.js');  
db.serialize(() => {
  db.run("DROP TABLE IF EXISTS pedidos");
  db.run(`
    CREATE TABLE pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente TEXT NOT NULL,
      fecha_entrega TEXT NOT NULL,
      tipo_envio TEXT CHECK(tipo_envio IN ('Retira', 'Entrega')) NOT NULL,
      estado TEXT DEFAULT 'Pendiente'
    )
  `, (err) => {
    if (err) {
      console.error("Error al crear la tabla pedidos:", err.message);
    } else {
      console.log("✅ Tabla 'pedidos' creada correctamente.");
    }
  });
});

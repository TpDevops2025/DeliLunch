const db = require('./db');

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS comidas");
  db.run("DROP TABLE IF EXISTS pedidos");
  db.run("DROP TABLE IF EXISTS consumos");
  db.run(`
    CREATE TABLE comidas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      descripcion TEXT,
      stock INTEGER NOT NULL
    )
  `);
  db.run(`
    CREATE TABLE pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente TEXT NOT NULL,
      fecha_entrega TEXT NOT NULL,
      tipo_envio TEXT CHECK(tipo_envio IN ('Retira', 'Entrega')) NOT NULL,
      estado TEXT DEFAULT 'Pendiente',
      precio REAL NOT NULL
    )
  `);
  db.run(`
    CREATE TABLE consumos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      comida_id INTEGER NOT NULL,
      cantidad INTEGER NOT NULL,
      fecha TEXT NOT NULL,
      FOREIGN KEY (comida_id) REFERENCES comidas(id)
    )
  `);
  const comidas = [
    ["Empanadas", "Empanadas de carne", 20],
    ["Tarta de Verdura", "Tarta casera", 15],
    ["Pizza", "Mozzarella grande", 10]
  ];
  const stmt = db.prepare("INSERT INTO comidas (nombre, descripcion, stock) VALUES (?, ?, ?)");
  comidas.forEach(c => stmt.run(c[0], c[1], c[2]));
  stmt.finalize();
  const pedidos = [
    ["Juan Pérez", "2025-05-20", "Retira", "Pendiente",6000],
    ["Ana Gómez", "2025-05-22", "Entrega", "Terminado",4000]
  ];
  const stmtPedidos = db.prepare("INSERT INTO pedidos (cliente, fecha_entrega, tipo_envio, estado,precio) VALUES (?, ?, ?, ?, ?)");
  pedidos.forEach(p => stmtPedidos.run(p[0], p[1], p[2], p[3],p[4]));
  stmtPedidos.finalize();
});
console.log("Base de datos inicializada con comidas, pedidos y consumos (según nuevo esquema).");

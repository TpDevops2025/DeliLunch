const request = require("supertest");
const app = require("../server");  
describe("Test de API de Comidas", () => {
  it("GET /api/comidas debe devolver todas las comidas", async () => {
    const res = await request(app).get("/api/comidas");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);  
  });
  it("POST /api/comidas debe crear una nueva comida", async () => {
    const nuevaComida = {
      nombre: "Milanesa",
      descripcion: "Milanesa de pollo",
      stock: 30
    };
    const res = await request(app)
      .post("/api/comidas")
      .send(nuevaComida);
    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe(nuevaComida.nombre);
    expect(res.body.descripcion).toBe(nuevaComida.descripcion);
    expect(res.body.stock).toBe(nuevaComida.stock);
  });
  it("GET /api/comidas/:id debe devolver una comida específica", async () => {
    const res = await request(app).get("/api/comidas/1");
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });
  it("PUT /api/comidas/:id debe actualizar una comida", async () => {
    const comidaActualizada = {
      nombre: "Milanesa de ternera",
      descripcion: "Milanesa con queso",
      stock: 25
    };
    const res = await request(app)
      .put("/api/comidas/1")
      .send(comidaActualizada);
    expect(res.status).toBe(200);
    expect(res.body.mensaje).toBe("Comida actualizada");
  });
  it("DELETE /api/comidas/:id debe eliminar una comida", async () => {
    const res = await request(app).delete("/api/comidas/2");
    expect(res.status).toBe(200);
    expect(res.body.mensaje).toBe("Comida eliminada");
  });
});

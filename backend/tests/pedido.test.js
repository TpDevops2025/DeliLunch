const request = require("supertest");
const app = require("../server"); 
describe("Test de API de Pedidos", () => {
  let pedidoIdCreado;
  it("POST /api/pedidos debe crear un nuevo pedido", async () => {
    const nuevoPedido = {
      cliente: "Juan Perez",
      fecha_entrega: "2025-05-30",
      tipo_envio: "Retira",
      estado: "Pendiente",
      precio: 2500
    };
    const res = await request(app).post("/api/pedidos").send(nuevoPedido);
    expect(res.status).toBe(201);
    expect(res.body.cliente).toBe(nuevoPedido.cliente);
    pedidoIdCreado = res.body.id;
  });
  it("GET /api/pedidos debe devolver todos los pedidos", async () => {
    const res = await request(app).get("/api/pedidos");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it("GET /api/pedidos/ingresos-mensuales debe devolver reporte de ingresos", async () => {
    const res = await request(app).get("/api/pedidos/ingresos-mensuales");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("mes");
    expect(res.body[0]).toHaveProperty("total_ingresos");
  });
  it("DELETE /api/pedidos/:id debe eliminar un pedido", async () => {
    const res = await request(app).delete(`/api/pedidos/${pedidoIdCreado}`);
    expect(res.status).toBe(200);
    expect(Number(res.body.deletedId)).toBe(pedidoIdCreado); 
  });
  it("PUT /api/pedidos/:id debe actualizar un pedido", async () => {
    const actualizado = {
      cliente: "Maria Lopez",
      fecha_entrega: "2025-06-01",
      tipo_envio: "Retiro",
      estado: "Entregado",
      precio: 3000
    };
    const res = await request(app).put(`/api/pedidos/${pedidoIdCreado}`).send(actualizado);
    expect(res.status).toBe(200);
    expect(Number(res.body.id)).toBe(pedidoIdCreado); 
  });
});

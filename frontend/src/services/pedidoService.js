import axios from 'axios';
const API_URL = "http://localhost:4000/api/pedidos";
export async function obtenerPedidos() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener pedidos");
  return await response.json();
}
export async function crearPedido(pedido) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido),
  });
  if (!response.ok) throw new Error("Error al crear pedido");
  return await response.json();
}
export async function actualizarPedido(id, pedido) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido),
  });
  if (!response.ok) throw new Error("Error al actualizar pedido");
  return await response.json();
}
export async function eliminarPedido(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar pedido");
  return await response.json();
}
export const obtenerIngresosMensuales = async () => {
  try {
    const response = await axios.get(`${API_URL}/ingresos-mensuales`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener ingresos mensuales", error);
    throw error;
  }
};

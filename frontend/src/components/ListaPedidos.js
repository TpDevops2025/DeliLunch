import React, { useEffect, useState } from 'react';
import {
  obtenerPedidos,
  actualizarPedido,
  eliminarPedido,
} from '../services/pedidoService';
const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const cargarPedidos = async () => {
    try {
      const datos = await obtenerPedidos();
      setPedidos(datos);
    } catch (error) {
      console.error("Error al cargar pedidos:", error.message);
    }
  };
  const marcarComoTerminado = async (id) => {
    const pedido = pedidos.find(p => p.id === id);
    if (!pedido) return;
    const actualizado = { ...pedido, estado: 'Terminado' };
    try {
      await actualizarPedido(id, actualizado);
      cargarPedidos(); 
    } catch (error) {
      console.error("Error al actualizar pedido:", error.message);
    }
  };
  const borrarPedido = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este pedido?")) return;
    try {
      await eliminarPedido(id);
      cargarPedidos(); 
    } catch (error) {
      console.error("Error al eliminar pedido:", error.message);
    }
  };
  useEffect(() => {
    cargarPedidos();
  }, []);
  return (
    <div>
      <h2>Lista de Pedidos</h2>
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha de Entrega</th>
              <th>Tipo de Envío</th>
              <th>Estado</th>
              <th>Precio</th> 
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.cliente}</td>
                <td>{pedido.fecha_entrega}</td>
                <td>{pedido.tipo_envio}</td>
                <td>{pedido.estado}</td>
                <td>${Number(pedido.precio).toFixed(2)}</td>
                <td>
                  {pedido.estado !== 'Terminado' && (
                    <button onClick={() => marcarComoTerminado(pedido.id)}>
                      Marcar como Terminado
                    </button>
                  )}
                  <button onClick={() => borrarPedido(pedido.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ListaPedidos;

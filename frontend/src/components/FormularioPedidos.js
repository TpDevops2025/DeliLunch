import React, { useState } from 'react';
import { crearPedido } from '../services/pedidoService';
const FormularioPedidos = ({ onPedidoCreado }) => {
  const [cliente, setCliente] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [tipoEnvio, setTipoEnvio] = useState('Retira');
  const [estado, setEstado] = useState('Pendiente');
  const [precio, setPrecio] = useState(''); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoPedido = {
      cliente,
      fecha_entrega: fechaEntrega,
      tipo_envio: tipoEnvio,
      estado,
      precio: parseFloat(precio), 
    };
    try {
      await crearPedido(nuevoPedido);
      onPedidoCreado(); 
      setCliente('');
      setFechaEntrega('');
      setTipoEnvio('Retira');
      setEstado('Pendiente');
      setPrecio(''); 
    } catch (error) {
      console.error("Error al crear el pedido:", error.message);
      alert("No se pudo crear el pedido.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Pedido</h2>
      <label>
        Cliente:
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha de Entrega:
        <input
          type="date"
          value={fechaEntrega}
          onChange={(e) => setFechaEntrega(e.target.value)}
          required
        />
      </label>
      <label>
        Tipo de Envío:
        <select value={tipoEnvio} onChange={(e) => setTipoEnvio(e.target.value)}>
          <option value="Retira">Retira</option>
          <option value="Entrega">Entrega</option>
        </select>
      </label>
      <label>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="Terminado">Terminado</option>
        </select>
      </label>
      <label>
        Precio:
        <input
          type="number"
          step="0.01"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </label>
      <button type="submit">Guardar Pedido</button>
    </form>
  );
};

export default FormularioPedidos;

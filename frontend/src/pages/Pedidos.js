import React, { useState } from 'react';
import FormularioPedidos from '../components/FormularioPedidos';
import ListaPedidos from '../components/ListaPedidos';
const Pedidos = () => {
  const [actualizarLista, setActualizarLista] = useState(false);

  const handlePedidoCreado = () => {
    setActualizarLista(!actualizarLista);
  };
  return (
    <div>
      <h1>Gestión de Pedidos</h1>
      <FormularioPedidos onPedidoCreado={handlePedidoCreado} />
      <ListaPedidos key={actualizarLista} />
    </div>
  );
};
export default Pedidos;

import React, { useState } from 'react';
import ListaDeComidas from '../components/ListaDeComidas';
import FormularioComida from '../components/FormularioComida';
const Home = () => {
  const [recargar, setRecargar] = useState(false);
  const actualizarListado = () => {
    setRecargar(!recargar);
  };
  return (
    <div>
      <h1 style={{ color: "#1f2937" }}>Manejo de Stock</h1>
      <FormularioComida onAgregar={actualizarListado} />
      <ListaDeComidas recargar={recargar} />
    </div>
  );
};
export default Home;

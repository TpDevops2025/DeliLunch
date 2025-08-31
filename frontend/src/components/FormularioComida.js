import React, { useState } from 'react';
function FormularioComida({ onAgregar }) {
  const [nombre, setNombre] = useState('');
  const [stock, setStock] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaComida = { nombre, stock: parseInt(stock) };
    try {
      const respuesta = await fetch('http://localhost:4000/api/comidas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaComida)
      });
      if (respuesta.ok) {
        setNombre('');
        setStock('');
        onAgregar(); 
      } else {
        console.error('Error al agregar comida');
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar nuevo producto</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default FormularioComida;

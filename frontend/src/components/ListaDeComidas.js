import React, { useEffect, useState } from 'react';
import { eliminarComida, actualizarComida } from '../services/comidaService';
import '../styles/App.css'; 
function ListaDeComidas({ recargar }) {
  const [comidas, setComidas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', stock: 0 });
  useEffect(() => {
    fetch('http://localhost:4000/api/comidas')
      .then(res => res.json())
      .then(data => setComidas(data));
  }, [recargar]);
  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro/a que deseas eliminar el producto?")) {
      try {
        await eliminarComida(id);
        setComidas((prev) => prev.filter((comida) => comida.id !== id));
      } catch (error) {
        alert("No se pudo eliminar el producto.");
      }
    }
  };
  const handleEditar = (comida) => {
    setEditandoId(comida.id);
    setFormData({
      nombre: comida.nombre,
      descripcion: comida.descripcion || '',
      stock: comida.stock
    });
  };

  const handleGuardar = async (id) => {
    try {
      await actualizarComida(id, formData);
      setEditandoId(null);
      setComidas((prev) =>
        prev.map((comida) =>
          comida.id === id ? { ...comida, ...formData } : comida
        )
      );
    } catch (error) {
      alert("No se pudo actualizar el producto.");
    }
  };
  const handleCancelar = () => {
    setEditandoId(null);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h2>Listado de productos disponibles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comidas.map((comida) => (
            <tr
              key={comida.id}
              className={comida.stock < 5 ? "stock-bajo" : ""}
            >
              <td>{comida.id}</td>
              <td>
                {editandoId === comida.id ? (
                  <input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                ) : (
                  comida.nombre
                )}
              </td>
              <td>
                {editandoId === comida.id ? (
                  <input
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                  />
                ) : (
                  comida.descripcion || '-'
                )}
              </td>
              <td>
                {editandoId === comida.id ? (
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                  />
                ) : (
                  comida.stock
                )}
              </td>
              <td>
                {editandoId === comida.id ? (
                  <>
                    <button onClick={() => handleGuardar(comida.id)}>Guardar</button>
                    <button onClick={handleCancelar}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditar(comida)}>Editar</button>
                    <button onClick={() => handleEliminar(comida.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListaDeComidas;

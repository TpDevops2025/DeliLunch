const API_URL = "http://localhost:4000/api/comidas";
export const eliminarComida = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar comida");
    }

    return await response.json();
  } catch (error) {
    console.error("Error eliminando comida:", error);
    throw error;
  }
};
export const actualizarComida = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar comida");
    }

    return await response.json();
  } catch (error) {
    console.error("Error actualizando comida:", error);
    throw error;
  }
};


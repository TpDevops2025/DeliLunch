import React, { useEffect, useState } from 'react';
import { obtenerIngresosMensuales } from '../services/pedidoService';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
const ReporteIngresos = () => {
const [datos, setDatos] = useState([]);
useEffect(() => {
cargarDatos();
}, []);
const cargarDatos = async () => {
try {
const data = await obtenerIngresosMensuales();
setDatos(data);
} catch (error) {
console.error("Error cargando datos", error);
}
};

const dataGrafico = {
labels: datos.map(item => item.mes),
datasets: [
{
label: 'Ingresos por mes ($)',
data: datos.map(item => item.total_ingresos),
backgroundColor: 'rgba(59, 130, 246, 0.7)', 
borderColor: 'rgba(37, 99, 235, 1)',
borderWidth: 1,
borderRadius: 6,
barThickness: 40,
},
],
};

const options = {
responsive: true,
plugins: {
legend: {
display: true,
position: 'top',
labels: {
color: '#ffffff',
font: {
size: 14,
weight: 'bold',
},
},
},
title: {
display: true,
text: 'Ingresos mensuales de Deli Lunch',
color: '#ffffff',
font: {
size: 20,
},
},
},
scales: {
x: {
title: {
display: true,
text: 'Mes',
color: '#ffffff',
font: {
size: 16,
weight: 'bold',
},
},
ticks: {
color: '#ffffff',
},
grid: {
color: 'rgba(255,255,255,0.1)',
},
},
y: {
title: {
display: true,
text: 'Ingresos en pesos ($)',
color: '#ffffff',
font: {
size: 16,
weight: 'bold',
},
},
ticks: {
color: '#ffffff',
},
grid: {
color: 'rgba(255,255,255,0.1)',
},
},
},
};

return (
<div
style={{
backgroundColor: '#1e293b',
padding: '2rem',
borderRadius: '16px',
boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
maxWidth: '900px',
margin: '40px auto',
}}
>
<h2
style={{
color: '#ffffff',
textAlign: 'center',
marginBottom: '1.5rem',
fontSize: '1.8rem',
}}
>
Ingresos Mensuales
</h2>
<Bar data={dataGrafico} options={options} />
</div>
);
};

export default ReporteIngresos;
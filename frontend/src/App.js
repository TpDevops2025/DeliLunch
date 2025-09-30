import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pedidos from './pages/Pedidos';
import Navbar from './components/Navbar';
import ReporteIngresos from './pages/ReporteIngresos';
import './styles/App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/reporte-ingresos" element={<ReporteIngresos />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;


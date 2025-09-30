import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
return (
<nav className="navbar">
<div className="logo">Deli Lunch</div>
<ul className="nav-links">
<li>
<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
Stock
</NavLink>
</li>
<li>
<NavLink to="/pedidos" className={({ isActive }) => isActive ? 'active' : ''}>
Pedidos
</NavLink>
</li>
<li>
<NavLink to="/reporte-ingresos" className={({ isActive }) => isActive ? 'active' : ''}>
Ingresos Mensuales
</NavLink>
</li>
</ul>
</nav>
);
};
export default Navbar;
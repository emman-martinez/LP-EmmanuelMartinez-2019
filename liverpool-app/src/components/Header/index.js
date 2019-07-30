import React from 'react';
import './header.css';
import bolsa from './img/bag.png';
import liverpool from './img/liverpool_logo.png';

const Header = () => (
    <div className="container rousie">
        <a href="#" className="logo"><img src={liverpool} alt="liverpool"/></a>
        <nav className="navigation">
            <form className="buscador" action="">
                <input type="text" placeholder="Búsqueda"/>
            </form>
            <ul>
                <li><a href="#">Mis Pedidos</a></li>
                <li>|</li>
                <li><a href="#">Iniciar Sesión</a></li>
            </ul>
        </nav>
        <a href="#" className="logo"><img src={bolsa} alt="bolsa"/></a>
    </div>
)

export default Header;
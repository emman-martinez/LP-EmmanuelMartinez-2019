import React from 'react';
import './header.css';
import bolsa from './img/bag.png';
import liverpool from './img/liverpool-logo.svg';

const Header = () => {
    return(
    <div className="container rousie">
        <div className="row">
            <div className="col-md-2">
                <a href="https://www.liverpool.com.mx/tienda/home.jsp" className=""><img src={liverpool} width="190" height="53" alt="liverpool"/></a>
            </div>
            <div className="col-md-6">
                <form action="" className="navbar-form navbar-center">
                    <input className="input" type="text" placeholder="Buscar"/>
                </form>
            </div>
            <div className="col-md-1"><a href="https://www.liverpool.com.mx/tienda/home.jsp">Mis Pedidos </a></div>
            <div className="col-md-1"><a href="https://www.liverpool.com.mx/tienda/home.jsp">Iniciar Sesión</a></div>
            <div className="col-md-1"><a href="https://www.liverpool.com.mx/tienda/home.jsp"><img src={bolsa} alt="bolsa"/></a></div>
        </div>
    </div>
    );
}
    
export default Header;
import React from 'react';
import './header.css';
import bolsa from './img/bag.png';
import liverpool from './img/liverpool_logo.png';

const Header = () => {
    return(
    <div className="container rousie">
        <div className="row">
            <div className="col-md-2">
                <a href="#" className=""><img src={liverpool} width="190" height="53" alt="liverpool"/></a>
            </div>
            <div className="col-md-4">
                <form action="" class="navbar-form navbar-center">
                    <input type="text" class="" placeholder="Buscar"/>
                </form>
            </div>
            <div className="col-md-1"><a href="#">Mis Pedidos </a></div>
            <div className="col-md-1">|</div>
            <div className="col-md-1"><a href="#"> Iniciar Sesión</a></div>
            <div className="col-md-2"><a href="#" className=""><img src={bolsa} alt="bolsa"/></a></div>
        </div>
    </div>
    );
}
    
export default Header;
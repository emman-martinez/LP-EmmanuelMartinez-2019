import React from 'react';
import './footer.css';
import lp from './img/liverpool_logo.svg';

const Footer = () => (
    <footer className="gray">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2><a href="https://www.liverpool.com.mx/tienda/home.jsp"><img src={lp} alt=""/></a></h2>
                </div>
                <div className="col-md-2">
                    <h4>Soporte al Cliente</h4>
                    <ul>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Facturación</a></li>
                        <br/>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Ayuda</a></li>
                        <br/>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Mis pedidos</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Servicios Liverpool</h4>
                    <ul>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Crédito</a></li>
                        <br/>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Tiempo Aire</a></li>
                        <br/>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Concursos y promociones</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h4>Acerca de Liverpool</h4>
                    <ul>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Bolsa de Trabajo</a></li>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">¿Quiénes somos?</a></li>
                        <li><a href="https://www.liverpool.com.mx/tienda/home.jsp">Relación con inversionistas</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="https://www.liverpool.com.mx/tienda/home.jsp" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.liverpool.com.mx/tienda/home.jsp" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.liverpool.com.mx/tienda/home.jsp" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="margen btn btn-default">Suscribete a nuestro Newsletter</button>
                </div>
            </div>
        </div>
    </footer>

    )

export default Footer;
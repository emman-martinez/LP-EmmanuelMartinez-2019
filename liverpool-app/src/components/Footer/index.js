import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="gray">
        <div className="container gray">
            <div className="row">
                <div className="col-sm-3">
                    <h2 className="logo"><a href="#"> LOGO </a></h2>
                </div>
                <div className="col-sm-2">
                    <h5>Soporte al Cliente</h5>
                    <ul>
                        <li><a href="#">Facturación</a></li>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">Mis pedidos</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Servicios Liverpool</h5>
                    <ul>
                        <li><a href="#">Crédito</a></li>
                        <li><a href="#">Tiempo Aire</a></li>
                        <li><a href="#">Concursos y promociones</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Acerca de Liverpool</h5>
                    <ul>
                        <li><a href="#">Bolsa de Trabajo</a></li>
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="#">Relación con inversionistas</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="#" className="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i class="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Suscribete a nuestro Newsletter</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Liverpool / Todos los derechos reservados D.R </p>
        </div>
    </footer>
)

export default Footer;
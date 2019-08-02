import React, { Component } from 'react';
import numerosParaFecha from './../../datos/datos.json';
import './added.css';

class Added extends Component {

    state = {
        cantProducto: '',
        estado: false,
        numFecha: [],
    }

    componentWillMount() {
        this.armadoFechas();
    }

    /* Lectura de JSON */
    armadoFechas = () => {
        this.setState({
            estado: true,
            numFecha: numerosParaFecha
        })
    }

    // Refs para los campos del formulario
    cantidadProducto = React.createRef();

    asignarCarrito = (e) => {
        // ***** Prevenir el default
        e.preventDefault();
        console.log("Formulario Carrito");
        // ***** Crear el objeto con los datos
        const cantProducto = this.cantidadProducto.current.value;
        console.log(cantProducto);

        if (cantProducto > 2) {
            console.log('Producto agregado correctamente');
            this.setState({
                cantProducto,
            })
            //resultado = <div><h4>Producto Agregado Correctamente</h4></div>
        } else {
            console.log('La cantidad del producto tiene que ser mayor a 2');
            this.setState({
                cantProducto,
            })
            //resultado = <div><h4>La cantidad del producto tiene que ser mayor a 2</h4></div>
        }
        
    }

    render() { 
            // console.log('Armado de Fechas...');
        // let fecha = new Date();
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            // console.log(fecha);
            // console.log(day);
            // console.log(month);
            // console.log(year);
        let mesEsp = meses[month];
            //console.log(mesEsp);
        let numFecha = [...this.state.numFecha];
            //console.log(numFecha[0].id);

        // Armado de Días
        let numCero = numFecha[0].id + day;
        let numUno = numFecha[1].id + day;
        let numDos = numFecha[2].id + day;
        let numTres = numFecha[3].id + day;
        let numCuatro = numFecha[4].id + day;
        let numCinco = numFecha[5].id + day;
        // Armado de Fechas
        let diaUno = numCero + '-' + mesEsp + '-' + year; 
        let diaDos = numUno + '-' + mesEsp + '-' + year; 
        let diaTres = numDos + '-' + mesEsp + '-' + year; 
        let diaCuatro = numTres + '-' + mesEsp + '-' + year; 
        let diaCinco = numCuatro + '-' + mesEsp + '-' + year; 
        let diaSeis = numCinco + '-' + mesEsp + '-' + year; 

        const { cantProducto } = this.state;
        // console.log(cantProducto);

        let resultado;

        if(cantProducto > 2) {
            resultado = <div><h5>Producto Agregado Correctamente</h5></div>
        }
        else {
            resultado = <div><h5>La cantidad del producto tiene que ser mayor a 2</h5></div>
        }

        return ( 
            <div className="container">
                <form onSubmit={this.asignarCarrito}>
                    <div className="row">
                        <div className="col-md-1">
                            <select name="" id="">
                                <option value="">Fecha estimada de entrega:</option>
                                <option value="">{diaUno}</option>
                                <option value="">{diaDos}</option>
                                <option value="">{diaTres}</option>
                                <option value="">{diaCuatro}</option>
                                <option value="">{diaCinco}</option>
                                <option value="">{diaSeis}</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <label htmlFor="">Cantidad: </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <input ref={this.cantidadProducto} type="number"  min="1" max="10"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <input type="submit" className="botonCarrito" value="Agregar a Mi Bolsa"/>
                            {resultado}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <hr/>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="https://www.liverpool.com.mx/tienda/home.jsp"><h6><b><u>VER DISPONIBILIDAD EN TIENDA</u></b></h6></a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Added;

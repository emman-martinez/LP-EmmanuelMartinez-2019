import React, { Component } from 'react';
import './added.css';

class Added extends Component {
    render() { 
        return ( 
            <div className="container">
                
                    <div className="col-md-1">
                        <form>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <select name="" id="">
                                            <option value="">Fecha estimada de entrega: </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1">
                                        <label htmlFor="">Cantidad: </label>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1">
                                        <input ref="" name="numero" type="number" className="" min="1" max="10"/>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="botonCarrito">Agregar a Mi Bolsa</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                
                {/* <form>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label"><span className="formato">Cantidad:</span></label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref="" type="number" className="control" min="1" max="10"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="botonCarrito">Agregar a Mi Bolsa</button>
                        </div>
                    </div>
                </form> */}
            </div>
        );
    }
}

export default Added;

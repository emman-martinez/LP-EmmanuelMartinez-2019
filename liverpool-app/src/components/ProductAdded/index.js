import React, { Component } from 'react';


class Added extends Component {
    render() { 
        return ( 
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Cantidad:</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref="" type="number" className="form-control" min="1" max="10"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar a Mi Bolsa</button>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Added;

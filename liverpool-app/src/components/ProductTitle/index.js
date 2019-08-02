import React from 'react';
import './title.css';

const Title = ( { title, id } ) => (
    <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3 product-title">
                <h3>{title}</h3>
                <p>Código del Producto: {id}</p> 
            </div>
        </div>
    </div>
)

export default Title;
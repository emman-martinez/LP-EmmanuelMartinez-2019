import React from 'react';
import './title.css';

const Title = ( { title, id } ) => (
    <div className="product-title">
        <h3>{title}</h3>
        <p>Código del Producto: {id}</p> 
    </div>
)

export default Title;
import React from 'react';
import './price.css';

const Price = ( { productPrice, sortPrice } ) => (
    <div className="product-price">
        <h5>{productPrice}</h5>
        <h4>{sortPrice}</h4>
    </div>
)

export default Price;
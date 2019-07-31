import React from 'react';
import './price.css';

const Price = ( { productPrice, promoPrice } ) => (
    <div className="product-price">
        <div>Precio: {productPrice}</div>
        <div>Precio Promo: {promoPrice}</div>
    </div>
)

export default Price;
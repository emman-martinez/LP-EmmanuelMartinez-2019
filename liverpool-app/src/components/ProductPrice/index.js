import React from 'react';
import './price.css';

const Price = ( { productPrice, promoPrice } ) => (
    <div className="product-price">
        <div className="productPrice"><strike>${productPrice}</strike></div>
        <div className="promoPrice">${promoPrice}</div>
        <hr/>
    </div>
)

export default Price;
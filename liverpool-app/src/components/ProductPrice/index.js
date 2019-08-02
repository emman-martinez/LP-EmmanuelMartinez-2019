import React from 'react';
import './price.css';

const Price = ( { productPrice, promoPrice } ) => (
    <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
                <div className="col-md-3 product-title">
                <div className="productPrice"><strike>${productPrice}</strike></div>
                <div className="promoPrice">${promoPrice}</div>
                <hr/>
            </div>
        </div>
    </div>
)

export default Price;
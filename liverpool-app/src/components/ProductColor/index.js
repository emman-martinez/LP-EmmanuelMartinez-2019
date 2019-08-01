import React from 'react';
import './color.css';

const Color = ( {color} ) => (
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3 product-title">
                <div className="color">Color: {color}</div>
                <a className="a" href=""></a> 
                <hr/>
            </div>
        </div>
    </div>
)

export default Color;
import React from 'react';
import Title from './../ProductTitle';
import Rating from './../ProductRating';
import Price from './../ProductPrice';
import Color from './../ProductColor';
import Features from './../ProductFeatures';

const Description = (props) => (
    <div>
        <Title
            title={props.title}
            id={props.id}
        />
        <Rating/>
        <Price
            productPrice={props.productPrice}
            sortPrice={props.sortPrice}
        />
        
        <Features/>
    </div>
)

export default Description;
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
        <Rating
            rating={props.rating}
        />
        <Price
            productPrice={props.productPrice}
            promoPrice={props.promoPrice}
        />
        <Color
            color={props.color}
        />
        <Features
            dimensions={props.dimensions}
        />
    </div>
)

export default Description;
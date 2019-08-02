import React from 'react';
import './images.css';

const Images = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <img className="imgThumb img-thumbnail" data-color="uno" src={props.secondImage} alt=""/>
                <br/>
                <hr/>
                <img className="imgThumb img-thumbnail" data-color="dos" src={props.thirdImage} alt=""/>
                <br/>
                <hr/>
                <img className="imgThumb img-thumbnail" data-color="tres" src={props.fourthImage} alt=""/>
                <br/>
                <hr/>
                <img className="imgThumb img-thumbnail" data-color="cuatro" src={props.principalImage} alt=""/>
            </div>
            <div className="col-md-4">
                <img id="vistaPrevia" className="size zoom" src={props.principalImage} alt="ps4"/>
            </div>
        </div>
    </div>
)

export default Images;
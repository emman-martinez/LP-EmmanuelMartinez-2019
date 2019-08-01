import React, { Component } from 'react';
import Main from './../../templates/Main'; 
import Description from '../../components/ProductDescription';
import Images from '../../components/ProductImages';
import Added from '../../components/ProductAdded';
import axios from 'axios';

class ProductDetailPage extends Component {

    state = {
        product: {},
        record: [],
        images: [],
        cargando: false 
    }

    componentDidMount() {
        console.log("¡Listo...!");
        this.getProduct(); // ***** Llamada de función para consumo de API con axios
    }

    // **** Función para obtener producto
    getProduct = async () => {
        const url = 'https://www.liverpool.com.mx/tienda/pdp/consola-playstation-4-days-of-play-1-tb/1084706741?s=1084706741&d3106047a194921c01969dfdec083925=json';
        await axios.get(url)
            .then(respuesta => {
                // console.log(respuesta);
            const { data } = respuesta;
            this.setState({
                product: data.contents[0].mainContent[0].record,
                record: data.contents[0].mainContent[0].record.records[0],
                images: data.contents[0].mainContent[0].record.records[0]['sku.galleriaImage'],
                cargando: true
            }, () => {
                // 3 Segundos despúes cambia a false
                    setTimeout(() => {
                        this.setState({
                            cargando:false
                        })
                    },3000);
                })
            });
    }

    render() {

        const { product, record, images } = this.state;
        const { productDisplayName, productId, productPrice, promoPrice } = product; 
        const rating = record['productAvgRating'];
        const color = record['sku.color'];
        const dimensions = record['sku.dimensions'];
        const principalImage = record['largeImage'];
        const secondImage = images[0];
        const thirdImage = images[1];
        const fourthImage = images[2];
        // console.log(product);
        // console.log(record);
        // console.log(images);
        // console.log(secondImage);
        // console.log(thirdImage);
        // console.log(fourthImage);
        // console.log(principalImage);

        return (
            <Main>  
    
                <div className="row">
                    <div className="col-sm-4">
                        <Images
                                principalImage={principalImage}
                                secondImage={secondImage}
                                thirdImage={thirdImage}
                                fourthImage={fourthImage}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Description
                                title={productDisplayName}
                                id={productId}
                                rating={rating}
                                productPrice={productPrice}
                                promoPrice={promoPrice}
                                color={color}
                                dimensions={dimensions}
                        />  
                    </div>
                    <div className="col-sm-4">
                        <Added/>
                    </div>
                </div>
                
                   
                
                {/* <div className="col-md-1">
                    

                </div>
                <div className="col-md-1">
                    
                </div>
                <div className="col-md-1">
                    <Added/>
                </div> */}
            </Main>
        );
    }
}

export default ProductDetailPage;
import React, { Component } from 'react';
import Main from './../../templates/Main'; 
import Description from '../../components/ProductDescription';
import axios from 'axios';

class ProductDetailPage extends Component {

    state = {
        product: {},
        cargando: false 
    }

    componentDidMount() {
        console.log("¡Estoy Listo XD!");
        // ***** Realizar consulra con Axios a la API
        const url = `https://www.liverpool.com.mx/tienda/pdp/consola-playstation-4-days-of-play-1-tb/1084706741?s=1084706741&d3106047a194921c01969dfdec083925=json`;
        
        console.log(url);

        axios.get(url)
            .then(respuesta => {
            // console.log(respuesta);
            const { data } = respuesta;
                //console.log(data);
                //console.log(data.contents);
                //console.log(data.contents[0]);
                //console.log(data.contents[0].mainContent);
            console.log(data.contents[0].mainContent[0].record);
            this.setState({
                product: data.contents[0].mainContent[0].record,
                cargando: true
            }, () => {
                // 3 Segundos despúes cambia a false
                    setTimeout(() => {
                        this.setState({
                            cargando:false
                        })
                    });
                })
            });
    }

    render() {
        const { product, record } = this.state;
        console.log(product.records);
        //console.log(product.records['0']);
        //console.log(record['sku.color']);
        //console.log(Object.keys(product.records));
        return (
            <Main>
                <h1>ProductDetailPage</h1>
                <Description
                    title={product.productDisplayName}
                    id={product.productId}
                    productPrice={product.productPrice}
                    sortPrice={product.sortPrice}
                    //color={product.sku.color}
                />
            </Main>
        );
    }
}

export default ProductDetailPage;
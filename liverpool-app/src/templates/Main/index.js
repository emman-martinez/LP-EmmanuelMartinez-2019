import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const Main = ( { children } ) => (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
)

export default Main;
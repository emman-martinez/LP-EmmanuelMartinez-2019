import React from 'react';
import Header from './../../components/Header';
import SubHeader from './../../components/SubHeader';
import Footer from './../../components/Footer';

const Main = ( { children } ) => (
    <div>
        <Header/>
        <SubHeader/>
        <main>{children}</main>
        <Footer/>
    </div>
)

export default Main;
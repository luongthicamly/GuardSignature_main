import React from 'react';
import Banner from './Banner';
import ContractingProcess from './ContractingProcess';
import Footer from './Footer';
import GetStarted from './GetStarted';
import Header from './Header';
import Quick from './Quick';
import Reason from './Reason';
import Services from './Services';
import Signature from './Signature';

function Home(props) {
    return (
        <>
            <Header />
            <Banner />
            <ContractingProcess />
            <GetStarted />
            <Services />
            <Quick />
            <Signature/>
            <Reason/>
            <Footer/>
        </>
    );
}

export default Home;
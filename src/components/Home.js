import React from 'react';
import Banner from './Banner';
import ContractingProcess from './ContractingProcess';
import GetStarted from './GetStarted';
import Header from './Header';
import Quick from './Quick';
import Services from './Services';

function Home(props) {
    return (
        <>
            <Header />
            <Banner />
            <ContractingProcess />
            <GetStarted />
            <Services />
            <Quick />
        </>
    );
}

export default Home;
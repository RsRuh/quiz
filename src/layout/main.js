import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default main;
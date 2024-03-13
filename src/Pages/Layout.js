import React from 'react';
import { Outlet } from 'react-router-dom';


import Foot from '../Composants/Footer/Footer';
import NavBar from '../Composants/Header/Header';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Foot />
        </div>
    );
};

export default Layout;
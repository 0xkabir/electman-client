import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/Header/Header';
import SiteFooter from '../../pages/shared/SiteFooter/SiteFooter';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <SiteFooter/>
        </div>
    );
};

export default Main;
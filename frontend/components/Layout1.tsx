import React from 'react';
import HeaderUpdated from './HeaderUpdated/HeaderUpdated';
import HeaderUpdated1 from './common/HeaderUpdated1/HeaderUpdated1';
import Footer from './Footer/Footer';
import { isAuth } from '../actions/auth';
interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<React.Fragment>

    {isAuth() && <HeaderUpdated1 isAuth = {true} role = {isAuth().role} />}
    {!isAuth() && <HeaderUpdated1 isAuth = {false} />}
{children}
<Footer />
</React.Fragment>
);
};

export default Layout;
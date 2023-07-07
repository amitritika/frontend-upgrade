import React from 'react';
import Header from './Header/Header';
import { isAuth } from '../actions/auth';
interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<React.Fragment>

    {isAuth() && <Header isAuth = {true} role = {isAuth().role} />}
    {!isAuth() && <Header isAuth = {false} />}
{children}
</React.Fragment>
);
};

export default Layout;
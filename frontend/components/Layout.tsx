import React from 'react';
import HeaderUpdated from './HeaderUpdated/HeaderUpdated';
import { isAuth } from '../actions/auth';
interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<React.Fragment>

    {isAuth() && <HeaderUpdated isAuth = {true} role = {isAuth().role} />}
    {!isAuth() && <HeaderUpdated isAuth = {false} />}
{children}
</React.Fragment>
);
};

export default Layout;
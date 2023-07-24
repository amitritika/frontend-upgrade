import React from 'react';
import HeaderUpdated from './HeaderUpdated/HeaderUpdated';
import HeaderUpdated1 from './common/HeaderUpdated1/HeaderUpdated1';
import FooterUpdated from './common/FooterUpdated/FooterUpdated';
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
<FooterUpdated />
</React.Fragment>
);
};

export default Layout;
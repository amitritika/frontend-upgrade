import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuth } from '../../actions/auth';

interface PrivateProps {
children: React.ReactNode;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
const router = useRouter();

useEffect(() => {
if (!isAuth()) {
router.push("/signin");
}
}, []);

return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
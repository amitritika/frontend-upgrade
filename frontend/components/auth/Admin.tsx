import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuth } from '../../actions/auth';

interface AdminProps {
  children: React.ReactNode;
}

const Admin: React.FC<AdminProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuth()) {
      router.push(`/signin`);
    } else if (isAuth().role !== 1) {
      router.push(`/`);
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
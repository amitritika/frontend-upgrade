import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { signup } from '../../../../actions/auth';
import { withRouter, NextRouter } from 'next/router'

import {
Button
  } from "@material-tailwind/react";


interface WithRouterProps {
    router: NextRouter
  }
   
  interface MyComponentProps extends WithRouterProps {}

const ActivateAccount = ({ router }: MyComponentProps) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const { name, token, error, loading, success, showButton } = values;

    useEffect(() => {
        let token: string | string[] | undefined = router.query.id;
        if (typeof token === 'string') {
            const decodedToken: { name: string } = jwt.decode(token) as { name: string };
            setValues({ ...values, name: decodedToken.name, token });
        }
    }, [router]);

    const clickSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: '' });
        signup({ token }).then((data: { error: string }) => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false, showButton: false });
            } else {
                setValues({ ...values, loading: false, success: true, showButton: false });
            }
        });
    };

    const showLoading = () => (loading ? <h2>Loading...</h2> : '');

    return (
            <div className="container">
                <h3 className="pb-4">Hey {name}, Ready to activate your account?</h3>
                {showLoading()}
                {error && error}
                {success && 'You have successfully activated your account. Please signin.'}
                {showButton && (
                    <Button className="mt-6" onClick={clickSubmit}>
                    Activate Account
                  </Button>
                )}
            </div>
    );
};

export default withRouter(ActivateAccount);
import { useState } from 'react';
import { resetPassword } from '../../../../actions/auth';
import React from 'react'
import { withRouter, NextRouter } from 'next/router'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
 
interface WithRouterProps {
  router: NextRouter
}
 
interface MyComponentProps extends WithRouterProps {}

const ResetPassword = ({ router }: MyComponentProps) => {
    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    });

    const { showForm, name, newPassword, error, message } = values;

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });
    
        try {
            const data = await resetPassword({
                newPassword,
                resetPasswordLink: router.query.id
            });
    
            if (data.error) {
                setValues({ ...values, error: data.error, showForm: false, newPassword: '' });
            } else {
                setValues({ ...values, message: data.message, showForm: false, newPassword: '', error: '' });
            }
        } catch (error: any) {
            setValues({ ...values, error: error.response?.data?.error, showForm: false, newPassword: '' });
            console.error('An error occurred:', error);
        }
    };

    const passwordResetForm = () => (
        <div className="flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8 w-96">
            <Typography variant="h4" color="blue-gray" className="text-center mb-2">
            Reset Password
            </Typography>
            <div className="mb-4 flex flex-col gap-6 justify-center">
                <Input size="lg" label="Password" type="password"
                onChange={(e: { target: { value: any; }; }) => setValues({ ...values, newPassword: e.target.value })} />
            </div>
            <Button className="mt-6" fullWidth onClick={handleSubmit}>
                Change Password
            </Button>
            
        </Card>
        </div>
        
    );

    const showError = () => (error ? <div className="bg-red-500 text-white p-2 mb-4">{error}</div> : '');
    const showMessage = () => (message ? <div className="bg-green-500 text-white p-2 mb-4">{message}</div> : '');


    return (
            <div className="container">
                {showError()}
                {showMessage()}
                {passwordResetForm()}
            </div>
    );
};

export default withRouter(ResetPassword);
import { useState } from 'react';
import { forgotPassword } from '../../../actions/auth';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


const ForgotPassword = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;

    const handleChange = (name: string) => (e: { target: { value: any; }; }) => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });
    
        try {
            const data = await forgotPassword({ email });
    
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message, email: '', showForm: false });
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const showError = () => (error ? <div className="bg-red-500 text-white p-2 mb-4">{error}</div> : '');
    const showMessage = () => (message ? <div className="bg-green-500 text-white p-2 mb-4">{message}</div> : '');

    const passwordForgotForm = () => (
        <div className="flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8 w-96">
            <Typography variant="h4" color="blue-gray" className="text-center mb-2">
            Forgot Password
            </Typography>
            <div className="mb-4 flex flex-col gap-6 justify-center">
                <Input size="lg" label="Email" onChange={handleChange("email")} />
            </div>
            <Button className="mt-6" fullWidth onClick={handleSubmit}>
                Send Link
            </Button>
            
        </Card>
        </div>
    );

    return (
    <div className="container">
        {showError()}
        {showMessage()}
        {showForm && passwordForgotForm()}
    </div>
    );
};

export default ForgotPassword;
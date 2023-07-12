'use client'
 
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

import { FC, useState } from 'react';
import { signin, authenticate } from '../../../actions/auth';
import toast, { Toaster } from 'react-hot-toast';
interface SignInProps {
    data: any;
    status: any;
  }
   
  const SignIn: FC<SignInProps> = ({ data, status})=> {
    const router = useRouter();
    const [user, setUser] = useState({
      email: "",
      password: ""
    })

    if (status === 'loading') return <h1> loading... please wait</h1>;
    if (status === 'authenticated') {
      return (
        <div>
          <h1> hi {data.user?.name}</h1>
          <img src={data.user?.image ?? '/images/profile.png'} alt={data.user?.name + ' photo'} />
        </div>
      );
    }

    const handleChange = (name: string) => (e: { target: { value: any; }; }) => {
      setUser({ ...user, [name]: e.target.value });
   };

   interface SignInResponse {
    user: {
      email: string;
      image: string,
      name: string
    };
    error?: string;
    // other response properties
  }
   
  async function handleSignIn(): Promise<void> {
    const result = await signIn('google', { callbackUrl: '/pre-google-signin' }) as unknown as SignInResponse;
    
      if (!result?.error && result?.user) {
        const { email } = result.user;
        console.log('User email:', email);
    
        // Perform additional actions with the email, such as saving it to a database
      } else if (result?.error) {
        // Handle sign-in error
        console.error(result.error);
      } else {
        console.error("User object or error not found in the response");
      }
    }



   const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    

    signin(user)
  .then((data) => {
    console.log(data);
    if (data.error) {
      toast.error(data.error);
    } else {
      // save user token to cookie
      // save user info to localstorage
      // authenticate user
      toast.success("Logged In Successfully");
      authenticate(data, () => {
        router.push(`/`);
      });
    }
  })
  .catch((error) => {
    toast.error(error)
    // Handle the error
  });
   }
    return (
      <div className="flex justify-center items-center h-screen">
  <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8">
    <Toaster />
    <Typography variant="h4" color="blue-gray" className="text-center">
      Sign In
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6 justify-center">
        <Input size="lg" label="Email" onChange={handleChange("email")} />
        <Input type="password" size="lg" label="Password" onChange={handleChange("password")} />
      </div>
      <Button className="mt-6" fullWidth onClick={handleSubmit}>
        Sign In
      </Button>
      <Button className="mt-6" fullWidth onClick={handleSignIn}>
        Sign In with Google
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
          <a
            href="/auth/password/forgot"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Forgot Password?
          </a>
        </Typography>
    </form>
  </Card>
</div>

    );
  }

  export default SignIn;
'use client'
 
import { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signin, authenticate, isAuth, loginWithGoogle } from '../actions/auth';
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';

function MyPage() {
    const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function googleLogin() {
      if (status === 'authenticated') {
        // Fetch data from the database using an API
        loginWithGoogle({email: data.user?.email, name: data.user?.name})
  .then((user) => {
    console.log(user);
    if (user.error) {
      toast.error(user.error);
    } else {
      // save user token to cookie
      // save user info to localstorage
      // authenticate user
      toast.success("Logged In Successfully");
      authenticate(user, () => {
        router.push(`/`);
      });
    }
  })
  .catch((error) => {
    toast.error(error)
    // Handle the error
  });
      }
    };

    googleLogin();
  }, [data, status]);

  if (status === 'loading') return <h1> loading... please wait</h1>;

  return (
    <div>
      <h1>My Page</h1>
      {status === "authenticated" ? (
        <p>Welcome, {data.user?.name}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}

export default MyPage;

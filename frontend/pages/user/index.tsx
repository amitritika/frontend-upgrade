
import Head from 'next/head';
import Layout from "../../components/Layout";
import Private from '@/components/auth/Private';
import {useState, useEffect} from 'react';
import { isAuth } from '../../actions/auth';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import React from 'react';
import { useSession } from 'next-auth/react'

const Index = () => {
 const [user, setUser] = useState({role: 2})
 const { data, status } = useSession();

 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
  
  const head = () => (
        <Head>
            <title>
              {APP_NAME}
            </title>
            <meta name="description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content="We help to build Your Dream Career. We help to give exam plan like GATE, ESE, UPSC, JEE. We also help you to get Visual Resume. Career A+ | career aplus" />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/image/main`} />
            <meta property="og:image:secure_url" content={`${API}/image/main`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
  
  return (
    <React.Fragment>
      {head()}
        <Layout>
            <Private>
                <div className='flex'>
                    <div className=''>

                    </div>

                </div>

            </Private>
        </Layout>
    </React.Fragment>
  
)
}

export default Index;
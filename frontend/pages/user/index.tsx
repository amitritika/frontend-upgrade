
import Head from 'next/head';
import Layout from "@/components/Layout";
import Private from '@/components/auth/Private';
import AccountInformation from "@/components/user/AccountInformation"
import { FaCogs, FaFile, FaUser, FaVideo, FaCalendar  } from "react-icons/fa"
import Sidebar from '@/components/Sidebar/Sidebar';
import {useState, useEffect} from 'react';
import { isAuth } from '../../actions/auth';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import {ReactNode} from 'react';
import { useSession } from 'next-auth/react'
import React from 'react';
type secObject = {
    value: string;
    clicked: boolean;
    title: string;
    icon: ReactNode;
}
type sec = {
    account: secObject;
    visualresume: secObject;
    profile: secObject;
    video: secObject;
    examplan: secObject;
    [key: string]: any;
  };
const Index = () => {
 const [user, setUser] = useState(null || Object)
 const { data, status } = useSession();
 const [section, setSection]= useState<sec>({
    account: {value: "account", clicked: true, title: "Account Settings", icon: <FaCogs />},
    visualresume: {value: "visualresume", clicked: false, title: "Visual Resume", icon: <FaFile />},
    profile: {value: "profile", clicked: false, title: "Profile", icon: <FaUser />},
    video: {value: "video", clicked: false, title: "Video", icon: <FaVideo />},
    examplan: {value: "examplan", clicked: false, title: "Examplan", icon: <FaCalendar />},
 })
 const { account, visualresume, profile, video, examplan } = section;
 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
    const handleSection = (name: string) => {
        console.log(section);
       let currentSec = section;
       currentSec.account.clicked = false;
       currentSec.visualresume.clicked = false;
       currentSec.profile.clicked = false;
       currentSec.video.clicked = false;
       currentSec.examplan.clicked =  false;
       currentSec[name].clicked = true;
       setSection({...section, currentSec});
        
    }

    return (
        <React.Fragment>
            <Layout>
                <Private>
                    <div className='flex'>
                        <div className=''>
                            <Sidebar sec = {section} handleSection={handleSection}/>
                        </div>
                        <div className='flex-1'>
                            <div className='h-20 bg-grey-200 text-4xl'>
                                Welcome {user.name}
                            </div>
                            <div>
                                {account.clicked && <AccountInformation />}
                                {visualresume.clicked && <h1>Visual Resume</h1>}
                                {profile.clicked && <h1>Profile</h1>}
                                {video.clicked && <h1>Video</h1>}
                                {examplan.clicked && <h1>Examplan</h1>}
                            </div>
                        </div>
                    </div>

                </Private>
            </Layout>
        </React.Fragment>
  
)
}

export default Index;
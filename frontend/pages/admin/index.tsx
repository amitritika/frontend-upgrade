
import Head from 'next/head';
import Layout from "@/components/Layout";
import Admin from '@/components/auth/Admin';
import SideNavigationButton from "@/components/common/SideNavigationButton/SideNavigationButton";
import SideNavigationIcon from "@/components/common/SideNavigationIcon/SideNavigationIcon";
import { FaFile, FaHashtag, FaThList, FaPercent, FaFileImage } from "react-icons/fa"
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
    blogs: secObject;
    tags: secObject;
    category: secObject;
    discount: secObject;
    images: secObject;
    [key: string]: any;
  };
const Index = () => {
 const [user, setUser] = useState(null || Object)
 const { data, status } = useSession();
 const [section, setSection]= useState<sec>({
    blogs: {value: "blogs", clicked: true, title: "Blogs", icon: <FaFile />},
    tags: {value: "tags", clicked: false, title: "Blogs Tags", icon: <FaHashtag />},
    category: {value: "category", clicked: false, title: "Blogs Category", icon: <FaThList />},
    discount: {value: "discount", clicked: false, title: "Discount", icon: <FaPercent />},
    images: {value: "images", clicked: false, title: "Images OG", icon: <FaFileImage />},
 })
 const { blogs, tags, category, discount, images } = section;
 useEffect(() => {
   if (isAuth()){
     setUser(isAuth());
   }
        
    }, []);
    const handleSection = (name: string) => {
        console.log(section);
       let currentSec = section;
       currentSec.blogs.clicked = false;
       currentSec.tags.clicked = false;
       currentSec.category.clicked = false;
       currentSec.discount.clicked = false;
       currentSec.images.clicked =  false;
       currentSec[name].clicked = true;
       setSection({...section, currentSec});
        
    }

    return (
        <React.Fragment>
            <Layout>
                <Admin>
                    <div className='flex'>
                        <div className=''>
                            <Sidebar sec = {section} handleSection={handleSection}/>
                        </div>
                        <div className='flex-1'>
                            <div className='h-20 bg-grey-200 text-4xl'>
                                Welcome {user.name}
                            </div>
                            <div>
                                {blogs.clicked && <h1>Blogs</h1>}
                                {category.clicked && <h1>Category</h1>}
                                {tags.clicked && <h1>Tags</h1>}
                                {discount.clicked && <h1>Coupon Discount Code</h1>}
                                {images.clicked && <h1>OG</h1>}
                            </div>
                        </div>
                    </div>

                </Admin>
            </Layout>
        </React.Fragment>
  
)
}

export default Index;
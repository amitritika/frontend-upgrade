import React from "react";
import { useRouter } from "next/router"
import Link from "next/link"
interface HeaderProps {
    isAuth: boolean;
    role?: number | undefined;
    handleAuthToggle?: () => void;
    handleRoleToggle?: () => void;
  }
  const HeaderUpdated: React.FC<HeaderProps> = ({ isAuth, role }) => {


  const router = useRouter();
 
  return (
    <div className="daisy-navbar">
    <div className="daisy-navbar-start">
      <div className="h-12 w-12">
        <img className = "rounded-full" src="/images/Logo.png"></img>
      </div>
      <div className="daisy-dropdown">
        <label tabIndex={0} className="daisy-btn daisy-btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="daisy-menu daisy-menu-sm daisy-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className = "text-xl"><Link className="text-xl" href = "/visualresume">Visual Resume</Link></li>
          <li>
            <button className="text-xl">Resources</button>
            <ul className="p-4 text-xl">
              <li><Link className="text-xl" href = "/blogs">Blogs</Link></li>
              <li><Link className="text-xl" href = "/contactus">Contact Us</Link></li>
              <li><Link className="text-xl" href = "/aboutus">About Us</Link></li>
            </ul>
          </li>
          <li><Link className="text-xl" href = "/examplan">Exam Plan</Link></li>
        </ul>
      </div>
      <a className="daisy-btn daisy-btn-ghost normal-case text-xl">CAREER A+</a>
    </div>
    <div className="daisy-navbar-center hidden lg:flex z-10">
      <ul className="daisy-menu daisy-menu-horizontal px-1 text-xl">
        <li><Link className="text-xl" href = "/visualresume">Visual Resume</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>Resources</summary>
            <ul className="p-2">
            <li><Link className="text-xl" href = "/blogs">Blogs</Link></li>
              <li><Link className="text-xl" href = "/contactus">Contact Us</Link></li>
              <li><Link className="text-xl" href = "/aboutus">About Us</Link></li>
            </ul>
          </details>
        </li>
        <li><Link className="text-xl" href = "/examplan">Exam Plan</Link></li>
      </ul>
    </div>
    {!isAuth && <div className="daisy-navbar-end">
      <Link className = "daisy-btn-primary rounded-lg text-xl px-4 py-2 ml-2" href = "/signin">Sign In</Link>
      <Link className = "daisy-btn-primary rounded-lg text-xl px-4 py-2 ml-2" href = "/signup">Sign Up</Link>
    </div>}
    {isAuth && <div className="daisy-navbar-end">
    <div className="daisy-dropdown daisy-dropdown-end">
      <label tabIndex={0} className="daisy-btn daisy-btn-ghost daisy-btn-circle daisy-avatar">
        <div className="w-10 rounded-full">
          <img src="/images/profile.png" />
        </div>
      </label>
      <ul tabIndex={0} className="daisy-menu daisy-menu-sm daisy-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="text-xl">
          <Link className="text-xl" href= "/user">
            Profile
          </Link>
        </li>
        {role !== 0 && <li className="text-xl">
          <Link className="text-xl" href= "/admin">
            Admin
          </Link>
        </li>}
        <li><Link className="text-xl" href = "/user/update/account-information">Settings</Link></li>
        <li><button className="text-xl">Logout</button></li>
      </ul>
    </div>
    </div>}
  </div>
  );
}

export default HeaderUpdated;
export type { HeaderProps };
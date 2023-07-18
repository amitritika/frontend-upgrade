import React from "react";
import { useRouter } from "next/router"

interface HeaderProps {
    isAuth: boolean;
    role?: number;
    handleAuthToggle?: () => void;
    handleRoleToggle?: () => void;
  }
  const HeaderUpdated: React.FC<HeaderProps> = ({ isAuth, role }) => {


  const router = useRouter();
 
  return (
    <div className="daisy-navbar bg-red">
    <div className="daisy-navbar-start">
      <div className="h-12 w-12">
        <img className = "rounded-full" src="/images/Logo.PNG"></img>
      </div>
      <div className="daisy-dropdown">
        <label tabIndex={0} className="daisy-btn daisy-btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="daisy-menu daisy-menu-sm daisy-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className = "text-xl"><a className="text-xl" href="/visualresume">Visual Resume</a></li>
          <li>
            <a className="text-xl">Resources</a>
            <ul className="p-4 text-xl">
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/aboutus">About Us</a></li>
            </ul>
          </li>
          <li><a className="text-xl" href="/examplan">Exam Plan</a></li>
        </ul>
      </div>
      <a className="daisy-btn daisy-btn-ghost normal-case text-xl">CAREER A+</a>
    </div>
    <div className="daisy-navbar-center hidden lg:flex">
      <ul className="daisy-menu daisy-menu-horizontal px-1 text-xl">
        <li><a href="/visualresume">Visual Resume</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Resources</summary>
            <ul className="p-2">
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/aboutus">About Us</a></li>
            </ul>
          </details>
        </li>
        <li><a href="/examplan">Exam Plan</a></li>
      </ul>
    </div>
    {!isAuth && <div className="daisy-navbar-end">
      <a className="daisy-btn-primary rounded-lg text-xl px-4 py-2 ml-2" href = "/signin">Sign In</a>
      <a className="daisy-btn-primary rounded-lg text-xl px-4 py-2 ml-2" href = "/signup">Sign Up</a>
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
          <a className="text-xl" href= "/user">
            Profile
          </a>
        </li>
        {role > 0 && <li className="text-xl">
          <a className="text-xl" href= "/admin">
            Admin
          </a>
        </li>}
        <li><a className="text-xl" href = "/user/update/account-information">Settings</a></li>
        <li><a className="text-xl">Logout</a></li>
      </ul>
    </div>
    </div>}
  </div>
  );
}

export default HeaderUpdated;
export type { HeaderProps };
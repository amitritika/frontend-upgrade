import React, { useState } from 'react';
import { APP_NAME } from "../../config";
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { signout } from '../../actions/auth';
import { useRouter } from 'next/router';
interface HeaderProps {
    isAuth: boolean;
    role?: number;
    handleAuthToggle?: () => void;
    handleRoleToggle?: () => void;
  }
  const Header: React.FC<HeaderProps> = ({ isAuth, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-purple">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img className="h-10 mr-2" src="images/Logo.png" alt="Logo" />
            <div className="text-lg font-semibold">{APP_NAME}</div>
          </div>
        </Link>
        <div className="flex items-center">
          <button
            className="text-xl focus:outline-none md:hidden"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <HiMenu />
          </button>
          <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <li className="mr-4">
              <Link className="" href="/examplan">
                Exam Plan
              </Link>
            </li>
            <li className="mr-4">
              <Link className="" href="/visualresume">
                Visual Resume
              </Link>
            </li>
            <li className="mr-4">
              <Link className="" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="mr-4">
              <Link className="" href="/aboutus">
                About Us
              </Link>
            </li>
            <li className="mr-4">
              <Link className="" href="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex items-center ml-4">
            {!isAuth && (
              <>
                <li className="mr-4">
                  <Link className="" href="/signin">
                    Sign In
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className="" href="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {isAuth && (
              <>
                {role == 1 && (
                  <li className="mr-4">
                    <Link className="" href="/admin">
                      Admin
                    </Link>
                  </li>
                )}
                <li className="mr-4">
                  <Link className="" href="/user">
                    Dashboard
                  </Link>
                </li>
                <li className="mr-4">
                  <a
                    className="cursor-pointer"
                    onClick={() => signout(() => router.replace(`/signin`))}
                  >
                    Signout
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
export type { HeaderProps };
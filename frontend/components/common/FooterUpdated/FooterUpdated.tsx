import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router"
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaYoutubeSquare } from "react-icons/fa"

interface FooterProps {
    isAuth: boolean;
    role?: number | undefined;
    handleAuthToggle?: () => void;
    handleRoleToggle?: () => void;
  }
  const FooterUpdated: React.FC = () => {


  const router = useRouter();

  return(
    <><footer className="daisy-footer p-10 bg-base-200 text-base-content">
            <div className="footer-link" style={{marginTop: 0, paddingTop: 0}}>
                <p className="footer-link-title">Career A+</p>
              <p>
                Gandhi Road <br /> <br />
                Velachery, Chennai 600042<br /> <br />
                India<br /> <br /><br />
                <strong>Email: </strong>contact@careeraplus.in
              </p>

            </div>
          <div>
              <span className="daisy-footer-title footer-link-heading">Services</span>
              <Link href = "/visualresume" className="footer-link">Visual Resume</Link>
              <Link href = "/examplan" className="footer-link">Exam Plan</Link>
          </div>
          <div>
              <span className="daisy-footer-title footer-link-heading">Company</span>
              <Link href = "/aboutus" className="footer-link">About Us</Link>
              <Link href = "/contactus" className="footer-link">Contact Us</Link>
          </div>
          <div>
              <span className="daisy-footer-title footer-link-heading">Resources</span>
              <Link href = "/blogs" className="footer-link">About Us</Link>
              <Link href = "/blogs" className="footer-link">Privacy Policy</Link>
              <Link href = "/blogs" className="footer-link">Terms of Use</Link>
          </div>
      </footer><footer className="daisy-footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
              <div className="items-center grid-flow-col">
                  <img src = "/images/Logo.PNG" className="footer-link-image"></img>
                  <p>© Copyright <strong>Career A+.</strong>All rights reserved</p>
              </div>
              <div className="md:place-self-center md:justify-self-end">
                  <div className="grid grid-flow-col gap-4">
                    <Link href = "https://www.youtube.com/channel/UCjauxsnDfKWEXvKA1Rl_E8A"><FaYoutube className="footer-link-icon"/></Link>
                    <Link href = "https://www.youtube.com/channel/UC6H0Dk6nvBcRrLSwJAqVbpA"><FaYoutubeSquare className="footer-link-icon"/></Link>
                    <Link href = "https://twitter.com/Career_O"><FaTwitter className="footer-link-icon"/></Link>
                    <Link href = "https://www.facebook.com/careeraplus/"><FaFacebook className="footer-link-icon"/></Link>
                    <Link href = "https://www.instagram.com/careeraplus/"><FaInstagram className="footer-link-icon"/></Link>
                    <Link href = "https://www.linkedin.com/company/56403348"><FaLinkedin className="footer-link-icon"/></Link>
                    </div>
              </div>
          </footer></>
  )
  }

  export default FooterUpdated;
    export type { FooterProps };
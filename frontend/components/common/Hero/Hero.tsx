import { FaRegIdBadge, FaRegCalendarAlt, FaEnvelope, FaBlog, FaLayerGroup } from "react-icons/fa";
import BoxIconMono from "../BoxIconMono/BoxIconMono"

const Hero = () => {
  return (
    <div id="hero1" className="flex items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")', backgroundPosition: 'top center', backgroundSize: 'cover' }}>
      <div className="container relative" data-aos="fade-up" data-aos-delay="100" style ={{margin : "auto"}}>
        <div className="row justify-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1 className="text-4xl font-bold">We help to build Your Dream Career</h1>
            <h2 className="text-2xl">We want Dream Job for Everyone</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8 inline-block transition-colors duration-300 text-3xl">Get Started</a>
          <button className="daisy-btn daisy-btn-neutral">Neutral</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
        <BoxIconMono 
        icon = {<FaRegIdBadge />} 
        title = "Visual Resume"
        link = "/visualresume"
        description="Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min."
        />

        <BoxIconMono 
        icon = {<FaRegCalendarAlt />} 
        title = "Exam Plan"
        link = "/examplan"
        description="Data Analytics driven Exam Plan with TEST, Backup Days and 3 revision cycle, for GATE, ESE, State PSC and many more."
        />

      <BoxIconMono 
        icon = {<FaBlog />} 
        title = "Blogs"
        link = "/blogs"
        description="We provide extensive information on Career path and advice to improve skills through Videos and Blogs"
        />

      <BoxIconMono 
        icon = {<FaEnvelope />} 
        title = "Support"
        link = "/contactus"
        description="You can reach us for any support or help. Mail us directly at contact@careeraplus.in"
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;

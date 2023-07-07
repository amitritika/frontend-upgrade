import { FaRegIdBadge, FaRegCalendarAlt, FaEnvelope, FaBlog, FaLayerGroup } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero1" className="flex items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")', backgroundPosition: 'top center', backgroundSize: 'cover' }}>
      <div className="container relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1 className="text-4xl font-bold">We help to build Your Dream Career</h1>
            <h2 className="text-2xl">We want Dream Job for Everyone</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8 inline-block transition-colors duration-300">Get Started</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="text-4xl text-blue-500 mb-4"><FaRegIdBadge /></div>
            <h4 className="text-xl font-bold mb-2"><a href="/visualresume">Visual Resume</a></h4>
            <p className="text-sm">Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="text-4xl text-blue-500 mb-4"><FaRegCalendarAlt /></div>
            <h4 className="text-xl font-bold mb-2"><a href="examplan">Exam Plan</a></h4>
            <p className="text-sm">Data Analytics driven Exam Plan with TEST, Backup Days and 3 revision cycle, for GATE, ESE, State PSC and many more.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="400">
            <div className="text-4xl text-blue-500 mb-4"><FaBlog /></div>
            <h4 className="text-xl font-bold mb-2"><a href="blogs">Blogs</a></h4>
            <p className="text-sm">We provide extensive information on Career path and advice to improve skills through Videos and Blogs</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="500">
            <div className="text-4xl text-blue-500 mb-4"><FaEnvelope /></div>
            <h4 className="text-xl font-bold mb-2"><a href="/contactus">Support</a></h4>
            <p className="text-sm">You can reach us for any support or help. Mail us directly at <em>contact@careeraplus.in</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

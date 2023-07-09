import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div style={{ marginTop: '6rem' }}>
      <div className="container" data-aos="fade-up" style={{ margin: 'auto' }}>

        <div className="section-title-1">
          <h2>What We DO</h2>
          <p>Our aim is to help everyone to get their Dream Job.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              Following are few ways through which we can help you achieve your Dream Career.
            </p>
            <ul className="list-none">
              <li className="u-list-1 flex"><FaAngleDoubleRight className = "mr-2 mt-1" color="#2487ce" /> We provide an easy-to-use Visual Resume tool.</li>
              <li className="u-list-1 flex"><FaAngleDoubleRight className = "mr-2 mt-1" color="#2487ce" /> Visual Resume attracts recruiters to spend more time on your profile.</li>
              <li className="u-list-1 flex"><FaAngleDoubleRight className = "mr-2 mt-1" color="#2487ce" /> It helps you stand out in a crowd.</li>
            </ul>
          </div>
          <div className="pt-4 lg:pt-0">
            <p>
              We also provide an Exam Plan tool to customize your timetable for preparation of any competitive exam. We use extensive data analytics to generate
              an exam plan with Tests, Revisions, Backup Days, and many more.
            </p>
            <a href="aboutus" className="button-secondary">Who we Are</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;

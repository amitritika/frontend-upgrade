import { useState, useEffect, useRef } from 'react';
import { FaLink } from 'react-icons/fa';

const Portfolio = () => {
  const [cls, setCls] = useState({
    all: 'filter-active',
    fresher: '',
    pro: '',
    expert: ''
  });

  const [cls2, setCls2] = useState({
    all: '',
    fresher: 'block',
    pro: 'block',
    expert: 'block'
  });

  const [cls3, setCls3] = useState({
    all: '',
    fresher: 1,
    pro: 1,
    expert: 1
  });

  const cardStyleFresher = {
    opacity: cls3.fresher,
    display: cls2.fresher,
    transition: 'all .3s ease-in'
  };

  const cardStylePro = {
    opacity: cls3.pro,
    display: cls2.pro,
    transition: 'all .3s ease-in'
  };

  const cardStyleExpert = {
    opacity: cls3.expert,
    display: cls2.expert,
    transition: 'all .3s ease-in'
  };

  const handleCls = (x: any | never) => {
    const obj = {
      all: '',
      fresher: '',
      pro: '',
      expert: ''
    };

    const obj2 = {
      all: '',
      fresher: 'none',
      pro: 'none',
      expert: 'none'
    };
    

    const obj3 = {
      all: '',
      fresher: 0,
      pro: 0,
      expert: 0
    };

    obj[x as keyof typeof obj] = 'filter-active';

    if (x !== 'all') {
      obj2[x as keyof typeof obj2] = 'block';
      obj3[x as keyof typeof obj3] = 1;
      setCls2(obj2);
      setTimeout(() => setCls3(obj3), 300);
    } else {
      obj2['fresher'] = 'block';
      obj2['pro'] = 'block';
      obj2['expert'] = 'block';
      obj3['fresher'] = 1;
      obj3['pro'] = 1;
      obj3['expert'] = 1;
      setCls2(obj2);
      setTimeout(() => setCls3(obj3), 300);
    }

    setCls(obj);
  };

  return (
    <div className="mt-24" id="port">
    <div className="container" data-aos="fade-up">
      <div className="section-title-1">
        <h2>Visual Resume Templates</h2>
        <p>
          Fresher ideal for Just College pass out students. Professional for 0-4 years experience. Expert for 4+ years experience.
        </p>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay="150">
        <div className="col-lg-12 flex justify-center">
          <ul id="port-filters" className="flex space-x-4">
            <li
              data-filter="*"
              className={`cursor-pointer ${cls.all}`}
              onClick={() => handleCls('all')}
            >
              All
            </li>
            <li
              data-filter=".filter-fresher"
              className={`cursor-pointer ${cls.fresher}`}
              onClick={() => handleCls('fresher')}
            >
              Fresher
            </li>
            <li
              data-filter=".filter-pro"
              className={`cursor-pointer ${cls.pro}`}
              onClick={() => handleCls('pro')}
            >
              Professional
            </li>
            <li
              data-filter=".filter-expert"
              className={`cursor-pointer ${cls.expert}`}
              onClick={() => handleCls('expert')}
            >
              Expert
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 port-container" data-aos="fade-up" data-aos-delay="300">
        <div className="col-lg-4 col-md-6 port-item filter-fresher" style={cardStyleFresher}>
          <div className="port-wrap">
            <img src="images/visualresume/fresher/Template1.JPG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 1</h4>
              <p>Fresher</p>
              <div className="port-wrap__links">
                <a href="/visualresume/fresher/template1" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-6 port-item filter-pro" style={cardStylePro}>
          <div className="port-wrap">
            <img src="images/visualresume/pro/Template2.JPG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 2</h4>
              <p>Professional</p>
              <div className="port-wrap__links">
                <a href="/visualresume/pro/template2" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 port-item filter-expert" style={cardStyleExpert}>
          <div className="port-wrap">
            <img src="images/visualresume/expert/Template3.JPG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 3</h4>
              <p>Expert</p>
              <div className="port-wrap__links">
                <a href="/visualresume/expert/template3" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 port-item filter-fresher" style={cardStyleFresher}>
          <div className="port-wrap">
            <img src="images/visualresume/fresher/Template4.JPG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 1</h4>
              <p>Fresher</p>
              <div className="port-wrap__links">
                <a href="/visualresume/fresher/template4" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 port-item filter-pro" style={cardStylePro}>
          <div className="port-wrap">
            <img src="images/visualresume/pro/Template5.JPG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 2</h4>
              <p>Professional</p>
              <div className="port-wrap__links">
                <a href="/visualresume/pro/template5" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 port-item filter-expert" style={cardStyleExpert}>
          <div className="port-wrap">
            <img src="images/visualresume/expert/Template1_1.PNG" className="img-fluid" alt="" />
            <div className="port-wrap__info">
              <h4>Template 3</h4>
              <p>Expert</p>
              <div className="port-wrap__links">
                <a href="/visualresume/expert/template1" title="More Details">
                 <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Portfolio;
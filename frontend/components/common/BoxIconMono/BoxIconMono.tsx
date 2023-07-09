import React, { ReactNode } from 'react';

interface BoxIconMonoProps {
  icon: ReactNode;
  title: string;
  link: string;
  description: string;
}

const BoxIconMono: React.FC<BoxIconMonoProps> = ({ icon, title, link, description }) => {
  return (
    <div data-aos="zoom-in" data-aos-delay="200" className='max-w-md' style={{margin: "0 auto"}}>
      <div className="icon-box-1 h-full">
        <div className="icon-box-1-icon">{icon}</div>
        <h4 className="icon-box-1-title"><a href={link}>{title}</a></h4>
        <p className="icon-box-1-description">{description}</p>
      </div>
    </div>
  );
}

export default BoxIconMono;

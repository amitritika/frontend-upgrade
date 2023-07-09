import React, { ReactNode } from 'react';

interface BoxIconColorProps {
  icon: ReactNode;
  svgPath: string;
  title: string;
  link: string;
  description: string;
  color: string;
}

const BoxIconColor: React.FC<BoxIconColorProps> = ({ icon, svgPath, title, link, description, color }) => {
  const iconBoxClassName = `icon-box-2 iconbox-2-${color}`;
  return (
    <div className="max-w-lg" data-aos="zoom-in" data-aos-delay="100" style={{margin: "0 auto"}}>
      <div className={iconBoxClassName}>
        <div className="icon-box-2__icon">
          <svg width="100" height="100" viewBox="0 0 600 600" className="icon-box-2__icon--1">
            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={svgPath} />
          </svg>
          <div className = "icon-box-2__icon--2">
            {icon}
          </div>
          
        </div>
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BoxIconColor;

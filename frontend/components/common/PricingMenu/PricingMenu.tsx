import React, { FC } from 'react';
import {
    FaRupeeSign
 } from "react-icons/fa"

interface PricingBoxProps {
  title: string;
  imageSrc: string;
  discount: number;
  price: number;
  features: string[];
  isAuth: boolean;
  purchaseLink: string;
  resumeBuilderLink: string;
}

const PricingBox: FC<PricingBoxProps> = ({
  title,
  imageSrc,
  discount,
  price,
  features,
  isAuth,
  purchaseLink,
  resumeBuilderLink,
}) => {
  return (
    <div className="max-w-md" data-aos="zoom-in" data-aos-delay="100">
      <div className="pricing-box">
        <h3>{title}</h3>
        <img style={{ width: '100%' }} src={imageSrc} alt="Card image cap" />

        {discount === 0 && (
          <h4>
            <sup>
              <FaRupeeSign />
            </sup>
            250<span> / yr</span>
          </h4>
        )}
        {discount !== 0 && <h3 className="">{discount}% Discount</h3>}
        {discount !== 0 && (
          <h3 style={{ color: '#ccc', textDecoration: 'line-through' }}>
            <sup>
              <i className="fas fa-rupee-sign" />
            </sup>
            250<span> / yr</span>
          </h3>
        )}
        {discount !== 0 && (
          <h4>
            <sup>
              <i className="fas fa-rupee-sign" />
            </sup>
            {price}<span> / yr</span>
          </h4>
        )}

        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {isAuth ? (
          <div>
            <a href={purchaseLink} className="button-buy">
              Buy Now
            </a>
          </div>
        ) : (
          <p>Sign In To Purchase</p>
        )}
      </div>
      <div
        style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}
      >
        <a href={resumeBuilderLink} className="button-menu">
          Fresher Resume Builder
        </a>
      </div>
    </div>
  );
};

export default PricingBox;

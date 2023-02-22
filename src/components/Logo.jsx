import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ clicked }) => {
  return (
    <Link to="/" className="logo-link">
      <div className="logo">
        <div className={`logo-left ${clicked && 'logo-left-animation-on'}`}>
          <span> ARTS</span>
        </div>
        <div className={`logo-right ${clicked && 'logo-right-animation-on'}`}>GURU</div>
      </div>
    </Link>
  );
};

export default Logo;

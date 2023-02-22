import React from 'react';

const Logo = ({ clicked }) => {
  return (
    <div className="logo">
      <div className={`logo-left ${clicked && 'logo-left-animation-on'}`}>
        <span> ARTS</span>
      </div>
      <div className={`logo-right ${clicked && 'logo-right-animation-on'}`}>GURU</div>
    </div>
  );
};

export default Logo;

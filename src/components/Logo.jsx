import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ clicked }) => {
  const [onClickLogo, setOnClickLogo] = React.useState(false);

  return (
    <Link to={process.env.PUBLIC_URL + '/'} className="logo-link">
      <div
        className="logo"
        onClick={() => {
          setOnClickLogo(true);
          setTimeout(() => setOnClickLogo(false), 1000);
        }}
      >
        <div className={`logo-left ${clicked || onClickLogo ? 'logo-left-animation-on' : ''}`}>
          <span> ARTS</span>
        </div>
        <div className={`logo-right ${clicked || onClickLogo ? 'logo-right-animation-on' : ''}`}>
          GURU
        </div>
      </div>
    </Link>
  );
};

export default Logo;

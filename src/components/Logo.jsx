import React from 'react';

const Logo = ({ clicked }) => {
  const [change, setChange] = React.useState(false);
  React.useEffect(() => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
    }, 1000);
  }, [clicked]);

  return (
    <div className="logo">
      <div className={`logo-left ${change && 'logo-left-animation-on'}`}>
        <span> ARTS</span>
      </div>
      <div className={`logo-right ${change && 'logo-right-animation-on'}`}>GURU</div>
    </div>
  );
};

export default Logo;

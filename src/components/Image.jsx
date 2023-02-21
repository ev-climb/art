import React from 'react';

const Image = ({ arts }) => {
  return <img className="Art" src={arts.url} alt={arts.title} />;
};

export default Image;

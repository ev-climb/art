import React from 'react';

const Image = ({ arts }) => {
  return <img src={arts.url} alt={arts.title} />;
};

export default Image;

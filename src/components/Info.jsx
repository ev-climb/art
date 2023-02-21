import React from 'react';

const Info = ({ arts }) => {
  return (
    <div className="info">
      <h3>{arts.title}</h3>
      <h3>
        `${arts.artist} ${arts.year}`
      </h3>
      <p>{arts.description}</p>
    </div>
  );
};

export default Info;

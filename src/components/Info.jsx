import React from 'react';

const Info = ({ arts }) => {
  return (
    <div className="Info">
      <h3>«{arts.title}»</h3>
      <h4>
        {arts.artist} ({arts.year})
      </h4>
      <p>{arts.description}</p>
    </div>
  );
};

export default Info;

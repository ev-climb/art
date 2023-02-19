import React from 'react';
import { Tooltip } from 'react-tooltip';

const Artwork = (artworks) => {
  console.log(artworks);
  return (
    <div className="artwork">
      <img src={imageUrl} alt={title} />
      <div className="info" data-tip data-for={`tooltip-${id}`}>
        ?
      </div>
      <Tooltip id={`tooltip-${id}`} type="light" effect="solid">
        <div className="tooltip">
          <h3>{title}</h3>
          <p>
            {artist}, {year}
          </p>
        </div>
      </Tooltip>
    </div>
  );
};

export default Artwork;

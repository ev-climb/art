import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Artwork from './Artwork';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  let response;

  useEffect(() => {
    const fetchData = async () => {
      try {
        response = await axios.get('https://63f1c2684f17278c9a1961ec.mockapi.io/arts', {});
        console.log(response.data);
        setArtworks(response.data);
      } catch (error) {
        console.error(error);
      }
      const data = response.data.map((result) => ({
        imageUrl: result.url,
        title: result.alt_description,
        artist: 'unknown',
        year: 'unknown',
      }));
      setArtworks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="artworks">
      <Artwork artworks={artworks} />
    </div>
  );
};

export default Artworks;

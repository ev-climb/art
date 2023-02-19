import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/arts';

function App() {
  const [art, setArt] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    fetchArt();
  }, []);

  const fetchArt = async () => {
    setShowInfo(true);
    const response = await axios.get(API_URL);
    console.log(response);
    setArt(response.data[Math.floor(Math.random() * response.data.length)]);
    setShowInfo(false);
  };

  const handleImageClick = () => {
    setShowInfo(!showInfo);
  };

  const handleInfoClick = () => {
    fetchArt();
  };

  return (
    <Wrapper>
      {art && !showInfo && <Image src={art.url} alt={art.title} onClick={handleImageClick} />}
      {art && showInfo && (
        <Info onClick={handleInfoClick}>
          <Title>{`${art.artist} (${art.year})`}</Title>
          <Description>{art.descroption}</Description>
        </Info>
      )}
    </Wrapper>
  );
}

export default App;

import React from 'react';
import axios from 'axios';

import Image from '../components/Image';
import Info from '../components/Info';
import Loading from '../components/Loading';

const Home = ({ clicked, setClicked, selectedYear, selectedStyle, selectedArtist }) => {
  const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/';
  const [arts, setArts] = React.useState([]);
  const [allArts, setAllArts] = React.useState([]);
  const [usedArts, setUsedArts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const lastArt = {
    title: 'Благодарим за просмотр!',
    artist: 'Пока на этом всё',
    url: './img/end.jpg',
    description:
      'Вы просмотрели всю подборку. Измените настройки поиска или просмотрите коллекцию заново.',
    year: ':-',
    years: '',
  };

  async function fetchArt() {
    try {
      setLoading(true);
      const [artsRes] = await Promise.all([
        axios.get(
          `${API_URL}arts?${
            selectedYear && (selectedYear !== 'All years' ? `years=${selectedYear}` : '')
          }${selectedStyle && (selectedStyle !== 'All styles' ? `&style=${selectedStyle}` : '')}${
            selectedArtist && (selectedArtist !== 'All artists' ? `&artist=${selectedArtist}` : '')
          }`,
        ),
      ]);
      if (allArts.length === 0) {
        setAllArts(artsRes.data);
      }
    } catch (err) {
      alert('Ошибка запроса данных :(');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getArt() {
    let filteredArts = allArts.filter(
      (art) => !usedArts.some((usedArt) => usedArt.title === art.title),
    );
    if (filteredArts.length === 0) {
      setArts(lastArt);
      setUsedArts([]);
      filteredArts = allArts;
      setLoading(false);
      return;
    }
    const randomArt = filteredArts[Math.floor(Math.random() * filteredArts.length)];
    setUsedArts((prevUsedArts) => [...prevUsedArts, randomArt]);
    setArts(randomArt);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchArt();
  }, []);

  React.useEffect(() => {
    if (allArts.length !== 0) {
      getArt();
    } else {
      setArts(lastArt);
    }
  }, [allArts]);

  function handleClickMain() {
    clicked && getArt();
    setClicked(!clicked);
  }

  return (
    <div className={`content ${loading ? 'loading' : ''}`} onClick={() => handleClickMain()}>
      {loading ? (
        <Loading />
      ) : clicked ? (
        <Info arts={arts} />
      ) : loading ? (
        <Loading />
      ) : (
        <Image arts={arts} setLoading={setLoading} />
      )}
    </div>
  );
};

export default Home;

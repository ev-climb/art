import React from 'react';
import axios from 'axios';

import Image from './Image';
import Info from './Info';
import Loading from './Loading';

const Home = ({ onClickMain, clicked, setClicked }) => {
  const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/arts';
  const [arts, setArts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function fetchArt() {
    try {
      setLoading(true);
      const [artsRes] = await Promise.all([axios.get(API_URL)]);
      setArts(artsRes.data[Math.floor(Math.random() * artsRes.data.length)]);
    } catch (err) {
      alert('Ошибка запроса данных :(');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchArt();
  }, []);

  async function onClickMain() {
    {
      clicked && (await fetchArt());
    }
    setClicked(!clicked);
  }

  return (
    <div className={`content ${loading ? 'loading' : ''}`} onClick={() => onClickMain()}>
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

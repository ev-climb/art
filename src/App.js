import React from 'react';
import axios from 'axios';

import Image from './components/Image';
import Info from './components/Info';
import Logo from './components/Logo';

import './styles.css';

const App = () => {
  const [clicked, setClicked] = React.useState(false);
  const [arts, setArts] = React.useState([]);

  const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/arts';

  async function fetchArt() {
    try {
      const [artsRes] = await Promise.all([axios.get(API_URL)]);
      setArts(artsRes.data[Math.floor(Math.random() * artsRes.data.length)]);
    } catch (err) {
      alert('Ошибка запроса данных :(');
      console.log(err);
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
    <div className="App">
      <div className="wrapper">
        <Logo clicked={clicked} />
        <div className="content" onClick={() => onClickMain()}>
          {clicked ? <Info arts={arts} /> : <Image arts={arts} />}
        </div>
        <span className="copyright">Ⓒ Evseev</span>
      </div>
    </div>
  );
};

export default App;

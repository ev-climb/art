import React from 'react';
import axios from 'axios';

import Image from './Image';
import Info from './Info';
import Loading from './Loading';

const Home = ({ onClickMain, clicked, setClicked, selectedYear }) => {
  const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/';
  const [arts, setArts] = React.useState([]);
  const [allArts, setAllArts] = React.useState([]);
  const [usedArts, setUsedArts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const errorArt = {
    title: 'Увы!',
    artist: 'Ничего не найдено',
    url: '/img/errorArt.jpg',
    description:
      'Попробуйте изменить настройки поиска. Кажется, с данными параметрами у нас пока ничего нет.',
    year: ':-(',
    years: '',
  };

  //Прежний рабочий вариант
  // async function fetchArt() {
  //   try {
  //     setLoading(true);
  //     const [artsRes] = await Promise.all([
  //       axios.get(
  //         `${API_URL}arts?${
  //           selectedYear && (selectedYear !== 'All years' ? `years=${selectedYear}` : '')
  //         }`,
  //       ),
  //     ]);

  //     if (allArts.length === 0) {
  //       setAllArts(artsRes.data);
  //     }

  //     const availableArts = artsRes.data.filter(
  //       (art) => !usedArts.some((usedArt) => usedArt.title === art.title),
  //     );
  //     console.log(usedArts, 'usedArts');
  //     console.log(availableArts, 'availableArts');
  //     console.log(allArts, 'allArts');

  //     const randomArt = availableArts.length
  //       ? availableArts[Math.floor(Math.random() * availableArts.length)]
  //       : errorArt;

  //     setUsedArts((prevUsedArts) => [...prevUsedArts, randomArt]);

  //     setArts(randomArt);

  //     if (availableArts.length === 0) {
  //       setUsedArts([]);
  //       setArts(errorArt);
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     alert('Ошибка запроса данных :(');
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function fetchArt() {
    try {
      setLoading(true);
      const [artsRes] = await Promise.all([
        axios.get(
          `${API_URL}arts?${
            selectedYear && (selectedYear !== 'All years' ? `years=${selectedYear}` : '')
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
      setUsedArts([]);
      filteredArts = allArts;
      setLoading(false);
      setArts(errorArt);
      return;
    }
    const randomArt = filteredArts[Math.floor(Math.random() * filteredArts.length)];
    setUsedArts((prevUsedArts) => [...prevUsedArts, randomArt]);
    setArts(randomArt);
    setLoading(false);
    console.log(usedArts, 'usedArts');
    console.log(filteredArts, 'filteredArts');
    console.log(allArts, 'allArts');
  }

  React.useEffect(() => {
    fetchArt();
  }, []);

  React.useEffect(() => {
    if (allArts.length != 0) getArt();
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

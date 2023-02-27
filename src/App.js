import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Logo from './components/Logo';
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';

import './styles.css';

const App = () => {
  const [clicked, setClicked] = React.useState(false);
  const [selectedYear, setSelectedYear] = React.useState(
    localStorage.getItem('selectedYear') || 'All years',
  );
  const [selectedStyle, setSelectedStyle] = React.useState(
    localStorage.getItem('selectedStyle') || 'All styles',
  );
  const [selectedArtist, setSelectedArtist] = React.useState(
    localStorage.getItem('selectedArtist') || 'All styles',
  );

  return (
    <div className="App">
      <div className="wrapper">
        <ul className="menu">
          <Link to="/settings">
            <li>settings</li>
          </Link>
          {' | '}
          <Link to="/about">
            <li>about</li>
          </Link>
        </ul>
        <Logo clicked={clicked} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                clicked={clicked}
                setClicked={setClicked}
                selectedYear={selectedYear}
                selectedStyle={selectedStyle}
                selectedArtist={selectedArtist}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
                selectedArtist={selectedArtist}
                setSelectedArtist={setSelectedArtist}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <span className="copyright">Ⓒ Evseev</span>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Logo from './components/Logo';
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';

import './styles.css';

const App = () => {
  const [clicked, setClicked] = React.useState(false);

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
          <Route path="/" element={<Home clicked={clicked} setClicked={setClicked} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <span className="copyright">Ⓒ Evseev</span>
      </div>
    </div>
  );
};

export default App;

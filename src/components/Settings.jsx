import React from 'react';
import '../styles.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsImage">
        <ul>
          <li>
            <select id="year-select">
              <option value="All years">All years</option>
              <option value="&lt;1500">&lt; 1500</option>
              <option value="1500-1600">1500 - 1600</option>
              <option value="1600-1700">1600 - 1700</option>
              <option value="1700-1800">1700 - 1800</option>
              <option value="1800-1900">1800 - 1900</option>
              <option value="1900&lt;">1900 &lt;</option>
            </select>
          </li>
          <li>
            <select id="style-select">
              <option value="All-styles">All styles</option>
              <option value="renaissance">Renaissance</option>
              <option value="mannerism">Mannerism</option>
              <option value="baroque">Baroque</option>
              <option value="classicism">Classicism</option>
              <option value="romanticism">Romanticism</option>
              <option value="impressionism">Impressionism</option>
              <option value="expressionism">Expressionism</option>
              <option value="avant-garde">Avant-garde</option>
            </select>
          </li>
          <li>
            <select id="artist-select">
              <option value="All-artist">All artist</option>
              <option value="leonardo-da-vinci">Leonardo da Vinci</option>
              <option value="vincent-van-gogh">Vincent van Gogh</option>
              <option value="pablo-picasso">Pablo Picasso</option>
              <option value="claude-monet">Claude Monet</option>
              <option value="salvador-dali">Salvador Dali</option>
              <option value="rembrandt-van-rijn">Rembrandt van Rijn</option>
              <option value="edvard-munch">Edvard Munch</option>
              <option value="jackson-pollock">Jackson Pollock</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;

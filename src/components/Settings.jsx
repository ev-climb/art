// import React from 'react';
// import '../styles.css';

// const Settings = ({ selectedYear, setSelectedYear, selectedStyle, setSelectedStyle }) => {
//   const handleSelectYear = (event) => {
//     const selectedYearValue = event.target.value;
//     localStorage.setItem('selectedYear', selectedYearValue);
//   };

//   const handleSelectStyle = (event) => {
//     const selectedStyleValue = event.target.value;
//     localStorage.setItem('selectedStyle', selectedStyleValue);
//   };
//   console.log(selectedStyle);
//   return (
//     <div className="settings">
//       <div className="settingsImage">
//         <ul>
//           <li>
//             <select
//               id="year-select"
//               value={selectedYear}
//               onChange={(event) => {
//                 setSelectedYear(event.target.value);
//                 handleSelectYear(event);
//               }}
//             >
//               <option value="All years">All years</option>
//               <option value="&lt;1500">&lt; 1500</option>
//               <option value="1500-1600">1500 - 1600</option>
//               <option value="1600-1700">1600 - 1700</option>
//               <option value="1700-1800">1700 - 1800</option>
//               <option value="1800-1900">1800 - 1900</option>
//               <option value="1900&lt;">1900 &lt;</option>
//             </select>
//           </li>
//           <li>
//             <select
//               id="style-select"
//               value={selectedStyle}
//               onChange={(event) => {
//                 setSelectedStyle(event.target.value);
//                 handleSelectStyle(event);
//               }}
//             >
//               <option value="All-styles">All styles</option>
//               <option value="avant-garde">Avant-garde</option>
//               <option value="baroque">Baroque</option>
//               <option value="cubism">Cubism</option>
//               <option value="expressionism">Expressionism</option>
//               <option value="impressionism">Impressionism</option>
//               <option value="modernism">Modernism</option>
//               <option value="neo-pop">Neo-pop</option>
//               <option value="pop-art">Pop-art</option>
//               <option value="post-impressionism">Post-impressionism</option>
//               <option value="postmodernism">Postmodernism</option>
//               <option value="primitivism">Primitivism</option>
//               <option value="renaissance">Renaissance</option>
//               <option value="romanticism">Romanticism</option>
//               <option value="street-art">Street-art</option>
//               <option value="surrealism">Surrealism</option>
//               <option value="suprematism">Suprematism</option>
//             </select>
//           </li>
//           <li>
//             <select id="artist-select">
//               <option value="All-artist">All artist</option>
//               <option value="leonardo-da-vinci">Leonardo da Vinci</option>
//               <option value="vincent-van-gogh">Vincent van Gogh</option>
//               <option value="pablo-picasso">Pablo Picasso</option>
//               <option value="claude-monet">Claude Monet</option>
//               <option value="salvador-dali">Salvador Dali</option>
//               <option value="rembrandt-van-rijn">Rembrandt van Rijn</option>
//               <option value="edvard-munch">Edvard Munch</option>
//               <option value="jackson-pollock">Jackson Pollock</option>
//             </select>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React from 'react';
import Select from 'react-select';
import '../styles.css';

const Settings = ({ selectedYear, setSelectedYear, selectedStyle, setSelectedStyle }) => {
  const yearOptions = [
    { value: 'All years', label: 'All years' },
    { value: '<1500', label: '<1500' },
    { value: '1500-1600', label: '1500-1600' },
    { value: '1600-1700', label: '1600-1700' },
    { value: '1700-1800', label: '1700-1800' },
    { value: '1800-1900', label: '1800-1900' },
    { value: '1900<', label: '1900<' },
  ];

  const styleOptions = [
    { value: 'All styles', label: 'All styles' },
    { value: 'avant-garde', label: 'Avant-garde' },
    { value: 'baroque', label: 'Baroque' },
    { value: 'cubism', label: 'Cubism' },
    { value: 'expressionism', label: 'Expressionism' },
    { value: 'impressionism', label: 'Impressionism' },
    { value: 'modernism', label: 'Modernism' },
    { value: 'neo-pop', label: 'Neo-pop' },
    { value: 'pop-art', label: 'Pop-art' },
    { value: 'post-impressionism', label: 'Post-impressionism' },
    { value: 'postmodernism', label: 'Postmodernism' },
    { value: 'primitivism', label: 'Primitivism' },
    { value: 'renaissance', label: 'Renaissance' },
    { value: 'romanticism', label: 'Romanticism' },
    { value: 'street-art', label: 'Street-art' },
    { value: 'surrealism', label: 'Surrealism' },
    { value: 'suprematism', label: 'Suprematism' },
  ];
  const artistOptions = [
    { value: 'All-artist', label: 'All artist' },
    { value: 'leonardo-da-vinci', label: 'Leonardo da Vinci' },
    { value: 'vincent-van-gogh', label: 'Vincent van Gogh' },
    { value: 'pablo-picasso', label: 'Pablo Picasso' },
    { value: 'claude-monet', label: 'Claude Monet' },
    { value: 'salvador-dali', label: 'Salvador Dali' },
    { value: 'rembrandt-van-rijn', label: 'Rembrandt van Rijn' },
    { value: 'edvard-munch', label: 'Edvard Munch' },
    { value: 'jackson-pollock', label: 'Jackson Pollock' },
  ];

  const handleSelectYear = (selectedOption) => {
    setSelectedYear(selectedOption.value);
    localStorage.setItem('selectedYear', selectedOption.value);
  };

  const handleSelectStyle = (selectedOption) => {
    setSelectedStyle(selectedOption.value);
    localStorage.setItem('selectedStyle', selectedOption.value);
  };

  return (
    <div className="settings">
      <div className="settingsImage">
        <ul>
          <li>
            <Select
              id="year-select"
              options={yearOptions}
              value={{ value: selectedYear, label: selectedYear }}
              onChange={handleSelectYear}
            />
          </li>
          <li>
            <Select
              id="style-select"
              options={styleOptions}
              value={{ value: selectedStyle, label: selectedStyle }}
              onChange={handleSelectStyle}
            />
          </li>
          <li>
            <Select
              id="artist-select"
              options={artistOptions}
              //   value={{ value: selectedStyle, label: selectedStyle }}
              //   onChange={handleSelectStyle}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Settings;

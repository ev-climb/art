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

const Settings = ({
  selectedYear,
  setSelectedYear,
  selectedStyle,
  setSelectedStyle,
  selectedArtist,
  setSelectedArtist,
}) => {
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
    { value: 'avantgarde', label: 'Avant-garde' },
    { value: 'baroque', label: 'Baroque' },
    { value: 'cubism', label: 'Cubism' },
    { value: 'expressionism', label: 'Expressionism' },
    { value: 'impressionism', label: 'Impressionism' },
    { value: 'modernism', label: 'Modernism' },
    { value: 'neopop', label: 'Neo-pop' },
    { value: 'popart', label: 'Pop-art' },
    { value: 'postimpressionism', label: 'Post-impressionism' },
    { value: 'postmodernism', label: 'Postmodernism' },
    { value: 'primitivism', label: 'Primitivism' },
    { value: 'renaissance', label: 'Renaissance' },
    { value: 'romanticism', label: 'Romanticism' },
    { value: 'street-art', label: 'Street-art' },
    { value: 'surrealism', label: 'Surrealism' },
    { value: 'suprematism', label: 'Suprematism' },
  ];
  const artistOptions = [
    { value: 'All artists', label: 'All artists' },
    { value: 'Пабло Пикассо', label: 'Пабло Пикассо' },
    { value: 'Казимир Малевич', label: 'Казимир Малевич' },
    { value: 'Марсель Дюшан', label: 'Марсель Дюшан' },
    { value: 'Барнетт Ньюмен', label: 'Барнетт Ньюмен' },
    { value: 'Ричард Гамильтон', label: 'Ричард Гамильтон' },
    { value: 'Дэн Флавин', label: 'Дэн Флавин' },
    { value: 'Джефф Кунс', label: 'Джефф Кунс' },
    { value: 'Трэйси Эмин', label: 'Трэйси Эмин' },
    { value: 'Олафур Элиассон', label: 'Олафур Элиассон' },
    { value: 'Майк Келли', label: 'Майк Келли' },
    { value: 'Леонардо да Винчи', label: 'Леонардо да Винчи' },
    { value: 'Микеланджело', label: 'Микеланджело' },
    { value: 'Рафаэль Санти', label: 'Рафаэль Санти' },
    { value: 'Эдвард Мунк', label: 'Эдвард Мунк' },
    { value: 'Эжен Делакруа', label: 'Эжен Делакруа' },
    { value: 'Винсент Ван Гог', label: 'Винсент Ван Гог' },
    { value: 'Иероним Босх', label: 'Иероним Босх' },
    { value: 'Иван Константинович Айвазовский', label: 'Иван Константинович Айвазовский' },
    { value: 'Сандро Боттичелли', label: 'Сандро Боттичелли' },
    { value: 'Альбрехт Дюрер', label: 'Альбрехт Дюрер' },
    { value: 'Рембрандт', label: 'Рембрандт' },
    { value: 'Сальвадор Дали', label: 'Сальвадор Дали' },
    { value: 'Паоло Уччелло', label: 'Паоло Уччелло' },
    { value: 'Эдгар Дега', label: 'Эдгар Дега' },
    { value: 'Рембрандт Харменс ван Рейн', label: 'Рембрандт Харменс ван Рейн' },
    { value: 'Клод Моне', label: 'Клод Моне' },
    { value: 'Поль Сезанн', label: 'Поль Сезанн' },
    { value: 'Каспар Давид Фридрих', label: 'Каспар Давид Фридрих' },
    { value: 'Мэри Кассат', label: 'Мэри Кассат' },
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(197,147,147,0.8)',
      borderRadius: '8px',
      height: '40px',
      cursor: 'pointer',
      color: '#fff',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#fff',
      fontWeight: 'bold',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#333',
      backgroundColor: state.isSelected ? '#007bff' : '#fff',
      ':hover': {
        backgroundColor: state.isSelected ? '#007bff' : '#f2f2f2',
        color: state.isSelected ? '#fff' : '#333',
      },
    }),
  };

  const handleSelectYear = (selectedOption) => {
    setSelectedYear(selectedOption.value);
    localStorage.setItem('selectedYear', selectedOption.value);
  };

  const handleSelectStyle = (selectedOption) => {
    setSelectedStyle(selectedOption.value);
    localStorage.setItem('selectedStyle', selectedOption.value);
  };

  const handleSelectArtist = (selectedOption) => {
    setSelectedArtist(selectedOption.label);
    localStorage.setItem('selectedArtist', selectedOption.value);
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
              styles={customStyles}
            />
          </li>
          <li>
            <Select
              id="style-select"
              options={styleOptions}
              value={{ value: selectedStyle, label: selectedStyle }}
              onChange={handleSelectStyle}
              styles={customStyles}
            />
          </li>
          <li>
            <Select
              id="artist-select"
              options={artistOptions}
              value={{ value: selectedArtist, label: selectedArtist }}
              onChange={handleSelectArtist}
              styles={customStyles}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Settings;

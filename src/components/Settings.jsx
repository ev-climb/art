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
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderRadius: '8px',
      height: '20px',
      width: '150px',
      cursor: 'pointer',
      color: '#fff',
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.7)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#fff',
      backgroundColor: state.isSelected ? '#007bff' : 'rgba(0,0,0,0.4)',
      ':hover': {
        backgroundColor: state.isSelected ? '#007bff' : '#f2f2f2',
        color: state.isSelected ? '#fff' : '#333',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(0,0,0,0.4)',
    }),
  };

  const handleSelectYear = (selectedOption) => {
    setSelectedYear(selectedOption.label);
    localStorage.setItem('selectedYear', selectedOption.value);
  };

  const handleSelectStyle = (selectedOption) => {
    setSelectedStyle(selectedOption.label);
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

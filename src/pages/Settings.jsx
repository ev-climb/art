import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import '../styles.css';

const Settings = ({
  selectedYear,
  setSelectedYear,
  selectedStyle,
  setSelectedStyle,
  selectedArtist,
  setSelectedArtist,
}) => {
  const [yearOptions, setYearOptions] = React.useState([]);
  const [styleOptions, setStyleOptions] = React.useState([]);
  const [artistOptions, setArtistOptions] = React.useState([]);
  const API_URL = 'https://63f1c2684f17278c9a1961ec.mockapi.io/';
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [yearsRes, stylesRes, artistsRes] = await Promise.all([
          axios.get(`${API_URL}yearOptions`),
          axios.get(`${API_URL}styleOptions`),
          axios.get(`${API_URL}artistOptions`),
        ]);

        setYearOptions(yearsRes.data);
        setStyleOptions(stylesRes.data);
        setArtistOptions(artistsRes.data);
      } catch (error) {
        alert('Какие-то проблемы на сервере :(');
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
    localStorage.setItem('selectedYear', selectedOption.label);
  };

  const handleSelectStyle = (selectedOption) => {
    setSelectedStyle(selectedOption.label);
    localStorage.setItem('selectedStyle', selectedOption.label);
  };

  const handleSelectArtist = (selectedOption) => {
    setSelectedArtist(selectedOption.label);
    localStorage.setItem('selectedArtist', selectedOption.label);
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

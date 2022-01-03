import React, { useState, useEffect } from "react";
import axios from "axios";
import HandleRender from "./components/HandleRender";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setCountriesCopy(response.data);
    });
  }, []);

  const handleKey = () => {
    setCountriesCopy(
      countries.filter((country) => {
        return country.name.common.toLowerCase().includes(inputValue);
      })
    );
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSelectedCountry("");
  };

  const handleShow = (country) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        setSelectedCountry(response.data[0]);
      });
  };

  return (
    <div>
      <label>Find countries:</label>
      <input value={inputValue} onChange={handleChange} onKeyUp={handleKey} />
      <HandleRender
        selectedCountry={selectedCountry}
        handleShow={handleShow}
        countriesCopy={countriesCopy}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CountrySingle = ({ country }) => {
  const [weather, setWeather] = useState();

  const getWeather = async () => {
    const countryWeather = await axios.get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name.common}`
    );
    setWeather(countryWeather.data.current);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Language</h2>
      {Object.values(country.languages).map((language) => {
        return <p key={language}>{language}</p>;
      })}
      {<img src={country.flags.png} alt="" />}

      {/* {weather&&  <p>Temperature: {weather.temperature}</p>} */}
      {weather ? (<><p>Temperature: {weather.temperature} Celsius</p>
      <img src={weather.weather_icons} alt="" />
      <p>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</p> </>)
      : null}
    </>
  );
};

export default CountrySingle;

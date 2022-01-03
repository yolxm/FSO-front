import React, {useState, useEffect } from "react"; 
import axios from "axios";
import "./App.css";


function App() {
  const [countries, setCountries] = useState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      console.log(response.data);
      setCountries(response.data)
      setCountriesCopy(response.data);
    })
  }, [])

  const handleKey = () => {
    setCountriesCopy(
      countries.filter((country) => {
        return country.name.common.toLowerCase().includes(inputValue);
      })
    );
  }

  var result;

  const handleShow = (country) => {
    result = (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Language</h2>
        {
          Object.values(country.languages).map(language => {
            return <p key={language}>{language}</p>
          })
        }
        {
          <img src={country.flags.png} alt="" />
        }
      </>
    )
  }

  if ( countriesCopy.length == 1 ){
    result = (
      <>
      <h1>{countriesCopy[0].name.common}</h1>
      <p>Capital: {countriesCopy[0].capital}</p>
      <p>Population: {countriesCopy[0].population}</p>
      <h2>Language</h2>
      {
        Object.values(countriesCopy[0].languages).map(language => {
          return <p key={language}>{language}</p>
        })
      }
      {
        <img src={countriesCopy[0].flags.png} alt="" />
      }
      </>
    )
  }
  else if ( countriesCopy.length > 10 ){
    result = <p>Too many matches, specify another filter</p>
  } else{
    result = countriesCopy.map((country) => { return <p key={country.name.common}>{country.name.common} <button onClick={() => handleShow(country)}>Show</button></p> })
  }

  

   

  return (
    <div>
    <label>Find countries:</label>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyUp={handleKey}/>
    {result}
  </div>
  )
}

export default App;

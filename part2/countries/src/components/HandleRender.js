import React from "react";
import CountrySingle from "./CountrySingle";
import CountryList from "./CountryList";

const HandleRender = ({ selectedCountry, countriesCopy, handleShow }) => {
  if (selectedCountry) {
    return <CountrySingle country={selectedCountry} />;
  } else {
    if (countriesCopy.length === 1) {
      return <CountrySingle country={countriesCopy[0]} />;
    } else if (countriesCopy.length > 1 && countriesCopy.length < 10) {
      return (
        <CountryList countriesCopy={countriesCopy} handleShow={handleShow} />
      );
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  }
};

export default HandleRender;

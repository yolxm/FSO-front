import React from "react";

const CountryList = ({ countriesCopy, handleShow }) => {
  return (
    <ul>
      {countriesCopy.map((country) => {
        return (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => handleShow(country.name.common)}>
              Show
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryList;

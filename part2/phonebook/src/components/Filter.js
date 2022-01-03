import React from "react";

export default function Filter({ search, setSearch, handleChange }) {
  return (
    <div>
      filter shown with:
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleChange}
      ></input>
    </div>
  );
}

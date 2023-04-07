import React from "react";

import "./Search.css";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

import React from 'react'

const SearchEpisode = ({ searchEpisode, setSearchEpisode }) => {
  const handleSearch = (e) => {
    setSearchEpisode(e.target.value);
  };
  return (
    <div className="episode-search">
      <input
        type="text"
        name="searchBar"
        placeholder="Search"
        onChange={handleSearch}
        value={searchEpisode}
      />
    </div>
  );
};

export default SearchEpisode

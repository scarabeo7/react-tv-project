import React, { useState } from "react";
import SearchEpisode from "./SearchEpisode";

const Episode = ({ data }) => {
  const [searchEpisode, setSearchEpisode] = useState("");

  // live search functionality to filter through episode name and summary
  const filteredInput = data.filter((char) => {
    return (
      char.name.toLowerCase().includes(searchEpisode.toLocaleLowerCase()) ||
      char.summary.toLowerCase().includes(searchEpisode.toLocaleLowerCase())
    );
  });
  // function adds "0" to number to give season and number a double digit //
  const zeroPadded = (episodeCode) => {
    return episodeCode.toString().padStart(2, 0);
  };
  return (
    <>
      <SearchEpisode setSearchEpisode={setSearchEpisode} />
      <div className="main-container">
        {filteredInput.map((el, index) => (
          <div key={index} className="episode-container">
            <h2>
              {el.name} - S{zeroPadded(el.season)} E{zeroPadded(el.number)}
            </h2>
            <img src={el.image.medium !== null ? el.image.medium : ""} alt="" />
            <p dangerouslySetInnerHTML={{ __html: el.summary }}></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Episode;

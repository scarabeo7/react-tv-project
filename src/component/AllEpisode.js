import React from 'react'

const AllEpisode = ({data}) => {
    console.log(data)
    const zeroPadded = (episodeCode) => {
      return episodeCode.toString().padStart(2, 0);
    }
    return (
      <div className="main-container">
        {data.map((el, index) => (
          <div key={index} className="episode-container">
            <h2>
              {el.name} - S{zeroPadded(el.season)} E{zeroPadded(el.number)}
            </h2>
            <img src={el.image.medium !== null ? el.image.medium : ""} alt="" />
            <p dangerouslySetInnerHTML={{ __html: el.summary }}></p>
          </div>
        ))}
      </div>
    );
}

export default AllEpisode

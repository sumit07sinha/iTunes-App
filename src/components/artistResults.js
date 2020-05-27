import React from "react";

const artist = (props) => {
  const { artistName, country, trackName, artworkUrl100, primaryGenreName, previewUrl } = props.artistData;
  return (
    <div className="artist-list">
      <div className="artist-list-item">
        <div className='artist-avatar' style={{
          backgroundImage: `url(${artworkUrl100})`
        }} />

        <div className='artist-details'>
          <p>{trackName}</p>
          <p> {artistName}</p>
          <p> {country}</p>
          <p>{primaryGenreName}</p>
        </div>
        <div className='artist-play-button'>

          <a target="blank" href={`${previewUrl}`}>
            <div className="play-artist"></div>
          </a>
        </div>
      </div>
    </div >
  );
};

export default artist;

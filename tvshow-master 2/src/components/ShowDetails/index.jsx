import React from 'react';

import "./styles.scss";
const ShowDetails = (props) => {
    const { show } = props;
  return (
    <div className="show-details card">
        <h1>{show.name}</h1>
        <div className="image-summary">
          <div className="image">
            <img src={show.image && show.image.medium} alt={show.name} />
          </div>
          <div className="summary">
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <div className="genre-container">
              {
                show.genres.map(genre => <span key={genre}>{genre}</span>)
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default ShowDetails;

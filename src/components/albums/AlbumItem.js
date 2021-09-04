import React from "react";

const Albumitem = ({ item }) => {
  const albumTitle = item["im:name"].label;
  const albumCover = item["im:image"]["2"].label;
  const preview = item.id.label;
  const id = item.id.attributes["im:id"];
  const artist = item["im:artist"].label;
  const genre = item.category.attributes.label;
  const releaseDate = item["im:releaseDate"].attributes.label;

  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={albumCover} alt="" />
          </div>
          <div className="card-back">
            <h2>
              <b>{albumTitle}</b>
            </h2>
            <ul key={id}>
              <li>
                <b> Artist: </b> {artist}
              </li>
              <li>
                <b> Genre: </b> {genre}
              </li>
              <li>
                <b>Release Date: </b> {releaseDate}
              </li>
              <li>                
                <a href={preview} target="_blank" rel="noreferrer"><i className="far fa-play-circle"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  
};

export default Albumitem;

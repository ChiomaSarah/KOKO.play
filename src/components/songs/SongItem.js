const Songitem = ({ item }) => {
  const songTitle = item["im:name"].label;
  const albumCover = item["im:image"]["2"].label;
  const songCollection = item["im:collection"]["im:name"].label;
  const preview = item.id.label;
  const content = item["im:contentType"]["im:contentType"].attributes.label;
  const id = item.id.attributes["im:id"];
  const artist = item["im:artist"].label;
  const genre = item.category.attributes.label;

  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={albumCover} alt="" />
          </div>
          <div className="card-back">
            <h2>
              <b>{songTitle}</b>
            </h2>
            <ul key={id}>
              <li>
                <b>Collection: </b> {songCollection}
              </li>
              <li>
                <b>Content: </b> {content}
              </li>
              <li>
                <b>Artist: </b> {artist}
              </li>
              <li>
                <b>Genre: </b> {genre}
              </li>
              <li>
                <a href={preview} target="_blank" rel="noreferrer">
                  <i className="far fa-play-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Songitem;

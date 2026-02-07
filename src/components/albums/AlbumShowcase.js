import { useState, useEffect } from "react";
import AlbumGrid from "./AlbumGrid";

function AlbumShowcase() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch(
          "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
        );
        const data = await response.json();
        console.log(data);

        setItems(data.feed.entry);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchAlbums();
  }, []);

  if (setError.message) {
    error = { setError };
  }

  return (
    <>
      <div className="container songs">
        <div
          className="text-warning mb-3 mt-5 text-center"
          style={{ fontSize: "14px" }}
        >
          {error}
        </div>
        <AlbumGrid isLoading={isLoading} items={items} />
      </div>
    </>
  );
}

export default AlbumShowcase;

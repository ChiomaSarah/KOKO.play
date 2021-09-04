import React, { useState, useEffect } from "react";
import SongGrid from "./SongGrid";

function SongShowcase() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://itunes.apple.com/us/rss/topsongs/limit=100/json");
        const data = await response.json();
        console.log(data);

        setItems(data.feed.entry);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchItems();
  }, []);

  if (setError.message) {
    error = { setError };
  }

  return (
    <>
      <div className="container">
        <div className="text-warning mb-3 mt-5 text-center" style={{ fontSize: "14px" }}>
          {error}
        </div>
        <SongGrid isLoading={isLoading} items={items} />
      </div>
    </>
  );
}

export default SongShowcase;

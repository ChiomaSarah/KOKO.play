import { useState } from "react";
import Spinner from "../loader/Spinner";
import SongItem from "./SongItem";

const AlbumGrid = ({ items, isLoading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {/* create a search bar to find a song */}
        <input
          className="form-control"
          type="search"
          placeholder="Find a song..."
          id="search"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <section className="cards">
          {items
            .filter((val) => {
              if (searchQuery === " ") {
                return val;
              } else if (
                val["im:name"].label
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                val["im:artist"].label
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                val.category.attributes.label
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ) {
                return val;
              } else {
                return "";
              }
            })
            .map((item, index) => (
              <SongItem key={index} item={item}></SongItem>
            ))}
        </section>
      </>
    );
  }
};

export default AlbumGrid;

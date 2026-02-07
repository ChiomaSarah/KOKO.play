import { useState } from "react";
import AlbumItem from "./AlbumItem";
import Spinner from "../loader/Spinner";

const AlbumGrid = ({ items, isLoading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {/* create a search bar to find an album */}
        <input
          className="form-control"
          type="search"
          placeholder="Find an album..."
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
                  .includes(searchQuery.toLowerCase()) ||
                val["im:releaseDate"].attributes.label.includes(searchQuery)
              ) {
                return val;
              } else {
                return "";
              }
            })
            .map((item, index) => (
              <AlbumItem key={index} item={item}></AlbumItem>
            ))}
        </section>
      </>
    );
  }
};

export default AlbumGrid;

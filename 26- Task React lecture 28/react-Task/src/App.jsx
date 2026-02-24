import { useState, useEffect, createContext } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo.jsx";
import searchIcon from "./assets/searchIcon.svg";
import ImageContainer from "./components/ImageContainer/ImageContainer";

export const QueryContext = createContext("");

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization:
          "WMvhzyj0UqoHcMglyd5Wxw4iDVM8iWU4GbSkgXpxJZz0vN6p5cwJ2fE3",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.photos);
        console.log(data.photos);
      });
  };

  return (
    <QueryContext value={query}>
      <div className="body">
        <Logo />
      </div>
      <div className="photoMain">
        <form onSubmit={handleSubmit}>
          <div className="searchContainer">
            <img className="searchIcon" src={searchIcon} alt="" />
            <input
              className="searchInput"
              type="text"
              placeholder="Search for beautiful photos..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button type="submit" className="searchButton">
              Search
            </button>
          </div>
          <div className="photo-choices">
            <span>popular:</span>
            <button type="submit" className="choices-buttons">
              Nature
            </button>
            <button type="submit" className="choices-buttons">
              Ocean
            </button>
            <button type="submit" className="choices-buttons">
              City
            </button>
            <button type="submit" className="choices-buttons">
              Mountains
            </button>
            <button type="submit" className="choices-buttons">
              Sky
            </button>
          </div>
        </form>
      </div>
      <p className="search-query">"{query}"</p>
      <div className="images-display">
          <ImageContainer images={images} />
      </div>
    </QueryContext>
  );
}

export default App;

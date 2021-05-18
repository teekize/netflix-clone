import React, { useState, useEffect } from "react";
import axios from "./axio";
import requests from "./request";
import "./Banner.css";
// const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );

      return data.data.results;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //   console.log(movies);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* have a background image to the header */}
        {/* make a title */}
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        {/* have two buttons */}

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        {/* have a description */}

        <h1 className="banner_description">
          {truncate(movies?.overview, 200)}
        </h1>
      </div>

      <div className="banner-fadedbottom"></div>
    </header>
  );
}

export default Banner;

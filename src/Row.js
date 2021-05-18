import React, { useState, useEffect } from "react";
import axios from "./axio";
import "./Row.css";
import Youtube from "react-youtube";
const baseImgUrl = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, isLarge }) {
  // /const {movies, setMovies}=useState([]);
  // a snippet of code that runs when a condition is meet

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request.data.results;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  async function handleClick(movie) {
    if (trailerUrl) {
      setUrl("");
    }
    let trailerurl = await axios.get(
      `/movie/${movie.id}/videos?api_key=9b6c4954d078b2cc5ee10271f2b00c26`
    );
    setUrl(trailerurl.data.results[0]?.key);
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/*contains several elements with row poster */}

        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLarge && "row_posterlarge"}`}
              src={`${baseImgUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      {/* we then have a container with posters in it */}
    </div>
  );
}

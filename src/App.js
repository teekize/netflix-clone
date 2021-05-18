// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./request";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* make a nav bar */}
      {/* banner */}
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
// fetchUrl={requests.fetchNetflixOriginals}
// fetchUrl={requests.fetchTrending}
export default App;

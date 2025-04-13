import React from "react";
import "./CSS/Favourites.css";
import { useMovieContext } from "./Context/MovieContext";
import MovieCard from "./MovieCard";

function Favourite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favourites">
        <h2> Your Favourites</h2>
      
      <div className="movies-grid">
        {favorites.map(function (movie,index) {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
      </div> 
    );
  }
  return (
    <div className="favourites-empty">
      <h2> No Favourites Movies Yet</h2>
      <p>start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favourite;

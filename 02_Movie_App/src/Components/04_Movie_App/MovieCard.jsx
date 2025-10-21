import React from "react"
import Home from "./Home";
import "./CSS/Moviecard.css"
import {useMovieContext} from "./Context/MovieContext"

function Moviecard({movie}){
  const { addToFavorites, removeFromFavorites, isFavorites} = useMovieContext()
  const favorite = isFavorites(movie.imdbId);

  function handleFavoriteClick(event){
    event.preventDefault()
    if(favorite)removeFromFavorites(movie.imdbId);
    else addToFavorites(movie);
  }
 
  return (
    <div className="movie-card">
     
     <div className="movie-poster">
       
       <img src={movie.Poster} alt={movie.Title}/>
        <div>{movie.Year}</div>
       <div className="movie-overlay">
        
         <button className={`favourite-btn ${favorite ? "active" : "" }`} onClick={handleFavoriteClick}>
            🤩
         </button>
       
       </div>
    </div>
     
     <div className="movie-info">
        <h3> {movie.title}</h3>
         <p>{movie.release_date}</p>
     </div>

    </div>
  )
}
 export default Moviecard;

 
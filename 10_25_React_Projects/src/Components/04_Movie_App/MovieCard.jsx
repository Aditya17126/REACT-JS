import React from "react"
import Home from "./Home";
import "./CSS/Moviecard.css"

function Moviecard({movie}){
  
  function handleClick(){
    alert('Clicked');
  }
 
  return (
    <div className="movie-card">
     
     <div className="movie-poster">
       
       <img src={movie.Poster} alt={movie.Title}/>
        <div>{movie.Year}</div>
       <div className="movie-overlay">
        
         <button className="favourite-btn" onClick={handleClick}>
            ❤️❤️
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

 
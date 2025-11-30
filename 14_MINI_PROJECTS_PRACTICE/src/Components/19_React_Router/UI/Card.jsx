import React from "react";
import "./card.css"; 
import { NavLink } from "react-router-dom";

function Card({currMovie}) {
  const { Poster, imdbID } = currMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
             <NavLink to={`/movie/${imdbID}`}> {/* //* curly braces kykoi js ki duniya main k=ghus rahe hai  */ }
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;

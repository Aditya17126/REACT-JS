import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../UI/Card";
  
function Movies() {

  const moviesData = useLoaderData();
  console.log(moviesData);
  
  return (
    <div>
      <h1>Movies Page</h1>
      <ul className="container grid grid-four--cols">
        {moviesData &&
          moviesData.Search.map((currMovie) => {
            return <Card key={currMovie.imdbId} currMovie={currMovie} />;
          })}
      </ul>
    </div>
  );
}

export default Movies;

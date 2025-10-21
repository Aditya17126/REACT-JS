import React from "react";
import seriesData from "../Api/seriesData.json";
import NetflixCard from "./NetflixCard";

function NetflixSeries() {
 
  return (
    <ul className="grid grid-three--cols">
     
      {seriesData.map((currElem) => {
         return (
          <NetflixCard key={currElem.id} data = {currElem}/>
         )
      })}
      
    </ul>
  );
}

export default NetflixSeries;

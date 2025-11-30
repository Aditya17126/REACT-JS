import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getMovie } from "./Services/GetServices";

function Movie() {
  const [data, setData] = useState([])
  // const API =;

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
       console.error("Error Message :" , error.message);
       console.error("Error Status:" , error.response.status);
       console.error("Error data:" , error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <ul className="conatiner grid grid-four--cols">
     {
       data.map((currElem) =>{
        return <Card key = {currElem.imdbID} movieData = {currElem} />
       })
     }
  </ul>;
}

export default Movie;

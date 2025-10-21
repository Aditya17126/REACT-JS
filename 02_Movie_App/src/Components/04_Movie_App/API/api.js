import { useEffect } from "react"

const API_KEY = "ee53271b"
const BASE_URL = "https://www.omdbapi.com/"


async function getPopularMovies(query) {
  
  if(!query){
    console.error("No search Query Provided");
    return ;
  }
  
  const url = `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;
  
  console.log(url);

   try{
     const response = await fetch(url);
     const  data = await response.json();

     if(data.Response === "True"){
       return data.Search;
     }
     else{
      console.error("Error from OMDB API : ", data.Error);
      return [];
     }

    }
    catch(error){
     console.error("Network error", error);
     return [];
    }
}



export default getPopularMovies;
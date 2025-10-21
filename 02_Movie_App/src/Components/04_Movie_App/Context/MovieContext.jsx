import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'


const MovieContent = createContext()

 export const useMovieContext = () => useContext(MovieContent);

 function MovieProvider({children}){
   const [favorites , setFavorites] = useState([]);
  
  useEffect(function(){
    const storedFavs = localStorage.getItem("favorites");

    if(storedFavs) 
      setFavorites(JSON.parse(storedFavs));
  }, [])
  
  useEffect(() => {
   localStorage.setItem('favorites', JSON.stringify(favorites))
  
  }, [favorites])
  
  function addToFavorites(movie) {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.imdbId === movie.imdbId)) {
        return [...prev, movie];
      }
      return prev;
    });
  }
  
  function removeFromFavorites(movieId){
    setFavorites((prev) =>
      prev.filter((movie) => movie.imdbId !== movieId)
    );
  }
   
  function isFavorites(movieId){
    return favorites.some(function(movie){
      return movie.imdbId === movieId;
    })
  }
  
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorites
  }

   return (
     <MovieContent.Provider value={value}>
       {children}

     </MovieContent.Provider>
   )
 }
 

export default MovieProvider;


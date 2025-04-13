import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import "./CSS/Home.css"
import getPopularMovies from "./API/api.js"

function Home() {
  const [searchQuery ,setSearchQuery] = useState("")
  const [error , setError] = useState(null);
  const [movies , setMovies] = useState([]);
  const [loading , setLoading] = useState(true);

 
   async function handleSearch(event) {
    event.preventDefault();
    
    if (!searchQuery.trim()) {
      setError('Please enter a search term.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const fetchedMovies = await getPopularMovies(searchQuery);
      if (fetchedMovies.length === 0) {
        setError('No movies found.');
      }
      setMovies(fetchedMovies);
    } 
    catch (error) {
      console.log('Error fetching movies:', error);
      setError('Failed to load movies. Please try again later.');
    } 
    finally {
      setLoading(false);
    }
  }
  
  return (

    <div className='home'>
     
      <form onSubmit={handleSearch} className='search-form' action="">
        
        <input 
          type="text"  
          placeholder='Search For Movies ....' 
          className='search-input'
          value ={searchQuery}
        
          onChange={ function(event){
           console.log(event)
           console.log(event.target.value);
           setSearchQuery(event.target.value);
         }}
        />
        
        <button type='submit' className='search-button'> Search</button>
      
      </form>
       
       {loading && <p>Loading ...</p>}
       {error && <p> {error}</p>}
          
       <div className='movies-grid'>
           {movies.map(function(movie ,index )
            {
               return(<MovieCard movie={movie} key = {index}/>)
            } 
          )}
       </div>

    </div>
  )
}

export default Home;
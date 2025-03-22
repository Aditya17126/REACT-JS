import { useState } from 'react'
import "./Components/Movie_App/CSS/App1.css"
import RandomColor from './Components/Random_Color';
import Card from './Components/State_Lifting_(CONCEPT)/Card';
import StarRating from './Components/Star_Rating';
import Moviecard from './Components/Movie_App/MovieCard';
import Home from './Components/Movie_App/Home';
import { Routes,Route } from 'react-router-dom';
import Favourite from './Components/Movie_App/Favourite';
import NavBar from './Components/Movie_App/NavBar';

function App() {
  const [name, setName] = useState(0)
  const movieNum = 1;
  
  return (
    <>
      {/* (1.) STATE LIFTING CONCEPT */}
      {/* <Card title = "Card1 "name = {name}  setName ={setName}/>
      <Card title = "Card2 " name = {name}  setName ={setName}/> */}
   
     {/* (2.) RANDOM COLOR PROJECT */}
     {/* <RandomColor/> */}
 
     {/* (3.) STAR RATING PROJECT  */}
     {/* <StarRating noOfStars={100}/> */}
  
      {/* (4.) MOVIE APP PROJECT */}
       
      <NavBar/>
       <main className='main-content'>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Favourite' element={<Favourite/>}/>

        </Routes>

       </main>
    
       
    </>
  )
}

export default App

import { useState } from "react";
// import RandomColor from './Components/Random_Color';
// import StarRating from './Components/Star_Rating';
import "./Components/04_Movie_App/CSS/App1.css";
import Moviecard from "./Components/04_Movie_App/MovieCard";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/04_Movie_App/Home";
import Favourite from "./Components/04_Movie_App/Favourite";
import NavBar from "./Components/04_Movie_App/NavBar";
import MovieProvider from "./Components/04_Movie_App/Context/MovieContext";

// import ImageSlider from './Components/05_Image_Slider';

function App() {
  const [name, setName] = useState(0);
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
    
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>

      {/* <ImageSlider url={'https://api.pexels.com/v1/search?query=china'} limit={"20"}/> */}
    </>
  );
}

export default App;

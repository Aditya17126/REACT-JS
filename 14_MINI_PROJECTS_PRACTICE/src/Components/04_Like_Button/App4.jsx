import {FavoriteBorderOutlined} from '@mui/icons-material';
import React, { useState } from 'react'
import './style4.css'
import { CircularProgress } from '@mui/material';

function App4() {
  const [liked , setLiked]  = useState(false);
  const [isFetching , setIsFetching] = useState(false);
  const [error , setError] = useState(null); 
  
  const handleLikedUnliked = async ()=>{
     setIsFetching(true)
     setError(null)

    //  try{
    //     const response = await fetch("https://cat-fact.herokuapp.com/facts/random",

    //      { method:"POST",
    //       headers : {"Content-Type":"application/json"},
    //       body:JSON.stringify({
    //         action:liked? "unliked" : "like" 
    //       }),
    //      })
    //      console.log(response.json())
    //  }
    //  finally{
    //    setIsFetching(false)
    //  }
      setLiked(!liked) 
  }

  return (
    <div className='app'>
      <h1>4. LIKED BUTTONS AND LOADING BUTTONS</h1>
      <br />
      <br />
      <button className={`likedBtn ${liked == true? "liked" : ""}`} onClick={handleLikedUnliked}>
           <FavoriteBorderOutlined /> {liked ? "Liked" : "Like"}
      </button>
       <button className='loadBtn'>
          {"LOADING"}
          <CircularProgress/>
      </button>
      <br />
      <br />
    </div>
  )
}

export default App4
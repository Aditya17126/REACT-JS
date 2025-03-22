import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './styles.css';


function StarRating({noOfStars = 5}) {
 
  const [rating,setRating] = useState(0);
  const [hover , setHover] = useState(0);

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex){
   setHover(getCurrentIndex)
  }
  
  function handleMouseLeave(getCurrentIndex){
   setHover(rating);
  }


  return (
    <div className='star-rating'>
      {
         [...Array(noOfStars)].map(function(_,index){
           index += 1;

          return <FaStar
           key = {index}
           
           className={index <= (hover || rating) ? 'active' : 'inactive'}
           
           onClick={function(){
             handleClick(index)
           }}
           
           onMouseMove={function(){
             handleMouseEnter(index);
           }}
           
           onMouseLeave={function(){
             handleMouseLeave(index);
           }}
           size={40}
          />
         })
      }
      
    </div>
  )
}

export default StarRating

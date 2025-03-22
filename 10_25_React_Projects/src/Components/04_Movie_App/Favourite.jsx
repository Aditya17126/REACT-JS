import React from 'react'
import "./CSS/Favourites.css"

function Favourite() {
  return (
    <div className='favourites-empty'>
      <h2> No Favourites Movies Yet</h2>
      <p>
        start adding movies to your favorites and they will appear here
      </p>
    </div>
  )
}

export default Favourite
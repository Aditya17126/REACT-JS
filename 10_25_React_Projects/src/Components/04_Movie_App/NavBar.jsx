import React from 'react'
import { Link } from 'react-router-dom'
import "./CSS/NavBar.css"

function NavBar() {
  return (
    <nav className='navbar'>

    <div className='navbar-brand'>
      <Link to="/">Movie App</Link>
    </div>
    <div className='navbar-links'>
       <Link to="/" className = "navbar-link">Home</Link>
       <Link to="/Favourite" className = "navbar-link">Favourite</Link>
    </div>


    </nav>
    
  )
}

export default NavBar
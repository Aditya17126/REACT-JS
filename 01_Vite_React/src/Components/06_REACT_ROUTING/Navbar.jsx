import React from 'react'
import Dashboard from './Dashboard'
import About from './About'
import Home from './Home'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
       <ul>
         <li>
           <NavLink to = "/" className={({isActive}) => isActive ? "active-link" : ""}> Home </NavLink>
         </li>
         
          <li>
            <NavLink to = "/about"className={({isActive}) => isActive ? "active-link" : ""}> About  </NavLink>
          </li> 

          <li>
            <NavLink to = "/dashboard" className={({isActive}) => isActive ? "active-link" : ""}> Dashboard </NavLink>
          </li>
         
       </ul>
    </div>
  )
}

export default Navbar
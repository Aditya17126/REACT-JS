import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function NavBar() {
  return (
    <nav className="navBar">
     
      <ul className="nav">
        
        <div className="logo">
          <img src="urbanLogo.png" alt="" />
        </div>

          <li>Beauty</li>
          <li>Revamp</li>
          <li>Native</li>
      </ul>

      <article className="searchInputs">
        <div className="input1">
          <FaLocationDot/>
          <input type="text" placeholder="Connaught Place ,Delhi" />
        </div>
        <div className="input2">
          <CiSearch/>
          <input type="text" placeholder="Search for Facial" />
        </div>
      </article>

      <article className="cartSection"> 
        <div className="cartCont">
          <FaShoppingCart/>
        </div>
        <div className="profileLogo">
          <FaRegUser/>
        </div>
      </article>
    </nav>
  );
}

export default NavBar;

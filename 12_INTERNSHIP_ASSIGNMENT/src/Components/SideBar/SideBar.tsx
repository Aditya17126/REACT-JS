import { useState } from "react";
import "./SideBar.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { SideBarData } from "./SideBarData";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className= {`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logout-icon" onClick={handleOpen}>
          {isOpen ? (
            <FaAngleDoubleLeft size={35} />
          ) : (
            <FaAngleDoubleRight size={35} />
          )}
        </div>
        <div className="logo">
           <h2>{isOpen ? 'Apps' :''}</h2>
        </div>
      </div>

      <nav className="nav-menu">
         <ul>
            {SideBarData?.map((item ,idx)=>(
                  <li key={idx}>
                    <a href={item.path}>
                      {item.Icon }
                      {isOpen ? item.title : ""}
                    </a>
                  </li>
            )) }
         </ul>
      </nav>
    </div>
  );
}

export default SideBar;

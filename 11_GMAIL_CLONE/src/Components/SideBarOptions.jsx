import React from 'react'
import "./CSS/SideBarOptions.css"


function SideBarOptions({Icon , title , number,selected}) {
  return (
    <div className = {`sidebarOptions && ${selected && "sidebarOptions__active"}`}>
      <Icon/>
       <h3> {title}</h3>
       <p>{number}</p>
    </div>
  )
}

export default SideBarOptions
import React from 'react'
import "./CSS/Section.css"
import EmailList from './EmailList'

function Section({Icon , title , color , selected}) {
  return (
    <div className={`section ${selected && "section__selection"}`}
     style={{
       borderBottom:`3px solid ${color}`,
       color:`${selected && color}`
     }}
    >
      <Icon/>
      <h4>{title}</h4>
    </div>
  )
}

export default Section
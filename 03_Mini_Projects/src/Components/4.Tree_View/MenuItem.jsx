import React, { useState } from 'react'
import MenuList from './MenuList'
import { Minus, Plus } from 'lucide-react';


function MenuItem({item}) {
  const [displayCurrentChildren , setDisplayCurrentChildren] = useState({});
   
  function handleToggleChildren(getCurrentLabel){
     setDisplayCurrentChildren({
      ...displayCurrentChildren , [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel],
     })
  }
  console.log(displayCurrentChildren);

  return (
    <li > 
      <div className='menuItem'>
         <h2 >{item.label}</h2>
        {
           item && item.children && item.children.length ? 
           <span style={{cursor : "pointer"}} onClick= {()=> {handleToggleChildren(item.label)}}>
             {
                displayCurrentChildren[item.label] ? <Minus/> : <Plus/>
             }
           </span> : null
         }
      </div>
         {
           item && item.children && item.children.length > 0  && displayCurrentChildren[item.label]? 
           <MenuList list={item.children} /> : null
         }
      

    </li>
  )
}

export default MenuItem
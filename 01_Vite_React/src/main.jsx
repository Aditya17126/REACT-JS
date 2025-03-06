import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>CUSTOM APP !</h1>
    </div>
  ) 
}
const ReactElem = {
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click me to visit google'
}
 const ReactanElem = (
  <a href="https://google.com" target='_blank'>Click Me To Visit Google</a>
 )
 const React_ELem = React.createElement( 
  'a',
  {href: 'https://google.com' ,target:'_blank'},
  'Click me to VISIT GOOGLE'
 )
ReactDOM.createRoot(document.getElementById('root')).
render(

  // {/* <App/>  */}
  // {/* <MyApp/> */}
    //  {/* ReactElem */}
     ReactanElem
    //  {/* React_ELem */}
    
)

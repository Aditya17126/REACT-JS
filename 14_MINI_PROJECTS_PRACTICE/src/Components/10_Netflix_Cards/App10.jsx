import React from 'react'
import NetflixSeries from './NetflixSeries'
// import './Netflix.css'
import './Netflix.module.css';
import EventHandling from './EventHandling';

function App10() {
  return (
   <section  className='container_Netflix'>
     <h1 className='card-heading'>List of Best Netflix Series</h1>
     <NetflixSeries/> 
     {/* <EventHandling/> */}
   </section>

  )
}  

export default App10
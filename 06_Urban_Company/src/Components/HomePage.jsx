import React from 'react'
import NavBar from './NavBar'
import HomeServices from './HomeServices'
import BookingSection from './BookingSection'
import NewWorthy from './NewWorthy'

function HomePage() {
  return (
    <div>
       <NavBar/>
       <HomeServices/>
       <BookingSection/>
       <NewWorthy/>
    </div>
  )
}

export default HomePage
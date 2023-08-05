import React from 'react'
import Slider from './homepage/Slider'
import About from './homepage/About'
import FAQ from './homepage/FAQ'
import Gallery from './homepage/Gallery'
import PastEvents from './homepage/PastEvents'
import LatestEvents from './homepage/LatestEvents'
import Team from './homepage/Team'
import Testimonials from './homepage/Testimonials'
import EventsSection from './EventsSection'

function Home() {
  return (
    <>
        <Slider/>
        <About/>
        <LatestEvents/>
        <PastEvents/>
        <Gallery/>
        <FAQ/>
        <Team/>
        <Testimonials/>
        {/* <EventsSection/> */}

    </>
  )
}

export default Home
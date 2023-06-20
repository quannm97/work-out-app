import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Plans from './Plans'
import PlansTrainer from './PlansTrainer'
import PickTrainer from './PickTrainer'
import Banner from './Banner'
import ChooseUs from './ChooseUs'
import Testimonials from './Testimonials'
import Faq from './Faq'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Plans/>
        <PlansTrainer/>
        <PickTrainer/>
        <Banner/>
        <ChooseUs/>
        <Testimonials/>
        <Faq/>
    </>
  )
}

export default Home
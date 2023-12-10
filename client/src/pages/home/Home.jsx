import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import DivisionTutors from '../../components/home/DivisionTutors'
import SearchTutorJobs from '../../components/home/SearchTutorJobs'
import PopularTutors from '../../components/home/PopularTutors'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DivisionTutors />
      <SearchTutorJobs />
      <PopularTutors />
    </div>
  )
}

export default Home

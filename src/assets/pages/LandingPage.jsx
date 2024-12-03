import React from 'react'
import HomeHero from '../components/HomeHero'
import FeaturedOn from '../components/FeaturedOn'
import FeaturesTwo from '../components/FeaturesTwo'
import FeatureThree from '../components/FeatureThree'
import FeatureFour from '../components/FeatureFour'
import FeatureFive from '../components/FeatureFive'
import FeatureSeven from '../components/FeatureSeven'

function LandingPage() {
  return (
    <>
      <HomeHero/>
           <FeaturedOn/>
      <div id='feature'>
        <FeaturesTwo/>
      </div>
      <FeatureThree/>
      <FeatureFour/>
      <FeatureFive/>
      <FeatureSeven/> 
    </>
  )
}

export default LandingPage
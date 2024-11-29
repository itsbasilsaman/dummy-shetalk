 import React from 'react'
 
import HomeHero from './assets/components/HomeHero'
import Header from './assets/components/Header'
import FeaturedOn from './assets/components/FeaturedOn'
import FeaturesTwo from './assets/components/FeaturesTwo'
import FeatureThree from './assets/components/FeatureThree'
import FeatureFour from './assets/components/FeatureFour'
import FeatureFive from './assets/components/FeatureFive'
import FeatureSeven from './assets/components/FeatureSeven'
import Footer from './assets/components/Footer'
// import { Routes , Route} from 'react-router-dom'
 
 function App() {
   return (
     <>
      <Header/>
     <div id='home'>
       <HomeHero/>
     </div>
    
      <FeaturedOn/>
      <div id='feature'><FeaturesTwo/></div>
      <FeatureThree/>
      <FeatureFour/>
      <FeatureFive/>
      <FeatureSeven/>
      <Footer/>     
     </>
   )
 }
 
 export default App
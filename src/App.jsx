 import React from 'react'
 
import HomeHero from './assets/components/HomeHero'
import Header from './assets/components/Header'
import FeaturedOn from './assets/components/FeaturedOn'
import FeaturesTwo from './assets/components/FeaturesTwo'
import FeatureThree from './assets/components/FeatureThree'
import FeatureFour from './assets/components/FeatureFour'
import FeatureFive from './assets/components/FeatureFive'
// import FeatureSix from './assets/components/FeatureSix'
import FeatureSeven from './assets/components/FeatureSeven'
import Footer from './assets/components/Footer'
 
 function App() {
   return (
     <>
       <Header/>
       <HomeHero/>
       <FeaturedOn/>
       <FeaturesTwo/>
       <FeatureThree/>
       <FeatureFour/>
       <FeatureFive/>
       {/* <FeatureSix/> */}
       <FeatureSeven/>
       <Footer/>
       {/* <ReactApp/> */}
       {/* <Example/> */}
      
     </>
   )
 }
 
 export default App
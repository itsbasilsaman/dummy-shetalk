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
// import ReactAppTwo from '../src/assets/components/ReactAppTwo'
import ElementOne from './assets/components/ElementOne'
import ElementTwo from './assets/components/ElementTwo'
// import ElementThree from './assets/components/ElementThree'
// import ReactAppThree from './assets/components/ReactAppThree'
import AboutOne from './assets/components/AboutOne'
import AboutTwo from './assets/components/AboutTwo'
import AboutThree from './assets/components/AboutThree'
import { Routes , Route } from 'react-router-dom'
 
 function App() {
   return (
     <>
      <Header/>
     {/* <div id='home'>
       <HomeHero/>
     </div> */}

      <Routes>
        <Route  path='/'  element={
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
        } />
     
      <Route path='/feature' element={
        <> 
       <ElementOne/>
        <ElementTwo/>  
        </>
      } />

      <Route path='/about' element={
        <>
         <AboutOne/>
         <AboutTwo/>
         <AboutThree/>

        </>
      } />

</Routes>

<Footer/>
  
    
      

     

    
     
    

     </>
   )
 }
 
 export default App
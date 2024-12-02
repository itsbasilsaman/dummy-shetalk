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
import ContactUs from './assets/components/ContactUs'
import ContactUsTwo from './assets/components/ContactUsTwo'
import PrivacyPolicy from './assets/components/PrivacyPolicy'
import RefundPolicy from './assets/components/RefundPolicy'
import DeleteAccount from './assets/components/DeleteAccount'
 
 function App() {
   return (
     <>
      <Header/>
     

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

      <Route path='/contactus' element={
        <>
         <ContactUs/>
         <ContactUsTwo/>
        </>
      } />

      <Route path='/privacypolicy' element={
        <PrivacyPolicy/>
      } />

      <Route path='/refundpolicy' element={
         <RefundPolicy/>
      } />

      <Route path='/deleteaccount' element={
          <DeleteAccount/>
      } />

</Routes>



<Footer/>
  
    
      

     

    
     
    

     </>
   )
 }
 
 export default App
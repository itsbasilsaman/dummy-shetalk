import React from 'react' 
import Header from './assets/components/Header'
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
import AboutFour from './assets/components/AboutFour'
import CustomerPackeges from './assets/components/CustomerPackeges'
import 'react-toastify/dist/ReactToastify.css';
import ContactUsJoin from './assets/components/ContactUsJoin'
import LandingPage from './assets/pages/LandingPage'
 
 function App() {
   return (
     <>
      <Header/>
     

       <Routes>
        <Route  path='/'  element={
          <>
          <LandingPage/>
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
         <AboutFour/>
         <AboutThree/>

        </>
      } />

      <Route path='/contactus' element={
        <>
         <ContactUs/>
         <ContactUsJoin/>
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

      <Route path='/packages' element={
          <CustomerPackeges/>
      } />

      </Routes> 

      



<Footer/>
  
    
      

     

    
     
    

     </>
   )
 }
 
 export default App
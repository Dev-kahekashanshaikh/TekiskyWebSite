import React from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero'
 import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Offerings from '../components/Offerings';

const Page1 = () => {
  return (
    <>

    <Header></Header>
    <Hero></Hero>
    <Services></Services>
  
      <Offerings></Offerings>
        <ContactUs></ContactUs>
    <Footer></Footer>
  

    </>
  )
}

export default Page1
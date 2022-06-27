import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection/heroSection';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer'
import Presentation from '../Components/PresentationSection/presentationSection';
import ServiceSection from '../Components/ServicesSection/serviceSection';
import PrestationSection from '../Components/PrestationSection/prestationSection';
import Sidebar from '../Components/Sidebar/index';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Presentation/>
      <ServiceSection/>
      <PrestationSection/>
      <Footer/>
    </>
  )
}

export default Home;

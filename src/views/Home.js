import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Tokenomics from '../components/sections/Tokenomics';
import Stats from '../components/sections/Stats';
import Cta from '../components/sections/Cta';
const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01"/>
      <About id="about"/>
      <Tokenomics id="tokenomics" invertMobile topDivider /*imageFill*/ className="illustration-section-02" />
      <Stats topDivider />
      <Cta id="contact" split/>
    </>
  );
}

export default Home;

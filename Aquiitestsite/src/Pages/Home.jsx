import React, { useState } from 'react';
import Hero from '../Components/Hero';
import Programs from '../Components/Programs';
import Title from '../Components/Title';
import About from '../Components/About';
import Campus from '../Components/Campus';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import VideoPlayer from '../Components/VideoPlayer';
import './Home.css'
import Navbar from '../Components/Navbar';

const Home = () => {
  const [playState, SetPlayState] = useState(false);

  return (
    <>
    <div className="landing-page-wrapper">
    <Navbar/>
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About SetPlayState={SetPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' title='What The Students Say' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Reach us at' />
        <Contact />
      </div>
      </div>
      <VideoPlayer playState={playState} SetPlayState={SetPlayState} />
    </>
  );
};

export default Home;
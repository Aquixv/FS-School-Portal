import React from 'react'
import './Hero.css'
import dark_arrow from '../assets/dark-arrow.png'
const Hero = () => {
  return (
    <>
    <div className='hero container'>
    <div className='hero-text'>
      <h1>Empowering Minds, Shaping Futures: Where Tradition Meets Innovation</h1>
      <p>Join a global community of scholars dedicated to rigorous research, creative expression, and social responsibility</p>
      <button className='btn'>Join Us <img src={dark_arrow} alt="arrow" /></button>
      
    </div>
    </div>
    </>
  )
}

export default Hero
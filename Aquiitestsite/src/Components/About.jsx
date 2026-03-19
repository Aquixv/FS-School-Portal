import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = ({SetPlayState}) => {
  return (
    <>
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={() => {SetPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>About The University</h3>
            <h2>Academically Excellent!</h2>
            <p>Academic Excellence: Offering over 150 undergraduate and postgraduate programs led by world-class faculty at the forefront of their fields.</p>
            <p>Campus Life: Beyond the classroom, our students engage in over 200 student-led organizations, championship athletics, and vibrant cultural events.</p>
            <p>Global Impact: With a network of 200,000+ alumni, our impact spans every continent, driving progress in technology, healthcare, and the arts.</p>
        </div>
    </div>
    </>
  )
}

export default About
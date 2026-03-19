import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Title from './Components/Title'
import About from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import VideoPlayer from './Components/VideoPlayer'
function App() {
const [playState, SetPlayState] = useState(false)
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='container'>
      <Title subTitle='Our Program' title='What We Offer'></Title>
      <Programs></Programs>
      <About SetPlayState = {SetPlayState}></About>
      <Title subTitle='Gallery' title='Campus Photos'></Title>
      <Campus/>
      <Title subTitle='Testimonials' title='What The Students Say'></Title>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title='Reach us at'></Title>
    
    <Contact/>
    <Footer></Footer>
    </div>
    <VideoPlayer playState={playState} SetPlayState={SetPlayState}></VideoPlayer>
    </>
  )
}

export default App

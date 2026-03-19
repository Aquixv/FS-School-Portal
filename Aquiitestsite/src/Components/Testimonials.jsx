import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
    if(tx>-50){
    tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    }
      const slideBackward = () => {
    if(tx<0){
    tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='Testimonials'>
    <img className='next-btn' src={next_icon} alt="" onClick={slideForward} />
    <img className='back-btn' src={back_icon} alt="" onClick={slideBackward} />
    <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>May Be</h3>
                            <span>Edusity, Abuja</span>
                        </div>
                    </div>
                    <p>Choosing Edusity was the best decision of my life.
                    The supportive community and world-class faculty have pushed me to achieve things I never thought possible. 
                    Beyond the academics, the friendships I've made here are for a lifetime.</p>
                </div>
            </li>
             <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>Mike Gates</h3>
                            <span>Edusity, Lagos</span>
                        </div>
                    </div>
                    <p>Choosing Edusity was the best decision of my life.
                    The supportive community and world-class faculty have pushed me to achieve things I never thought possible. 
                    Beyond the academics, the friendships I've made here are for a lifetime.</p>
                </div>
            </li>
             <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Kill Bill</h3>
                            <span>Edusity, Oyo</span>
                        </div>
                    </div>
                    <p>Choosing Edusity was the best decision of my life.
                    The supportive community and world-class faculty have pushed me to achieve things I never thought possible. 
                    Beyond the academics, the friendships I've made here are for a lifetime.</p>
                </div>
            </li>
             <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>Will Fill</h3>
                            <span>Edusity, Delta</span>
                        </div>
                    </div>
                    <p>Choosing Edusity was the best decision of my life.
                    The supportive community and world-class faculty have pushed me to achieve things I never thought possible. 
                    Beyond the academics, the friendships I've made here are for a lifetime.</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials
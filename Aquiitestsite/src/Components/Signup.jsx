import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../../src/assets/logo.png'
import './Signup.css';
const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
      const[sticky, setSticky] = useState(false);
  return (
    <>
    <div className="signup-page-wrapper">
    <nav className= {`container ${sticky? 'dark-nav':''}`}>
            <img src={logo} alt="" className='logo'/>
            </nav>
      <form className="form">
        <p className="tittle">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input required placeholder='' type="text" className="input" />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder='' type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>  
        <label>
          <input required placeholder='' type="email" className="input" />
          <span>Email</span>
        </label> 
        <label>
          <input required placeholder='' type={showPassword ? "text" : "password"} className="input" />
          <span>Password</span>
          <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
            >
                {/* {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
            </span>
        </label>
        <label>
          <input required placeholder='' type={showconfirmPassword ? "text" : "password"} className="input" />
          <span>Confirm password</span>
          <span 
                className="toggle-password" 
                onClick={() => setShowconfirmPassword(!showconfirmPassword)}
            >
                {/* {showconfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
            </span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Already have an account? <a onClick={() => navigate('/Signin')} href="#">Sign in</a> </p>
      </form>
      </div>
      </>
  );
}

export default Signup;

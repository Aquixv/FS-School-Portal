import React ,{useState} from 'react'
import './Signin.css';
import logo from '../../src/assets/logo.png'
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();
      const[sticky, setSticky] = useState(false);
       const [showPassword, setShowPassword] = useState(false);
          const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  return (
    <>
    <div className='signin-page-wrapper'>
    <nav className= {`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        </nav>
    <form className="form">
        <p className="tittle">Login</p>
        <p className="message">Log in to your Edusity account. </p>
        <div className="flex">
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
        <p className="signin">Don't have an account? <a onClick={() => navigate('/Signup')}>Become A Student</a> </p>
      </form>
      </div>
      </>
  );
}

export default Signin
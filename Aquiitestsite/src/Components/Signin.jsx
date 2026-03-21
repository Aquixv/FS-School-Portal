import React from 'react'
import './Signin.css';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();
  return (
    <form className="form">
        <p className="tittle">Register </p>
        <p className="message">Sign in to your Edusity account. </p>
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
          <input required placeholder='' type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder='' type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Don't have an account? <a onClick={() => navigate('/Signup')}>Become A Student</a> </p>
      </form>
  );
}

export default Signin
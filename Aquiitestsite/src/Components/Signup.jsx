import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
import logo from '../../src/assets/logo.png'
 import { useFormik } from 'formik';
 import { toast } from 'react-toastify';
 import * as Yup from 'yup';
import './Signup.css';
const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
      const[sticky, setSticky] = useState(false);

       const formik = useFormik({
     initialValues: {
       firstname: '',
       lastname: '',
       email: '',
       password: '',
       confirmPassword: '',
     },
     validationSchema: Yup.object({
       firstname: Yup.string()
         .min(2, 'Must be 2 characters or more')
         .required('Required'),
       lastname: Yup.string()
         .min(2, 'Must be 2 characters or more')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string()
       .min(6,'Must be 6 characters or longer')
       .required('Required'),
       confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
     }),
     onSubmit: async (values, { setSubmitting, setStatus }) => {
    try {
        const response = await fetch('http://localhost:1500/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(`Welcome to Edusity!, ${data.user.fullName}! 🎓`);
            navigate('/dashboard');
        } else {
            alert(data.error);
        }
    } catch (error) {
      toast.error(data.error || "Something went wrong");
        console.log("Connection failed. Is the server running?");
    } finally {
        setSubmitting(false);
    }
}
  });
  return (
    <>
    <div className="signup-page-wrapper">
    <nav className= {`container ${sticky? 'dark-nav':''}`}>
            <img src={logo} alt="" className='logo'/>
            </nav>
      <form onSubmit={formik.handleSubmit} className="form">
        <p className="tittle">Register </p>
        <p className="message">Become a student to this illustrious university today! </p>
        <div className="flex">
          <label>
            <input required placeholder='' name="firstname" type="text" className="input" {...formik.getFieldProps('firstname')} />
            <span>Firstname</span>
            {formik.touched.firstname && formik.errors.firstname ? (
    <div className="error-text">{formik.errors.firstname}</div>
  ) : null}
          </label>
          <label>
            <input required placeholder='' name="lastname" type="text" className="input" {...formik.getFieldProps('lastname')}/>
            <span>Lastname</span>
            {formik.touched.lastname && formik.errors.lastname ? (
    <div className="error-text">{formik.errors.lastname}</div>
  ) : null}
          </label>
        </div>  
        <label>
          <input required placeholder='' name="email" type="email" className="input" 
    {...formik.getFieldProps('email')} />
          <span>Email</span>
          {formik.touched.email && formik.errors.email ? (
    <div className="error-text">{formik.errors.email}</div>
  ) : null}
        </label> 
        <label>
          <input required placeholder='' name="password" type={showPassword ? "text" : "password"} className="input" {...formik.getFieldProps('password')} />
          <span>Password</span>
          <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
            >
                {/* {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
            </span>
            {formik.touched.password && formik.errors.password ? (
    <div className="error-text">{formik.errors.password}</div>
  ) : null}
        </label>
        <label>
          <input required placeholder='' name="confirmPassword" type={showconfirmPassword ? "text" : "password"} className="input" {...formik.getFieldProps('confirmPassword')}/>
          <span>Confirm password</span>
          <span 
                className="toggle-password" 
                onClick={() => setShowconfirmPassword(!showconfirmPassword)}
            >
                {/* {showconfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
            </span>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
    <div className="error-text">{formik.errors.confirmPassword}</div>
  ) : null}
        </label>
        <button type='submit' className="submit">Submit</button>
        <p className="signin">Already have an account? <a onClick={() => navigate('/Signin')} href="#">Sign in</a> </p>
      </form>
      </div>
      </>
  );
}

export default Signup;

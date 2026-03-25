import React ,{useState} from 'react'
import './Signin.css';
import logo from '../../src/assets/logo.png'
// import { Eye, EyeOff } from 'lucide-react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();
      const[sticky, setSticky] = useState(false);
       const [showPassword, setShowPassword] = useState(false);
          const [showconfirmPassword, setShowconfirmPassword] = useState(false);

          const formik = useFormik({
               initialValues: {
                 email: '',
                 password: '',
                 confirmPassword: '',
               },
               validationSchema: Yup.object({
                 email: Yup.string().email('Invalid email address').required('Required'),
                 password: Yup.string()
                 .min(6,'Must be 6 characters or longer')
                 .required('Required'),
                 confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Passwords must match')
                  .required('Required'),
               }),
               onSubmit: async (values) => {
    try {
        const response = await fetch('http://localhost:1500/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            toast.success(`Welcome back, ${data.user.fullName}! 🎓`);
            navigate('/dashboard'); 
        } else {
            toast.error(data.error || "Something went wrong");
        }
    } catch (error) {
        alert("Login failed. Check your connection.");
    }
}
             });
  return (
    <>
    <div className='signin-page-wrapper'>
    <nav className= {`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        </nav>
    <form onSubmit={formik.handleSubmit} className="form">
        <p className="tittle">Login</p>
        <p className="message">Log in to your Edusity account. </p>
        <div className="flex">
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
        <p className="signin">Don't have an account? <a onClick={() => navigate('/Signup')}>Become A Student</a> </p>
      </form>
      </div>
      </>
  );
}

export default Signin
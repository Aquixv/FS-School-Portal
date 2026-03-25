import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Components/Protectedroutes';
import Sidebar from './Dashboard/Sidebar';
import DashboardLayout from './Components/DashboardLayout';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const isDashboard = window.location.pathname.startsWith('/dashboard');

  return (
    <BrowserRouter>
      <div className="flex">
        {user && isDashboard && <Sidebar user={user} />}

        <div className={`flex-1 ${user && isDashboard ? 'md:pl-0' : ''}`}>
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<Signin onLoginSuccess={handleLoginSuccess} />} />

  <Route 
    path="/dashboard" 
    element={
      user ? (
        <DashboardLayout user={user}>
          <Dashboard user={user} />
        </DashboardLayout>
      ) : (
        <Navigate to="/signin" />
      )
    } 
  />
</Routes>
          <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
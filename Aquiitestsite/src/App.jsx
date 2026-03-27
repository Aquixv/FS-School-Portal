import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProtectedRoute from './Components/Protectedroutes';
import Sidebar from './Dashboard/Sidebar';
import DashboardLayout from './Components/DashboardLayout';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLoginSuccess = (userData) => setUser(userData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup onLoginSuccess={handleLoginSuccess} />} />
        
        <Route path="/dashboard" 
  element={
    user ? (
      <div className="min-h-screen bg-slate-50">
        <Sidebar user={user} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <button 
  onClick={() => setIsSidebarOpen(true)}
  // Added z-[60] to stay above TopBar and !block to ensure it shows
  className="md:hidden fixed top-4 left-4 z-[60] p-2 bg-blue-600 text-white rounded-lg shadow-lg"
>
  <span className="material-symbols-outlined">menu</span>
</button>
<div className="md:ml-64 min-h-screen">
  <Dashboard user={user} />
</div>
      </div>
    ) : (
      <Navigate to="/signin"/>
    )
  } 
/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </BrowserRouter>
  );
}
export default App;
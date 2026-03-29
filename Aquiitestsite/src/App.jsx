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
import Grades from './Dashboard/Grades';
import TopBar from './Dashboard/Topbar';
import Assignments from './Dashboard/Assignments';
import Courses from './Dashboard/Courses';
import Calendar from './Dashboard/Calendar';

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
        
        <Route 
  path="/dashboard/*" 
  element={
    user ? (
      <div className="min-h-screen bg-slate-50 flex">
        <Sidebar user={user} />
        
        <div className="flex-1 md:ml-64 flex flex-col">
          <TopBar user={user} /> 
          
          <main className="pt-24 pb-12 px-8">
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/grades" element={<Grades user={user} />} />
              <Route path="/assignments" element={<Assignments user={user} />} />
              <Route path="/courses" element={<Courses user={user} />} />
              <Route path="/calendar" element={<Calendar user={user} />} />
            </Routes>
          </main>
        </div>
      </div>
    ) : (
      <Navigate to="/signin" />
    )
  } 
/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </BrowserRouter>
  );
}
export default App;
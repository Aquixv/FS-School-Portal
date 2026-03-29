import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user, isOpen, setIsOpen }) => {
  const location = useLocation(); 

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Courses', icon: 'school', path: '/dashboard/courses' },
    { name: 'Assignments', icon: 'assignment', path: '/dashboard/assignments' },
    { name: 'Grades', icon: 'grade', path: '/dashboard/grades' },
    { name: 'Calendar', icon: 'calendar_today', path: '/dashboard/calendar' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-[45] md:hidden backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white font-manrope z-[50] p-4 space-y-2 border-r border-slate-100 transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        
        <div className="px-2 py-6 mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-blue-700">Edusity Portal</h1>
          
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400">
             <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-3 px-2 py-6 mb-8 border-b border-slate-100">
          <div className="!w-12 !h-12 flex-none rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 shadow-sm">
            {user?.fullName?.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-slate-800 text-sm truncate">{user?.fullName}</p>
            <p className="text-[10px] text-slate-400 font-mono tracking-tighter">ID: {user?.studentId || '2026-000'}</p>
          </div>
        </div>

        <nav className="flex flex-col px-4 space-y-2 flex-grow">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setIsOpen(false)} 
          className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
            location.pathname === item.path 
              ? 'bg-blue-50 text-blue-700 font-bold' 
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>

        <div className="pt-4 border-t border-slate-200 space-y-1">
          <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="w-full text-left flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-all">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
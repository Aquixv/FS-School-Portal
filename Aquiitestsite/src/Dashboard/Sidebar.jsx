import React from 'react';

const Sidebar = ({ user }) => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Courses', icon: 'school' },
    { name: 'Assignments', icon: 'assignment' },
    { name: 'Grades', icon: 'grade' },
    { name: 'Calendar', icon: 'calendar_today' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-slate-50 font-manrope z-40 p-4 space-y-2 border-r border-slate-200">
      <div className="px-2 py-6 mb-4">
        <h1 className="text-2xl font-black text-blue-700">Edusity Portal</h1>
      </div>
      
      <div className="flex items-center space-x-3 px-2 py-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
          {user?.fullName?.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-800 leading-none">{user?.fullName || 'Student'}</p>
          <p className="text-xs text-slate-500">ID: {user?.studentId || '2024-0000'}</p>
        </div>
      </div>

      <nav className="flex-grow space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              item.active 
                ? 'bg-white text-blue-700 shadow-sm font-semibold' 
                : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-200 space-y-1">
        <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="w-full text-left flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
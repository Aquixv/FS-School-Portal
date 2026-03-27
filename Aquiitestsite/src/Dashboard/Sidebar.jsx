import React from 'react';

const Sidebar = ({ user, isOpen, setIsOpen }) => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Courses', icon: 'school' },
    { name: 'Assignments', icon: 'assignment' },
    { name: 'Grades', icon: 'grade' },
    { name: 'Calendar', icon: 'calendar_today' },
  ];

  return (
    <>
      {/* MOBILE OVERLAY: Dims the background when sidebar is open on phone */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-[45] md:hidden backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* THE ASIDE: Slides using translate-x */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white font-manrope z-[50] p-4 space-y-2 border-r border-slate-100 transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        
        <div className="px-2 py-6 mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-blue-700">Edusity Portal</h1>
          {/* Close button for mobile */}
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400">
             <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-3 px-2 py-6 mb-8 border-b border-slate-100">
          <div className="w-12 h-12 flex-none rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 shadow-sm">
            {user?.fullName?.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-slate-800 text-sm truncate">{user?.fullName}</p>
            <p className="text-[10px] text-slate-400 font-mono tracking-tighter">ID: {user?.studentId || '2026-000'}</p>
          </div>
        </div>

        <nav className="flex-grow space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                item.active 
                  ? 'bg-blue-50 text-blue-700 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.name}</span>
            </a>
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
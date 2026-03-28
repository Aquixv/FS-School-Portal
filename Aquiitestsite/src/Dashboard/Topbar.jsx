import React from "react";

const TopBar = ({ user }) => (
 <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 backdrop-blur-md z-[30] flex items-center justify-between px-8 border-b border-slate-100">
    <div className="flex items-center bg-slate-100 px-4 py-2 rounded-full w-full max-w-md border border-slate-200">
      <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none" placeholder="Search resources..." />
    </div>
    
    <div className="flex items-center space-x-5">
   
      <button className="!w-auto !p-0 flex-none text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">notifications</span></button>
      <button className="!w-auto !p-0 flex-none text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">settings</span></button>
  
      <div className="!w-10 !h-10 flex-none aspect-square rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm border border-blue-700">
        {user?.fullName?.charAt(0)}
      </div>
    </div>
  </header>
);
export default TopBar;
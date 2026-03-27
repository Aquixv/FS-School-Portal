import React from 'react';
import './Dashboard.css'
const TopBar = ({ user }) => (
 <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 backdrop-blur-md z-[30] flex items-center justify-between px-8 border-b border-slate-100">
    <div className="flex items-center bg-slate-100 px-4 py-2 rounded-full w-full max-w-md border border-slate-200">
      <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none" placeholder="Search resources..." />
    </div>
    
    <div className="flex items-center space-x-5">
      {/* Added !w-auto and !p-0 to prevent these from stretching */}
      <button className="!w-auto !p-0 flex-none text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">notifications</span></button>
      <button className="!w-auto !p-0 flex-none text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">settings</span></button>
      {/* Locked the profile circle with flex-none and !w-10 */}
      <div className="!w-10 !h-10 flex-none aspect-square rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm border border-blue-700">
        {user?.fullName?.charAt(0)}
      </div>
    </div>
  </header>
);

const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-jakarta">
      <TopBar user={user} />
      
      {/* Fixed: Use !max-w-none to ignore any .container rules from index.css */}
      <main className="pt-24 pb-12 px-6 md:px-12 !max-w-none">
        <div className="w-full mx-auto space-y-10">
          
          <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Welcome back, {user?.fullName?.split(' ')[0]}.
              </h2>
              <p className="text-slate-500 font-medium text-lg">
                Your academic progress is looking sharp.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1 text-right">TOTAL GPA</span>
              <div className="flex items-baseline justify-end space-x-2">
                <span className="text-6xl font-black text-blue-600">3.88</span>
                <span className="text-lg text-slate-300 font-bold">/ 4.0</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Weekly Schedule</h3>
                <div className="space-y-6">
                   <ScheduleItem code="CS-402" title="Advanced Algorithms" time="09:00" type="AM" location="Room 304" />
                   <ScheduleItem code="MATH-201" title="Linear Algebra II" time="11:30" type="AM" location="Online" isOnline />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <AssignmentCard title="Algorithm Essay" course="CS-402" daysLeft="2" deadline="March 28" />
                 <AssignmentCard title="Matrix Lab" course="MATH-201" daysLeft="5" deadline="March 31" />
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Performance</h3>
                <ProgressBar label="ADV. ALGORITHMS" grade="A" percent="94" />
                <ProgressBar label="UX DESIGN" grade="A+" percent="98" />
              </div>
              <FeeStatus isPaid={user?.feesPaid} />
            </div>
          </div>
        </div>
      </main>

      {/* FIXED FAB: Added !w-16 !h-16 to ignore global button width:100% */}
      <button className="fixed bottom-10 right-10 !w-16 !h-16 aspect-square bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center z-[100] hover:scale-110 active:scale-95 transition-all group">
        <span className="material-symbols-outlined text-3xl">add</span>
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">New Task</span>
      </button>
    </div>
  );
};

// IMPORTANT: Keep using !w-full only inside labels, but !w-auto on buttons!
const AssignmentCard = ({ title, course, deadline, daysLeft }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase">{course}</span>
      <span className="text-rose-500 text-[10px] font-black uppercase">{daysLeft} Days Left</span>
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    {/* Fixed Button: Added !w-full to make it intentional, but removed any height constraints */}
    <button className="!w-full py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
      Submit Work
    </button>
  </div>
);

const ScheduleItem = ({ code, title, time, type, location, isOnline }) => (
  <div className="flex items-start group cursor-pointer">
    <div className="w-20 pt-1">
      <span className="block text-sm font-bold text-blue-600">{time}</span>
      <span className="text-xs text-slate-400 uppercase font-medium">{type}</span>
    </div>
    <div className="flex-grow bg-slate-50 rounded-xl p-5 group-hover:bg-blue-50 transition-all border border-transparent group-hover:border-blue-100">
      <p className="text-[10px] font-bold text-blue-600 mb-1 uppercase tracking-tighter">{code}</p>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      <div className="mt-2 flex items-center text-sm text-slate-500">
        <span className="material-symbols-outlined text-sm mr-1">{isOnline ? 'videocam' : 'location_on'}</span>
        <span>{location}</span>
      </div>
    </div>
  </div>
);
const FeeStatus = ({ isPaid }) => (
  <div className={`p-6 rounded-2xl border-2 transition-all ${
    isPaid 
    ? 'bg-emerald-50/50 border-emerald-100 text-emerald-900' 
    : 'bg-rose-50/50 border-rose-100 text-rose-900 animate-pulse'
  }`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Financials</p>
        <h4 className="text-xl font-black">{isPaid ? 'Fees Paid' : 'Fees Pending'}</h4>
        <p className="text-xs mt-1 opacity-80">
          {isPaid ? 'No outstanding balance' : 'Due: April 15, 2026'}
        </p>
      </div>
      <div className={`p-3 rounded-full ${isPaid ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
        <span className="material-symbols-outlined text-2xl">
          {isPaid ? 'check_circle' : 'priority_high'}
        </span>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ label, grade, percent }) => (
  <div className="mb-6">
    <div className="flex justify-between items-end mb-2">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-lg font-bold text-blue-700">{grade}</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);
export default Dashboard;
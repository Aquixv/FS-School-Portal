import React from 'react';
import './Dashboard.css'
const Dashboard = ({ user }) => {
  return (
    <main className="md:pl-64 pt-20 pb-12 px-6 md:px-10 min-h-screen bg-slate-50">
      <div className="w-full max-w-6xl mx-auto space-y-10">
<section className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
  <div className="max-w-xl">
    <div>
      <TopBar user={user} />
    </div>
    <h2 className="text-5xl font-black text-slate-900 mb-2 leading-tight">
      Welcome back, <br/>{user?.fullName?.split(' ')[0]}.
    </h2>
    <p className="text-slate-500 font-medium">
      Your academic progress is looking sharp. You've completed <span className="text-blue-600 font-bold">82%</span> of this semester's targets.
    </p>
  </div>
  <div className="text-right">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">TOTAL GPA</span>
    <div className="flex items-baseline space-x-2">
      <span className="text-7xl font-black text-blue-600 tracking-tighter">3.88</span>
      <span className="text-xl text-slate-300 font-bold">/ 4.0</span>
    </div>
  </div>
</section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  {/* LEFT COLUMN */}
  <div className="lg:col-span-8 space-y-8">
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-800 mb-8">Weekly Schedule</h3>
      <div className="space-y-6">
         <ScheduleItem code="CS-402" title="Advanced Algorithms" time="09:00" type="AM" location="Room 304" />
         <ScheduleItem code="MATH-201" title="Linear Algebra II" time="11:30" type="AM" location="Online" isOnline />
      </div>
    </div>

    {/* Assignments Grid within the left col or below */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <AssignmentCard title="Algorithm Essay" course="CS-402" daysLeft="2" deadline="March 28" />
       <AssignmentCard title="Matrix Lab" course="MATH-201" daysLeft="5" deadline="March 31" />
       
    </div>
  </div>

  <div className="lg:col-span-4 space-y-8">
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Performance</h3>
      <ProgressBar label="ADV. ALGORITHMS" grade="A" percent="94" />
      <ProgressBar label="UX DESIGN" grade="A+" percent="98" />
    </div>
    
    <FeeStatus isPaid={user?.feesPaid} />
  </div>
</div>
<button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all flex items-center justify-center z-50 group">
  <span className="material-symbols-outlined">add</span>
  <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    New Task
  </span>
</button>
</div>

    </main>
  );
};

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
const AssignmentCard = ({ title, course, deadline, daysLeft }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase">
        {course}
      </span>
      <span className="text-rose-500 text-[10px] font-black uppercase flex items-center">
        <span className="material-symbols-outlined text-xs mr-1">timer</span>
        {daysLeft} Days Left
      </span>
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-xs text-slate-400 mb-6 italic">Deadline: {deadline}</p>
    <button className="w-full py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
      Submit Work
    </button>
  </div>
  
);
const TopBar = ({ user }) => (
  <header className="TVT fixed top-0 right-0 md:left-64 h-16 bg-white/80 backdrop-blur-md z-30 flex items-center justify-between px-8 border-b border-slate-100">

    <div className="flex items-center bg-slate-100 px-4 py-2 rounded-full w-full max-w-md">
      <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none" placeholder="Search..." />
    </div>

    <div className="flex items-center space-x-6">
      <button className="text-slate-400 hover:text-blue-600"><span className="material-symbols-outlined">notifications</span></button>
      <button className="text-slate-400 hover:text-blue-600"><span className="material-symbols-outlined">settings</span></button>
      <div className="CVV w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 shadow-sm border border-blue-200">
        {user?.fullName?.charAt(0)}
      </div>
    </div>
  </header>
);

export default Dashboard;
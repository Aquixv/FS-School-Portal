import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <main className="md:pl-64 pt-20 pb-12 px-6 md:px-10 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Welcome Section */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
              Welcome back, {user?.fullName?.split(' ')[0]}.
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Your academic progress is looking sharp. You've completed <span className="text-blue-600 font-bold">82%</span> of this semester's targets.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">TOTAL GPA</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-6xl font-black text-blue-700">3.88</span>
              <span className="text-xl text-slate-400">/ 4.0</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Weekly Schedule */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Weekly Schedule</h3>
            <div className="space-y-6">
               <ScheduleItem code="CS-402" title="Advanced Algorithms" time="09:00" type="AM" location="Room 304" />
               <ScheduleItem code="MATH-201" title="Linear Algebra II" time="11:30" type="AM" location="Online" isOnline />
            </div>
          </div>

          {/* Performance Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Course Performance</h3>
              <ProgressBar label="ADV. ALGORITHMS" grade="A" percent="94" />
              <ProgressBar label="UX DESIGN" grade="A+" percent="98" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Sub-components for tidiness
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
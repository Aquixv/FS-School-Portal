import React from 'react'

const Assignments = ({ user }) => {
    const DeadlineWidget = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
    <h3 className="text-xl font-bold text-slate-800 mb-6">Upcoming Deadlines</h3>
    <div className="space-y-6">
      {[ 
        { day: '24', month: 'Oct', title: 'Final Thesis', color: 'rose' },
        { day: '27', month: 'Oct', title: 'Lab Report #8', color: 'blue' }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex flex-col items-center justify-center text-${item.color}-600`}>
            <span className="text-[10px] font-bold uppercase leading-none">{item.month}</span>
            <span className="text-xl font-black">{item.day}</span>
          </div>
          <p className="text-sm font-bold text-slate-800 leading-tight">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const StudyTipCard = () => (
  <div className="relative rounded-3xl overflow-hidden p-8 min-h-[200px] flex items-center group bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-transparent z-10" />
    <div className="relative z-20">
      <span className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase mb-3 inline-block">Study Tip</span>
      <h3 className="text-xl font-bold text-white mb-2">Pomodoro Technique</h3>
      <p className="text-white/70 text-xs leading-relaxed mb-4">Focus for 25 mins, break for 5. Quality over quantity.</p>
      <button className="text-xs font-bold text-white underline">Learn More</button>
    </div>
  </div>
);

const AssignmentItem = ({ title, course, deadline, status, score }) => (
  <div className="group bg-white hover:shadow-md transition-all rounded-xl p-6 border border-slate-100 flex items-center justify-between">
    <div className="flex items-center gap-5">
      <div className="!w-12 !h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
        <span className="material-symbols-outlined">description</span>
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-800">{title}</h4>
        <div className="flex gap-4 text-sm text-slate-500">
           <span>{course}</span>
           <span>Due {deadline}</span>
        </div>
      </div>
    </div>

    <div className="text-right">
       {status === 'Graded' ? (
         <span className="text-blue-700 font-black">{score}/100</span>
       ) : (
         <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status === 'Urgent' ? 'bg-rose-500' : 'bg-amber-500'}`} />
            <span className="text-sm font-bold">{status}</span>
         </div>
       )}
    </div>
  </div>
);
  return (
    <div className="space-y-10">
      
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-slate-900">Assignments</h2>
          <p className="text-slate-500 font-medium">You have 4 urgent submissions this week.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          New Task
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 space-y-4">
          <AssignmentItem 
            title="Neural Networks Final" 
            course="CS 402" 
            due="2 days" 
            status="urgent" 
          />
         
        </div>

        
        <aside className="lg:col-span-4 space-y-8">
           <DeadlineWidget />
           <StudyTipCard />
        </aside>
      </div>
    </div>
  );
};

export default Assignments
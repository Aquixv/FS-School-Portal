import React from 'react';

const Courses = ({ user }) => {
  const courseData = [
    { title: "Advanced Algorithms", code: "CS-402", instructor: "Dr. Emily Chen", progress: 75, credits: 4 },
    { title: "Neural Networks", code: "CS-501", instructor: "Prof. Marcus Vane", progress: 45, credits: 3 },
    { title: "Linear Algebra II", code: "MATH-201", instructor: "Dr. Sarah Jenkins", progress: 90, credits: 3 },
    { title: "Discrete Mathematics", code: "MATH-105", instructor: "Prof. Alan Turing", progress: 20, credits: 4 },
  ];

  return (
    <div className="space-y-10">
      {/* 1. Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Academic Year 2024/25</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">My Courses</h2>
          <p className="text-slate-500 font-medium mt-2">You are currently enrolled in <span className="text-blue-600 font-bold">{courseData.length} active modules</span>.</p>
        </div>
        
        {/* Course Stats Overview */}
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Total Credits</p>
            <p className="text-2xl font-black text-slate-800">14</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Enroll New
          </button>
        </div>
      </section>

      {/* 2. Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* 3. Featured Study Tip (Bottom Layout) */}
      <div className="relative rounded-3xl overflow-hidden min-h-[180px] flex items-center p-8 group bg-slate-900 mt-4">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
         <div className="relative z-20 max-w-lg">
            <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase mb-4 inline-block">Pro Tip</span>
            <h3 className="text-2xl font-bold text-white mb-2">Sync with Calendar</h3>
            <p className="text-white/70 text-sm">Don't miss a lecture. All course schedules are automatically synced to your academic calendar.</p>
         </div>
      </div>
    </div>
  );
};

// Your updated CourseCard with extra metadata
const CourseCard = ({ title, code, instructor, progress, credits }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-all group flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <span className="material-symbols-outlined">auto_stories</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase mb-1">{code}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{credits} Credits</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight">{title}</h3>
      <div className="flex items-center gap-2 mb-6">
         <div className="w-5 h-5 rounded-full bg-slate-200" /> {/* Placeholder for Instructor Avatar */}
         <p className="text-sm text-slate-500 font-medium">{instructor}</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
        <span>Syllabus Progress</span>
        <span className="text-blue-600">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full transition-all duration-700" style={{ width: `${progress}%` }} />
      </div>
      <button className="w-full mt-2 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100">
        View Course Materials
      </button>
    </div>
  </div>
);

export default Courses;
import React from 'react'
import GpaChart from './GpaChart';
const Grades = () => {
    const CourseGradeRow = ({ code, title, grade, color }) => (
  <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all">
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase">{code}</p>
      <p className="font-bold text-slate-800">{title}</p>
    </div>
    <div className={`bg-${color}-100 text-${color}-700 px-4 py-2 rounded-lg font-black`}>
      {grade}
    </div>
  </div>
);
  return (
    <>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 shrink-0">
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1 text-right">TOTAL GPA</span>
    <div class="flex items-baseline justify-end space-x-2">
      <span class="text-6xl font-black text-blue-600">3.88</span>
      <span class="text-lg text-slate-300 font-bold">/ 4.0</span>
      </div>
      </div>
    <div className="pt-8 space-y-4">
  <CourseGradeRow code="CS402" title="Neural Networks" grade="A" color="blue" />
  <CourseGradeRow code="MA301" title="Linear Algebra II" grade="A-" color="blue" />
  <CourseGradeRow code="PH205" title="Quantum Physics" grade="B+" color="rose" />
  <GpaChart/>
</div>
</>
  )
}

export default Grades
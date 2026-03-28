import React from 'react'

const GpaChart = () => {
  const data = [
    { term: 'Fall 24', gpa: 3.2, active: false },
    { term: 'Spr 25', gpa: 3.5, active: false },
    { term: 'Fall 25', gpa: 3.4, active: false },
    { term: 'Spr 26', gpa: 3.88, active: true },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-8">GPA Trend</h3>
      <div className="h-48 flex items-end justify-between gap-4 px-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-3 group">
            {/* The Bar */}
            <div 
              className={`w-full rounded-t-xl relative transition-all duration-500 ${
                item.active ? 'bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-200'
              }`}
              style={{ height: `${(item.gpa / 4) * 100}%` }}
            >
              {/* Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.gpa} GPA
              </div>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              item.active ? 'text-blue-600' : 'text-slate-400'
            }`}>
              {item.term}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GpaChart
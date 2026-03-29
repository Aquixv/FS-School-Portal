import React from 'react';

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-4xl font-black text-slate-900">Weekly Schedule</h2>
        <p className="text-slate-500 font-medium">Academic Year 2024/25</p>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Days Header */}
        <div className="grid grid-cols-[80px_repeat(5,1fr)] border-b border-slate-100">
          <div className="p-4 bg-slate-50/50"></div>
          {days.map(day => (
            <div key={day} className="p-6 text-center border-l border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase">{day}</span>
            </div>
          ))}
        </div>

        {/* The Grid */}
        <div className="relative h-[600px] overflow-y-auto">
          {hours.map(hour => (
            <div key={hour} className="grid grid-cols-[80px_repeat(5,1fr)] border-b border-slate-50">
              <div className="p-4 text-right text-xs font-bold text-slate-400">{hour}</div>
              {days.map((_, i) => (
                <div key={i} className="border-l border-slate-50 h-20"></div>
              ))}
            </div>
          ))}

          {/* Absolute Positioned Event */}
          <div className="absolute top-[20px] left-[90px] w-[calc(20%-20px)] h-[140px] bg-blue-600 text-white p-4 rounded-xl shadow-lg z-10">
            <p className="text-[10px] font-bold opacity-80 uppercase">CS-402</p>
            <h4 className="font-bold text-sm mt-1">Advanced UI/UX</h4>
            <div className="mt-4 flex items-center text-[10px] font-bold">
              <span className="material-symbols-outlined text-sm mr-1">location_on</span>
              <span>Studio 4-B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
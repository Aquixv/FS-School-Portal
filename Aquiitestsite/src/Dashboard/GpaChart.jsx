import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const GpaChart = () => {
  const data = {
    labels: ['Fall 24', 'Spr 25', 'Fall 25', 'Spr 26'],
    datasets: [{
      data: [3.2, 3.5, 3.4, 3.88],
      borderColor: '#2858b2', // Your --color-primary
      tension: 0.4, // This makes the line "curvy"
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
    }]
  };

  return (
    <div className="h-48 w-full"> 
      <Line data={data} options={{ maintainAspectRatio: false }} /> 
    </div>
  );
};

//   return (
//     <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
//       <h3 className="text-xl font-bold text-slate-800 mb-8">GPA Trend</h3>
//       <div className="h-48 flex items-end justify-between gap-4 px-2">
//         {data.map((item, idx) => (
//           <div key={idx} className="flex-1 flex flex-col items-center gap-3 group">
//             <div 
//               className={`w-full rounded-t-xl relative transition-all duration-700 ${
//                 item.active ? 'bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-200'
//               }`}
//               style={{ height: `${(item.gpa / 4) * 100}%` }}
//             >
//               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                 {item.gpa} GPA
//               </div>
//             </div>
//             <span className="text-[10px] font-bold text-slate-400 uppercase">{item.term}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
export default GpaChart
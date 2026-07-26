import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Smile } from 'lucide-react';
import { mockEmotionDistribution } from '../../data/mockDashboardData';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Component 6: Classroom Emotion Distribution Chart (Chart.js Doughnut Chart)
 * Visualizes emotional breakdown across students during lecture sessions.
 */
export function ClassroomEmotionDistribution({ data = mockEmotionDistribution }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: data.colors,
        borderColor: '#090d16',
        borderWidth: 3,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        padding: 10,
        cornerRadius: 8,
      },
    },
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Smile className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Classroom Emotion Spectrum</h3>
            <span className="text-xs text-slate-400">Facial & Acoustic AI Sentiment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-1 min-w-0">
        {/* Doughnut Chart Canvas */}
        <div className="relative h-44 w-full flex items-center justify-center">
          <Doughnut data={chartData} options={options} />
          <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xl font-extrabold text-white font-mono">84%</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">POSITIVE</span>
          </div>
        </div>

        {/* Custom Legend - Flexbox layout with justify-between and text truncation */}
        <div className="space-y-2.5 min-w-0 w-full">
          {data.labels.map((label, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 text-xs min-w-0 w-full"
            >
              {/* Left Label Container */}
              <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: data.colors[idx] }}
                />
                <span className="text-slate-300 font-medium truncate" title={label}>
                  {label}
                </span>
              </div>

              {/* Right Percentage */}
              <span className="font-bold text-white font-mono shrink-0 text-right">
                {data.data[idx]}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassroomEmotionDistribution;

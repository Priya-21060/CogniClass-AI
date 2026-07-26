import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Brain, TrendingUp, Info } from 'lucide-react';
import { mockAttentionTimeline } from '../../data/mockDashboardData';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * Component 4: Student Attention Analytics Chart (Chart.js)
 * Visualizes student cognitive focus & acoustic interactions across a 60-minute timeline.
 */
export function StudentAttentionAnalytics({ data = mockAttentionTimeline }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: { family: 'Inter', size: 12 },
          usePointStyle: true,
          boxWidth: 8,
        },
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
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b', font: { family: 'Inter', size: 11 } },
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b', font: { family: 'Inter', size: 11 } },
        min: 50,
        max: 100,
      },
    },
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Student Attention Analytics</h3>
            <span className="text-xs text-slate-400">60-Minute Lecture Timeline Telemetry</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold self-start sm:self-auto">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Avg Attention: 91.4%</span>
        </div>
      </div>

      {/* Chart Canvas Container */}
      <div className="h-64 sm:h-72 w-full pt-2">
        <Line data={data} options={options} />
      </div>

      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
        <Info className="w-4 h-4 text-indigo-400 shrink-0" />
        <span>Peak engagement occurred at minute 20 during interactive Transformer visualization demo.</span>
      </div>
    </div>
  );
}

export default StudentAttentionAnalytics;

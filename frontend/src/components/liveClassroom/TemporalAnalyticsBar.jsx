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
import { Activity, Clock, Bell, CheckCircle2 } from 'lucide-react';
import {
  mockTemporalChartData,
  mockLiveEventsTimeline,
} from '../../data/mockLiveClassroomData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

/**
 * Bottom Section: Temporal Analytics Timeline & AI Event Log
 * Displays Chart.js engagement timeline alongside chronological AI classroom events.
 */
export function TemporalAnalyticsBar({
  chartData = mockTemporalChartData,
  events = mockLiveEventsTimeline,
}) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#94a3b8', font: { family: 'Inter', size: 11 }, usePointStyle: true },
      },
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' }, min: 50, max: 100 },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 select-none">
      {/* Live Engagement Chart Timeline (8 Cols) */}
      <div className="lg:col-span-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Temporal Attention Telemetry</h3>
              <span className="text-xs text-slate-400">Real-Time Attention & Question Frequency</span>
            </div>
          </div>
        </div>

        <div className="h-56 w-full pt-1">
          <Line data={chartData} options={options} />
        </div>
      </div>

      {/* AI Event Log Timeline (4 Cols) */}
      <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">AI Event Timeline</h3>
            <span className="text-xs text-slate-400">Chronological Telemetry Log</span>
          </div>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 space-y-1 hover:border-slate-700 transition-all text-xs"
            >
              <div className="flex items-center justify-between font-mono">
                <span className="text-indigo-400 font-semibold">{event.type}</span>
                <span className="text-slate-500 text-[10px]">{event.time}</span>
              </div>
              <p className="text-slate-300 leading-snug">{event.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemporalAnalyticsBar;

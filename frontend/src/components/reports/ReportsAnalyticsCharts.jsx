import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { TrendingUp, BarChart2, PieChart } from 'lucide-react';
import {
  mockAttendanceTrend,
  mockEngagementPerLecture,
  mockParticipationDistribution,
} from '../../data/mockReportsData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * Analytics Charts Section Component
 * Combines Attendance Line Chart, Engagement Bar Chart, and Participation Doughnut Chart.
 */
export function ReportsAnalyticsCharts({
  attendanceTrend = mockAttendanceTrend,
  engagementBar = mockEngagementPerLecture,
  participationPie = mockParticipationDistribution,
}) {
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' }, min: 80, max: 100 },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' }, min: 70, max: 100 },
    },
  };

  const doughnutData = {
    labels: participationPie.labels,
    datasets: [
      {
        data: participationPie.data,
        backgroundColor: participationPie.colors,
        borderColor: '#090d16',
        borderWidth: 3,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: { legend: { display: false } },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 select-none">
      {/* Attendance Line Chart (6 Cols) */}
      <div className="lg:col-span-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Attendance Trend</h3>
              <span className="text-xs text-slate-400">6-Week Longitudinal Percentage</span>
            </div>
          </div>
        </div>

        <div className="h-60 w-full pt-1">
          <Line data={attendanceTrend} options={lineOptions} />
        </div>
      </div>

      {/* Engagement per Lecture Bar Chart (6 Cols) */}
      <div className="lg:col-span-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Engagement Per Lecture</h3>
              <span className="text-xs text-slate-400">Cross-Course Comparisons</span>
            </div>
          </div>
        </div>

        <div className="h-60 w-full pt-1">
          <Bar data={engagementBar} options={barOptions} />
        </div>
      </div>
    </div>
  );
}

export default ReportsAnalyticsCharts;

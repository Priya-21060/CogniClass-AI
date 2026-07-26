import React from 'react';
import { Users, Sparkles, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import { mockSummaryMetrics } from '../../data/mockReportsData';

/**
 * Summary Cards Component: Key Institutional Metric Cards
 */
export function ReportsSummaryCards({ metrics = mockSummaryMetrics }) {
  const cards = [
    {
      title: 'Overall Attendance',
      value: metrics.attendance.value,
      change: metrics.attendance.change,
      icon: Users,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Average Engagement',
      value: metrics.engagement.value,
      change: metrics.engagement.change,
      icon: Sparkles,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Lecture Completion Rate',
      value: metrics.completionRate.value,
      change: metrics.completionRate.change,
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Student Performance Index',
      value: metrics.performanceIndex.value,
      change: metrics.performanceIndex.change,
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-3 shadow-xl hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">{card.title}</span>
              <div className={`p-2 rounded-xl border ${card.bgColor} ${card.color}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {card.value}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <TrendingUp className="w-3 h-3" />
                {card.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReportsSummaryCards;

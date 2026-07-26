import React from 'react';
import { Sparkles, TrendingUp, Zap, Activity } from 'lucide-react';
import { mockEngagementData } from '../../data/mockDashboardData';

/**
 * Component 1: AI Engagement Score Hero Card
 * Large showcase card inspired by Stripe & Linear featuring real-time AI cognitive score,
 * radial progress gauge, and telemetry metrics.
 */
export function EngagementHeroCard({ data = mockEngagementData }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge & Title */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Real-Time Cognitive Synthesis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Overall AI Engagement Index
          </h2>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{data.status}</span>
        </div>
      </div>

      {/* Main Metric Hero Row */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Big Number Display */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              {data.score}%
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              <TrendingUp className="w-4 h-4" />
              {data.change}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Aggregated neural telemetry across 4 active lecture streams.
          </p>
        </div>

        {/* Circular Gauge Visualization */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                className="text-slate-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                className="text-indigo-500 transition-all duration-1000"
                strokeWidth="10"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 * (1 - data.score / 100)}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <Activity className="w-6 h-6 text-indigo-400 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase">Optimal</span>
            </div>
          </div>
        </div>

        {/* Quick Action Info Pill */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>AI Copilot Active</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Classroom attention is +8.4% higher than institutional baseline. No distraction clusters detected.
          </p>
        </div>
      </div>

      {/* Grid of Sub-Telemetry Cards */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {data.breakdown.map((item, idx) => (
          <div key={idx} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{item.label}</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.value}</div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className={`bg-gradient-to-r ${item.color} h-full w-[90%]`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EngagementHeroCard;

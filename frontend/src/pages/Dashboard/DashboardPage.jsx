import React from 'react';
import { LayoutDashboard, Sparkles, Activity, Clock, Users } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">Classroom Intelligence Dashboard</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Welcome back, Dr. Jenkins. Here is your real-time academic telemetry overview.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all">
            + Start Live Lecture
          </button>
        </div>
      </div>

      {/* Metric Cards Shell */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Lectures', value: '4 Live', icon: Activity, change: '+12% vs last week', color: 'text-emerald-400' },
          { label: 'Avg Engagement Rate', value: '92.4%', icon: Sparkles, change: 'Optimal attention', color: 'text-indigo-400' },
          { label: 'Enrolled Students', value: '1,420', icon: Users, change: 'Active across 6 courses', color: 'text-cyan-400' },
          { label: 'Analyzed Hours', value: '348 hrs', icon: Clock, change: 'Updated 5m ago', color: 'text-purple-400' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className={`text-xs font-medium ${stat.color}`}>{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Main Content Placeholder Container */}
      <div className="min-h-[340px] rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-white">Dashboard Widgets Placeholder</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ready to integrate charts, live engagement streams, acoustic sentiment cards, and automated lecture summaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

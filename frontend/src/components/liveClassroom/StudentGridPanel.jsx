import React from 'react';
import { Users, Sparkles, AlertTriangle, ShieldCheck, Eye, Search } from 'lucide-react';
import { mockStudentGrid } from '../../data/mockLiveClassroomData';

/**
 * Center Panel: 12-Student Neural Attention Grid
 * Displays real-time attention scores, Green/Yellow/Red status badges, and overall engagement meter.
 */
export function StudentGridPanel({ students = mockStudentGrid, overallEngagement = 92.4 }) {
  // Helper for status badge styles
  const getStatusBadge = (status, score) => {
    if (status === 'high' || score >= 85) {
      return {
        bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
        dot: 'bg-emerald-400',
        label: 'High Focus',
      };
    } else if (status === 'medium' || score >= 65) {
      return {
        bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
        dot: 'bg-amber-400',
        label: 'Moderate',
      };
    } else {
      return {
        bg: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
        dot: 'bg-rose-400',
        label: 'Low Focus',
      };
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-5 shadow-xl select-none">
      {/* Header & Overall Engagement Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Live Student Telemetry Grid</h3>
              <span className="text-xs text-slate-400">12 Active Neural Monitoring Nodes</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Attention Engine v4.2</span>
          </div>
        </div>

        {/* Classroom Engagement Bar */}
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold">Overall Classroom Attention Index</span>
            <span className="text-emerald-400 font-bold font-mono">{overallEngagement}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 via-emerald-400 to-cyan-400 h-full transition-all duration-700"
              style={{ width: `${overallEngagement}%` }}
            />
          </div>
        </div>
      </div>

      {/* 12-Student Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
        {students.map((student) => {
          const badge = getStatusBadge(student.status, student.score);

          return (
            <div
              key={student.id}
              className={`
                relative p-3 rounded-xl bg-slate-950/60 border transition-all duration-200
                flex flex-col justify-between space-y-3 group hover:scale-[1.02]
                ${
                  student.status === 'low'
                    ? 'border-rose-500/40 ring-1 ring-rose-500/20'
                    : 'border-slate-800 hover:border-indigo-500/30'
                }
              `}
            >
              {/* Student Header: Avatar & Score */}
              <div className="flex items-center justify-between">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs ring-2 ring-indigo-500/30">
                    {student.avatar}
                  </div>
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-slate-950 ${badge.dot}`} />
                </div>

                <div className="text-right">
                  <span className="text-base font-extrabold text-white font-mono">{student.score}%</span>
                  <span className="text-[10px] text-slate-500 block font-mono">ATTENTION</span>
                </div>
              </div>

              {/* Student Info */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-200 truncate group-hover:text-white transition-colors">
                  {student.name}
                </h4>
                <span className="text-[10px] font-mono text-slate-500 block truncate">{student.seat}</span>
              </div>

              {/* Status Badge & Alert */}
              <div className="pt-1 border-t border-slate-800/60 flex items-center justify-between">
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${badge.bg}`}>
                  {badge.label}
                </span>

                {student.alert ? (
                  <span className="text-rose-400" title={student.alert}>
                    <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-500">{student.focusTime}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentGridPanel;

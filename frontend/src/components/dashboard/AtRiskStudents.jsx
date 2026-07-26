import React from 'react';
import { AlertTriangle, UserX, Send, Calendar } from 'lucide-react';
import { mockAtRiskStudents } from '../../data/mockDashboardData';

/**
 * Component 9: At-Risk Students Intervention Card
 * Highlights students with declining engagement scores or attendance drop-offs for early intervention.
 */
export function AtRiskStudents({ students = mockAtRiskStudents }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">At-Risk Interventions</h3>
            <span className="text-xs text-slate-400">Students Requiring Academic Attention</span>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
          3 Students Flagged
        </span>
      </div>

      <div className="space-y-3">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0">
                {student.avatar}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">{student.name}</h4>
                  <span className="text-[10px] font-mono text-slate-400">({student.course})</span>
                </div>
                <p className="text-xs text-slate-400">{student.issue}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center pt-1 sm:pt-0">
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                {student.riskScore}% Risk
              </span>
              <button
                type="button"
                className="p-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs transition-colors"
                title="Send AI Nudge Notification"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AtRiskStudents;

import React from 'react';
import { BarChart3, FileSpreadsheet, Download, Filter } from 'lucide-react';

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800/80 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">Academic Performance Reports</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Export institutional compliance reports, attendance logs, and student progression analytics.
          </p>
        </div>
      </div>

      <div className="min-h-[420px] rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-white">Reports & Export Shell</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ready for PDF report generation, CSV data exports, and institutional compliance audit tables.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;

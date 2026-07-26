import React, { useState } from 'react';
import { FileText, Download, Sparkles, Calendar, Filter } from 'lucide-react';

/**
 * Top Section: Report Date Filters & Export Action Buttons Component
 */
export function ReportsHeaderFilter({ onExportPDF, onExportExcel, onGenerateAIReport }) {
  const [activeTimeframe, setActiveTimeframe] = useState('This Month');

  const timeframes = ['Today', 'This Week', 'This Month', 'Custom Date'];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl select-none">
      {/* Title & Timeframe Selector */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Academic Intelligence Reports</h2>
            <p className="text-xs text-slate-400">
              Institutional engagement analytics, attendance logs, and AI pedagogical synthesis.
            </p>
          </div>
        </div>

        {/* Timeframe Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-500 font-semibold text-[11px] shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setActiveTimeframe(tf)}
              className={`
                px-3 py-1.5 rounded-xl font-semibold transition-all duration-200 shrink-0
                ${
                  activeTimeframe === tf
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
                }
              `}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Export & AI Actions Row */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={onExportPDF}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
        >
          <Download className="w-4 h-4 text-indigo-400" />
          <span>Export PDF</span>
        </button>

        <button
          type="button"
          onClick={onExportExcel}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Excel</span>
        </button>

        <button
          type="button"
          onClick={onGenerateAIReport}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Generate AI Report</span>
        </button>
      </div>
    </div>
  );
}

export default ReportsHeaderFilter;

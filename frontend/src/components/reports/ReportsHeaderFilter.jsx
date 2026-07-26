import React, { useState } from 'react';
import { FileText, Download, Sparkles, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

export function ReportsHeaderFilter({ onExportPDF, onExportExcel, onGenerateAIReport }) {
  const [activeTimeframe, setActiveTimeframe] = useState('This Month');

  const timeframes = ['Today', 'This Week', 'This Month', 'Custom Date'];

  const handlePDF = () => {
    toast.success('PDF Report exported successfully!');
    if (onExportPDF) onExportPDF();
  };

  const handleExcel = () => {
    toast.success('Excel Telemetry Dataset exported successfully!');
    if (onExportExcel) onExportExcel();
  };

  const handleAIReport = () => {
    const toastId = toast.loading('Synthesizing fresh AI Academic Report...');
    setTimeout(() => {
      toast.success('AI Report synthesized and updated!', { id: toastId });
      if (onGenerateAIReport) onGenerateAIReport();
    }, 1200);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl select-none">
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

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-500 font-semibold text-[11px] shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => {
                setActiveTimeframe(tf);
                toast.success(`Filter set to: ${tf}`);
              }}
              className={`
                px-3 py-1.5 rounded-xl font-semibold transition-all duration-200 shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
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

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={handlePDF}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <Download className="w-4 h-4 text-indigo-400" />
          <span>Export PDF</span>
        </button>

        <button
          type="button"
          onClick={handleExcel}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Excel</span>
        </button>

        <button
          type="button"
          onClick={handleAIReport}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Generate AI Report</span>
        </button>
      </div>
    </div>
  );
}

export default ReportsHeaderFilter;

import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Brain,
} from 'lucide-react';
import { mockAIReport } from '../../data/mockReportsData';

/**
 * AI Report Synthesis Panel Component
 */
export function AIReportPanel({ report = mockAIReport }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800/80 p-6 space-y-6 shadow-2xl select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{report.title}</h3>
            <span className="text-xs text-slate-400">{report.timeframe}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Synthesized by CogniClass AI</span>
        </div>
      </div>

      {/* Summary Narrative */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
        <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
          AI Executive Summary
        </span>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {report.summary}
        </p>
      </div>

      {/* Grid: Strong vs Weak Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong Topics */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-emerald-500/20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>High Concept Mastery Topics</span>
          </div>
          <div className="space-y-2">
            {report.strongTopics.map((topic, i) => (
              <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Topics */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-rose-500/20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <span>Remedial Review Topics</span>
          </div>
          <div className="space-y-2">
            {report.weakTopics.map((topic, i) => (
              <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Improvements & Prediction Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="md:col-span-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Lightbulb className="w-4 h-4" />
            <span>Suggested Pedagogical Improvements</span>
          </div>
          <div className="space-y-1.5">
            {report.improvements.map((item, i) => (
              <p key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Predicted Engagement */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <span>Next Week Forecast</span>
          </div>
          <div className="text-lg font-bold text-white tracking-tight">
            {report.predictionNextWeek}
          </div>
          <span className="text-[10px] text-slate-400">Based on neural historical trends</span>
        </div>
      </div>
    </div>
  );
}

export default AIReportPanel;

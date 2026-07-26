import React from 'react';
import { FileText, Sparkles, BookOpen, Layers, Check } from 'lucide-react';
import { mockLectureSummary } from '../../data/mockDashboardData';

/**
 * Component 8: Lecture Summary Preview Component
 * Displays automated AI lecture summary notes, key takeaways, and flashcard metrics.
 */
export function LectureSummaryPreview({ summary = mockLectureSummary }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">AI Lecture Synthesis</h3>
            <span className="text-xs text-slate-400">{summary.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20 font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>{summary.generatedCardsCount} Flashcards</span>
        </div>
      </div>

      {/* Summary Content Card */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          {summary.title}
        </h4>

        <div className="space-y-2 pt-1">
          {summary.keyTakeaways.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <span className="p-0.5 rounded bg-indigo-500/20 text-indigo-400 mt-0.5 shrink-0">
                <Check className="w-3 h-3" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 text-xs">
        <span className="text-slate-400">
          Sentiment Analysis: <span className="text-emerald-400 font-semibold">{summary.sentimentScore}</span>
        </span>
        <button
          type="button"
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Export Full Summary PDF &rarr;
        </button>
      </div>
    </div>
  );
}

export default LectureSummaryPreview;

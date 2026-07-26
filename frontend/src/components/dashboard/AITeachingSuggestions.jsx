import React from 'react';
import { Sparkles, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import { mockAISuggestions } from '../../data/mockDashboardData';

/**
 * Component 7: AI Teaching Suggestions Component
 * Provides real-time AI recommendations for educators during or after lectures.
 */
export function AITeachingSuggestions({ suggestions = mockAISuggestions }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">AI Pedagogical Copilot</h3>
            <span className="text-xs text-slate-400">Real-Time Recommendations</span>
          </div>
        </div>

        <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          3 Active Suggestions
        </span>
      </div>

      <div className="space-y-3">
        {suggestions.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 space-y-3 hover:border-indigo-500/30 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {item.type}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {item.confidence}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.message}</p>

            <div className="flex items-center justify-between pt-1">
              <span
                className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                  item.priority === 'High'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : item.priority === 'Medium'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {item.priority} Priority
              </span>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>{item.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AITeachingSuggestions;

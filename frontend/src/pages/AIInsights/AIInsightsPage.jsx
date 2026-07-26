import React from 'react';
import { Sparkles, Brain, Cpu, Zap } from 'lucide-react';

export function AIInsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-slate-800/80 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">AI Insights & Cognitive Analytics</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Deep learning summary extraction, student gap analysis, and automated quiz generation.
          </p>
        </div>
      </div>

      <div className="min-h-[420px] rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400">
            <Brain className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-white">AI Insights Module Shell</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ready for LLM-driven lecture transcripts, key concept extraction, and student sentiment timelines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsightsPage;

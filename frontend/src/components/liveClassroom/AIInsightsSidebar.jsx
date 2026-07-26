import React from 'react';
import {
  Sparkles,
  AlertTriangle,
  HelpCircle,
  Volume2,
  Lightbulb,
  Users,
  Smile,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import {
  mockQuestionsQueue,
  mockLiveCopilotTips,
} from '../../data/mockLiveClassroomData';

/**
 * Right Panel: Real-Time AI Telemetry Sidebar & Insights
 * Shows live focus drop alerts, Q&A queue, decibel noise meter, copilot tips, and attendance count.
 */
export function AIInsightsSidebar({
  attendanceCount = 48,
  totalStudents = 50,
  noiseDecibels = 48,
  questions = mockQuestionsQueue,
  tips = mockLiveCopilotTips,
}) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-5 shadow-xl select-none">
      {/* Attendance & Acoustic Decibel Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Attendance</span>
            <Users className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-lg font-extrabold text-white">
            {attendanceCount} / {totalStudents}
          </div>
          <span className="text-[10px] font-mono text-emerald-400">96% Present</span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Room Decibels</span>
            <Volume2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-lg font-extrabold text-white font-mono">{noiseDecibels} dB</div>
          <span className="text-[10px] font-mono text-cyan-400">Optimal Noise</span>
        </div>
      </div>

      {/* Focus Alert Card */}
      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
            Attention Drop Alert
          </span>
          <span className="text-[10px] font-mono text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded">
            2 Students
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Marcus Chen (Row 2) and Lucas Vance (Row 4) are showing sustained focus drop (&lt; 55%).
        </p>
      </div>

      {/* Live Q&A Questions Queue */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            Live Q&A Queue ({questions.length})
          </span>
          <button type="button" className="text-[11px] text-indigo-400 hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-2">
          {questions.map((q) => (
            <div
              key={q.id}
              className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 space-y-1.5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{q.student}</span>
                <span className="text-[10px] font-mono text-slate-500">{q.time}</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">{q.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Pedagogical Copilot Tips */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-white">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>Real-Time AI Copilot Tips</span>
        </div>

        <div className="space-y-2">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-start gap-2.5 text-xs text-slate-300"
            >
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIInsightsSidebar;

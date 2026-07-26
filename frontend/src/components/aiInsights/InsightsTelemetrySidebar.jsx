import React from 'react';
import {
  Sparkles,
  AlertTriangle,
  TrendingUp,
  FileCheck,
  BookOpen,
  HelpCircle,
  Layers,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import {
  mockWeakStudents,
  mockWeakTopics,
  mockPredictions,
} from '../../data/mockAIInsightsData';

/**
 * Right Panel: Academic Telemetry, Student Predictions & AI Generator Suite
 * Provides one-click triggers for Homework, Quizzes, Revision Notes, and Risk Predictions.
 */
export function InsightsTelemetrySidebar() {
  const handleGenerate = (type) => {
    alert(`AI Engine Trigger: Generating ${type} for CS-402...`);
  };

  return (
    <div className="w-full lg:w-80 bg-slate-900/90 border-l border-slate-800/80 p-4 sm:p-5 flex flex-col h-full overflow-y-auto space-y-5 select-none">
      {/* AI Classroom Summary Header */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            AI Classroom Synthesis
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Active
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Course engagement for CS-402 is high (92.4%), but 3 students showed conceptual gaps during Matrix Scaling derivation.
        </p>
      </div>

      {/* AI Generators Suite */}
      <div className="space-y-2">
        <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
          Automated AI Generators
        </span>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleGenerate('Homework Sheet')}
            className="p-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition-all space-y-1"
          >
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="block">Homework</span>
          </button>

          <button
            type="button"
            onClick={() => handleGenerate('Interactive Quiz')}
            className="p-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition-all space-y-1"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="block">Quiz</span>
          </button>

          <button
            type="button"
            onClick={() => handleGenerate('Assignment Lab')}
            className="p-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition-all space-y-1"
          >
            <FileCheck className="w-4 h-4 text-purple-400" />
            <span className="block">Assignment</span>
          </button>

          <button
            type="button"
            onClick={() => handleGenerate('Revision Notes')}
            className="p-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition-all space-y-1"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span className="block">Revision Notes</span>
          </button>
        </div>
      </div>

      {/* Weak Topics Section */}
      <div className="space-y-3">
        <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
          Weak Concept Topics
        </span>

        <div className="space-y-2">
          {mockWeakTopics.map((topic, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{topic.topic}</span>
                <span className="text-[10px] font-mono font-bold text-rose-400">
                  {topic.score}% Mastery
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-rose-500 h-full"
                  style={{ width: `${topic.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* At-Risk Predictive Metrics */}
      <div className="space-y-3 pt-2 border-t border-slate-800/80">
        <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
          Predictive Student Analytics
        </span>

        <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Predicted Risk Rate</span>
            <span className="font-mono font-bold text-rose-400">
              {mockPredictions.riskRate}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Predicted Attendance</span>
            <span className="font-mono font-bold text-emerald-400">
              {mockPredictions.expectedAttendance}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsTelemetrySidebar;

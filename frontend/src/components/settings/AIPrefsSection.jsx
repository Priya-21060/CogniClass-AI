import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, Check, Sliders } from 'lucide-react';
import Checkbox from '../ui/Checkbox';
import { mockAIPrefs } from '../../data/mockSettingsData';

/**
 * Section 3: AI Preferences, Model Selector & Confidence Slider
 */
export function AIPrefsSection() {
  const [aiPrefs, setAiPrefs] = useState(mockAIPrefs);

  const handleToggle = (key) => {
    setAiPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div id="ai-settings" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">AI Engine Preferences</h3>
          <p className="text-xs text-slate-400">Configure neural models, automated copilot tools, and confidence thresholds.</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Model Selector Dropdown */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wide">
            Active Neural Telemetry Engine
          </label>
          <select
            value={aiPrefs.selectedModel}
            onChange={(e) => setAiPrefs({ ...aiPrefs, selectedModel: e.target.value })}
            className="w-full bg-slate-950/80 text-slate-100 text-sm font-medium rounded-xl border border-slate-800 px-3.5 py-2.5 outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="CogniClass Gemini Pro v4.2 (High Precision)">
              CogniClass Gemini Pro v4.2 (High Precision • Recommended)
            </option>
            <option value="CogniClass Flash Lite v2.1 (Ultra Low Latency)">
              CogniClass Flash Lite v2.1 (Ultra Low Latency)
            </option>
            <option value="CogniClass Copilot Enterprise Edition">
              CogniClass Copilot Enterprise Edition
            </option>
          </select>
        </div>

        {/* Feature Toggles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Enable Automated Summaries</span>
              <span className="text-[11px] text-slate-400">Generate PDF notes post-lecture</span>
            </div>
            <Checkbox
              id="enableSummaries"
              checked={aiPrefs.enableSummaries}
              onChange={() => handleToggle('enableSummaries')}
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Enable Quiz Generation</span>
              <span className="text-[11px] text-slate-400">Auto-create 5-minute flash quizzes</span>
            </div>
            <Checkbox
              id="enableQuizGen"
              checked={aiPrefs.enableQuizGen}
              onChange={() => handleToggle('enableQuizGen')}
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Enable Homework Generator</span>
              <span className="text-[11px] text-slate-400">Synthesize targeted assignments</span>
            </div>
            <Checkbox
              id="enableHomeworkGen"
              checked={aiPrefs.enableHomeworkGen}
              onChange={() => handleToggle('enableHomeworkGen')}
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Student Risk Prediction</span>
              <span className="text-[11px] text-slate-400">Predict learning gap vulnerabilities</span>
            </div>
            <Checkbox
              id="enableRiskPrediction"
              checked={aiPrefs.enableRiskPrediction}
              onChange={() => handleToggle('enableRiskPrediction')}
            />
          </div>
        </div>

        {/* Confidence Threshold Slider */}
        <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" /> AI Diagnostic Confidence Limit
            </span>
            <span className="font-bold text-indigo-400 font-mono">{aiPrefs.confidenceThreshold}%</span>
          </div>
          <input
            type="range"
            min="60"
            max="98"
            value={aiPrefs.confidenceThreshold}
            onChange={(e) => setAiPrefs({ ...aiPrefs, confidenceThreshold: Number(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <p className="text-[11px] text-slate-400">Higher values ensure AI suggestions only trigger when model certainty exceeds threshold.</p>
        </div>
      </div>
    </div>
  );
}

export default AIPrefsSection;

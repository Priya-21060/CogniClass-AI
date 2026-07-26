import React, { useState } from 'react';
import { Sliders, Clock, Users, Activity, Video } from 'lucide-react';
import { mockClassroomPrefs } from '../../data/mockSettingsData';

/**
 * Section 2: Classroom Preferences & Sliders
 */
export function ClassroomPrefsSection() {
  const [prefs, setPrefs] = useState(mockClassroomPrefs);

  return (
    <div id="classroom" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">Classroom Preferences</h3>
          <p className="text-xs text-slate-400">Configure default lecture duration and attention sensitivity thresholds.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Default Class Duration */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wide">
            Default Lecture Duration
          </label>
          <select
            value={prefs.defaultDuration}
            onChange={(e) => setPrefs({ ...prefs, defaultDuration: e.target.value })}
            className="w-full bg-slate-950/80 text-slate-100 text-sm font-medium rounded-xl border border-slate-800 px-3.5 py-2.5 outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="45 minutes">45 Minutes</option>
            <option value="60 minutes">60 Minutes (Standard)</option>
            <option value="90 minutes">90 Minutes</option>
            <option value="120 minutes">120 Minutes (Seminar)</option>
          </select>
        </div>

        {/* Default Lecture Mode */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wide">
            Default Broadcast Mode
          </label>
          <select
            value={prefs.defaultLectureMode}
            onChange={(e) => setPrefs({ ...prefs, defaultLectureMode: e.target.value })}
            className="w-full bg-slate-950/80 text-slate-100 text-sm font-medium rounded-xl border border-slate-800 px-3.5 py-2.5 outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="Hybrid (Acoustic + Video AI)">Hybrid (Acoustic + Video AI)</option>
            <option value="In-Person Only">In-Person Only</option>
            <option value="Remote Online Broadcast">Remote Online Broadcast</option>
          </select>
        </div>

        {/* Attendance Threshold Slider */}
        <div className="space-y-3 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-indigo-400" /> Attendance Warning Threshold
            </span>
            <span className="font-bold text-indigo-400 font-mono">{prefs.attendanceThreshold}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="95"
            value={prefs.attendanceThreshold}
            onChange={(e) => setPrefs({ ...prefs, attendanceThreshold: Number(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <p className="text-[11px] text-slate-400">Trigger alert if classroom attendance drops below this percentage.</p>
        </div>

        {/* Engagement Threshold Slider */}
        <div className="space-y-3 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-cyan-400" /> Attention Threshold Trigger
            </span>
            <span className="font-bold text-cyan-400 font-mono">{prefs.engagementThreshold}%</span>
          </div>
          <input
            type="range"
            min="40"
            max="90"
            value={prefs.engagementThreshold}
            onChange={(e) => setPrefs({ ...prefs, engagementThreshold: Number(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <p className="text-[11px] text-slate-400">Flag student as distracted when real-time focus score falls below this limit.</p>
        </div>
      </div>
    </div>
  );
}

export default ClassroomPrefsSection;

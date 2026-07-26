import React from 'react';
import { Radio, Users, Mic, Video, Volume2, Shield } from 'lucide-react';
import { mockLiveClass } from '../../data/mockDashboardData';

/**
 * Component 2: Live Classroom Telemetry Status Card
 * Shows ongoing live stream telemetry, active topic, audio visualizer wave, and control actions.
 */
export function LiveClassroomStatus({ data = mockLiveClass }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-5 shadow-xl">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Live Classroom Studio</h3>
            <span className="text-xs text-slate-400">{data.room}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span>{data.status}</span>
        </div>
      </div>

      {/* Course Title & Topic */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs text-indigo-400 font-mono font-semibold">
          <span>{data.courseCode}</span>
          <span>{data.duration}</span>
        </div>
        <h4 className="text-base font-bold text-white">{data.courseName}</h4>
        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          <span className="text-slate-300 font-medium">Topic:</span>
          <span>{data.currentTopic}</span>
        </p>
      </div>

      {/* Live Metrics Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">Attendance</span>
            <span className="text-sm font-bold text-white">
              {data.activeStudents} / {data.totalStudents} Online
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">Audio Spectrum</span>
            <span className="text-sm font-bold text-emerald-400">{data.audioQuality}</span>
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md shadow-rose-600/20 transition-all"
        >
          <Video className="w-4 h-4" />
          <span>Join Stream</span>
        </button>
        <button
          type="button"
          className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
          title="Mute Audio Feed"
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default LiveClassroomStatus;

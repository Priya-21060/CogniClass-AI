import React, { useState, useEffect } from 'react';
import {
  Video,
  Play,
  Pause,
  Square,
  Radio,
  Eye,
  Activity,
  Layers,
  Settings2,
  Maximize2,
} from 'lucide-react';
import { mockLiveLectureInfo } from '../../data/mockLiveClassroomData';

/**
 * Left Panel: Live Classroom Neural Camera Feed & Faculty Controls
 * Displays 16:9 camera feed viewport with HUD tech overlays, status indicators, and lecture controls.
 */
export function VideoFeedPanel({ info = mockLiveLectureInfo }) {
  const [seconds, setSeconds] = useState(info.durationSeconds);
  const [isPaused, setIsPaused] = useState(false);

  // Timer counter effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs > 0 ? `${hrs}:` : ''}${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-4 space-y-4 shadow-xl select-none">
      {/* 16:9 Neural Camera Viewport */}
      <div className="relative aspect-video w-full rounded-xl bg-slate-950 overflow-hidden border border-slate-800 group">
        {/* Abstract AI Neural Camera Visual Background (Tailwind CSS) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-indigo-950/30 to-slate-950" />

        {/* Ambient Pulsing Radar Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-indigo-500/20 animate-ping opacity-30 pointer-events-none" />
          <div className="w-72 h-72 rounded-full border border-cyan-500/15 pointer-events-none" />
        </div>

        {/* HUD Overlay Lines */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {/* Recording & Camera Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono font-bold text-rose-400">REC</span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-slate-300">{formatTime(seconds)}</span>
          </div>

          {/* Neural Model Telemetry Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>AI Neural Cam 60FPS</span>
          </div>
        </div>

        {/* Center Camera Feed Icon & Visual HUD Target */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none space-y-2">
          <div className="p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 backdrop-blur-md shadow-2xl">
            <Video className="w-10 h-10 animate-pulse" />
          </div>
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
            Live Stream Feed • Auditorium B-12
          </span>
        </div>

        {/* Bottom Viewport Telemetry Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>12 Student Neural Nodes Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Resolution: 1080p</span>
            <Maximize2 className="w-3.5 h-3.5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Course Info & Details */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
          <span>{info.courseCode}</span>
          <span className="text-slate-400">{info.instructor}</span>
        </div>
        <h3 className="text-base font-bold text-white tracking-tight">{info.title}</h3>
      </div>

      {/* Faculty Controls Section */}
      <div className="pt-2 space-y-2 border-t border-slate-800/80">
        <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block">
          Faculty Telemetry Controls
        </span>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setIsPaused(false)}
            disabled={!isPaused}
            className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all shadow-md ${
              !isPaused
                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 opacity-60 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all"
          >
            <Pause className="w-3.5 h-3.5" />
            <span>{isPaused ? 'Paused' : 'Pause AI'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (confirm('Are you sure you want to conclude the live lecture session?')) {
                alert('Lecture concluded. Generating summary notes...');
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all"
          >
            <Square className="w-3.5 h-3.5" />
            <span>End Class</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoFeedPanel;

import React from 'react';
import { Radio, Video, Mic, Users, Activity } from 'lucide-react';

export function LiveClassPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/30 to-slate-900 border border-slate-800/80 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-rose-400 animate-pulse" />
            <h2 className="text-xl font-bold text-white tracking-tight">Live Classroom Studio</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time audio telemetry, computer vision attention tracking, and instant Q&A synthesis.
          </p>
        </div>
      </div>

      <div className="min-h-[420px] rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto text-rose-400">
            <Video className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-white">Live Classroom Broadcast Shell</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ready for real-time WebRTC streams, acoustic transcriptions, and live student emotion analysis feed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LiveClassPage;

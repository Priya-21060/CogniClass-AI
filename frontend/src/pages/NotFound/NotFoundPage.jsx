import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Home, LogIn, ArrowLeft } from 'lucide-react';

/**
 * Premium 404 Not Found Page for CogniClass AI.
 */
export function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6">
        {/* Animated Icon Badge */}
        <div className="inline-flex p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-2xl animate-float">
          <BrainCircuit className="w-12 h-12" />
        </div>

        {/* 404 Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-extrabold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Error 404 • Neural Node Disconnected
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
            The telemetry route you are looking for does not exist or has been relocated to another workspace.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            to="/dashboard"
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800 transition-all active:scale-[0.98]"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

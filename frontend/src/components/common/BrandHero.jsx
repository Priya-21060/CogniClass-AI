import React from 'react';
import {
  Sparkles,
  BrainCircuit,
  Activity,
  Users,
  ShieldCheck,
  TrendingUp,
  BarChart2,
  Zap,
} from 'lucide-react';

/**
 * Left Hero Section for CogniClass AI.
 * Implements an abstract AI-themed visual background built exclusively with Tailwind CSS & inline SVGs.
 * Inspired by Linear's precision grid, Notion's subtle warmth, and Stripe's radiant gradients.
 */
export function BrandHero() {
  return (
    <div className="relative flex flex-col justify-between h-full p-8 lg:p-12 overflow-hidden bg-slate-950 text-white select-none">
      {/* Dynamic Ambient Radiant Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Top Branding Section */}
      <div className="relative z-10 space-y-6">
        {/* Platform Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            AI-Powered Classroom Intelligence Platform
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              CogniClass AI
            </h1>
          </div>
          <p className="text-base sm:text-lg text-slate-400 max-w-md leading-relaxed font-normal">
            Real-time acoustic & visual AI analytics empowering educators with deep classroom engagement, attention tracking, and automated lecture intelligence.
          </p>
        </div>
      </div>

      {/* Center AI Intelligence Abstract Visual Card (Pure Tailwind + Inline SVG) */}
      <div className="relative z-10 my-8 lg:my-0">
        <div className="relative max-w-md mx-auto">
          {/* Decorative Back Light */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-40 animate-pulse-glow" />

          {/* Main Telemetry Card */}
          <div className="relative rounded-2xl glass-panel p-5 space-y-4 shadow-2xl">
            {/* Header telemetry info */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200 tracking-wide">
                  Live Classroom Telemetry
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
                AI Model v4.2
              </span>
            </div>

            {/* Metric Bars & Graphs */}
            <div className="grid grid-cols-2 gap-3">
              {/* Metric 1 */}
              <div className="p-3 rounded-xl glass-card space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Engagement</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white">94.8%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full w-[94.8%]" />
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-3 rounded-xl glass-card space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Active Classrooms</span>
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white">1,240+</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[82%]" />
                </div>
              </div>
            </div>

            {/* Abstract AI Frequency Waveform Visualizer */}
            <div className="p-3.5 rounded-xl glass-card space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" />
                  Real-Time Cognitive Load Synthesis
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">Optimal</span>
              </div>

              {/* Waveform SVG */}
              <div className="h-12 w-full pt-1">
                <svg className="w-full h-full text-indigo-400/80" viewBox="0 0 300 40" fill="none">
                  <path
                    d="M0 20 Q 15 5, 30 20 T 60 20 T 90 35 T 120 10 T 150 28 T 180 5 T 210 25 T 240 15 T 270 22 T 300 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0 20 Q 15 5, 30 20 T 60 20 T 90 35 T 120 10 T 150 28 T 180 5 T 210 25 T 240 15 T 270 22 T 300 20 L 300 40 L 0 40 Z"
                    fill="url(#wave-gradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating Mini Notification Pill */}
            <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs shadow-xl animate-float">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span className="text-slate-200">AI Assistant generated 14 smart flashcards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Institutional Trust / Social Proof */}
      <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-400" />
          <span>SOC-2 & FERPA Compliant</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-300">500+ Partner Institutions</span>
        </div>
      </div>
    </div>
  );
}

export default BrandHero;

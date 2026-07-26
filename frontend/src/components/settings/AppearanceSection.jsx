import React, { useState } from 'react';
import { Palette, Moon, Sun, Type, LayoutGrid } from 'lucide-react';
import Checkbox from '../ui/Checkbox';
import { mockAppearance } from '../../data/mockSettingsData';

/**
 * Section 5: Appearance, Theme & Accent Selector
 */
export function AppearanceSection() {
  const [appearance, setAppearance] = useState(mockAppearance);

  const colors = [
    { id: 'indigo', name: 'Indigo Glow', bg: 'bg-indigo-600' },
    { id: 'cyan', name: 'Cyan Cyber', bg: 'bg-cyan-500' },
    { id: 'purple', name: 'Deep Violet', bg: 'bg-purple-600' },
    { id: 'emerald', name: 'Emerald Focus', bg: 'bg-emerald-500' },
  ];

  return (
    <div id="appearance" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Palette className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">Appearance & Theme</h3>
          <p className="text-xs text-slate-400">Customize portal color schemes, font scales, and layout density.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Dark Mode Toggle */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Moon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Dark Mode</span>
              <span className="text-[11px] text-slate-400">Low-glare dark theme optimized for classroom projection</span>
            </div>
          </div>
          <Checkbox
            id="darkMode"
            checked={appearance.darkMode}
            onChange={() => setAppearance({ ...appearance, darkMode: !appearance.darkMode })}
          />
        </div>

        {/* Accent Color Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wide">
            Brand Accent Palette
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setAppearance({ ...appearance, accentColor: c.id })}
                className={`
                  p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all
                  ${
                    appearance.accentColor === c.id
                      ? 'bg-slate-950 border-indigo-500 ring-2 ring-indigo-500/30'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                  }
                `}
              >
                <span className={`w-4 h-4 rounded-full ${c.bg} shrink-0`} />
                <span className="text-xs font-semibold text-slate-200">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font Size & Compact Mode Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wide">
              Interface Typography Scale
            </label>
            <select
              value={appearance.fontSize}
              onChange={(e) => setAppearance({ ...appearance, fontSize: e.target.value })}
              className="w-full bg-slate-950/80 text-slate-100 text-sm font-medium rounded-xl border border-slate-800 px-3.5 py-2.5 outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="Small">Small (Compact 13px)</option>
              <option value="Medium (Standard)">Medium (Standard 14px)</option>
              <option value="Large">Large (Accessibility 16px)</option>
            </select>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="w-4 h-4 text-slate-400" />
              <div>
                <span className="text-xs font-semibold text-white block">Compact Viewport</span>
                <span className="text-[11px] text-slate-400">Reduce padding for data density</span>
              </div>
            </div>
            <Checkbox
              id="compactMode"
              checked={appearance.compactMode}
              onChange={() => setAppearance({ ...appearance, compactMode: !appearance.compactMode })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppearanceSection;

import React from 'react';
import { Calendar, Activity, Info } from 'lucide-react';
import { mockHeatmapData } from '../../data/mockReportsData';

/**
 * Heatmap-style Weekly Classroom Activity Grid Component
 */
export function WeeklyActivityHeatmap({ data = mockHeatmapData }) {
  const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

  // Helper for heatmap cell color intensity
  const getCellColor = (score) => {
    if (score >= 95) return 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/50';
    if (score >= 90) return 'bg-indigo-600/80 text-indigo-100';
    if (score >= 85) return 'bg-indigo-800/60 text-indigo-200';
    return 'bg-slate-800/80 text-slate-400';
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl select-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Weekly Classroom Activity Heatmap</h3>
            <span className="text-xs text-slate-400">Engagement Intensity Matrix by Day & Hour</span>
          </div>
        </div>

        {/* Color Key */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-medium">
          <span>Low</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-slate-800/80" />
            <span className="w-3 h-3 rounded bg-indigo-800/60" />
            <span className="w-3 h-3 rounded bg-indigo-600/80" />
            <span className="w-3 h-3 rounded bg-indigo-500" />
          </div>
          <span>Peak (98%)</span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pt-2">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr>
              <th className="p-2 font-mono text-slate-500 text-[11px] w-20">Time</th>
              {data.map((item) => (
                <th key={item.day} className="p-2 font-mono font-bold text-slate-300 text-center">
                  {item.day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, slotIdx) => (
              <tr key={slotIdx} className="border-t border-slate-800/40">
                <td className="p-2 font-mono text-slate-400 text-[11px] whitespace-nowrap">
                  {slot}
                </td>
                {data.map((dayItem) => {
                  const score = dayItem.slots[slotIdx];
                  const colorClass = getCellColor(score);
                  return (
                    <td key={dayItem.day} className="p-1 text-center">
                      <div
                        className={`py-2 px-1 rounded-xl text-xs font-bold font-mono transition-transform hover:scale-105 cursor-pointer ${colorClass}`}
                        title={`${dayItem.day} ${slot}: ${score}% Engagement`}
                      >
                        {score}%
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklyActivityHeatmap;

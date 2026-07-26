import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { mockSchedule } from '../../data/mockDashboardData';

/**
 * Component 3: Today's Classes List Component
 * Shows scheduled lectures for the day with room locations, student counts, and status tags.
 */
export function TodaysClasses({ schedule = mockSchedule }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Today&apos;s Schedule</h3>
            <span className="text-xs text-slate-400">4 Classes Scheduled</span>
          </div>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          View Full Calendar &rarr;
        </button>
      </div>

      <div className="space-y-2.5">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-xl bg-slate-950/50 hover:bg-slate-800/40 border border-slate-800/60 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-400">{item.code}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {item.time}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-0.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {item.room}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-500" />
                  {item.students} Students
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                {item.status}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors hidden sm:block" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaysClasses;

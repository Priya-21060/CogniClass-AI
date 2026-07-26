import React from 'react';
import { Bell, Zap, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { mockAIAlerts } from '../../data/mockDashboardData';

/**
 * Component 10: Recent AI Telemetry Alerts Timeline
 * Shows real-time automated system events, engagement spikes, and concept warnings.
 */
export function RecentAIAlerts({ alerts = mockAIAlerts }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Recent AI Alerts</h3>
            <span className="text-xs text-slate-400">Live Stream Notifications</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/60 flex items-start gap-3 hover:border-slate-700 transition-all"
          >
            <div className={`p-2 rounded-xl border shrink-0 ${alert.iconColor}`}>
              <Zap className="w-4 h-4" />
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white truncate">{alert.title}</h4>
                <span className="text-[10px] text-slate-500 font-mono shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-600" />
                  {alert.time}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAIAlerts;

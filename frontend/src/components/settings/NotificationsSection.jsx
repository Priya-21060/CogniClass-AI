import React, { useState } from 'react';
import { Bell, Mail, Monitor, FileText, Radio } from 'lucide-react';
import Checkbox from '../ui/Checkbox';
import { mockNotifications } from '../../data/mockSettingsData';

/**
 * Section 4: Notifications & Alert Preferences
 */
export function NotificationsSection() {
  const [notifs, setNotifs] = useState(mockNotifications);

  const handleToggle = (key) => {
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div id="notifications" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
          <Bell className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">Notification Channels</h3>
          <p className="text-xs text-slate-400">Manage real-time classroom telemetry alerts and email digest schedules.</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Email Digests</span>
              <span className="text-[11px] text-slate-400">Receive daily summary emails for student engagement logs</span>
            </div>
          </div>
          <Checkbox
            id="emailNotifications"
            checked={notifs.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
          />
        </div>

        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Monitor className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Desktop Browser Push</span>
              <span className="text-[11px] text-slate-400">Pop up urgent popups during live lectures</span>
            </div>
          </div>
          <Checkbox
            id="desktopNotifications"
            checked={notifs.desktopNotifications}
            onChange={() => handleToggle('desktopNotifications')}
          />
        </div>

        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Weekly Institutional AI Report</span>
              <span className="text-[11px] text-slate-400">Receive weekly PDF analytics digest every Monday at 08:00 AM</span>
            </div>
          </div>
          <Checkbox
            id="weeklyReports"
            checked={notifs.weeklyReports}
            onChange={() => handleToggle('weeklyReports')}
          />
        </div>

        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Live Classroom Interventions</span>
              <span className="text-[11px] text-slate-400">Instant alerts when student focus drops below 50%</span>
            </div>
          </div>
          <Checkbox
            id="liveClassroomAlerts"
            checked={notifs.liveClassroomAlerts}
            onChange={() => handleToggle('liveClassroomAlerts')}
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationsSection;

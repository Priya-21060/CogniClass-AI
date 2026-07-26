import React from 'react';
import {
  User,
  Sliders,
  Brain,
  Bell,
  Palette,
  ShieldCheck,
  HardDrive,
} from 'lucide-react';

/**
 * Settings Navigation Tabs Component
 */
export function SettingsNavTabs({ activeSection, onSelectSection }) {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'classroom', label: 'Classroom', icon: Sliders },
    { id: 'ai-settings', label: 'AI Settings', icon: Brain },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'storage', label: 'Storage & Data', icon: HardDrive },
  ];

  const handleTabClick = (id) => {
    onSelectSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/80 select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeSection === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabClick(tab.id)}
            className={`
              inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all duration-200
              ${
                isActive
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-sm'
                  : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/60'
              }
            `}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SettingsNavTabs;

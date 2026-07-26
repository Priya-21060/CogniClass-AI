import React, { useState } from 'react';
import SettingsNavTabs from '../../components/settings/SettingsNavTabs';
import ProfileSection from '../../components/settings/ProfileSection';
import ClassroomPrefsSection from '../../components/settings/ClassroomPrefsSection';
import AIPrefsSection from '../../components/settings/AIPrefsSection';
import NotificationsSection from '../../components/settings/NotificationsSection';
import AppearanceSection from '../../components/settings/AppearanceSection';
import SecuritySection from '../../components/settings/SecuritySection';
import StorageDataSection from '../../components/settings/StorageDataSection';

/**
 * Premium Enterprise Settings Page for CogniClass AI.
 * Assembles Profile, Classroom Preferences, AI Engine Settings, Notifications,
 * Appearance, Security, and Cloud Storage sections into a cohesive dark interface.
 */
export function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="space-y-6 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800/80 shadow-xl space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          System & Account Settings
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Configure your faculty profile, classroom telemetry thresholds, AI neural copilot models, and security protocols.
        </p>
      </div>

      {/* Quick Navigation Tabs */}
      <SettingsNavTabs
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* All 7 Settings Sections */}
      <div className="space-y-6">
        <ProfileSection />
        <ClassroomPrefsSection />
        <AIPrefsSection />
        <NotificationsSection />
        <AppearanceSection />
        <SecuritySection />
        <StorageDataSection />
      </div>
    </div>
  );
}

export default SettingsPage;

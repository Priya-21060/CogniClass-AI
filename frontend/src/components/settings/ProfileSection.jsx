import React, { useState } from 'react';
import { User, Mail, Building2, GraduationCap, Camera, Check } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { mockProfileData } from '../../data/mockSettingsData';

/**
 * Section 1: Profile Details & Avatar Upload
 */
export function ProfileSection() {
  const [profile, setProfile] = useState(mockProfileData);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSavedSuccess(false);

    setTimeout(() => {
      setIsSaving(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div id="profile" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Academic Profile</h3>
            <p className="text-xs text-slate-400">Manage your faculty credentials and institutional details.</p>
          </div>
        </div>

        {savedSuccess && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold">
            <Check className="w-3.5 h-3.5" /> Changes Saved
          </span>
        )}
      </div>

      {/* Avatar Upload */}
      <div className="flex items-center gap-5">
        <div className="relative group">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-extrabold text-white text-2xl shadow-xl ring-4 ring-indigo-500/20">
            {profile.avatarInitials}
          </div>
          <button
            type="button"
            onClick={() => alert('Profile photo upload trigger')}
            className="absolute bottom-0 right-0 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-lg"
            title="Change Profile Photo"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-1">
          <h4 className="text-base font-bold text-white">{profile.fullName}</h4>
          <p className="text-xs text-slate-400">{profile.role}</p>
          <span className="text-[11px] font-mono text-indigo-400">Verified Institutional Faculty</span>
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="fullName"
            label="Full Name"
            value={profile.fullName}
            onChange={handleChange}
            icon={User}
            required
          />

          <Input
            id="email"
            label="Institutional Email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            icon={Mail}
            required
          />

          <Input
            id="department"
            label="Department"
            value={profile.department}
            onChange={handleChange}
            icon={Building2}
            required
          />

          <Input
            id="university"
            label="University / Academy"
            value={profile.university}
            onChange={handleChange}
            icon={GraduationCap}
            required
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            variant="primary"
            loading={isSaving}
            fullWidth={false}
            className="px-6"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSection;

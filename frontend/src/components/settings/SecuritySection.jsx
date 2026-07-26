import React, { useState } from 'react';
import { ShieldCheck, Key, Smartphone, LogOut, Laptop, CheckCircle2 } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import { mockSecuritySessions } from '../../data/mockSettingsData';

/**
 * Section 6: Security, Password Change, 2FA & Active Sessions
 */
export function SecuritySection() {
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirmPass: '',
  });

  const [twoFactor, setTwoFactor] = useState(true);
  const [sessions, setSessions] = useState(mockSecuritySessions);
  const [isUpdatingPass, setIsUpdatingPass] = useState(false);
  const [passSuccess, setPassSuccess] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passwords.current || !passwords.newPass) return;

    setIsUpdatingPass(true);
    setPassSuccess(false);

    setTimeout(() => {
      setIsUpdatingPass(false);
      setPassSuccess(true);
      setPasswords({ current: '', newPass: '', confirmPass: '' });
      setTimeout(() => setPassSuccess(false), 3000);
    }, 1200);
  };

  const handleLogoutAll = () => {
    if (confirm('Are you sure you want to sign out from all other active device sessions?')) {
      setSessions((prev) => prev.filter((s) => s.current));
    }
  };

  return (
    <div id="security" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Security & Authentication</h3>
            <p className="text-xs text-slate-400">Manage credentials, two-factor authentication, and active sessions.</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" /> SOC-2 Compliant
        </span>
      </div>

      {/* Change Password Form */}
      <form onSubmit={handlePasswordSubmit} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <Key className="w-4 h-4 text-indigo-400" /> Change Access Password
        </h4>

        {passSuccess && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
            Password successfully updated!
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Input
            id="current"
            label="Current Password"
            type="password"
            placeholder="••••••••••••"
            value={passwords.current}
            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
            required
          />

          <Input
            id="newPass"
            label="New Password"
            type="password"
            placeholder="••••••••••••"
            value={passwords.newPass}
            onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
            required
          />

          <Input
            id="confirmPass"
            label="Confirm Password"
            type="password"
            placeholder="••••••••••••"
            value={passwords.confirmPass}
            onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
            required
          />
        </div>

        <div className="flex justify-end pt-1">
          <Button
            type="submit"
            variant="secondary"
            loading={isUpdatingPass}
            fullWidth={false}
            className="text-xs px-4 py-2"
          >
            Update Password
          </Button>
        </div>
      </form>

      {/* Two-Factor Authentication */}
      <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Two-Factor Authentication (2FA)</span>
            <span className="text-[11px] text-slate-400">Enforce Authenticator app code verification on sign in</span>
          </div>
        </div>
        <Checkbox
          id="twoFactor"
          checked={twoFactor}
          onChange={() => setTwoFactor(!twoFactor)}
        />
      </div>

      {/* Active Sessions List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
            Active Device Sessions ({sessions.length})
          </h4>
          {sessions.length > 1 && (
            <button
              type="button"
              onClick={handleLogoutAll}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout All Other Devices
            </button>
          )}
        </div>

        <div className="space-y-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <Laptop className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{session.device}</span>
                    {session.current && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Current Device
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    {session.location} • {session.ip}
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-slate-500 font-mono">{session.lastActive}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;

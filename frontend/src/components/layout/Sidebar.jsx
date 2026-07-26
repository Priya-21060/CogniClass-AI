import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  LayoutDashboard,
  Radio,
  Sparkles,
  BarChart3,
  Settings,
  BrainCircuit,
  LogOut,
  X,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export const NAV_ITEMS = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    badge: null,
  },
  {
    name: 'Live Classroom',
    path: '/live-classroom',
    icon: Radio,
    badge: 'LIVE',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
  {
    name: 'AI Insights',
    path: '/ai-insights',
    icon: Sparkles,
    badge: 'NEW',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: BarChart3,
    badge: null,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    badge: null,
  },
];

export function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    toast.success('Signed out successfully.');
    navigate('/login');
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-72 bg-slate-900/95 border-r border-slate-800/80
          flex flex-col justify-between transition-transform duration-300 ease-in-out select-none
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}
      >
        <div className="p-5 space-y-6">
          <div className="flex items-center justify-between">
            <NavLink to="/dashboard" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-xl p-1">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-none">
                  CogniClass <span className="text-indigo-400">AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mt-1">
                  Classroom Intelligence
                </span>
              </div>
            </NavLink>

            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-300">Neural Engine Online</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
              v4.2
            </span>
          </div>
        </div>

        <div className="flex-1 px-3 space-y-1 overflow-y-auto py-2">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
            Main Menu
          </div>

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                  ${
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-500 rounded-r-full" />
                )}

                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                </div>
              </NavLink>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-800/80 space-y-3 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-md ring-2 ring-indigo-500/30">
                SJ
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">Dr. Sarah Jenkins</h4>
              <p className="text-xs text-slate-400 truncate flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-indigo-400 inline" />
                Prof. Computer Science
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

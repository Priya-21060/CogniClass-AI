import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  Sparkles,
  ChevronRight,
  User,
  SlidersHorizontal,
} from 'lucide-react';
import { NAV_ITEMS } from './Sidebar';

/**
 * Reusable Top Navigation Component.
 * Contains page breadcrumb title, mobile toggle, quick search bar, and action notifications.
 */
export function TopNav({ onOpenMobileSidebar }) {
  const location = useLocation();

  // Find active nav item based on route
  const activeNavItem = NAV_ITEMS.find((item) => item.path === location.pathname) || {
    name: 'Dashboard',
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between gap-4 select-none">
      {/* Left: Mobile Sidebar Trigger & Breadcrumb Page Title */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Dynamic Breadcrumb & Page Title */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            CogniClass AI
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <h1 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
            {activeNavItem.name}
            {activeNavItem.badge && (
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${activeNavItem.badgeColor}`}
              >
                {activeNavItem.badge}
              </span>
            )}
          </h1>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search lectures, AI summaries, or students... (Press '/' to search)"
            className="w-full bg-slate-950/70 text-slate-200 placeholder-slate-500 text-xs rounded-xl border border-slate-800 pl-10 pr-12 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Actions: Notifications, AI Status, Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Search Trigger for Mobile */}
        <button
          type="button"
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Live AI Status Badge */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-semibold">AI Copilot Ready</span>
        </div>

        {/* Notifications Button */}
        <button
          type="button"
          className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-slate-900" />
        </button>

        {/* User Profile Quick Action */}
        <div className="pl-1 sm:pl-2 border-l border-slate-800 flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800/60 transition-colors focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs ring-2 ring-indigo-500/30">
              SJ
            </div>
            <span className="text-xs font-semibold text-slate-200 hidden sm:inline">
              Dr. Jenkins
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;

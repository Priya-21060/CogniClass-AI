import React, { useState } from 'react';
import { Database, Video, FileText, Trash2, HardDrive } from 'lucide-react';
import toast from 'react-hot-toast';
import { mockStorageData } from '../../data/mockSettingsData';

export function StorageDataSection() {
  const [storage, setStorage] = useState(mockStorageData);
  const [clearing, setClearing] = useState(false);

  const usagePercent = Math.round((storage.usedGB / storage.totalGB) * 100);

  const handleClearCache = () => {
    if (confirm('Clear local browser AI telemetry cache?')) {
      setClearing(true);
      const toastId = toast.loading('Clearing local cache...');
      setTimeout(() => {
        setClearing(false);
        toast.success('Local browser cache cleared successfully!', { id: toastId });
      }, 1000);
    }
  };

  return (
    <div id="storage" className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-6 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Institutional Cloud Storage</h3>
            <p className="text-xs text-slate-400">Manage uploaded lecture recordings, indexed PDF notes, and local cache.</p>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300 flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-400" /> Storage Capacity Used
          </span>
          <span className="font-mono font-bold text-white">
            {storage.usedGB} GB / {storage.totalGB} GB ({usagePercent}%)
          </span>
        </div>

        <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full transition-all duration-500"
            style={{ width: `${usagePercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Uploaded Lecture Videos</h4>
              <span className="text-[11px] text-slate-400 block">{storage.uploadedVideosCount} High-Definition Streams</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-300">{storage.uploadedVideosSize}</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Indexed PDF Materials</h4>
              <span className="text-[11px] text-slate-400 block">{storage.uploadedPDFsCount} Textbooks & Slide Decks</span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-300">{storage.uploadedPDFsSize}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div>
          <span className="font-semibold text-slate-200 block">Local Telemetry Cache</span>
          <span className="text-[11px] text-slate-400">Clear temporary local indexes to free up browser memory</span>
        </div>

        <button
          type="button"
          onClick={handleClearCache}
          disabled={clearing}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{clearing ? 'Clearing...' : 'Clear Local Cache'}</span>
        </button>
      </div>
    </div>
  );
}

export default StorageDataSection;

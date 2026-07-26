import React, { useState } from 'react';
import { Search, ChevronRight, FileSpreadsheet, CheckCircle2, Clock } from 'lucide-react';
import { mockLectureTableData } from '../../data/mockReportsData';

/**
 * Bottom Table: Detailed Lecture Log Table Component
 */
export function ReportsDataTable({ data = mockLectureTableData }) {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(
    (item) =>
      item.lecture.toLowerCase().includes(search.toLowerCase()) ||
      item.faculty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4 shadow-xl select-none">
      {/* Table Header & Search Input */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Lecture Intelligence Log</h3>
            <span className="text-xs text-slate-400">Detailed Telemetry Breakdown</span>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search lecture or faculty..."
            className="w-full bg-slate-950/70 text-slate-200 placeholder-slate-500 text-xs rounded-xl border border-slate-800 pl-9 pr-3 py-2 outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/60 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="p-3.5 rounded-l-xl">Lecture</th>
              <th className="p-3.5">Faculty</th>
              <th className="p-3.5">Attendance</th>
              <th className="p-3.5">Engagement</th>
              <th className="p-3.5">AI Score</th>
              <th className="p-3.5 rounded-r-xl">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300 font-medium">
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
              >
                <td className="p-3.5 font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {row.lecture}
                </td>
                <td className="p-3.5 text-slate-300">{row.faculty}</td>
                <td className="p-3.5 font-mono text-slate-300">{row.attendance}</td>
                <td className="p-3.5 font-mono text-emerald-400 font-bold">{row.engagement}</td>
                <td className="p-3.5 font-mono text-indigo-400 font-bold">{row.aiScore}</td>
                <td className="p-3.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                      row.status === 'Completed'
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : row.status === 'In Progress'
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsDataTable;

import React from 'react';

/**
 * Reusable Loading Skeleton primitives for async page loads.
 */
export function Skeleton({ className = '' }) {
  return (
    <div
      className={`bg-slate-800/60 animate-pulse rounded-xl ${className}`}
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Skeleton className="lg:col-span-8 h-80" />
        <Skeleton className="lg:col-span-4 h-80" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Skeleton className="lg:col-span-8 h-72" />
        <Skeleton className="lg:col-span-4 h-72" />
      </div>
    </div>
  );
}

export function LiveClassroomSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
      <Skeleton className="lg:col-span-3 h-[420px]" />
      <Skeleton className="lg:col-span-6 h-[420px]" />
      <Skeleton className="lg:col-span-3 h-[420px]" />
    </div>
  );
}

export function AIInsightsSkeleton() {
  return (
    <div className="h-[600px] w-full flex gap-4 animate-fadeIn">
      <Skeleton className="w-64 h-full hidden lg:block" />
      <Skeleton className="flex-1 h-full" />
      <Skeleton className="w-72 h-full hidden lg:block" />
    </div>
  );
}

export function ReportsSkeleton() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <Skeleton className="h-20 w-full" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function SettingsSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-96 w-full" />
    </div>
  );
}

export default Skeleton;

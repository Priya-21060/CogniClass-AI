import React from 'react';
import VideoFeedPanel from '../../components/liveClassroom/VideoFeedPanel';
import StudentGridPanel from '../../components/liveClassroom/StudentGridPanel';
import AIInsightsSidebar from '../../components/liveClassroom/AIInsightsSidebar';
import TemporalAnalyticsBar from '../../components/liveClassroom/TemporalAnalyticsBar';

/**
 * Futuristic Live Classroom AI Monitoring Center for CogniClass AI.
 * Assembles Left Video Feed, Center 12-Student Neural Grid, Right AI Insights Sidebar,
 * and Bottom Temporal Analytics Timeline.
 */
export function LiveClassPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* 3-Column Futuristic Telemetry Control Center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Panel: 16:9 Video Feed & Faculty Controls (4 Cols) */}
        <div className="lg:col-span-4 xl:col-span-3">
          <VideoFeedPanel />
        </div>

        {/* Center Panel: 12-Student Neural Attention Grid (5 Cols on XL / 8 Cols on LG) */}
        <div className="lg:col-span-8 xl:col-span-6">
          <StudentGridPanel />
        </div>

        {/* Right Panel: AI Live Telemetry & Insights Sidebar (3 Cols) */}
        <div className="lg:col-span-12 xl:col-span-3">
          <AIInsightsSidebar />
        </div>
      </div>

      {/* Bottom Section: Temporal Engagement Timeline & AI Event Log */}
      <TemporalAnalyticsBar />
    </div>
  );
}

export default LiveClassPage;

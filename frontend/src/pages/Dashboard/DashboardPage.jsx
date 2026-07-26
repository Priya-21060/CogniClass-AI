import React from 'react';
import EngagementHeroCard from '../../components/dashboard/EngagementHeroCard';
import LiveClassroomStatus from '../../components/dashboard/LiveClassroomStatus';
import TodaysClasses from '../../components/dashboard/TodaysClasses';
import StudentAttentionAnalytics from '../../components/dashboard/StudentAttentionAnalytics';
import AttendanceTrends from '../../components/dashboard/AttendanceTrends';
import ClassroomEmotionDistribution from '../../components/dashboard/ClassroomEmotionDistribution';
import AITeachingSuggestions from '../../components/dashboard/AITeachingSuggestions';
import LectureSummaryPreview from '../../components/dashboard/LectureSummaryPreview';
import AtRiskStudents from '../../components/dashboard/AtRiskStudents';
import RecentAIAlerts from '../../components/dashboard/RecentAIAlerts';

/**
 * Premium AI-Powered Classroom Intelligence Dashboard for CogniClass AI.
 * Assembles all 10 specialized telemetry components into a modern grid layout
 * inspired by Linear, Notion, Stripe, and Vercel.
 */
export function DashboardPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Row 1: AI Hero Metric (8 Cols) & Live Classroom Status (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <EngagementHeroCard />
        </div>
        <div className="lg:col-span-4">
          <LiveClassroomStatus />
        </div>
      </div>

      {/* Row 2: Student Attention Analytics Line Chart (8 Cols) & Emotion Distribution Doughnut Chart (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <StudentAttentionAnalytics />
        </div>
        <div className="lg:col-span-4">
          <ClassroomEmotionDistribution />
        </div>
      </div>

      {/* Row 3: Today's Schedule & Attendance Trends Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TodaysClasses />
        <AttendanceTrends />
      </div>

      {/* Row 4: AI Teaching Suggestions & Automated Lecture Summary Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AITeachingSuggestions />
        <LectureSummaryPreview />
      </div>

      {/* Row 5: At-Risk Student Interventions & Recent AI Telemetry Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AtRiskStudents />
        <RecentAIAlerts />
      </div>
    </div>
  );
}

export default DashboardPage;

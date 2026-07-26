import React from 'react';
import ReportsHeaderFilter from '../../components/reports/ReportsHeaderFilter';
import ReportsSummaryCards from '../../components/reports/ReportsSummaryCards';
import ReportsAnalyticsCharts from '../../components/reports/ReportsAnalyticsCharts';
import WeeklyActivityHeatmap from '../../components/reports/WeeklyActivityHeatmap';
import AIReportPanel from '../../components/reports/AIReportPanel';
import ReportsDataTable from '../../components/reports/ReportsDataTable';

/**
 * Premium Reports Page for CogniClass AI.
 * Assembles date range filters, summary metrics, Chart.js analytics, activity heatmap,
 * AI executive synthesis panel, and detailed lecture log table.
 */
export function ReportsPage() {
  const handleExportPDF = () => {
    alert('Exporting CogniClass AI Academic Report to PDF...');
  };

  const handleExportExcel = () => {
    alert('Exporting CogniClass AI Telemetry Dataset to Excel...');
  };

  const handleGenerateAIReport = () => {
    alert('Synthesizing fresh AI Academic Report...');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Section: Date Range Filters & Export Actions */}
      <ReportsHeaderFilter
        onExportPDF={handleExportPDF}
        onExportExcel={handleExportExcel}
        onGenerateAIReport={handleGenerateAIReport}
      />

      {/* Summary Metrics Cards */}
      <ReportsSummaryCards />

      {/* Analytics Section: Attendance Line & Engagement Bar Charts */}
      <ReportsAnalyticsCharts />

      {/* Heatmap Section: Weekly Classroom Activity Grid */}
      <WeeklyActivityHeatmap />

      {/* AI Report Synthesis Panel */}
      <AIReportPanel />

      {/* Bottom Table: Detailed Lecture Log Table */}
      <ReportsDataTable />
    </div>
  );
}

export default ReportsPage;

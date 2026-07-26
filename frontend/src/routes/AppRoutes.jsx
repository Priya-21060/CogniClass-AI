import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import AppLayout from '../components/layout/AppLayout';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import LiveClassPage from '../pages/LiveClass/LiveClassPage';
import AIInsightsPage from '../pages/AIInsights/AIInsightsPage';
import ReportsPage from '../pages/Reports/ReportsPage';
import SettingsPage from '../pages/Settings/SettingsPage';

/**
 * Application Routing Definition.
 * Configures standalone public login page and nested authenticated AppLayout shell routes.
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Authenticated Application Shell Routes */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/live-classroom" element={<LiveClassPage />} />
        <Route path="/ai-insights" element={<AIInsightsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Root & Fallback Redirects */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;

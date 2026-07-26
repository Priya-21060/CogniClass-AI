import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import AppLayout from '../components/layout/AppLayout';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import LiveClassPage from '../pages/LiveClass/LiveClassPage';
import AIInsightsPage from '../pages/AIInsights/AIInsightsPage';
import ReportsPage from '../pages/Reports/ReportsPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import PageTransition from '../components/common/PageTransition';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route
        path="/login"
        element={
          <PageTransition>
            <LoginPage />
          </PageTransition>
        }
      />

      {/* Authenticated Application Shell Routes */}
      <Route element={<AppLayout />}>
        <Route
          path="/dashboard"
          element={
            <PageTransition>
              <DashboardPage />
            </PageTransition>
          }
        />
        <Route
          path="/live-classroom"
          element={
            <PageTransition>
              <LiveClassPage />
            </PageTransition>
          }
        />
        <Route
          path="/ai-insights"
          element={
            <PageTransition>
              <AIInsightsPage />
            </PageTransition>
          }
        />
        <Route
          path="/reports"
          element={
            <PageTransition>
              <ReportsPage />
            </PageTransition>
          }
        />
        <Route
          path="/settings"
          element={
            <PageTransition>
              <SettingsPage />
            </PageTransition>
          }
        />
      </Route>

      {/* Root Redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Custom 404 Not Found Catch-All */}
      <Route
        path="*"
        element={
          <PageTransition>
            <NotFoundPage />
          </PageTransition>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

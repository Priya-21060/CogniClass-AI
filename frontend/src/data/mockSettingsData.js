/**
 * CogniClass AI - Production Settings Dataset
 * Provides initial state & data for user profile, classroom thresholds, AI preferences,
 * notification toggles, appearance themes, security sessions, and storage metrics.
 */

export const mockProfileData = {
  fullName: 'Dr. Sarah Jenkins',
  email: 'sarah.jenkins@stanford.edu',
  department: 'Department of Computer Science',
  university: 'Stanford University',
  role: 'Tenured Professor & AI Director',
  avatarInitials: 'SJ',
};

export const mockClassroomPrefs = {
  defaultDuration: '60 minutes',
  attendanceThreshold: 80, // %
  engagementThreshold: 75, // %
  defaultLectureMode: 'Hybrid (Acoustic + Video AI)',
};

export const mockAIPrefs = {
  selectedModel: 'CogniClass Gemini Pro v4.2 (High Precision)',
  enableSummaries: true,
  enableQuizGen: true,
  enableHomeworkGen: true,
  enableRiskPrediction: true,
  confidenceThreshold: 85, // %
};

export const mockNotifications = {
  emailNotifications: true,
  desktopNotifications: true,
  weeklyReports: true,
  liveClassroomAlerts: true,
};

export const mockAppearance = {
  darkMode: true,
  accentColor: 'indigo', // 'indigo' | 'cyan' | 'purple' | 'emerald'
  fontSize: 'Medium (Standard)',
  compactMode: false,
};

export const mockSecuritySessions = [
  {
    id: 's1',
    device: 'MacBook Pro 16" (macOS Sonoma)',
    location: 'Palo Alto, CA, USA',
    ip: '192.168.1.104',
    current: true,
    lastActive: 'Active Now',
  },
  {
    id: 's2',
    device: 'iPad Pro 12.9" (iPadOS 17)',
    location: 'Stanford Campus, CA',
    ip: '172.16.254.12',
    current: false,
    lastActive: '2 hours ago',
  },
  {
    id: 's3',
    device: 'iPhone 15 Pro (iOS 17)',
    location: 'San Jose, CA, USA',
    ip: '192.168.1.88',
    current: false,
    lastActive: 'Yesterday at 04:12 PM',
  },
];

export const mockStorageData = {
  usedGB: 42.8,
  totalGB: 100,
  uploadedVideosCount: 24,
  uploadedVideosSize: '31.2 GB',
  uploadedPDFsCount: 142,
  uploadedPDFsSize: '11.6 GB',
};

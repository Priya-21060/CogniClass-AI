/**
 * CogniClass AI - Production Reports Dataset
 * Provides realistic demo data for institutional academic reports, analytics charts,
 * weekly activity heatmaps, AI synthesis, and detailed lecture log tables.
 */

export const mockSummaryMetrics = {
  attendance: { value: '95.8%', change: '+2.4%', status: 'optimal' },
  engagement: { value: '91.2%', change: '+4.1%', status: 'optimal' },
  completionRate: { value: '98.4%', change: '+1.2%', status: 'optimal font-mono' },
  performanceIndex: { value: '88.7 / 100', change: '+3.5%', status: 'optimal' },
};

export const mockAttendanceTrend = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      label: 'Average Attendance (%)',
      data: [91.2, 93.4, 92.0, 94.8, 95.1, 95.8],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      fill: true,
      tension: 0.4,
    },
  ],
};

export const mockEngagementPerLecture = {
  labels: ['CS-101', 'CS-402', 'AI-301', 'DS-210', 'ML-501', 'MATH-202'],
  datasets: [
    {
      label: 'Average Engagement (%)',
      data: [88, 94, 91, 85, 96, 89],
      backgroundColor: '#06b6d4',
      borderRadius: 6,
    },
  ],
};

export const mockParticipationDistribution = {
  labels: ['High Active Participation', 'Moderate Interaction', 'Passive Observers', 'Low Interaction'],
  data: [58, 28, 10, 4],
  colors: ['#6366f1', '#06b6d4', '#a855f7', '#f43f5e'],
};

export const mockHeatmapData = [
  { day: 'Mon', slots: [85, 92, 95, 88, 79] },
  { day: 'Tue', slots: [88, 94, 96, 91, 84] },
  { day: 'Wed', slots: [82, 89, 93, 86, 78] },
  { day: 'Thu', slots: [90, 96, 98, 92, 88] },
  { day: 'Fri', slots: [84, 91, 92, 85, 80] },
];

export const mockAIReport = {
  title: 'Institutional Academic Intelligence Briefing',
  timeframe: 'This Month (October 2026)',
  summary:
    'Overall institutional engagement rose to 91.2%, driven by interactive coding labs in CS-402 and ML-501. Student retention remained strong with a 98.4% lecture completion rate across all 6 departments.',
  strongTopics: [
    'Transformer Multi-Head Projections (96% Mastery)',
    'Convolutional Feature Maps (92% Mastery)',
    'Linear Vector Space Projections (90% Mastery)',
  ],
  weakTopics: [
    'Gradient Backpropagation Derivation (42% Mastery)',
    'Softmax Probability Normalization (54% Mastery)',
  ],
  improvements: [
    'Schedule a 30-minute remedial problem-solving session for Backpropagation calculus.',
    'Incorporate live polling questions every 15 minutes during 90-minute morning lectures.',
  ],
  predictionNextWeek: '93.5% Engagement (Projected +2.3% gain)',
};

export const mockLectureTableData = [
  {
    id: 1,
    lecture: 'CS-402: Advanced Neural Architectures',
    faculty: 'Dr. Sarah Jenkins',
    attendance: '96% (48/50)',
    engagement: '94.8%',
    aiScore: '96 / 100',
    status: 'Completed',
  },
  {
    id: 2,
    lecture: 'AI-301: Computer Vision & Deep Learning',
    faculty: 'Prof. Michael Chang',
    attendance: '94% (42/45)',
    engagement: '91.2%',
    aiScore: '92 / 100',
    status: 'Completed',
  },
  {
    id: 3,
    lecture: 'DS-210: Ethical Frameworks in ML',
    faculty: 'Dr. Aris Thorne',
    attendance: '91% (55/60)',
    engagement: '85.4%',
    aiScore: '88 / 100',
    status: 'Completed',
  },
  {
    id: 4,
    lecture: 'ML-501: Reinforcement Learning Systems',
    faculty: 'Dr. Sarah Jenkins',
    attendance: '98% (39/40)',
    engagement: '96.0%',
    aiScore: '98 / 100',
    status: 'Completed',
  },
  {
    id: 5,
    lecture: 'CS-101: Data Structures & Algorithms',
    faculty: 'Prof. David Vance',
    attendance: '89% (58/65)',
    engagement: '88.0%',
    aiScore: '89 / 100',
    status: 'In Progress',
  },
  {
    id: 6,
    lecture: 'MATH-202: Linear Algebra for Machine Learning',
    faculty: 'Dr. Elena Rostova',
    attendance: '93% (46/50)',
    engagement: '89.5%',
    aiScore: '91 / 100',
    status: 'Scheduled',
  },
];

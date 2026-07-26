/**
 * CogniClass AI - Futuristic Live Classroom Monitoring Dataset
 * Provides mock data for live student neural grid, camera feed, AI telemetry, and temporal charts.
 */

export const mockLiveLectureInfo = {
  courseCode: 'CS-402',
  title: 'Advanced Neural Architectures & Transformer Attention',
  instructor: 'Dr. Sarah Jenkins',
  room: 'Auditorium B-12 (Hybrid Feed)',
  durationSeconds: 2538, // 42 minutes 18 seconds
  recording: true,
  cameraStatus: 'HD Neural Cam 01 (1080p 60fps)',
  overallEngagement: 92.4,
  attendanceCount: 48,
  totalStudents: 50,
  noiseDecibels: 48, // Moderate interactive room acoustics
  noiseStatus: 'Optimal (Quiet Interactive)',
};

export const mockStudentGrid = [
  { id: 'S01', name: 'Alex Rivera', avatar: 'AR', score: 96, status: 'high', focusTime: '42m', seat: 'Row 1 • Seat 04' },
  { id: 'S02', name: 'Elena Rostova', avatar: 'ER', score: 91, status: 'high', focusTime: '40m', seat: 'Row 1 • Seat 05' },
  { id: 'S03', name: 'Marcus Chen', avatar: 'MC', score: 44, status: 'low', focusTime: '18m', seat: 'Row 2 • Seat 02', alert: 'Distracted (Phone)' },
  { id: 'S04', name: 'Priya Sharma', avatar: 'PS', score: 98, status: 'high', focusTime: '42m', seat: 'Row 2 • Seat 03' },
  { id: 'S05', name: 'David Kim', avatar: 'DK', score: 85, status: 'medium', focusTime: '36m', seat: 'Row 3 • Seat 01' },
  { id: 'S06', name: 'Sophia Al-Mansoor', avatar: 'SA', score: 94, status: 'high', focusTime: '41m', seat: 'Row 3 • Seat 04' },
  { id: 'S07', name: 'Lucas Vance', avatar: 'LV', score: 52, status: 'low', focusTime: '22m', seat: 'Row 4 • Seat 02', alert: 'Drowsiness Detected' },
  { id: 'S08', name: 'Chloe Dubois', avatar: 'CD', score: 89, status: 'high', focusTime: '39m', seat: 'Row 4 • Seat 05' },
  { id: 'S09', name: 'Tariq Hassan', avatar: 'TH', score: 88, status: 'medium', focusTime: '38m', seat: 'Row 5 • Seat 01' },
  { id: 'S10', name: 'Hannah Abbott', avatar: 'HA', score: 93, status: 'high', focusTime: '42m', seat: 'Row 5 • Seat 03' },
  { id: 'S11', name: 'Liam O\'Connor', avatar: 'LO', score: 68, status: 'medium', focusTime: '29m', seat: 'Row 6 • Seat 02' },
  { id: 'S12', name: 'Zoe Zhang', avatar: 'ZZ', score: 97, status: 'high', focusTime: '42m', seat: 'Row 6 • Seat 04' },
];

export const mockQuestionsQueue = [
  { id: 'Q1', student: 'Elena Rostova', text: 'How does multi-head attention scale computational complexity with sequence length?', time: '2m ago' },
  { id: 'Q2', student: 'David Kim', text: 'Can we apply residual connections directly before layer normalization?', time: '5m ago' },
];

export const mockLiveCopilotTips = [
  { id: 1, text: '2 students in Row 4 are losing focus. Consider asking a quick recap question.', priority: 'high' },
  { id: 2, text: 'Acoustic clarity is 98%. Pacing (142 wpm) is ideal for concept retention.', priority: 'normal' },
];

export const mockTemporalChartData = {
  labels: ['10m', '15m', '20m', '25m', '30m', '35m', '40m'],
  datasets: [
    {
      label: 'Live Engagement Index (%)',
      data: [84, 88, 95, 91, 86, 94, 92],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Question Frequency',
      data: [1, 2, 5, 3, 1, 4, 3],
      borderColor: '#06b6d4',
      backgroundColor: 'transparent',
      borderDash: [4, 4],
      tension: 0.4,
    },
  ],
};

export const mockLiveEventsTimeline = [
  { id: 1, time: '09:42:10 AM', type: 'Insight', text: 'AI Flashcards generated automatically (14 new cards)' },
  { id: 2, time: '09:38:15 AM', type: 'Warning', text: 'Attention drop in Row 4 (Lucas Vance)' },
  { id: 3, time: '09:30:00 AM', type: 'Success', text: 'Concept Polling completed: 94% correct answers' },
];

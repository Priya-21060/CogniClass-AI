/**
 * CogniClass AI - Production Mock Dashboard Dataset
 * Provides realistic demo data for classroom intelligence, attention analytics, AI alerts, and student insights.
 */

export const mockEngagementData = {
  score: 92.4,
  change: '+4.2%',
  trend: 'up',
  status: 'Peak Cognitive Focus',
  breakdown: [
    { label: 'Attention Index', value: '94.2%', color: 'from-indigo-500 to-cyan-400' },
    { label: 'Participation Rate', value: '88.6%', color: 'from-purple-500 to-indigo-500' },
    { label: 'Acoustic Clarity', value: '96.0%', color: 'from-emerald-400 to-teal-500' },
    { label: 'Cognitive Retention', value: '90.8%', color: 'from-amber-400 to-orange-500' },
  ],
};

export const mockLiveClass = {
  courseCode: 'CS-402',
  courseName: 'Advanced Neural Architectures',
  instructor: 'Dr. Sarah Jenkins',
  room: 'Auditorium B-12 & Remote Hybrid',
  activeStudents: 48,
  totalStudents: 50,
  duration: '42m / 60m',
  status: 'LIVE',
  audioQuality: 'High Fidelity (HD)',
  currentTopic: 'Transformer Self-Attention & Multi-Head Projections',
  liveSentiment: 'Highly Engaged',
};

export const mockSchedule = [
  {
    id: 1,
    time: '09:00 AM - 10:30 AM',
    code: 'CS-402',
    title: 'Advanced Neural Architectures',
    room: 'Auditorium B-12',
    students: 48,
    status: 'Live Now',
    statusColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
  {
    id: 2,
    time: '11:15 AM - 12:45 PM',
    code: 'AI-301',
    title: 'Computer Vision & Deep Learning',
    room: 'Lab 404',
    students: 42,
    status: 'Upcoming',
    statusColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 3,
    time: '02:00 PM - 03:30 PM',
    code: 'DS-210',
    title: 'Ethical Frameworks in Machine Learning',
    room: 'Hall A',
    students: 55,
    status: 'Upcoming',
    statusColor: 'bg-slate-800 text-slate-400 border-slate-700',
  },
  {
    id: 4,
    time: '04:00 PM - 05:30 PM',
    code: 'CS-101',
    title: 'Introduction to Data Structures',
    room: 'Virtual Room 1',
    students: 60,
    status: 'Completed',
    statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
];

export const mockAttentionTimeline = {
  labels: ['0m', '10m', '20m', '30m', '40m', '50m', '60m'],
  datasets: [
    {
      label: 'Attention Level (%)',
      data: [82, 89, 95, 87, 94, 91, 96],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Acoustic Interaction (dB)',
      data: [60, 72, 85, 68, 88, 78, 84],
      borderColor: '#06b6d4',
      backgroundColor: 'transparent',
      borderDash: [5, 5],
      tension: 0.4,
    },
  ],
};

export const mockAttendanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'In-Person Attendance',
      data: [45, 48, 44, 47, 46],
      backgroundColor: '#6366f1',
      borderRadius: 6,
    },
    {
      label: 'Remote Participants',
      data: [5, 2, 6, 3, 4],
      backgroundColor: '#a855f7',
      borderRadius: 6,
    },
  ],
};

export const mockEmotionDistribution = {
  labels: ['Highly Focused', 'Curious & Inquiring', 'Passively Listening', 'Confused / Distracted'],
  data: [62, 22, 11, 5],
  colors: ['#6366f1', '#06b6d4', '#a855f7', '#f43f5e'],
};

export const mockAISuggestions = [
  {
    id: 1,
    type: 'Concept Check Alert',
    message: 'Attention dropped slightly around min 32 during Softmax derivation. Consider running a 60-second polling question.',
    confidence: '96% AI Confidence',
    priority: 'High',
    actionText: 'Launch 60s Quiz',
  },
  {
    id: 2,
    type: 'Pacing Optimization',
    message: 'Speaking pace is 145 wpm (optimal). 4 students asked for code snippet clarification in chat.',
    confidence: '91% AI Confidence',
    priority: 'Medium',
    actionText: 'Share Code Snippet',
  },
  {
    id: 3,
    type: 'Break Suggestion',
    message: 'Cognitive load index reached peak threshold. Recommended 3-min interactive Q&A session.',
    confidence: '88% AI Confidence',
    priority: 'Low',
    actionText: 'Pause & Discuss',
  },
];

export const mockLectureSummary = {
  title: 'Transformers & Query-Key-Value Attention Mechanisms',
  date: 'Today, 09:42 AM',
  keyTakeaways: [
    'Self-attention allows tokens to dynamically attend to contextual representations across sequences.',
    'Multi-head attention projects Queries, Keys, and Values into parallel subspace embeddings.',
    'Positional encodings inject sequence order without needing recurrent loops.',
  ],
  generatedCardsCount: 14,
  sentimentScore: 'Positive (94%)',
};

export const mockAtRiskStudents = [
  {
    id: 'ST-902',
    name: 'Alex Rivera',
    avatar: 'AR',
    riskScore: 78,
    riskLevel: 'High Risk',
    issue: 'Disengaged in last 3 lectures (avg 42% attention)',
    course: 'CS-402',
  },
  {
    id: 'ST-841',
    name: 'Elena Rostova',
    avatar: 'ER',
    riskScore: 64,
    riskLevel: 'Medium Risk',
    issue: 'Missed 2 quizzes & low audio interaction',
    course: 'CS-402',
  },
  {
    id: 'ST-719',
    name: 'Marcus Chen',
    avatar: 'MC',
    riskScore: 58,
    riskLevel: 'Medium Risk',
    issue: 'Frequent tab switching detected during live lab',
    course: 'AI-301',
  },
];

export const mockAIAlerts = [
  {
    id: 1,
    time: '2 mins ago',
    type: 'Insight',
    title: 'High Engagement Spike',
    description: '98% of class participated in live coding demo.',
    iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 2,
    time: '14 mins ago',
    type: 'Warning',
    title: 'Confusion Cluster Detected',
    description: '12 students flagged slide #14 (Backpropagation math).',
    iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    id: 3,
    time: '35 mins ago',
    type: 'System',
    title: 'Lecture Note Synthesis Complete',
    description: 'AI generated 14 study flashcards & 3 summary notes.',
    iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
];

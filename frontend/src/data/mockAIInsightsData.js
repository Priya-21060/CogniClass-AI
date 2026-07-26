/**
 * CogniClass AI - AI Insights Production Dataset
 * Provides realistic demo data for chat conversations, saved prompts, weak topics,
 * predictive student risks, and automated educational generators.
 */

export const mockConversations = [
  {
    id: 'c1',
    title: 'CS-402 Transformer Math Breakdown',
    time: '10 mins ago',
    active: true,
  },
  {
    id: 'c2',
    title: 'Midterm Exam Quiz Generation (CS-101)',
    time: '2 hours ago',
    active: false,
  },
  {
    id: 'c3',
    title: 'At-Risk Student Intervention Plan',
    time: 'Yesterday',
    active: false,
  },
  {
    id: 'c4',
    title: 'Lecture 12 Audio Sentiment Analysis',
    time: '3 days ago',
    active: false,
  },
  {
    id: 'c5',
    title: 'Convolutional Neural Networks Flashcards',
    time: '1 week ago',
    active: false,
  },
];

export const mockSavedPrompts = [
  'Generate 5-question MCQ quiz on Multi-Head Attention',
  'Identify students with >40% attention drop this week',
  'Summarize lecture audio transcript into 3 key takeaways',
  'Create 15-minute hands-on Python lab assignment',
];

export const mockChatMessages = [
  {
    id: 'm1',
    sender: 'user',
    text: 'Analyze the student confusion points in CS-402 Lecture 8 and generate a Python code snippet demonstrating self-attention matrix multiplication for struggling students.',
    timestamp: '09:44 AM',
  },
  {
    id: 'm2',
    sender: 'ai',
    text: `Here is the AI diagnostic summary and code breakdown for **CS-402 Lecture 8**:

### Key Classroom Confusion Points Detected:
1. **Query-Key Matrix Scaling (\x1b[1m1/√d_k\x1b[0m)**: 42% of students showed elevated cognitive load during softmax scaling derivation.
2. **Multi-Head Projection Dimensions**: Confusion on how $Q, K, V$ linear weights map to $h$ parallel heads.

### Recommended Interactive Python Code Snippet:
Use this clean PyTorch implementation in your next lab session to demonstrate how self-attention weights are computed step-by-step:`,
    codeSnippet: `import torch
import torch.nn.functional as F

def scaled_dot_product_attention(query, key, value, mask=None):
    # Dims: (batch_size, num_heads, seq_len, d_k)
    d_k = query.size(-1)
    
    # Compute raw attention scores
    scores = torch.matmul(query, key.transpose(-2, -1)) / torch.sqrt(torch.tensor(d_k, dtype=torch.float32))
    
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
        
    # Apply Softmax to get probability distribution
    attention_weights = F.softmax(scores, dim=-1)
    
    # Weighted sum of values
    output = torch.matmul(attention_weights, value)
    return output, attention_weights

# Demo Execution
batch_size, seq_len, d_k = 1, 4, 64
q = k = v = torch.randn(batch_size, seq_len, d_k)
output, weights = scaled_dot_product_attention(q, k, v)
print("Attention Matrix Shape:", weights.shape) # Output: [1, 4, 4]`,
    timestamp: '09:45 AM',
  },
];

export const mockWeakStudents = [
  { id: 'S1', name: 'Alex Rivera', course: 'CS-402', mastery: '44%', risk: 'High' },
  { id: 'S2', name: 'Lucas Vance', course: 'CS-402', mastery: '52%', risk: 'Medium' },
  { id: 'S3', name: 'Elena Rostova', course: 'AI-301', mastery: '61%', risk: 'Medium' },
];

export const mockWeakTopics = [
  { topic: 'Softmax Matrix Scaling', score: 42, difficulty: 'Hard' },
  { topic: 'Backpropagation Gradient Flow', score: 54, difficulty: 'Medium' },
  { topic: 'Multi-Head Attention Projections', score: 58, difficulty: 'Hard' },
];

export const mockPredictions = {
  riskRate: '12.4%',
  expectedAttendance: '94.2%',
  sentimentOutlook: 'Positive (Up +6%)',
};

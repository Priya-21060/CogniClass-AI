import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Paperclip,
  Upload,
  FileText,
  Video,
  Bot,
  User,
  Zap,
  Loader2,
  Brain,
} from 'lucide-react';
import CodeBlock from './CodeBlock';
import { mockChatMessages } from '../../data/mockAIInsightsData';

/**
 * Center Panel: AI Conversation Studio (ChatGPT Enterprise + Gemini + Copilot)
 * Features streaming response simulation, PDF/Video upload options, and code rendering.
 */
export function ChatArea({ activePrompt = '' }) {
  const [messages, setMessages] = useState(mockChatMessages);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  // Sync active prompt if selected from sidebar or prompt chip
  useEffect(() => {
    if (activePrompt) {
      setInputValue(activePrompt);
    }
  }, [activePrompt]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  // Handle Send Message
  const handleSend = (textToSend = inputValue) => {
    if (!textToSend.trim() || isStreaming) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsStreaming(true);

    // Simulate AI Streaming Response
    setTimeout(() => {
      const aiResponse = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Based on your request, CogniClass AI analyzed 48 student telemetry streams for **CS-402**. Here is the AI recommendations summary:

### Key Pedagogical Recommendations:
1. **Interactive Review**: 34% of students requested a quick refresher on Query-Key scaling.
2. **Automated Flashcards**: 10 quiz questions have been generated and added to your course portal.`,
        codeSnippet: `# AI Generated Quiz Question Excerpt
class QuizItem:
    def __init__(self, question, options, answer):
        self.question = question
        self.options = options
        self.answer = answer

q1 = QuizItem(
    question="What is the scaling factor in Scaled Dot-Product Attention?",
    options=["1 / d_k", "1 / sqrt(d_k)", "sqrt(d_k)", "d_k^2"],
    answer="1 / sqrt(d_k)"
)`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsStreaming(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (type) => {
    alert(`Upload trigger: Please select your ${type} file for AI indexing.`);
  };

  return (
    <div className="flex-1 flex flex-col justify-between h-full bg-slate-950 text-slate-100 select-none overflow-hidden">
      {/* Top Banner / Welcome Header */}
      <div className="p-4 sm:p-6 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 shadow-md text-white">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
              CogniClass AI Copilot
              <span className="text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                Enterprise v4.2
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Interactive academic intelligence & automated lecture assistant.
            </p>
          </div>
        </div>

        {/* Upload Buttons Row */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleFileUpload('Lecture PDF')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Upload PDF</span>
          </button>
          <button
            type="button"
            onClick={() => handleFileUpload('Classroom Video/Audio')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <Video className="w-3.5 h-3.5 text-rose-400" />
            <span>Upload Video</span>
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 sm:gap-4 max-w-3xl ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            {/* Sender Avatar */}
            <div className="shrink-0">
              {msg.sender === 'user' ? (
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                  SJ
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Bot className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`p-4 rounded-2xl text-xs sm:text-sm space-y-2 shadow-md leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>

              {/* Render Code Block if present */}
              {msg.codeSnippet && (
                <CodeBlock code={msg.codeSnippet} language="python" />
              )}

              <div
                className={`text-[10px] font-mono text-right pt-1 ${
                  msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-500'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* Streaming Animation Placeholder */}
        {isStreaming && (
          <div className="flex gap-3 sm:gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
              <span>CogniClass AI is synthesizing lecture telemetry...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Bottom Input Area */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/60 backdrop-blur-md space-y-3">
        {/* Suggested Quick Prompt Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-500 font-semibold text-[11px] shrink-0">Suggested:</span>
          {[
            'Generate 5-question quiz for CS-402',
            'Identify at-risk students this week',
            'Create lecture summary flashcards',
          ].map((promptText, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInputValue(promptText)}
              className="shrink-0 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              {promptText}
            </button>
          ))}
        </div>

        {/* Chat Input Container */}
        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => handleFileUpload('Document Attachment')}
            className="absolute left-3.5 p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask CogniClass AI anything about your lectures, students, or course content... (Press Enter to send)"
            rows={1}
            className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-500 text-xs sm:text-sm rounded-xl border border-slate-800 pl-11 pr-12 py-3 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
          />

          <button
            type="button"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isStreaming}
            className="absolute right-2.5 p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;

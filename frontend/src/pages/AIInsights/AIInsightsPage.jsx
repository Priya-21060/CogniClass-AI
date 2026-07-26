import React, { useState } from 'react';
import ChatSidebar from '../../components/aiInsights/ChatSidebar';
import ChatArea from '../../components/aiInsights/ChatArea';
import InsightsTelemetrySidebar from '../../components/aiInsights/InsightsTelemetrySidebar';

/**
 * Premium AI Insights Page for CogniClass AI.
 * Combines ChatGPT Enterprise + Gemini + Copilot UX with CogniClass AI dark glassmorphic telemetry.
 */
export function AIInsightsPage() {
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handleSelectPrompt = (promptText) => {
    setSelectedPrompt(promptText);
  };

  const handleNewChat = () => {
    setSelectedPrompt('');
  };

  return (
    <div className="h-[calc(100vh-6rem)] w-full rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col lg:flex-row overflow-hidden shadow-2xl">
      {/* Left Sidebar: Conversations & Saved Prompts */}
      <ChatSidebar
        onSelectPrompt={handleSelectPrompt}
        onNewChat={handleNewChat}
      />

      {/* Center Panel: Main AI Conversation Studio */}
      <ChatArea activePrompt={selectedPrompt} />

      {/* Right Panel: Academic Telemetry & AI Generators */}
      <InsightsTelemetrySidebar />
    </div>
  );
}

export default AIInsightsPage;

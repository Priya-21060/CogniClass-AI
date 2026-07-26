import React, { useState } from 'react';
import {
  Plus,
  Search,
  MessageSquare,
  Bookmark,
  Sparkles,
  ChevronRight,
  Clock,
  Trash2,
} from 'lucide-react';
import {
  mockConversations,
  mockSavedPrompts,
} from '../../data/mockAIInsightsData';

/**
 * Left Sidebar: AI Conversations & Saved Prompts Workspace
 * Inspired by ChatGPT Enterprise & Gemini sidebar navigation.
 */
export function ChatSidebar({ onSelectPrompt, onNewChat }) {
  const [conversations, setConversations] = useState(mockConversations);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectConversation = (id) => {
    setConversations((prev) =>
      prev.map((c) => ({ ...c, active: c.id === id }))
    );
  };

  return (
    <div className="w-full lg:w-72 bg-slate-900/90 border-r border-slate-800/80 p-4 flex flex-col justify-between h-full space-y-4 select-none">
      {/* Top Action: New Chat Button */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={onNewChat}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>New AI Conversation</span>
        </button>

        {/* Search Conversations Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search past chats..."
            className="w-full bg-slate-950/70 text-slate-200 placeholder-slate-500 text-xs rounded-xl border border-slate-800/80 pl-9 pr-3 py-2 outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Conversation History */}
      <div className="flex-1 overflow-y-auto space-y-4 py-1 pr-1">
        {/* Previous Conversations */}
        <div className="space-y-1">
          <div className="px-2 pb-1 text-[10px] font-extrabold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-indigo-400" />
            <span>Recent Chats</span>
          </div>

          {filteredConversations.map((chat) => (
            <button
              key={chat.id}
              type="button"
              onClick={() => handleSelectConversation(chat.id)}
              className={`
                w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all duration-200 group
                ${
                  chat.active
                    ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }
              `}
            >
              <div className="flex items-center gap-2.5 truncate">
                <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${chat.active ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span className="truncate">{chat.title}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-1">
                {chat.time}
              </span>
            </button>
          ))}
        </div>

        {/* Saved Prompts Section */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="px-2 text-[10px] font-extrabold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
            <Bookmark className="w-3 h-3 text-amber-400" />
            <span>Saved Prompts</span>
          </div>

          <div className="space-y-1.5">
            {mockSavedPrompts.map((promptText, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectPrompt && onSelectPrompt(promptText)}
                className="w-full text-left p-2 rounded-xl bg-slate-950/40 hover:bg-slate-800/60 border border-slate-800/60 text-[11px] text-slate-300 hover:text-white transition-all leading-snug line-clamp-2"
              >
                💡 {promptText}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Model Indicator Footer */}
      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-indigo-400">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          Gemini Copilot Enterprise
        </span>
        <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/20">
          v4.2
        </span>
      </div>
    </div>
  );
}

export default ChatSidebar;

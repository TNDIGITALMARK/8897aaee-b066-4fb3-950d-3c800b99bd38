'use client';

import { useState } from 'react';
import { ChatMessage } from '@/lib/types';
import { Send } from 'lucide-react';

interface ChatWidgetProps {
  messages: ChatMessage[];
}

export function ChatWidget({ messages }: ChatWidgetProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Handle send message
      setInput('');
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">COMMUNITY CHAT</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {messages.length} messages today
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {msg.author_name[0]}
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm text-foreground">{msg.author_name}</span>
                <span className="text-xs text-muted-foreground">{formatTime(msg.created_at)}</span>
              </div>
              <p className="text-sm text-foreground/90">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:border-ring"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 gradient-primary text-white rounded-md shadow-button hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

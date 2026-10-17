'use client';

import { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../lib/data';
import { MailIcon, WhatsAppIcon } from './SocialIcons';

const QUICK_QUESTIONS = [
  "Tell me about Ankit's experience at Capgemini",
  "Explain the architecture of CodeCollab",
  "What are Ankit's core tech skills?",
  "How can I contact Ankit?"
];

// Simple markdown formatter for clean display without external heavy dependencies
function renderFormattedMarkdown(text) {
  if (!text) return null;

  const lines = text.split('\n');
  return lines.map((line, idx) => {
    // Handle bullet points
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const content = line.trim().substring(2);
      return (
        <li key={idx} className="ml-4 list-disc text-ink-muted text-xs my-0.5 leading-relaxed">
          {formatInline(content)}
        </li>
      );
    }

    // Handle numbered list
    const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      return (
        <li key={idx} className="ml-4 list-decimal text-ink-muted text-xs my-0.5 leading-relaxed">
          {formatInline(numMatch[2])}
        </li>
      );
    }

    // Blank lines
    if (!line.trim()) {
      return <div key={idx} className="h-1.5" />;
    }

    return (
      <p key={idx} className="text-xs text-ink-muted leading-relaxed my-0.5">
        {formatInline(line)}
      </p>
    );
  });
}

function formatInline(str) {
  const parts = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="text-ink-primary font-semibold">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return parts.length > 0 ? parts : str;
}

// Typewriter component with Roblox-style voxel blinking cursor
function TypewriterMessage({ text, onComplete, sources }) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedLength(0);
    setIsTyping(true);

    if (!text) return;

    // Fast dynamic cadence: chunks of 2-4 chars to keep it responsive yet authentically typewriter-like
    const interval = setInterval(() => {
      setDisplayedLength((prev) => {
        const next = prev + Math.floor(Math.random() * 3 + 2);
        if (next >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
          return text.length;
        }
        return next;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  const visibleText = text.substring(0, displayedLength);

  return (
    <div className="space-y-2">
      {isTyping ? (
        <p className="text-xs text-ink-muted leading-relaxed whitespace-pre-wrap font-sans">
          {visibleText}
          <span className="inline-block w-2 h-3.5 ml-1 bg-accent-copper animate-pulse align-middle" />
        </p>
      ) : (
        renderFormattedMarkdown(text)
      )}

      {/* Sources Citation */}
      {!isTyping && sources && sources.length > 0 && (
        <div className="mt-2 pt-2 border-t border-bg-subtle/60 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-ink-faint">
          <span className="uppercase">Sources:</span>
          {sources.map((src, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded bg-bg-elevated border border-bg-subtle text-accent-copper"
            >
              {src}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState('');

  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL =
    process.env.NEXT_PUBLIC_CHAT_API_URL || 'https://portfoliobe-w7nt.onrender.com/api/v1/chat';

  // Initialize conversation and listen for custom trigger events
  useEffect(() => {
    let savedId = localStorage.getItem('ankit_portfolio_chat_convo_id');
    if (!savedId) {
      savedId = 'session-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now();
      localStorage.setItem('ankit_portfolio_chat_convo_id', savedId);
    }
    setConversationId(savedId);

    // Initial greeting
    setMessages([
      {
        id: 'initial',
        role: 'assistant',
        content:
          "Hello, I am Ankit's AI Assistant. Ask me anything about Ankit's experience, technical projects, or skills.",
        isInitial: true
      }
    ]);

    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = async (messageText) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessageId = 'user-' + Date.now();
    const assistantMessageId = 'assistant-' + Date.now();

    // Append user message
    setMessages((prev) => [
      ...prev,
      {
        id: userMessageId,
        role: 'user',
        content: textToSend
      }
    ]);

    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          message: textToSend,
          conversationId: conversationId || ''
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      if (data.conversationId) {
        setConversationId(data.conversationId);
        localStorage.setItem('ankit_portfolio_chat_convo_id', data.conversationId);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: 'assistant',
          content: data.reply || "I couldn't process that query. Please try again or reach Ankit directly.",
          sources: data.sources || [],
          isTyping: true
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: 'assistant',
          content:
            "I encountered a temporary connection issue. You can contact Ankit directly via WhatsApp or Email below.",
          sources: []
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    const newId = 'session-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now();
    localStorage.setItem('ankit_portfolio_chat_convo_id', newId);
    setConversationId(newId);
    setMessages([
      {
        id: 'initial-' + Date.now(),
        role: 'assistant',
        content:
          "Conversation restarted. Ask me anything about Ankit's experience, projects, or skills.",
        isInitial: true
      }
    ]);
  };

  return (
    <>
      {/* Floating Roblox-Themed Launcher Button (Bottom Right, beside Avatar) */}
      <div className="fixed bottom-6 right-20 sm:bottom-8 sm:right-24 z-40 select-none">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center gap-2.5 px-3.5 py-2.5 bg-[#1F1B17] hover:bg-[#2A241F] border border-accent-copper/70 hover:border-accent-copper rounded-xl shadow-2xl transition-all duration-200 active:scale-95"
          aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat with Ankit'}
          title="Chat with Ankit's AI Assistant"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-0.5 rounded-xl bg-accent-copper/20 blur-sm pointer-events-none group-hover:bg-accent-copper/30 transition-all" />

          {/* Voxel Head Logo */}
          <div className="relative w-6 h-6 bg-[#E8DFD0] border border-[#332E29] rounded-[3px] flex items-center justify-center flex-shrink-0 shadow-sm">
            {/* Headphones */}
            <div className="absolute -top-0.5 inset-x-0.5 h-1 border-t-2 border-accent-copper rounded-t-sm" />
            <div className="absolute -left-0.5 top-1.5 w-1 h-2 bg-accent-copper rounded-l-xs" />
            <div className="absolute -right-0.5 top-1.5 w-1 h-2 bg-accent-copper rounded-r-xs" />
            {/* Eyes */}
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#141210] rounded-xs" />
              <div className="w-1 h-1 bg-[#141210] rounded-xs" />
            </div>
          </div>

          <div className="relative flex flex-col text-left">
            <span className="text-xs font-semibold text-ink-primary group-hover:text-white transition-colors flex items-center gap-1.5">
              <span>Ask AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-status-online animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-accent-copper">AI Assistant</span>
          </div>
        </button>
      </div>

      {/* Pop-Up Modal Chatbox (Non-fullscreen, pinned pop-up) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ankit's AI Assistant"
          data-lenis-prevent="true"
          className="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[440px] h-[580px] max-h-[82vh] flex flex-col bg-[#161311]/95 border border-accent-border/80 rounded-2xl shadow-2xl backdrop-blur-xl animate-in zoom-in-95 fade-in duration-200 overflow-hidden font-sans"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-[#1F1B17]/90 border-b border-bg-subtle flex items-center justify-between flex-shrink-0 select-none">
            <div className="flex items-center gap-2.5">
              {/* Voxel Avatar Badge */}
              <div className="w-7 h-7 bg-[#E8DFD0] border border-[#332E29] rounded-[3px] flex items-center justify-center relative flex-shrink-0">
                <div className="absolute -top-0.5 inset-x-0.5 h-1 border-t-2 border-accent-copper rounded-t-sm" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#141210] rounded-xs" />
                  <div className="w-1 h-1 bg-[#141210] rounded-xs" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-semibold text-ink-primary">Ankit&apos;s AI Assistant</h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-status-online" />
                </div>
                <div className="text-[10px] font-mono text-ink-faint">
                  Online
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleReset}
                title="Restart Conversation"
                className="p-1.5 rounded text-ink-muted hover:text-ink-primary hover:bg-bg-elevated transition-colors text-xs font-mono"
                aria-label="Reset conversation"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded text-ink-muted hover:text-ink-primary hover:bg-bg-elevated transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Messages Container with native scroll & Lenis prevention */}
          <div
            ref={messagesContainerRef}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="flex-1 min-h-0 p-4 overflow-y-auto overscroll-contain space-y-4 select-text"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(196, 130, 89, 0.4) transparent',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs shadow-md ${msg.role === 'user'
                    ? 'bg-accent-copper/20 border border-accent-copper/60 text-ink-primary rounded-br-xs'
                    : 'bg-bg-surface border border-bg-subtle text-ink-muted rounded-bl-xs'
                    }`}
                >
                  {msg.role === 'assistant' ? (
                    msg.isInitial ? (
                      <p className="leading-relaxed font-sans">{msg.content}</p>
                    ) : (
                      <TypewriterMessage
                        text={msg.content}
                        sources={msg.sources}
                        onComplete={scrollToBottom}
                      />
                    )
                  ) : (
                    <p className="leading-relaxed font-sans text-ink-primary whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Suggested Questions (Inside messages flow so they scroll naturally and only appear at the start) */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-2 space-y-2 select-none">
                <div className="text-[10px] font-mono text-ink-faint uppercase tracking-wider">
                  Suggested Questions:
                </div>
                <div className="flex flex-col gap-1.5">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSend(q)}
                      className="px-3 py-2 text-xs font-sans text-ink-muted hover:text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg text-left transition-colors flex items-center justify-between group"
                    >
                      <span>{q}</span>
                      <span className="text-ink-faint group-hover:text-accent-copper font-mono text-[11px]">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Roblox-Themed Jumping Voxel Cubes Loading Indicator */}
            {isLoading && (
              <div className="flex items-start">
                <div className="bg-bg-surface border border-bg-subtle rounded-xl rounded-bl-xs px-3.5 py-3 shadow-md space-y-2">
                  <div className="flex items-center gap-1.5">
                    {/* 3 Hopping Voxel Blocks */}
                    <div className="w-2.5 h-2.5 bg-accent-copper rounded-xs animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 bg-accent-copper/70 rounded-xs animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 bg-accent-copper/40 rounded-xs animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <div className="text-[10px] font-mono text-ink-faint">
                    Agent is thinking...
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#1B1714] border-t border-bg-subtle flex-shrink-0 select-none">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Ankit's architecture, projects, or skills..."
                disabled={isLoading}
                className="flex-1 bg-bg-primary border border-bg-subtle focus:border-accent-copper rounded-lg px-3 py-2 text-xs text-ink-primary placeholder:text-ink-faint outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-accent-copper hover:bg-white text-bg-primary font-semibold rounded-lg transition-colors disabled:opacity-40 disabled:hover:bg-accent-copper"
                title="Send Message"
                aria-label="Send Message"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>

            {/* Direct Human Fallback Line */}
            <div className="mt-2.5 pt-2 border-t border-bg-subtle/50 flex items-center justify-between text-[10px] font-mono text-ink-faint">
              <span>Direct Human Channels:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-accent-copper inline-flex items-center gap-1 transition-colors"
                >
                  <WhatsAppIcon className="w-3 h-3 text-accent-copper" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-ink-muted hover:text-accent-copper inline-flex items-center gap-1 transition-colors"
                >
                  <MailIcon className="w-3 h-3 text-accent-copper" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

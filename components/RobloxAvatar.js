'use client';

import { useState, useEffect, useRef } from 'react';

const EMOTES = [
  'Hi there! 👋 Welcome to Ankit\'s portfolio!',
  '/e wave 👋 Glad you stopped by!',
  'You can drag me anywhere! 🎮',
  '/e dance 🕺 Systems are 100% online!',
  'Built with Java & Spring Boot! ☕',
  '9.61 CGPA! Engineering excellence! 🎓',
  'Oof! Click me to emote again! ✨',
  '/e cheer 🚀 Ready for production!'
];

export default function RobloxAvatar() {
  const [position, setPosition] = useState({ x: 24, y: 24 }); // relative to bottom-left
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [emoteIndex, setEmoteIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const avatarRef = useRef(null);

  // Cycle emotes automatically every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setEmoteIndex((prev) => (prev + 1) % EMOTES.length);
      setShowBubble(true);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Handle Dragging
  const handleMouseDown = (e) => {
    // Left click only
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: window.innerHeight - e.clientY - position.y
    });
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragOffset({
        x: touch.clientX - position.x,
        y: window.innerHeight - touch.clientY - position.y
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = Math.max(10, Math.min(window.innerWidth - 90, e.clientX - dragOffset.x));
      const newY = Math.max(10, Math.min(window.innerHeight - 130, window.innerHeight - e.clientY - dragOffset.y));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const newX = Math.max(10, Math.min(window.innerWidth - 90, touch.clientX - dragOffset.x));
      const newY = Math.max(10, Math.min(window.innerHeight - 130, window.innerHeight - touch.clientY - dragOffset.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Click to emote & jump
  const handleAvatarClick = () => {
    if (isDragging) return;
    setIsJumping(true);
    setEmoteIndex((prev) => (prev + 1) % EMOTES.length);
    setShowBubble(true);
    setTimeout(() => setIsJumping(false), 350);
  };

  return (
    <div
      ref={avatarRef}
      style={{
        left: `${position.x}px`,
        bottom: `${position.y}px`,
      }}
      className="fixed z-40 select-none touch-none transition-[transform] duration-75"
    >
      {/* Roblox Comic Chat Bubble */}
      {showBubble && (
        <div
          className="absolute -top-14 left-0 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap bg-bg-surface/95 text-ink-primary border-2 border-accent-copper/80 rounded-xl px-3 py-1 text-xs font-mono shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 pointer-events-auto cursor-pointer"
          onClick={() => setEmoteIndex((prev) => (prev + 1) % EMOTES.length)}
          title="Click to change emote"
        >
          <span>{EMOTES[emoteIndex]}</span>
          {/* Bubble Arrow Tail */}
          <div className="absolute -bottom-2 left-5 sm:left-1/2 sm:-translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent-copper/80" />
        </div>
      )}

      {/* Roblox Human Character Model */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleAvatarClick}
        title="I'm interactive! Click or drag me anywhere!"
        className={`relative flex flex-col items-center cursor-grab active:cursor-grabbing transition-transform ${
          isJumping ? '-translate-y-3 scale-105' : 'hover:scale-105'
        }`}
      >
        {/* HEAD: Classic Yellow Roblox Block with Smiley */}
        <div className="relative w-8 h-8 bg-[#F5CD2F] border-2 border-[#1E1B18] rounded-[3px] shadow-md flex items-center justify-center">
          {/* Eyes */}
          <div className="absolute top-2.5 left-2 w-1 h-1.5 bg-[#1E1B18] rounded-full" />
          <div className="absolute top-2.5 right-2 w-1 h-1.5 bg-[#1E1B18] rounded-full" />
          {/* Classic Smile */}
          <div className="absolute bottom-1.5 w-3 h-1 border-b-2 border-[#1E1B18] rounded-full" />
        </div>

        {/* TORSO & ARMS ROW */}
        <div className="relative flex items-start -mt-0.5">
          {/* Left Arm: Static Yellow Block */}
          <div className="w-3.5 h-10 bg-[#F5CD2F] border-2 border-[#1E1B18] rounded-[2px] shadow-sm -mr-0.5" />

          {/* Torso: Classic Blue Block with subtle seam */}
          <div className="w-9 h-11 bg-[#00A2FF] border-2 border-[#1E1B18] rounded-[2px] shadow-md flex flex-col items-center justify-center z-10">
            <span className="text-[7px] font-mono font-bold text-white/90 tracking-tighter">
              AK
            </span>
          </div>

          {/* Right Arm: Waving Yellow Block */}
          <div className="w-3.5 h-10 bg-[#F5CD2F] border-2 border-[#1E1B18] rounded-[2px] shadow-sm -ml-0.5 animate-roblox-wave" />
        </div>

        {/* LEGS: Classic Green Blocky Legs */}
        <div className="flex gap-0.5 -mt-0.5">
          <div className="w-4 h-10 bg-[#43B244] border-2 border-[#1E1B18] rounded-[2px] shadow-sm" />
          <div className="w-4 h-10 bg-[#43B244] border-2 border-[#1E1B18] rounded-[2px] shadow-sm" />
        </div>

        {/* Shadow under feet */}
        <div className="w-10 h-1.5 bg-black/40 rounded-full blur-[1px] mt-1" />
      </div>
    </div>
  );
}

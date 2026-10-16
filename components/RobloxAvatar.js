'use client';

import { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  'Hey there! 👋 Welcome to Ankit\'s portfolio!',
  'Waving hi! Glad you stopped by! 👋',
  'You can drag me anywhere around your screen! 🎮',
  'All backend systems are 100% online! 🚀',
  'Crafted with Java, Spring Boot & RAG! ☕',
  '9.61 CGPA graduate in CSE! 🎓',
  'Click me to see me jump! ✨',
  'Looking for reliable engineering? Let\'s talk! 🤝'
];

export default function RobloxAvatar() {
  const [position, setPosition] = useState({ x: 28, y: 28 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [msgIndex, setMsgIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const avatarRef = useRef(null);

  // Cycle messages automatically every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
      setShowBubble(true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle Dragging
  const handleMouseDown = (e) => {
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
      const newX = Math.max(12, Math.min(window.innerWidth - 80, e.clientX - dragOffset.x));
      const newY = Math.max(12, Math.min(window.innerHeight - 120, window.innerHeight - e.clientY - dragOffset.y));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const newX = Math.max(12, Math.min(window.innerWidth - 80, touch.clientX - dragOffset.x));
      const newY = Math.max(12, Math.min(window.innerHeight - 120, window.innerHeight - touch.clientY - dragOffset.y));
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

  const handleAvatarClick = () => {
    if (isDragging) return;
    setIsJumping(true);
    setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    setShowBubble(true);
    setTimeout(() => setIsJumping(false), 300);
  };

  return (
    <div
      ref={avatarRef}
      style={{
        left: `${position.x}px`,
        bottom: `${position.y}px`,
      }}
      className="fixed z-40 select-none touch-none"
    >
      {/* Editorial Frosted Speech Bubble */}
      {showBubble && (
        <div
          className="absolute -top-12 left-0 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap bg-bg-surface/90 text-ink-primary border border-accent-copper/60 rounded-full px-3 py-1 text-[11px] font-mono shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 pointer-events-auto cursor-pointer hover:border-accent-copper"
          onClick={() => setMsgIndex((prev) => (prev + 1) % MESSAGES.length)}
          title="Click to change message"
        >
          <span>{MESSAGES[msgIndex]}</span>
          {/* Bubble Tail */}
          <div className="absolute -bottom-1.5 left-5 sm:left-1/2 sm:-translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-accent-copper/60" />
        </div>
      )}

      {/* Styled Designer Voxel Avatar (Dark Walnut & Copper Theme) */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleAvatarClick}
        title="Interactive Developer Avatar · Click or drag me!"
        className={`relative flex flex-col items-center cursor-grab active:cursor-grabbing transition-transform ${isJumping ? '-translate-y-3 scale-105' : 'hover:scale-105'
          }`}
      >
        {/* Soft Ambient Copper Glow */}
        <div className="absolute -inset-1 rounded-xl bg-accent-copper/10 blur-sm pointer-events-none" />

        {/* HEAD: Warm Sandstone Voxel Head with Minimalist Visor/Headphones */}
        <div className="relative w-7 h-7 bg-[#E8DFD0] border border-[#332E29] rounded-[3px] shadow-sm flex items-center justify-center">
          {/* Copper Headphone Band */}
          <div className="absolute -top-1 inset-x-1 h-1.5 border-t-2 border-accent-copper rounded-t-[3px]" />
          <div className="absolute -left-1 top-2 w-1.5 h-3 bg-accent-copper rounded-l-sm" />
          <div className="absolute -right-1 top-2 w-1.5 h-3 bg-accent-copper rounded-r-sm" />

          {/* Minimalist Glasses / Eyes */}
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#141210] rounded-sm" />
            <div className="w-1.5 h-1.5 bg-[#141210] rounded-sm" />
          </div>
          {/* Subtle Smile */}
          <div className="absolute bottom-1 w-2 h-0.5 bg-[#7A7369] rounded-full" />
        </div>

        {/* TORSO & ARMS ROW */}
        <div className="relative flex items-start -mt-0.5">
          {/* Left Arm: Dark Graphite Sleeve with warm skin cuff */}
          <div className="w-3 h-9 bg-[#1E1B18] border border-[#332E29] rounded-[2px] shadow-sm flex flex-col justify-end">
            <div className="w-full h-2 bg-[#E8DFD0] rounded-b-[1px]" />
          </div>

          {/* Torso: Dark Walnut Engineer Hoodie with Copper Zipper */}
          <div className="relative w-8 h-10 bg-[#282420] border border-[#332E29] rounded-[2px] shadow-md flex flex-col items-center justify-between py-1 z-10">
            {/* Copper Zipper line */}
            <div className="w-0.5 h-5 bg-accent-copper/80 rounded-full" />
            {/* AK Monogram */}
            <span className="text-[7px] font-mono font-semibold text-accent-copper tracking-wider">
              AK
            </span>
          </div>

          {/* Right Arm: Waving Sleeve with warm skin hand */}
          <div className="w-3 h-9 bg-[#1E1B18] border border-[#332E29] rounded-[2px] shadow-sm flex flex-col justify-end animate-roblox-wave">
            <div className="w-full h-2 bg-[#E8DFD0] rounded-b-[1px]" />
          </div>
        </div>

        {/* LEGS: Sleek Dark Charcoal Pants */}
        <div className="flex gap-0.5 -mt-0.5">
          <div className="w-3.5 h-8 bg-[#141210] border border-[#332E29] rounded-[2px] shadow-sm flex flex-col justify-end">
            <div className="w-full h-1.5 bg-[#282420] rounded-b-[1px]" />
          </div>
          <div className="w-3.5 h-8 bg-[#141210] border border-[#332E29] rounded-[2px] shadow-sm flex flex-col justify-end">
            <div className="w-full h-1.5 bg-[#282420] rounded-b-[1px]" />
          </div>
        </div>

        {/* Floor Shadow */}
        <div className="w-9 h-1 bg-black/60 rounded-full blur-[1px] mt-0.5" />
      </div>
    </div>
  );
}

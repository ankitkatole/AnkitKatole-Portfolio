'use client';

import { useState, useEffect, useRef } from 'react';

const MESSAGES = [
  'Welcome to Ankit\'s engineering portfolio.',
  'Click Ask AI to chat with my Spring Boot RAG backend.',
  'Double-click to collapse into a minimal block.',
  'All backend services are 100% operational.',
  'Engineered with Java, Spring Boot, and RAG.',
  'Available for backend & distributed engineering.'
];

export default function RobloxAvatar() {
  const [position, setPosition] = useState({ x: 32, y: 32 }); // offset from bottom-right
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [msgIndex, setMsgIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isFolded, setIsFolded] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const avatarRef = useRef(null);
  const clickTimeoutRef = useRef(null);

  // Cycle messages automatically every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
      setShowBubble(true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle Dragging relative to bottom-right
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragOffset({
      x: (window.innerWidth - e.clientX) - position.x,
      y: (window.innerHeight - e.clientY) - position.y
    });
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragOffset({
        x: (window.innerWidth - touch.clientX) - position.x,
        y: (window.innerHeight - touch.clientY) - position.y
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = Math.max(16, Math.min(window.innerWidth - 80, (window.innerWidth - e.clientX) - dragOffset.x));
      const newY = Math.max(16, Math.min(window.innerHeight - 120, (window.innerHeight - e.clientY) - dragOffset.y));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const newX = Math.max(16, Math.min(window.innerWidth - 80, (window.innerWidth - touch.clientX) - dragOffset.x));
      const newY = Math.max(16, Math.min(window.innerHeight - 120, (window.innerHeight - touch.clientY) - dragOffset.y));
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

  // Click & Double Click handling (folds into face block on double click)
  const handleClick = () => {
    if (isDragging) return;

    if (clickTimeoutRef.current) {
      // Second click in fast succession -> TOGGLE FOLD!
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      setIsFolded((prev) => !prev);
      setIsJumping(true);
      setShowBubble(true);
      setTimeout(() => setIsJumping(false), 300);
      return;
    }

    // First click: wait briefly (280ms) to check if double click
    clickTimeoutRef.current = setTimeout(() => {
      clickTimeoutRef.current = null;
      setIsJumping(true);
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
      setShowBubble(true);
      setTimeout(() => setIsJumping(false), 300);
    }, 280);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    setIsFolded((prev) => !prev);
    setIsJumping(true);
    setShowBubble(true);
    setTimeout(() => setIsJumping(false), 300);
  };

  const currentMessage = isFolded
    ? 'Block Mode! Click twice to unfold.'
    : MESSAGES[msgIndex];

  return (
    <div
      ref={avatarRef}
      style={{
        right: `${position.x}px`,
        bottom: `${position.y}px`,
      }}
      className="fixed z-40 select-none touch-none"
    >
      {/* Editorial Frosted Speech Bubble (Extends cleanly leftward from bottom-right) */}
      {showBubble && (
        <div
          className="absolute -top-12 right-0 whitespace-nowrap bg-bg-surface/95 text-ink-primary border border-accent-copper/60 rounded-full px-3.5 py-1 text-[11px] font-mono shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 pointer-events-auto cursor-pointer hover:border-accent-copper"
          onClick={() => {
            if (isFolded) {
              setIsFolded(false);
            } else {
              setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
              window.dispatchEvent(new CustomEvent('open-chat'));
            }
          }}
          title="Click to open AI Chatbot"
        >
          <span>{currentMessage}</span>
          {/* Bubble Tail */}
          <div className="absolute -bottom-1.5 right-5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-accent-copper/60" />
        </div>
      )}

      {/* Styled Designer Voxel Avatar (Dark Walnut & Copper Theme) */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        title={
          isFolded
            ? 'Block Mode! Double-click to unfold back to full body.'
            : 'Interactive Avatar · Drag me anywhere, or click twice fast to fold into a block!'
        }
        className={`relative flex flex-col items-center cursor-grab active:cursor-grabbing transition-all duration-300 ${isJumping ? '-translate-y-3 scale-110' : 'hover:scale-105'
          }`}
      >
        {/* Soft Ambient Copper Glow */}
        <div className="absolute -inset-1 rounded-xl bg-accent-copper/15 blur-sm pointer-events-none" />

        {/* HEAD: Warm Sandstone Voxel Head with Minimalist Visor/Headphones */}
        <div
          className={`relative bg-[#E8DFD0] border border-[#332E29] rounded-[4px] shadow-md flex items-center justify-center transition-all duration-300 ${isFolded ? 'w-10 h-10 border-accent-copper/80 shadow-lg' : 'w-7 h-7'
            }`}
        >
          {/* Copper Headphone Band */}
          <div className="absolute -top-1 inset-x-1 h-1.5 border-t-2 border-accent-copper rounded-t-[3px]" />
          <div className="absolute -left-1 top-2 w-1.5 h-3 bg-accent-copper rounded-l-sm" />
          <div className="absolute -right-1 top-2 w-1.5 h-3 bg-accent-copper rounded-r-sm" />

          {/* Minimalist Glasses / Eyes */}
          <div className={`flex items-center ${isFolded ? 'gap-2' : 'gap-1.5'}`}>
            <div className={`bg-[#141210] rounded-sm ${isFolded ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
            <div className={`bg-[#141210] rounded-sm ${isFolded ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
          </div>
          {/* Smile */}
          <div
            className={`absolute bg-[#7A7369] rounded-full ${isFolded ? 'bottom-1.5 w-3 h-0.5' : 'bottom-1 w-2 h-0.5'
              }`}
          />
        </div>

        {/* FOLDABLE BODY: Hidden on mobile (face block only), collapsible on desktop */}
        <div
          className={`hidden sm:flex flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isFolded
            ? 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
            : 'max-h-36 opacity-100 translate-y-0'
            }`}
        >
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
        </div>

        {/* Floor Shadow (adapts size when folded) */}
        <div
          className={`bg-black/60 rounded-full blur-[1px] mt-0.5 transition-all duration-300 ${isFolded ? 'w-8 h-1' : 'w-9 h-1'
            }`}
        />
      </div>
    </div>
  );
}

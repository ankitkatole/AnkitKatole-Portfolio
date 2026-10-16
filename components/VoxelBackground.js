'use client';

import { useEffect, useRef } from 'react';

export default function VoxelBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Floating isometric voxel blocks
    const blockSize = 32;
    const blocks = [];
    const blockCount = 28;

    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.floor(16 + Math.random() * 24),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        rotation: Math.random() * Math.PI,
        vRot: (Math.random() - 0.5) * 0.005,
        elevate: 0,
        opacity: 0.12 + Math.random() * 0.22,
        isCopper: Math.random() > 0.65 // Some blocks highlighted with copper outline
      });
    }

    // Draw an isometric block (Roblox-inspired voxel stud block)
    const drawIsometricBlock = (ctx, x, y, size, rotation, isCopper, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const half = size / 2;
      const height = size * 0.7;

      // Colors matching our dark walnut, graphite, and burnished copper palette
      const topFace = isCopper ? 'rgba(196, 130, 89, 0.14)' : 'rgba(40, 36, 32, 0.45)';
      const leftFace = isCopper ? 'rgba(160, 100, 65, 0.12)' : 'rgba(30, 27, 24, 0.55)';
      const rightFace = isCopper ? 'rgba(130, 80, 50, 0.1)' : 'rgba(20, 18, 16, 0.65)';
      const border = isCopper ? 'rgba(196, 130, 89, 0.4)' : 'rgba(60, 52, 45, 0.3)';

      ctx.lineWidth = 1;
      ctx.strokeStyle = border;

      // Top isometric diamond face
      ctx.fillStyle = topFace;
      ctx.beginPath();
      ctx.moveTo(0, -height);
      ctx.lineTo(half, -height + half * 0.5);
      ctx.lineTo(0, -height + size * 0.5);
      ctx.lineTo(-half, -height + half * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Top stud cylinder (Roblox stud motif)
      ctx.fillStyle = isCopper ? 'rgba(196, 130, 89, 0.22)' : 'rgba(50, 44, 38, 0.5)';
      ctx.beginPath();
      ctx.arc(0, -height + half * 0.5, size * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Left face
      ctx.fillStyle = leftFace;
      ctx.beginPath();
      ctx.moveTo(-half, -height + half * 0.5);
      ctx.lineTo(0, -height + size * 0.5);
      ctx.lineTo(0, size * 0.5);
      ctx.lineTo(-half, half * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right face
      ctx.fillStyle = rightFace;
      ctx.beginPath();
      ctx.moveTo(0, -height + size * 0.5);
      ctx.lineTo(half, -height + half * 0.5);
      ctx.lineTo(half, half * 0.5);
      ctx.lineTo(0, size * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Subtle isometric grid lines on canvas
      ctx.strokeStyle = 'rgba(40, 36, 32, 0.12)';
      ctx.lineWidth = 0.5;

      const gridSpacing = 90;
      for (let x = -width; x < width * 2; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height * 1.5, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x + height * 1.5, 0);
        ctx.stroke();
      }

      // Update and draw floating voxel blocks
      blocks.forEach((block) => {
        block.x += block.vx;
        block.y += block.vy;
        block.rotation += block.vRot;

        // Wrap around boundaries
        if (block.x < -50) block.x = width + 50;
        if (block.x > width + 50) block.x = -50;
        if (block.y < -50) block.y = height + 50;
        if (block.y > height + 50) block.y = -50;

        // Distance to cursor
        const dx = mouseX - block.x;
        const dy = mouseY - block.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interaction: hover proximity elevates blocks and adds copper illumination
        let isHovered = dist < 140;
        if (isHovered) {
          block.elevate = Math.min(block.elevate + 1.2, 12);
        } else {
          block.elevate = Math.max(block.elevate - 0.4, 0);
        }

        const currentY = block.y - block.elevate;
        drawIsometricBlock(
          ctx,
          block.x,
          currentY,
          block.size,
          block.rotation,
          block.isCopper || isHovered,
          block.opacity
        );
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}

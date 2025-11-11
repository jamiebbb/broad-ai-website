"use client";

import { useEffect, useRef } from "react";

export default function MouseTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ripples = useRef<Array<{ x: number; y: number; radius: number; alpha: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new ripple
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update ripples (isochrones)
      ripples.current = ripples.current.filter((ripple) => {
        ripple.radius += 3;
        ripple.alpha -= 0.01;

        if (ripple.alpha > 0) {
          // Draw multiple concentric circles for isochrone effect
          for (let i = 0; i < 3; i++) {
            const offset = i * 15;
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius + offset, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.alpha * (1 - i * 0.3)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          return true;
        }
        return false;
      });

      // Draw gradient around cursor
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        150
      );
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.15)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.08)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}


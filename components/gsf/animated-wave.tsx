"use client";

import { useEffect, useRef } from "react";

export function AnimatedWave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const waves = [
        { amplitude: 20, frequency: 0.01, speed: 0.02, alpha: 0.1 },
        { amplitude: 15, frequency: 0.015, speed: 0.025, alpha: 0.08 },
        { amplitude: 10, frequency: 0.02, speed: 0.03, alpha: 0.05 },
      ];

      for (const wave of waves) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.5) *
              (wave.amplitude * 0.5);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        ctx.fillStyle = `rgba(1, 138, 190, ${wave.alpha})`;
        ctx.fill();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(drawWave);
    };

    resize();
    drawWave();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none w-full ${className}`}
    />
  );
}

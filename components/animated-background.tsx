"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 300 + 50;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 15 + 20;
      const delay = Math.random() * 5;

      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.left = left + "%";
      particle.style.top = top + "%";
      particle.style.animationDuration = duration + "s";
      particle.style.animationDelay = delay + "s";
      particle.style.opacity = String(Math.random() * 0.3 + 0.1);

      containerRef.current.appendChild(particle);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="animated-bg fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 20% 50%, rgba(139, 0, 39, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(88, 0, 25, 0.1) 0%, transparent 50%)",
      }}
    />
  );
}

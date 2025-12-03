"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Frontend Developer";
  const descText =
    "Crafting beautiful, interactive digital experiences with cutting-edge web technologies and stunning animations.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-4"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6 hero-text">
          <div className="inline-block">
            <div className="text-6xl md:text-7xl font-bold mb-4">
              <span className="glow-text block mb-2">
                Hey, I&apos;m Mohamed
              </span>
              <span className="text-4xl md:text-6xl glow-accent block h-16 md:h-20">
                {displayedText}
                {displayedText.length < fullText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {descText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToSection}
              className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="/Mohamed Elsaket.pdf"
              download
              className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="pt-16 scroll-indicator">
          <div className="text-center">
            <p className="text-sm text-foreground/50 mb-3">Scroll to explore</p>
            <div className="flex justify-center gap-2">
              <div
                className="w-1 h-8 bg-accent/50 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-1 h-8 bg-accent/50 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-8 bg-accent/50 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

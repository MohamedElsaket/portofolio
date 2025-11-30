"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold glow-accent">&lt;Mohamed /&gt;</div>

        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Experience"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm tracking-wide uppercase cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("footer")}
          className="hidden md:block px-6 py-2 border-2 border-accent rounded-full text-accent hover:bg-accent hover:text-background transition-all duration-300 text-sm font-semibold"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

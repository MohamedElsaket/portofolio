"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github />,
    url: "https://github.com/MohamedElsaket",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/mohamed-elsaket-996285276/",
  },
  {
    name: "Email",
    icon: <Mail />,
    url: "mailto:mohamedelsaket25@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <Phone />,
    url: "https://wa.me/+201030848281",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-accent/20 py-16 px-4 bg-card/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold glow-accent mb-4">
              &lt;Mohamed /&gt;
            </h4>
            <p className="text-foreground/60">
              Creating beautiful digital experiences with code and creativity
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2 text-foreground/60 text-sm">
              {["About", "Projects", "Experience"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Connect</h5>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  target="_blank"
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="social-link"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>&copy; 2025 Mohamed Elsaket. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

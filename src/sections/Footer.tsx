import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-12 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0 bg-slate-900">
              <img
                src={personalInfo.avatar || "/profile-portrait.jpg"}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 font-display block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                IoT & Embedded Systems Developer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 text-xs font-mono">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand-600 font-semibold transition-colors flex items-center space-x-1"
              >
                <span>{link.platform}</span>
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center space-x-1.5 text-xs font-mono font-medium"
            title="Return to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <span>© {new Date().getFullYear()} Marvin S. Oclarino Jr. All rights reserved.</span>
          <span>Crafted with React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

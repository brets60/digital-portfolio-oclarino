import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Featured Project', href: '#project' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0 bg-slate-900 group-hover:border-brand-500 transition-colors">
              <img
                src={personalInfo.avatar || "/profile-portrait.jpg"}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                IoT & Embedded Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-semibold tracking-wide transition-colors shadow-xs"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-800 hover:text-brand-600 bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/30 backdrop-blur-xs pt-20">
          <div className="bg-white border-b border-slate-200 px-6 py-6 shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-semibold text-slate-900 hover:text-brand-600 border-b border-slate-100"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

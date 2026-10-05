import React from 'react';
import { ArrowDown, Mail, MapPin, Radio, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-workspace-base"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Clear, Human Headline & Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-700 tracking-wide flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Philippines</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-semibold">{personalInfo.status}</span>
            </span>
          </div>

          {/* Greeting */}
          <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2 font-mono">
            PORTFOLIO OF MARVIN S. OCLARINO JR.
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.12] mb-5">
            Building smart hardware & embedded systems for the real world.
          </h1>

          {/* Natural Human Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            I am an Information Technology student and developer specializing in <strong>microcontrollers (Arduino, ESP32)</strong>, 
            wireless sensor alerts (RF 433MHz), and desktop monitoring software designed to improve community road safety.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#project"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-brand-600 text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore Speed Detection System</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Highlights summary pills */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-slate-200/80 w-full max-w-lg text-left">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Focus</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">Embedded & IoT</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Hardware</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">Arduino & ESP32</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Software</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">Python & GUI</div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Eye-Catching Portrait Display */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl group">
            {/* The Portrait Image */}
            <img
              src={personalInfo.avatar || "/profile-portrait.jpg"}
              alt={personalInfo.name}
              className="w-full h-auto object-cover object-top aspect-3/4 transition-transform duration-500 group-hover:scale-102"
            />

            {/* Bottom Floating Info Badge */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 font-display">
                    {personalInfo.name}
                  </div>
                  <div className="text-[11px] text-brand-600 font-mono mt-0.5 flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>Embedded Systems & IoT</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold flex items-center gap-1 border border-emerald-200/60">
                  <ShieldCheck className="w-3 h-3" />
                  <span>BSIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

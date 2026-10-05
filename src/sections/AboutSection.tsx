import React from 'react';
import { Cpu, Monitor, ShieldAlert, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = personalInfo;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
          WHO I AM
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight mt-3">
          About the Developer
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          An honest, hands-on background focused on building physical technology that works reliably.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Natural Bio & Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Hands-On Engineering Over Theory
            </h3>
            {about.summary.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Education Box */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-brand-50 text-brand-600 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                EDUCATION & ACADEMICS
              </div>
              <div className="text-base font-bold text-slate-900 mt-0.5">
                {about.education}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Focused on system integration, database systems, networking, and microcontroller programming.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Core Competencies */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Embedded Hardware */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-brand-600 uppercase">
              <Cpu className="w-4 h-4" />
              <span>Embedded Hardware & IoT</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wiring, soldering, and writing C/C++ firmware for Arduino, ESP32-CAM, ultrasonic/radar sensors, and 433MHz RF wireless transmitters.
            </p>
          </div>

          {/* Card 2: Desktop GUI & Software */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-slate-900 uppercase">
              <Monitor className="w-4 h-4 text-brand-600" />
              <span>Python & Desktop Control</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Developing desktop supervisory consoles with CustomTkinter, managing live serial communication, and logging data to local SQLite tables.
            </p>
          </div>

          {/* Card 3: Real-World Safety Purpose */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-emerald-700 uppercase">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <span>Smart Community Safety</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Creating affordable, portable warning systems that help reduce speed-related pedestrian accidents in school and residential zones.
            </p>
          </div>

          {/* Quick info row */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-mono text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Philippines
            </span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Open to Collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

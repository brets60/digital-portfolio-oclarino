import React from 'react';
import { Cpu, Code2, Monitor, Database } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: "Embedded & IoT Hardware",
      icon: Cpu,
      description: "Hardware microcontrollers, wireless communication, and sensor interfacing.",
      skills: [
        "Arduino Uno / Nano",
        "ESP32 & ESP32-CAM",
        "433MHz RF Modules",
        "Sensors & Signal Debouncing",
        "C / C++ Firmware"
      ]
    },
    {
      title: "Programming & Scripts",
      icon: Code2,
      description: "Languages used for core systems, automation, and desktop tools.",
      skills: [
        "Python (Core & PySerial)",
        "C / C++ (Embedded)",
        "SQL (Relational Queries)",
        "JavaScript (ES6+)",
        "HTML5 & CSS3"
      ]
    },
    {
      title: "Desktop GUI & Applications",
      icon: Monitor,
      description: "User interfaces designed for desktop monitoring and live control.",
      skills: [
        "CustomTkinter (Python)",
        "Tkinter Standard GUI",
        "Thread-Safe Event Queues",
        "Serial Port Telemetry",
        "Modern Clean Dark/Light UI"
      ]
    },
    {
      title: "Databases & Development Tools",
      icon: Database,
      description: "Data storage engines and developer workflow utilities.",
      skills: [
        "SQLite Database",
        "MySQL",
        "Arduino IDE",
        "VS Code",
        "Git & GitHub"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
          TECHNICAL TOOLKIT
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight mt-3">
          Skills & Technologies
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          The practical tools, languages, and hardware components I use to build prototypes.
        </p>
      </div>

      {/* Grid of 4 Clean Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 text-xs font-mono font-medium border border-slate-200/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

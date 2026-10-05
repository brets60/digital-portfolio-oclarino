import React, { useState } from 'react';
import {
  Radio,
  ShieldAlert,
  Camera,
  Database,
  CheckCircle2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const FeaturedProjectSection: React.FC = () => {
  const project = projects[0]; // Speed Detection & Warning System

  // Interactive Live Simulator State
  const [speed, setSpeed] = useState<number>(48);
  const speedLimit = 40;
  const isOverspeed = speed > speedLimit;

  const [incidentLog, setIncidentLog] = useState<
    Array<{ id: number; time: string; speed: number; status: string }>
  >([
    { id: 1, time: '10:14:02 AM', speed: 32, status: 'NORMAL' },
    { id: 2, time: '10:15:38 AM', speed: 48, status: 'OVERSPEED BREACH' },
  ]);

  const testSpeed = (targetSpeed: number) => {
    setSpeed(targetSpeed);
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    const newEntry = {
      id: Date.now(),
      time: timeStr,
      speed: targetSpeed,
      status: targetSpeed > speedLimit ? 'OVERSPEED BREACH' : 'NORMAL',
    };
    setIncidentLog((prev) => [newEntry, ...prev.slice(0, 3)]);
  };

  return (
    <section id="project" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
          FEATURED CAPSTONE PROJECT
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight mt-3">
          Speed Detection & Warning System
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-3">
          An IoT smart road safety prototype designed to detect approaching vehicle speed, 
          broadcast real-time wireless overspeed warnings, and log visual evidence.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-mono font-semibold border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Star Showcase: Interactive Hardware & Telemetry Simulator */}
      <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl mb-14 font-mono">
        {/* Top Console Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div className="flex items-center space-x-2.5">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              LIVE SYSTEM SIMULATION // 433MHz WIRELESS LINK
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400">SPEED LIMIT:</span>
            <span className="px-2.5 py-0.5 rounded bg-red-500/20 text-red-400 font-bold border border-red-500/30">
              {speedLimit} KM/H
            </span>
          </div>
        </div>

        {/* Center Interactive Simulation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
          {/* Speedometer Gauge */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">
              APPROACH VEHICLE VELOCITY
            </span>

            <div
              className={`text-6xl sm:text-7xl font-black font-display tracking-tight my-2 transition-colors duration-200 ${
                isOverspeed ? 'text-red-400' : 'text-emerald-400'
              }`}
            >
              {speed}
              <span className="text-base text-slate-400 font-mono font-normal ml-2">KM/H</span>
            </div>

            {/* Warning strobe status */}
            <div className="my-2">
              {isOverspeed ? (
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>OVERSPEED! RF WARNING ACTIVE</span>
                </div>
              ) : (
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SAFE ZONE VELOCITY</span>
                </div>
              )}
            </div>

            {/* Test speed buttons */}
            <div className="w-full pt-4 mt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block mb-2">
                TEST SIMULATED VEHICLE PASS:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => testSpeed(28)}
                  className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  28 km/h
                </button>
                <button
                  onClick={() => testSpeed(48)}
                  className="px-2 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors"
                >
                  48 km/h ⚠️
                </button>
                <button
                  onClick={() => testSpeed(65)}
                  className="px-2 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-bold border border-red-500/30 transition-colors"
                >
                  65 km/h 🚨
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: ESP32-CAM Preview & SQLite Event Feed */}
          <div className="lg:col-span-7 space-y-4">
            {/* Visual ESP32 Camera Snapshot Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800 text-slate-300">
                <span className="flex items-center gap-1.5 text-brand-400 font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  ESP32-CAM [OPTICAL CAPTURE]
                </span>
                <span className="text-slate-400 text-[10px]">
                  {isOverspeed ? 'TRIGGERED BY OVERSPEED' : 'STANDBY'}
                </span>
              </div>

              <div className="h-28 my-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-3">
                  <div className="w-28 h-10 border-2 border-dashed border-brand-400/60 rounded-md mx-auto flex items-center justify-center text-[10px] text-brand-300">
                    VEHICLE FRAME
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2">
                    CAPTURED AT {speed} KM/H • SUB-140ms LATENCY
                  </div>
                </div>
              </div>
            </div>

            {/* SQLite Log Table */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800 text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Database className="w-3.5 h-3.5" />
                  SQLite Incident Log (`incidents.db`)
                </span>
                <span className="text-slate-400 text-[10px]">AUTO-COMMITTED</span>
              </div>

              <div className="space-y-1.5">
                {incidentLog.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-950 text-xs border border-slate-800/80"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-slate-400">{log.time}</span>
                      <span className="font-bold text-white">{log.speed} KM/H</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.status === 'OVERSPEED BREACH'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hardware Pipeline */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <span>Signal Chain: Sensor → Arduino (C++) → RF 433MHz → Strobe Warning → ESP32-CAM → Python GUI</span>
          <span className="text-emerald-400 font-semibold">ALL NODES ONLINE</span>
        </div>
      </div>

      {/* Clear, Genuine Case Study Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* The Problem */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-red-600 uppercase">
            <AlertTriangle className="w-4 h-4" />
            <span>The Real-World Problem</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Excessive Speed in School and Pedestrian Corridors
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </div>

        {/* The Solution */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-brand-600 uppercase">
            <Lightbulb className="w-4 h-4" />
            <span>The Engineered Solution</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Automated Physical-Digital Warning Prototype
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.caseStudy.idea}
          </p>
        </div>
      </div>

      {/* How the System Works: Simple 4-Step Flow */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs mb-12">
        <h3 className="text-xl font-bold text-slate-900 font-display mb-6">
          How the System Operates End-to-End
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-brand-400 font-mono text-xs font-bold flex items-center justify-center">
              01
            </div>
            <div className="font-bold text-sm text-slate-900">Approach Sensor Trigger</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Radar / optical sensor measures vehicle transit time difference with sub-millisecond precision.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-brand-400 font-mono text-xs font-bold flex items-center justify-center">
              02
            </div>
            <div className="font-bold text-sm text-slate-900">Speed Calculation</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Arduino microcontroller calculates speed in km/h and evaluates against the configured speed threshold.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-brand-400 font-mono text-xs font-bold flex items-center justify-center">
              03
            </div>
            <div className="font-bold text-sm text-slate-900">Wireless RF Warning</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              433MHz RF module transmits an alert packet wirelessly to roadside flashers to warn drivers immediately.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-brand-400 font-mono text-xs font-bold flex items-center justify-center">
              04
            </div>
            <div className="font-bold text-sm text-slate-900">Camera & Database Log</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              ESP32-CAM captures a snapshot, and Python CustomTkinter logs the speed, time, and image into SQLite.
            </p>
          </div>
        </div>
      </div>

      {/* Engineering Challenges Solved */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 font-display mb-4">
          Real Engineering Challenges Solved During Prototyping
        </h3>

        <div className="space-y-4">
          {project.caseStudy.challenges.map((c, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
              <div className="font-bold text-red-600 font-mono uppercase">
                Challenge: {c.challenge}
              </div>
              <div className="text-slate-700 leading-relaxed">
                <strong className="text-emerald-700 font-mono uppercase">Solution: </strong>
                {c.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

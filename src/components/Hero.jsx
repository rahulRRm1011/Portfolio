import React from 'react';
import { ArrowDownRight, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              {personalInfo.status}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building clean, responsive &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
                modern web interfaces.
              </span>
            </h1>

            {/* Bio text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 transition-all text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-200 border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all text-sm sm:text-base"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-400 hover:text-sky-400 transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-400 hover:text-sky-400 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-400 hover:text-sky-400 transition-colors"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[320px] sm:max-w-[340px] w-full">
              {/* Subtle backdrop accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/WhatsApp Image 2025-03-06 at 20.16.58.jpeg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating highlight badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Frontend Developer</div>
                  <div className="text-[11px] text-slate-400">React • Tailwind • JS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

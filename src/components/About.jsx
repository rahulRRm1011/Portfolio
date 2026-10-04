import React from 'react';
import { Smartphone, Laptop, GitPullRequest, Zap, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const highlights = [
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Mobile-first approach ensuring fluid experiences across mobile, tablet, and desktop screens.",
  },
  {
    icon: Laptop,
    title: "Component Architecture",
    desc: "Modular React components and reusable UI patterns with clean, maintainable logic.",
  },
  {
    icon: GitPullRequest,
    title: "Version Control Hygiene",
    desc: "Active Git branching, structured commits, and continuous collaboration via GitHub.",
  },
  {
    icon: Zap,
    title: "Performance & Accessibility",
    desc: "Optimized asset delivery, semantic markup, and accessible elements for all users.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-white/[0.06] bg-[#0d1322]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            A Bit About Who I Am
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Dedicated to building practical, reliable, and user-centered web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio & Quick Info Card */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">
              Hello, I'm Rahul R M
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.about.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quick Details Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              {personalInfo.quickStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  <span className={`text-sm sm:text-base font-semibold mt-0.5 ${stat.highlight ? 'text-emerald-400' : 'text-slate-200'}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-slate-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

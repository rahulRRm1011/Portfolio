import React from 'react';
import { Atom, Palette, FileCode, Layout, Brush, GitBranch } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Atom: Atom,
  Palette: Palette,
  FileCode: FileCode,
  Layout: Layout,
  Brush: Brush,
  GitBranch: GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Tools &amp; Technologies I Use
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Practical knowledge in modern web standards, component libraries, and frontend workflows.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || FileCode;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-white/10 rounded-xl p-6 hover:border-sky-400/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {skill.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-medium px-2 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

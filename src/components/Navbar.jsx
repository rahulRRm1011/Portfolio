import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/[0.08] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="/images/210624727.png" 
              alt={personalInfo.name} 
              className="h-10 w-auto rounded object-contain border border-white/10 group-hover:border-sky-400/40 transition-colors"
            />
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-white bg-white/[0.08]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/[0.05] hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Say Hi</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-1.5 rounded-md text-sm font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 transition-all"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0b0f19] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.href.replace('#', '')
                  ? 'text-white bg-white/[0.08]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-md font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

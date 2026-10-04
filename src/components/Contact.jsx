import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Clock, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Whether you have a job opening, a freelance project, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I am actively seeking junior frontend developer and web design opportunities. Feel free to contact me via email or LinkedIn.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={personalInfo.socials.email}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-sky-400/40 hover:bg-slate-950 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-sky-400/40 hover:bg-slate-950 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                    linkedin.com/in/rahul-rm1011
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-sky-400/40 hover:bg-slate-950 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">GitHub</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                    github.com/rahulRRm1011
                  </div>
                </div>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-emerald-300 leading-normal mb-0">
                Typically responds within 24 hours. Open to immediate full-time employment.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill out the form below to connect with me directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Rahul, I noticed your portfolio and would like to talk about a frontend role..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors text-sm sm:text-base mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm flex items-center gap-2 mt-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Preparing your email client... You can also email directly at {personalInfo.email}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

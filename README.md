# Rahul R M - Developer Portfolio

A fast, responsive, and minimalist developer portfolio built with **React**, **Vite**, and **Tailwind CSS v3**. Designed to be recruiter-friendly, authentic, and free of artificial gimmicks.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
├── public/
│   └── images/              # Profile photos, screenshots, and logos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive header with scroll spy & mobile menu
│   │   ├── Hero.jsx         # Status badge, intro, CTA, and portrait card
│   │   ├── About.jsx        # Bio, recruiter stats, and core principles
│   │   ├── Skills.jsx       # Categorized skill cards with tags & Lucide icons
│   │   ├── Projects.jsx     # 2-column project showcase with GitHub links
│   │   ├── Contact.jsx      # Functional contact form & contact details
│   │   └── Footer.jsx       # Copyright, socials, and back-to-top button
│   ├── data/
│   │   └── portfolioData.js # Single file to update all content & links
│   ├── App.jsx              # Main layout assembler
│   ├── index.css            # Tailwind CSS directives & custom styling
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML entry with Inter font & meta tags
├── tailwind.config.js       # Tailwind CSS v3 configuration
├── vite.config.js           # Vite build configuration
└── package.json             # Scripts & dependencies
```

---

## 🛠️ Customizing Your Content

All personal info, projects, skills, and links can be updated in one place:
**[`src/data/portfolioData.js`](file:///c:/find%20a%20job%20before%20december/portfolio-rahul-master/src/data/portfolioData.js)**.

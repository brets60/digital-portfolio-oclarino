# The Digital Workspace — Premium Digital Portfolio

> An original, product-grade digital workspace portfolio built for **Marvin S. Oclarino Jr.** (Full-Stack Developer & Systems Builder). Rejecting generic templates, this site serves as a living demonstration of software engineering, physical-to-digital systems integration, and high-fidelity interaction design.

---

## 🧭 Live Architecture & Concept

Instead of a standard `Hero → About → Skills → Projects → Contact` layout, the portfolio is engineered as **"THE DIGITAL WORKSPACE"**, taking visitors through an interactive journey:

1. **OPENING EXPERIENCE (Workspace Gateway)**: Interactive terminal pod, animated statement cycler (*Developer, Designer, Builder, Problem Solver*), RF carrier signal monitor, and primary entry triggers.
2. **IDENTITY (Personal Workspace Desk)**: Live Asia/Manila (GMT+8) time clock, real-time availability status, regional latency metrics, and domain telemetry cards.
3. **CREATIVE THINKING ("My World" Architecture Hub)**: An interactive 7-domain constellation around *"WHAT I BUILD"* (Web Applications, AI Systems, Management Systems, Automation, IoT & Embedded, Database Systems, UI/UX Architecture) that dynamically expands to reveal real-world problems solved and technical stacks.
4. **EXPERIMENTS ("The Lab")**: Real in-browser functional prototyping sandboxes:
   - **Real-Time Radar & RF Telemetry Simulator**: Adjust vehicle transit velocity, trigger overspeed thresholds (>40 km/h), broadcast simulated 433MHz RF packets, strobe alerts, and log events to an SQLite audit table.
   - **AI Skill Gap Delta Calculator**: Toggle current technical repertoire against target job roles to calculate mathematical competency match percentages and pinpoint high-priority skill deltas.
   - **Serial Bus & Jitter Scope**: High-frequency UART bitframe clock visualizer with toggleable baud rates (9600 / 115200).
5. **PROJECTS (Interactive Gallery)**: Large-format project showcases with bespoke system mockups:
   - **01: Speed Detection & Warning System** (IoT / Embedded / Smart Safety)
   - **02: Laundry Pickup & Delivery System** (Full-Stack Web Application)
   - **03: AI Job & Skills Assistant** (Artificial Intelligence / Career Technology)
6. **PROJECT COMMAND CENTER**: Full-screen slide-over product inspector with tabs:
   - *Overview & Case Study* (The Problem, The Idea, The System, The Result)
   - *System Flow & Architecture* (5-step signal and data propagation pipeline)
   - *Tech Stack & Rationale* (Why each framework and microcontroller was selected)
   - *System Visuals & UI* (High-contrast prototype views and wireframes)
   - *Challenges & Lessons* (Hardware debouncing, state-machine concurrency, structured JSON schemas)
7. **TECHNOLOGY CONSTELLATION**: Non-traditional stack visualizer categorized by Frontend, Backend, Database, Tools, AI, and IoT with architectural explanations of how each tool is used.
8. **BUILDING PROCESS ("From Idea to Product")**: An animated 7-stage methodology ribbon (*01 Idea → 02 Research → 03 Design → 04 Develop → 05 Test → 06 Improve → 07 Deploy*) with concrete deliverables.
9. **LIVE SYSTEM STATUS ("Currently Building")**: Transparent live sprint tracker showing active milestones for the AI Job & Skills Assistant.
10. **VISION & PERSONAL PHILOSOPHY**: Editorial architectural statement: *"Good software should feel simple, even when the system behind it is complex."*
11. **ABOUT**: Honest, human professional profile covering education, development interests, technical focus, and career goals.
12. **CONNECT ("Have an Idea? Let's Build It.")**: Interactive project inquiry terminal with real-time validation, multi-state feedback (*Idle, Typing, Sending, Success, Error*), and integration-ready dispatch.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript (Strict `verbatimModuleSyntax` and zero `any`)
- **Build Tooling**: Vite 8 (Sub-second HMR and optimized production bundling)
- **Styling**: Tailwind CSS (Sophisticated palette: crisp whites, porcelain grays, deep onyx, electric blue `#0066FF`)
- **Animations**: Framer Motion (60fps layout transitions, tab animations, spring-damped cursor)
- **Icons**: Lucide React
- **Micro-interactions**: Canvas Confetti, custom follower cursor with context badges (`VIEW`, `EXPLORE`, `INSPECT`, `PLAY`)

---

## 📂 Project Structure

```
c:\Users\Saidimar Rey\.gemini\antigravity\scratch\DigitalPortfolio-Oclarino\
├── index.html                     # SEO metadata, Open Graph tags, Plus Jakarta Sans & JetBrains Mono fonts
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript project references
├── tsconfig.app.json              # Strict compiler options (noUnusedLocals, verbatimModuleSyntax)
├── tailwind.config.js             # Custom colors, fonts, shadows, and animations
├── postcss.config.js              # PostCSS plugins
├── src/
│   ├── main.tsx                   # Application entry point
│   ├── App.tsx                    # Root workspace orchestrator & modal state
│   ├── index.css                  # Custom scrollbars, workspace grid patterns, cursor styles
│   ├── types/
│   │   └── portfolio.ts           # Strict TypeScript data contracts for all sections
│   ├── data/
│   │   └── portfolioData.ts       # SINGLE SOURCE OF TRUTH (All content, projects, bio, skills, links)
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer
│   │   ├── CustomCursor.tsx       # Trailing cursor with context pill (auto-disabled on touch)
│   │   └── CommandPalette.tsx     # ⌘K / Ctrl+K interactive keyboard quick-launcher
│   └── sections/
│       ├── HeroSection.tsx        # Opening Experience with dynamic statement cycler
│       ├── PersonalDashboard.tsx  # Personal workspace desk & live Asia/Manila clock
│       ├── MyWorldSection.tsx     # "What I Build" 7-domain architecture hub
│       ├── ProjectsSection.tsx    # Large-format gallery with bespoke interactive mockups
│       ├── ProjectCommandCenterModal.tsx # Full product case study inspector
│       ├── LabSection.tsx         # The Lab with 3 live playable sandboxes
│       ├── TechConstellationSection.tsx # Category-filtered technology stack visualizer
│       ├── ProcessSection.tsx     # "From Idea to Product" 7-stage journey
│       ├── LiveStatusSection.tsx  # "Currently Building" live sprint status
│       ├── PhilosophySection.tsx  # Large typographic engineering philosophy
│       ├── AboutSection.tsx       # Authentic, grounded developer background
│       ├── ContactSection.tsx     # "Start a Conversation" validated inquiry terminal
│       └── Footer.tsx             # System metadata, workspace map, verified channels
```

---

## 🚀 Installation & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or later (v24.x recommended)
- **npm**: v9.0.0 or later

### 1. Clone or Open the Repository
```bash
cd "c:\Users\Saidimar Rey\.gemini\antigravity\scratch\DigitalPortfolio-Oclarino"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch with instant Hot Module Replacement (HMR) at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Compiles TypeScript, verifies types, and outputs optimized static assets to the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Portfolio Content

All developer details, project write-ups, case studies, technologies, and social accounts are decoupled from UI components and cleanly centralized in a single file:

👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

### Changing Developer Name & Bio
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "John Michael D. Bretaña",
  titles: ["DEVELOPER", "DESIGNER", "BUILDER", "PROBLEM SOLVER"],
  role: "Full-Stack Developer & Systems Builder",
  focus: "Web • AI • Systems • IoT",
  location: "Philippines",
  status: "Available for Opportunities",
  tagline: "I build digital systems that turn real-world problems into usable experiences.",
  // ...
};
```

### Adding or Modifying a Project
Each project in `projects` contains structured data for the gallery and the Project Command Center case study. Simply add a new object to the `projects` array:
```typescript
{
  id: "your-project-id",
  number: "04",
  title: "PROJECT TITLE",
  category: "Full-Stack Web Application",
  year: "2026",
  shortDescription: "A concise overview of the problem and implementation.",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  caseStudy: {
    problem: "...",
    idea: "...",
    system: "...",
    technology: ["..."],
    experience: "...",
    result: "...",
    systemFlow: [ /* 5 steps */ ],
    challenges: [ /* challenge & solution pairs */ ],
    lessons: [ /* key takeaways */ ],
    metricsOrOutputs: [ /* 4 badges */ ]
  }
}
```

### Updating Social Links
Modify the `socialLinks` array in `src/data/portfolioData.ts`:
```typescript
export const socialLinks: SocialLink[] = [
  { platform: "GitHub", label: "Repositories", url: "https://github.com/yourhandle", handle: "github.com/yourhandle" },
  { platform: "LinkedIn", label: "Network", url: "https://linkedin.com/in/yourhandle", handle: "linkedin.com/in/yourhandle" },
  { platform: "Email", label: "Direct correspondence", url: "mailto:your.email@domain.com", handle: "your.email@domain.com" }
];
```

---

## 🔐 Environment Variables & Contact Form Integration

To wire the contact inquiry form to a live email service (e.g. [Formspree](https://formspree.io) or [Resend](https://resend.com)):

1. Create a `.env` file in the root folder:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
2. In `src/sections/ContactSection.tsx`, update the `handleSubmit` function:
   ```typescript
   const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
   if (endpoint) {
     const response = await fetch(endpoint, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });
     if (!response.ok) throw new Error('Failed to send transmission');
   }
   ```
*By default, the form runs in transparent simulation mode, validating inputs and displaying the success confirmation without claiming false delivery.*

---

## 🌐 Deployment Instructions

The project produces pure static HTML, CSS, and JS files, making it deployable anywhere with zero configuration:

### Vercel
```bash
npx vercel
```
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### GitHub Pages
1. In `vite.config.ts`, set `base: '/repository-name/'` (or `'./'`).
2. Run `npm run build`.
3. Push the `dist/` directory to the `gh-pages` branch.

---

## ♿ Accessibility & Responsiveness Tested

- **Viewports Tested**: 375px (iPhone SE/Mini), 390px/430px (iPhone Pro/Max), 768px (iPad Mini/Air), 1024px (Laptops), 1440px+ (4K & Ultra-wide displays).
- **Keyboard Navigation**:
  - `⌘K` or `Ctrl+K`: Global command launcher
  - `ESC`: Dismiss Command Center modal and search palette
  - Tab focus order maintained across all interactive buttons, inputs, and tabs
- **Reduced Motion**: Automatically complies with `@media (prefers-reduced-motion: reduce)` by disabling non-essential transitions and spring physics.
- **Mobile Touch Handling**: Custom cursor automatically deactivates on touch/pointer-coarse devices.

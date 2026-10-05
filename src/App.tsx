import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-workspace-base text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section: Headline, Intro & Portrait Photo */}
        <HeroSection />

        {/* 2. About Section: Grounded, Authentic Background */}
        <AboutSection />

        {/* 3. Featured Flagship Project: Speed Detection & Warning System with Live Simulator */}
        <FeaturedProjectSection />

        {/* 4. Skills & Tools: Clean Hardware, Software & Database Grid */}
        <SkillsSection />

        {/* 5. Contact Section: Direct, Simple Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

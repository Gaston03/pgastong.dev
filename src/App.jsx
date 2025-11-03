import './App.css';
import { useTranslation } from 'react-i18next';
import ScrollProgress from './components/common/ScrollProgress';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ExperienceTimeline from './components/Experience/ExperienceTimeline';
import SkillsGrid from './components/Skills/SkillsGrid';
import ProjectsGallery from './components/Projects/ProjectsGallery';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Skip to Content Link for Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        {t('accessibility.skipToContent', 'Skip to main content')}
      </a>

      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress aria-hidden="true" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6" aria-labelledby="experience-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center">
              {t('experience.title')}
            </h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Skills Section */}
        <SkillsGrid />

        {/* Projects Section */}
        <ProjectsGallery />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;

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

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

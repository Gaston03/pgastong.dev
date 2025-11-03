import './App.css';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ExperienceTimeline from './components/Experience/ExperienceTimeline';
import SkillsGrid from './components/Skills/SkillsGrid';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            {t('experience.title')}
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsGrid />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-dark-300">
            Projects content will be added here
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-4 bg-dark-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('education.title')}
          </h2>
          <p className="text-lg text-dark-300">
            Education content will be added here
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-dark-300">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

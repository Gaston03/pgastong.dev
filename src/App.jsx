import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/Navigation/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <div className="section-container py-20">
        <h1 className="text-5xl font-bold gradient-text mb-4">
          {t('hero.greeting')} Tonguino Gaston Pascal
        </h1>
        <p className="text-xl mb-8" style={{ color: 'var(--color-dark-300)' }}>
          {t('hero.title')}
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">
            {t('hero.cta.viewWork')}
          </button>
          <button className="btn-outline">
            {t('hero.cta.downloadCV')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

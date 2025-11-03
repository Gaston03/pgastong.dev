import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    
    i18n.changeLanguage(newLanguage).then(() => {
      setTimeout(() => setIsAnimating(false), 300);
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
      aria-label={`Switch language to ${currentLanguage === 'en' ? 'French' : 'English'}`}
      aria-pressed={false}
      disabled={isAnimating}
    >
      <div className="relative w-12 h-6 flex items-center" aria-hidden="true">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={false}
        />
        <motion.div
          className="absolute w-5 h-5 bg-white rounded-full shadow-lg flex items-center justify-center"
          animate={{
            x: currentLanguage === 'en' ? 2 : 26
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
        >
          <span className="text-xs font-bold text-gray-800">
            {currentLanguage.toUpperCase()}
          </span>
        </motion.div>
      </div>
      
      <motion.span
        key={currentLanguage}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="text-sm font-medium text-white/80 group-hover:text-white"
      >
        {currentLanguage === 'en' ? 'English' : 'Français'}
      </motion.span>
    </button>
  );
};

export default LanguageSwitcher;

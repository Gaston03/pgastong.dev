import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import ImageWithLoader from '../common/ImageWithLoader';
import { useMagneticButton } from '../../hooks/useMagneticButton';
import GradientMesh from './GradientMesh';

export default function Hero() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const { buttonRef: viewWorkRef, position: viewWorkPos } = useMagneticButton(0.3);
  const { buttonRef: downloadCVRef, position: downloadCVPos } = useMagneticButton(0.3);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    window.open('/application-cv.pdf', '_blank');
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated Gradient Mesh Background */}
      <GradientMesh />

      {/* Main Content */}
      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content - Left Side on Desktop, Top on Mobile */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-dark-300 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('hero.greeting')}
            </motion.p>

            {/* Name with Animated Text */}
            <AnimatedText 
              text="Tonguino Gaston Pascal"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
            />

            {/* Title */}
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-100 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t('hero.title')}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-dark-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                ref={viewWorkRef}
                onClick={handleViewWork}
                className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg w-full sm:w-auto"
                style={{
                  transform: `translate(${viewWorkPos.x}px, ${viewWorkPos.y}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('hero.cta.viewWork')}
              </motion.button>
              <motion.button
                ref={downloadCVRef}
                onClick={handleDownloadCV}
                className="btn btn-outline px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg w-full sm:w-auto"
                style={{
                  transform: `translate(${downloadCVPos.x}px, ${downloadCVPos.y}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('hero.cta.downloadCV')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side on Desktop, Bottom on Mobile */}
          <motion.div
            className="flex-shrink-0 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow Effect with parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              />
              
              {/* Image Container with Glassmorphism */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden glass border-4 border-primary-500/30">
                <ImageWithLoader
                  src="/images/profile.svg"
                  alt="Tonguino Gaston Pascal"
                  fallbackSrc="https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=TGP"
                  className="rounded-full"
                />
              </div>

              {/* Decorative Elements - Hidden on small mobile */}
              <motion.div
                className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-primary-500/50 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="hidden sm:block absolute -bottom-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-4 border-secondary-500/50 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs sm:text-sm text-dark-300">{t('hero.scrollIndicator')}</span>
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-1.5 sm:p-2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

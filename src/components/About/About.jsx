import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { FaMapMarkerAlt, FaCalendarAlt, FaGlobeAmericas, FaBriefcase } from 'react-icons/fa';

function About() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const quickFacts = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-500" />,
      label: t('about.quickFacts.location'),
      value: t('about.quickFacts.locationValue')
    },
    {
      icon: <FaCalendarAlt className="text-2xl text-primary-500" />,
      label: t('about.quickFacts.age'),
      value: '22'
    },
    {
      icon: <FaGlobeAmericas className="text-2xl text-primary-500" />,
      label: t('about.quickFacts.nationality'),
      value: t('about.quickFacts.nationalityValue')
    },
    {
      icon: <FaBriefcase className="text-2xl text-primary-500" />,
      label: t('about.quickFacts.status'),
      value: t('about.quickFacts.statusValue')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-dark-800/50" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" aria-hidden="true"></div>
          </motion.div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side - About Me Text */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <article className="prose prose-invert max-w-none">
                <p className="text-sm sm:text-base md:text-lg text-dark-300 leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-dark-300 leading-relaxed">
                  {t('about.paragraph2')}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-dark-300 leading-relaxed">
                  {t('about.paragraph3')}
                </p>
              </article>
            </motion.div>

            {/* Right Side - Quick Facts Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 id="quick-facts-heading" className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                {t('about.quickFacts.title')}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4" role="list" aria-labelledby="quick-facts-heading">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                    role="listitem"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                    
                    <div className="relative z-10 space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300" aria-hidden="true">
                        <div className="text-lg sm:text-xl md:text-2xl text-primary-500">
                          {fact.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-dark-400 font-medium mb-1">
                          {fact.label}
                        </p>
                        <p className="text-sm sm:text-base text-white font-semibold break-words">
                          {fact.value}
                        </p>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

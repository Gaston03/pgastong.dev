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
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - About Me Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-dark-300 leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-lg text-dark-300 leading-relaxed">
                  With hands-on experience at companies like <span className="text-primary-400 font-semibold">B-Hitech</span>, <span className="text-primary-400 font-semibold">Byne Media</span>, and <span className="text-primary-400 font-semibold">Xplicity</span>, I've developed expertise in building real-time communication platforms, digital advertising solutions, and no-code development tools.
                </p>
                <p className="text-lg text-dark-300 leading-relaxed">
                  I'm driven by the challenge of transforming complex requirements into elegant, user-friendly solutions. Whether it's implementing real-time video calls with Agora SDK, integrating payment systems with Stripe, or architecting scalable cloud infrastructure with Firebase and GCP, I bring both technical depth and creative problem-solving to every project.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Quick Facts Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('about.quickFacts.title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden rounded-xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                        {fact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-dark-400 font-medium mb-1">
                          {fact.label}
                        </p>
                        <p className="text-base text-white font-semibold">
                          {fact.value}
                        </p>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

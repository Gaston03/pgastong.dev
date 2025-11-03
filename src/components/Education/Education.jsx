import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function Education() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const educationData = [
    {
      id: 1,
      degree: "Master's Degree in Software Engineering",
      institution: "SupMTI",
      location: "Rabat, Morocco",
      duration: "2024 - 2026",
      icon: <FaGraduationCap className="text-3xl text-primary-500" />
    },
    {
      id: 2,
      degree: "Bachelor's Degree in Software Engineering",
      institution: "SupMTI",
      location: "Rabat, Morocco",
      duration: "2021 - 2024",
      icon: <FaGraduationCap className="text-3xl text-primary-500" />
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
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20 bg-dark-800/50" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 id="education-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" aria-hidden="true"></div>
          </motion.div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
            {educationData.map((edu, index) => (
              <motion.article
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl p-8 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/20"
                role="listitem"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300 mx-auto" aria-hidden="true">
                    {edu.icon}
                  </div>

                  {/* Degree */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center justify-center gap-2 text-primary-400">
                    <FaGraduationCap className="text-lg" aria-hidden="true" />
                    <p className="text-base md:text-lg font-semibold">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center gap-2 text-dark-300">
                    <FaMapMarkerAlt className="text-sm" aria-hidden="true" />
                    <p className="text-sm">
                      {edu.location}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 text-dark-300">
                    <FaCalendarAlt className="text-sm" aria-hidden="true" />
                    <p className="text-sm font-medium">
                      {edu.duration}
                    </p>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;

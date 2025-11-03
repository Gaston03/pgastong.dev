import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import SkillCategory from './SkillCategory';
import { skills, categoryInfo } from '../../data/skills';

function SkillsGrid() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-dark-900/50">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-dark-300 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              {t('skills.description')}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants}>
                <SkillCategory
                  category={category}
                  skills={skills[category]}
                  categoryInfo={categoryInfo[category]}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsGrid;

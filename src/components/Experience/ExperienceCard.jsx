import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import TechStack from './TechStack';
import { useInView } from '../../hooks/useInView';

function ExperienceCard({ experience, side }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: side === 'left' ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={slideVariants}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
      whileTap={{ scale: 0.98 }}
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-dark-700 hover:border-dark-600 transition-all duration-300"
    >
      {/* Company Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
            {experience.company}
          </h3>
          <p className="text-dark-300 text-xs sm:text-sm mb-2">{experience.location}</p>
        </div>
        {experience.current && (
          <span
            className="px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-full self-start sm:self-auto whitespace-nowrap"
            style={{
              backgroundColor: `${experience.color}20`,
              color: experience.color,
            }}
          >
            {t('experience.current')}
          </span>
        )}
      </div>

      {/* Role and Duration */}
      <div className="mb-3 sm:mb-4">
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
          {t(experience.roleKey)}
        </h4>
        <p className="text-dark-400 text-xs sm:text-sm">{experience.duration}</p>
      </div>

      {/* Achievements */}
      <div className="mb-3 sm:mb-4">
        <h5 className="text-xs sm:text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">
          {t('experience.achievements')}
        </h5>
        <ul className="space-y-1.5 sm:space-y-2">
          {t(experience.achievementsKey, { returnObjects: true }).map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"
                style={{ backgroundColor: experience.color }}
              />
              <span className="text-dark-300 text-xs sm:text-sm leading-relaxed">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Expandable Responsibilities Section */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3 sm:mb-4 overflow-hidden"
        >
          <h5 className="text-xs sm:text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">
            {t('experience.responsibilities')}
          </h5>
          <ul className="space-y-1.5 sm:space-y-2">
            {t(experience.responsibilitiesKey, { returnObjects: true }).map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"
                  style={{ backgroundColor: experience.color }}
                />
                <span className="text-dark-300 text-xs sm:text-sm leading-relaxed">
                  {responsibility}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Technology Stack */}
      <div className="mb-3 sm:mb-4">
        <h5 className="text-xs sm:text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">
          {t('experience.technologies')}
        </h5>
        <TechStack technologies={experience.technologies} color={experience.color} />
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors duration-200 mt-3 sm:mt-4 touch-manipulation"
        style={{ color: experience.color }}
      >
        {isExpanded ? (
          <>
            {t('experience.showLess')}
            <FiChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </>
        ) : (
          <>
            {t('experience.learnMore')}
            <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
}

export default ExperienceCard;

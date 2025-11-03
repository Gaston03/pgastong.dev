import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import ImageWithLoader from '../common/ImageWithLoader';
import { useCardTilt } from '../../hooks/useCardTilt';

const ProjectCard = ({ project, onViewDetails }) => {
  const { t } = useTranslation();
  const { cardRef, tilt } = useCardTilt(8);

  const handleClick = () => {
    onViewDetails(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onViewDetails(project);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer touch-manipulation"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${t(project.titleKey)} project`}
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-slate-900">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithLoader
            src={project.image}
            alt={project.title}
            fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)' /%3E%3C/svg%3E"
          />
        </motion.div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base"
          >
            {t('projects.viewDetails')}
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Company Badge */}
        <div className="mb-2 sm:mb-3">
          <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            {project.company}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {t(project.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {t(project.descriptionKey)}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </motion.div>
  );
};

export default ProjectCard;

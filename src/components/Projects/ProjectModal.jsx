import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiX, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap - keep focus within modal
  useEffect(() => {
    if (isOpen) {
      const modal = document.getElementById('project-modal');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTab = (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        };

        modal.addEventListener('keydown', handleTab);
        firstElement?.focus();

        return () => {
          modal.removeEventListener('keydown', handleTab);
        };
      }
    }
  }, [isOpen]);

  if (!project) return null;

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            id="project-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors duration-200"
              aria-label={t('projects.closeModal')}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-600 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Company Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    {t('projects.company')}: {project.company}
                  </span>
                </div>

                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {t(project.titleKey)}
                </h2>

                {/* Description */}
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {t(project.longDescriptionKey)}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiCheckCircle className="w-6 h-6 text-green-400" />
                    {t('projects.features')}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t(project.featuresKey, { returnObjects: true }).map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {t('projects.technologiesUsed')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg border border-slate-600/50 font-medium hover:bg-slate-700 hover:border-blue-500/50 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Visit Website Button */}
                {project.url && (
                  <div className="flex justify-center">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      {t('projects.visitWebsite')}
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

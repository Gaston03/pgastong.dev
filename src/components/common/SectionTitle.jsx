import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { fadeInUp } from '../../utils/animations';
import PropTypes from 'prop-types';

const SectionTitle = ({
  children,
  subtitle,
  gradient = false,
  align = 'center',
  className = '',
}) => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const gradientClasses = gradient
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    : 'text-gray-900 dark:text-white';
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${gradientClasses}`}>
        {children}
      </h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  gradient: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default SectionTitle;

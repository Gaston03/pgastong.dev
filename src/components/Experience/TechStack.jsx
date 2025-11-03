import { motion } from 'framer-motion';

// Component to display technology tags with company accent colors
function TechStack({ technologies, color }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="px-3 py-1 text-sm font-medium rounded-full transition-all duration-200"
          style={{
            backgroundColor: `${color}20`,
            borderColor: color,
            borderWidth: '1px',
            color: color,
          }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

export default TechStack;

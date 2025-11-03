import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { useInView } from '../../hooks/useInView';
import experiences from '../../data/experience';

function ExperienceTimeline() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="relative max-w-6xl mx-auto px-4">
      {/* Timeline Line - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 h-full" />

      {/* Experience Cards */}
      <div className="space-y-12 md:space-y-16">
        {experiences.map((experience, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          
          return (
            <div
              key={experience.id}
              className={`relative flex items-center ${
                side === 'left'
                  ? 'md:flex-row-reverse md:justify-end'
                  : 'md:flex-row md:justify-start'
              }`}
            >
              {/* Timeline Dot */}
              <TimelineDot
                color={experience.color}
                isInView={isInView}
                delay={index * 0.2}
              />

              {/* Card Container */}
              <div className="w-full md:w-[calc(50%-2rem)]">
                <ExperienceCard experience={experience} side={side} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Timeline Dot Component with pulse animation
function TimelineDot({ color, isInView, delay }) {
  return (
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
      {/* Outer pulsing ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }
            : { scale: 0, opacity: 0 }
        }
        transition={{
          delay,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-8 h-8 rounded-full"
        style={{ backgroundColor: `${color}40` }}
      />
      
      {/* Inner dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay, duration: 0.4, ease: 'easeOut' }}
        className="w-4 h-4 rounded-full border-4 border-dark-900"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default ExperienceTimeline;

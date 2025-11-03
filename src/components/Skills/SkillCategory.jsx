import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function SkillCategory({ category, skills, categoryInfo }) {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full rounded-2xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glassmorphism background gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${categoryInfo.color}15 0%, transparent 100%)`
        }}
      ></div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      <div className="relative z-10 space-y-6">
        {/* Category Header */}
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${categoryInfo.color}20` }}
          >
            {categoryInfo.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">
              {t(`skills.categories.${category}`)}
            </h3>
            <p className="text-sm text-dark-400 mt-1">
              {skills.length} {t('skills.technologies')}
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative group/skill"
            >
              {/* Skill Icon Container */}
              <div 
                className="relative aspect-square rounded-xl p-3 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-center"
                style={{
                  borderColor: hoveredSkill === skill.id ? categoryInfo.color : undefined
                }}
              >
                {/* Icon placeholder - will be replaced with actual icons */}
                <div 
                  className="w-full h-full rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ 
                    backgroundColor: `${categoryInfo.color}30`,
                    color: categoryInfo.color
                  }}
                >
                  {skill.name.substring(0, 2).toUpperCase()}
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                  >
                    <div className="relative bg-dark-800 border border-white/20 rounded-lg px-3 py-2 shadow-xl backdrop-blur-lg min-w-max">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-white whitespace-nowrap">
                          {skill.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: categoryInfo.color }}
                            ></motion.div>
                          </div>
                          <span 
                            className="text-xs font-bold"
                            style={{ color: categoryInfo.color }}
                          >
                            {skill.proficiency}%
                          </span>
                        </div>
                        <p className="text-xs text-dark-400 mt-1">
                          {skill.experience}
                        </p>
                      </div>
                      {/* Tooltip arrow */}
                      <div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-800 border-r border-b border-white/20 rotate-45"
                      ></div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Skill Name (visible on mobile) */}
              <p className="text-xs text-center text-dark-300 mt-2 font-medium truncate md:hidden">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-sm text-dark-400 leading-relaxed pt-4 border-t border-white/5">
          {t(`skills.descriptions.${category}`)}
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCategory;

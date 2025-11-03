/**
 * Framer Motion animation variants and utilities
 * Reusable animation configurations for consistent motion design
 */

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { duration: 0.4 },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const slideInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

export const scaleOnTap = {
  whileTap: { scale: 0.95 },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================
// CONTAINER ANIMATIONS
// ============================================

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const staggerContainerSlow = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// ROTATION ANIMATIONS
// ============================================

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const spin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ============================================
// HOVER EFFECTS
// ============================================

export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.2 },
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    transition: { duration: 0.2 },
  },
};

export const hoverRotate = {
  whileHover: {
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

export const modalTransition = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 20 },
  transition: { duration: 0.3 },
};

// ============================================
// TIMING CONSTANTS
// ============================================

export const ANIMATION_DURATION = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.6,
  verySlow: 1,
};

export const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  springBouncy: { type: 'spring', stiffness: 400, damping: 20 },
  springSmooth: { type: 'spring', stiffness: 200, damping: 40 },
};

export const STAGGER_DELAY = {
  fast: 0.05,
  medium: 0.1,
  slow: 0.2,
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a custom stagger container with specific delay
 * @param {number} delay - Delay between children animations
 * @returns {Object} Framer Motion variant object
 */
export const createStaggerContainer = (delay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
      delayChildren: delay,
    },
  },
});

/**
 * Create a custom fade in animation with direction
 * @param {string} direction - Direction: 'up', 'down', 'left', 'right'
 * @param {number} distance - Distance to move (default: 60)
 * @returns {Object} Framer Motion variant object
 */
export const createFadeIn = (direction = 'up', distance = 60) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance },
  };

  return {
    initial: { opacity: 0, ...directions[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };
};

import { motion } from 'framer-motion';

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient Definitions */}
          <radialGradient id="grad1" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.5;0.3"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad2" cx="70%" cy="70%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.5;0.3"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2">
              <animate
                attributeName="stop-opacity"
                values="0.2;0.4;0.2"
                dur="12s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>

          {/* Blur Filter */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>

        {/* Animated Circles */}
        <g filter="url(#blur)">
          <circle fill="url(#grad1)" r="400">
            <animate
              attributeName="cx"
              values="300;400;300"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="300;200;300"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          <circle fill="url(#grad2)" r="400">
            <animate
              attributeName="cx"
              values="700;600;700"
              dur="25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="700;800;700"
              dur="25s"
              repeatCount="indefinite"
            />
          </circle>

          <circle fill="url(#grad3)" r="350">
            <animate
              attributeName="cx"
              values="500;550;500"
              dur="30s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="500;450;500"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      {/* Additional Floating Orbs with Framer Motion - GPU accelerated */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary-500/10 rounded-full blur-3xl"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Geometric Shapes - Hidden on mobile for cleaner look */}
      <motion.div
        className="hidden md:block absolute top-20 right-20 w-16 h-16 lg:w-20 lg:h-20 border-2 border-primary-500/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-32 left-20 w-12 h-12 lg:w-16 lg:h-16 border-2 border-secondary-500/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

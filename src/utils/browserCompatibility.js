/**
 * Browser Compatibility Utilities
 * Detects browser features and provides fallbacks
 */

export const browserFeatures = {
  /**
   * Check if smooth scroll is supported
   */
  smoothScroll: () => {
    return 'scrollBehavior' in document.documentElement.style;
  },

  /**
   * Check if backdrop-filter is supported
   */
  backdropFilter: () => {
    return (
      CSS.supports('backdrop-filter', 'blur(10px)') ||
      CSS.supports('-webkit-backdrop-filter', 'blur(10px)')
    );
  },

  /**
   * Check if IntersectionObserver is supported
   */
  intersectionObserver: () => {
    return 'IntersectionObserver' in window;
  },

  /**
   * Check if WebP is supported
   */
  webp: () => {
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  },

  /**
   * Check if CSS Grid is supported
   */
  cssGrid: () => {
    return CSS.supports('display', 'grid');
  },

  /**
   * Check if Flexbox is supported
   */
  flexbox: () => {
    return CSS.supports('display', 'flex');
  },

  /**
   * Check if CSS Custom Properties are supported
   */
  customProperties: () => {
    return CSS.supports('--custom', 'value');
  },

  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Check if device supports hover
   */
  supportsHover: () => {
    return window.matchMedia('(hover: hover)').matches;
  },

  /**
   * Check if device is touch-enabled
   */
  isTouchDevice: () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  },
};

/**
 * Detect browser name and version
 */
export const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  // Chrome
  if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edg') === -1) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+)/)?.[1] || 'Unknown';
  }
  // Edge
  else if (userAgent.indexOf('Edg') > -1) {
    browserName = 'Edge';
    browserVersion = userAgent.match(/Edg\/(\d+)/)?.[1] || 'Unknown';
  }
  // Firefox
  else if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+)/)?.[1] || 'Unknown';
  }
  // Safari
  else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/(\d+)/)?.[1] || 'Unknown';
  }

  return { browserName, browserVersion };
};

/**
 * Detect device type
 */
export const detectDevice = () => {
  const userAgent = navigator.userAgent;
  const width = window.innerWidth;

  if (/iPhone|iPad|iPod/.test(userAgent)) {
    return width < 768 ? 'iPhone' : 'iPad';
  } else if (/Android/.test(userAgent)) {
    return width < 768 ? 'Android Phone' : 'Android Tablet';
  } else if (width < 768) {
    return 'Mobile';
  } else if (width < 1024) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
};

/**
 * Smooth scroll polyfill for browsers that don't support it
 */
export const smoothScrollTo = (target, duration = 500) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;

  if (!targetElement) return;

  // Use native smooth scroll if supported
  if (browserFeatures.smoothScroll()) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // Fallback: Manual smooth scroll implementation
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function (ease-in-out)
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Run all browser compatibility tests
 */
export const runCompatibilityTests = () => {
  const results = {};

  Object.keys(browserFeatures).forEach((feature) => {
    results[feature] = browserFeatures[feature]();
  });

  const browser = detectBrowser();
  const device = detectDevice();

  return {
    features: results,
    browser,
    device,
    userAgent: navigator.userAgent,
  };
};

/**
 * Log compatibility information to console
 */
export const logCompatibilityInfo = () => {
  const info = runCompatibilityTests();

  console.group('🔍 Browser Compatibility Information');
  console.log('Browser:', info.browser.browserName, info.browser.browserVersion);
  console.log('Device:', info.device);
  console.log('User Agent:', info.userAgent);
  console.groupEnd();

  console.group('✨ Feature Support');
  Object.entries(info.features).forEach(([feature, supported]) => {
    console.log(`${supported ? '✓' : '✗'} ${feature}:`, supported);
  });
  console.groupEnd();

  return info;
};

/**
 * Add browser-specific classes to document element
 */
export const addBrowserClasses = () => {
  const { browserName } = detectBrowser();
  const device = detectDevice();
  const features = browserFeatures;

  const classes = [];

  // Add browser class
  classes.push(`browser-${browserName.toLowerCase()}`);

  // Add device class
  classes.push(`device-${device.toLowerCase().replace(' ', '-')}`);

  // Add feature classes
  if (!features.backdropFilter()) classes.push('no-backdrop-filter');
  if (!features.smoothScroll()) classes.push('no-smooth-scroll');
  if (features.isTouchDevice()) classes.push('touch-device');
  if (features.supportsHover()) classes.push('hover-device');
  if (features.prefersReducedMotion()) classes.push('reduced-motion');

  document.documentElement.classList.add(...classes);
};

// Auto-run on module load (optional)
if (typeof window !== 'undefined') {
  // Add browser classes on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBrowserClasses);
  } else {
    addBrowserClasses();
  }
}

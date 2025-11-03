/**
 * Responsive Testing Utilities
 * Helps test responsive design at various breakpoints
 */

export const breakpoints = {
  mobile: {
    sm: { width: 320, height: 568, name: 'iPhone SE' },
    md: { width: 375, height: 667, name: 'iPhone 8' },
    lg: { width: 390, height: 844, name: 'iPhone 12/13/14' },
    xl: { width: 430, height: 932, name: 'iPhone 14 Pro Max' },
    android: { width: 360, height: 800, name: 'Samsung Galaxy S21' },
    pixel: { width: 393, height: 851, name: 'Google Pixel 5' },
  },
  tablet: {
    ipadMini: { width: 768, height: 1024, name: 'iPad Mini' },
    ipadAir: { width: 820, height: 1180, name: 'iPad Air' },
    ipadPro11: { width: 834, height: 1194, name: 'iPad Pro 11"' },
    ipadPro12: { width: 1024, height: 1366, name: 'iPad Pro 12.9"' },
    androidTablet: { width: 800, height: 1280, name: 'Android Tablet' },
  },
  desktop: {
    laptop: { width: 1366, height: 768, name: 'Laptop' },
    hd: { width: 1920, height: 1080, name: 'Desktop HD' },
    '2k': { width: 2560, height: 1440, name: 'Desktop 2K' },
    '4k': { width: 3840, height: 2160, name: 'Desktop 4K' },
  },
};

/**
 * Get current breakpoint
 */
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;

  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Check if viewport matches a specific breakpoint
 */
export const isBreakpoint = (breakpoint) => {
  return getCurrentBreakpoint() === breakpoint;
};

/**
 * Get viewport dimensions
 */
export const getViewportDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
  };
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Check for horizontal overflow
 */
export const checkHorizontalOverflow = () => {
  const body = document.body;
  const html = document.documentElement;

  const documentWidth = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );

  const windowWidth = window.innerWidth;

  if (documentWidth > windowWidth) {
    console.warn(`⚠️ Horizontal overflow detected: ${documentWidth}px > ${windowWidth}px`);
    
    // Find elements causing overflow
    const elements = document.querySelectorAll('*');
    const overflowingElements = [];

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.right > windowWidth) {
        overflowingElements.push({
          element: el,
          tagName: el.tagName,
          className: el.className,
          right: rect.right,
          overflow: rect.right - windowWidth,
        });
      }
    });

    if (overflowingElements.length > 0) {
      console.group('Elements causing overflow:');
      overflowingElements
        .sort((a, b) => b.overflow - a.overflow)
        .slice(0, 10)
        .forEach((item) => {
          console.log(
            `${item.tagName}.${item.className} - Overflow: ${item.overflow.toFixed(2)}px`,
            item.element
          );
        });
      console.groupEnd();
    }

    return { hasOverflow: true, overflowingElements };
  }

  return { hasOverflow: false, overflowingElements: [] };
};

/**
 * Test touch target sizes (minimum 44x44px)
 */
export const checkTouchTargets = () => {
  const minSize = 44;
  const interactiveElements = document.querySelectorAll(
    'button, a, input, textarea, select, [role="button"], [onclick]'
  );

  const smallTargets = [];

  interactiveElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(el);
    
    // Skip hidden elements
    if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
      return;
    }

    if (rect.width < minSize || rect.height < minSize) {
      smallTargets.push({
        element: el,
        tagName: el.tagName,
        className: el.className,
        width: rect.width,
        height: rect.height,
      });
    }
  });

  if (smallTargets.length > 0) {
    console.group(`⚠️ Found ${smallTargets.length} touch targets smaller than ${minSize}x${minSize}px`);
    smallTargets.forEach((item) => {
      console.log(
        `${item.tagName}.${item.className} - ${item.width.toFixed(0)}x${item.height.toFixed(0)}px`,
        item.element
      );
    });
    console.groupEnd();
  } else {
    console.log('✓ All touch targets meet minimum size requirements');
  }

  return smallTargets;
};

/**
 * Test text readability (minimum 16px on mobile)
 */
export const checkTextReadability = () => {
  const minFontSize = getCurrentBreakpoint() === 'mobile' ? 16 : 14;
  const textElements = document.querySelectorAll('p, span, li, td, th, label, input, textarea, button, a');

  const smallText = [];

  textElements.forEach((el) => {
    const computedStyle = window.getComputedStyle(el);
    const fontSize = parseFloat(computedStyle.fontSize);

    // Skip hidden elements
    if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
      return;
    }

    if (fontSize < minFontSize && el.textContent.trim().length > 0) {
      smallText.push({
        element: el,
        tagName: el.tagName,
        className: el.className,
        fontSize: fontSize,
        text: el.textContent.trim().substring(0, 50),
      });
    }
  });

  if (smallText.length > 0) {
    console.group(`⚠️ Found ${smallText.length} text elements smaller than ${minFontSize}px`);
    smallText.slice(0, 10).forEach((item) => {
      console.log(
        `${item.tagName}.${item.className} - ${item.fontSize.toFixed(1)}px: "${item.text}..."`,
        item.element
      );
    });
    console.groupEnd();
  } else {
    console.log('✓ All text meets minimum readability requirements');
  }

  return smallText;
};

/**
 * Run all responsive tests
 */
export const runResponsiveTests = () => {
  const viewport = getViewportDimensions();
  const breakpoint = getCurrentBreakpoint();

  console.group('📱 Responsive Design Tests');
  console.log('Viewport:', `${viewport.width}x${viewport.height}`);
  console.log('Breakpoint:', breakpoint);
  console.log('Device Pixel Ratio:', viewport.devicePixelRatio);
  console.groupEnd();

  const overflow = checkHorizontalOverflow();
  const touchTargets = checkTouchTargets();
  const textReadability = checkTextReadability();

  return {
    viewport,
    breakpoint,
    overflow,
    touchTargets,
    textReadability,
  };
};

/**
 * Log responsive test results
 */
export const logResponsiveTests = () => {
  // Wait for page to fully load
  if (document.readyState === 'complete') {
    setTimeout(() => {
      runResponsiveTests();
    }, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        runResponsiveTests();
      }, 1000);
    });
  }
};

/**
 * Create viewport size indicator (for development)
 */
export const createViewportIndicator = () => {
  if (process.env.NODE_ENV !== 'development') return;

  const indicator = document.createElement('div');
  indicator.id = 'viewport-indicator';
  indicator.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 12px;
    z-index: 9999;
    pointer-events: none;
  `;

  const updateIndicator = () => {
    const { width, height } = getViewportDimensions();
    const breakpoint = getCurrentBreakpoint();
    indicator.textContent = `${width}x${height} (${breakpoint})`;
  };

  updateIndicator();
  window.addEventListener('resize', updateIndicator);

  document.body.appendChild(indicator);
};

/**
 * Simulate different viewport sizes (for testing)
 */
export const simulateViewport = (device) => {
  console.log(`📱 Simulating ${device.name} (${device.width}x${device.height})`);
  console.log('Note: This only logs the dimensions. Use browser DevTools to actually resize the viewport.');
  return device;
};

/**
 * Get all available test devices
 */
export const getTestDevices = () => {
  const devices = [];
  
  Object.entries(breakpoints).forEach(([category, categoryDevices]) => {
    Object.entries(categoryDevices).forEach(([key, device]) => {
      devices.push({
        category,
        key,
        ...device,
      });
    });
  });

  return devices;
};

/**
 * Log all test devices
 */
export const logTestDevices = () => {
  const devices = getTestDevices();

  console.group('📱 Available Test Devices');
  
  ['mobile', 'tablet', 'desktop'].forEach((category) => {
    const categoryDevices = devices.filter((d) => d.category === category);
    console.group(category.toUpperCase());
    categoryDevices.forEach((device) => {
      console.log(`${device.name}: ${device.width}x${device.height}`);
    });
    console.groupEnd();
  });

  console.groupEnd();
};

// Auto-run in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Create viewport indicator
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createViewportIndicator);
  } else {
    createViewportIndicator();
  }

  // Run tests on resize (debounced)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      console.clear();
      runResponsiveTests();
    }, 500);
  });
}

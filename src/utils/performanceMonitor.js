/**
 * Performance Monitoring Utilities
 * Monitors Core Web Vitals and other performance metrics
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      lcp: null,
      fid: null,
      cls: 0,
      fcp: null,
      ttfb: null,
    };

    this.observers = [];
    this.init();
  }

  /**
   * Initialize performance monitoring
   */
  init() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.measureTTFB();
  }

  /**
   * Observe Largest Contentful Paint (LCP)
   * Target: < 2.5 seconds
   */
  observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        
        this.logMetric('LCP', this.metrics.lcp, 2500);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('LCP observation failed:', e);
    }
  }

  /**
   * Observe First Input Delay (FID)
   * Target: < 100 milliseconds
   */
  observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          
          this.logMetric('FID', this.metrics.fid, 100);
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('FID observation failed:', e);
    }
  }

  /**
   * Observe Cumulative Layout Shift (CLS)
   * Target: < 0.1
   */
  observeCLS() {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Only count layout shifts without recent user input
          if (!entry.hadRecentInput) {
            this.metrics.cls += entry.value;
            
            this.logMetric('CLS', this.metrics.cls, 0.1);
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('CLS observation failed:', e);
    }
  }

  /**
   * Observe First Contentful Paint (FCP)
   * Target: < 1.8 seconds
   */
  observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            
            this.logMetric('FCP', this.metrics.fcp, 1800);
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('FCP observation failed:', e);
    }
  }

  /**
   * Measure Time to First Byte (TTFB)
   * Target: < 600 milliseconds
   */
  measureTTFB() {
    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0];
      if (navigationTiming) {
        this.metrics.ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
        
        this.logMetric('TTFB', this.metrics.ttfb, 600);
      }
    } catch (e) {
      console.warn('TTFB measurement failed:', e);
    }
  }

  /**
   * Log metric with color coding based on threshold
   */
  logMetric(name, value, threshold) {
    const status = value <= threshold ? '✓ GOOD' : '✗ NEEDS IMPROVEMENT';
    const color = value <= threshold ? 'color: green' : 'color: orange';
    
    console.log(`%c${name}: ${value.toFixed(2)}ms ${status}`, color);
  }

  /**
   * Get all metrics
   */
  getMetrics() {
    return { ...this.metrics };
  }

  /**
   * Get performance summary
   */
  getSummary() {
    const thresholds = {
      lcp: 2500,
      fid: 100,
      cls: 0.1,
      fcp: 1800,
      ttfb: 600,
    };

    const summary = {
      metrics: this.getMetrics(),
      scores: {},
      overallScore: 0,
    };

    let totalScore = 0;
    let metricCount = 0;

    Object.keys(thresholds).forEach((metric) => {
      const value = this.metrics[metric];
      if (value !== null) {
        const threshold = thresholds[metric];
        const score = Math.max(0, Math.min(100, 100 - (value / threshold) * 100));
        summary.scores[metric] = {
          value,
          threshold,
          score: Math.round(score),
          status: value <= threshold ? 'good' : 'needs-improvement',
        };
        totalScore += score;
        metricCount++;
      }
    });

    summary.overallScore = metricCount > 0 ? Math.round(totalScore / metricCount) : 0;

    return summary;
  }

  /**
   * Log performance summary to console
   */
  logSummary() {
    const summary = this.getSummary();

    console.group('📊 Performance Summary');
    console.log('Overall Score:', summary.overallScore);
    
    console.group('Core Web Vitals');
    Object.entries(summary.scores).forEach(([metric, data]) => {
      const color = data.status === 'good' ? 'color: green' : 'color: orange';
      console.log(
        `%c${metric.toUpperCase()}: ${data.value.toFixed(2)}ms (Score: ${data.score}/100)`,
        color
      );
    });
    console.groupEnd();
    
    console.groupEnd();

    return summary;
  }

  /**
   * Measure resource loading performance
   */
  measureResources() {
    const resources = performance.getEntriesByType('resource');
    
    const summary = {
      total: resources.length,
      byType: {},
      largest: [],
      slowest: [],
    };

    // Group by type
    resources.forEach((resource) => {
      const type = resource.initiatorType || 'other';
      if (!summary.byType[type]) {
        summary.byType[type] = {
          count: 0,
          totalSize: 0,
          totalDuration: 0,
        };
      }
      
      summary.byType[type].count++;
      summary.byType[type].totalSize += resource.transferSize || 0;
      summary.byType[type].totalDuration += resource.duration;
    });

    // Find largest resources
    summary.largest = resources
      .filter((r) => r.transferSize)
      .sort((a, b) => b.transferSize - a.transferSize)
      .slice(0, 10)
      .map((r) => ({
        name: r.name.split('/').pop(),
        size: (r.transferSize / 1024).toFixed(2) + ' KB',
        duration: r.duration.toFixed(2) + ' ms',
      }));

    // Find slowest resources
    summary.slowest = resources
      .sort((a, b) => b.duration - a.duration)
      .slice(0, 10)
      .map((r) => ({
        name: r.name.split('/').pop(),
        duration: r.duration.toFixed(2) + ' ms',
        type: r.initiatorType,
      }));

    return summary;
  }

  /**
   * Log resource loading summary
   */
  logResources() {
    const summary = this.measureResources();

    console.group('📦 Resource Loading Summary');
    console.log('Total Resources:', summary.total);
    
    console.group('By Type');
    Object.entries(summary.byType).forEach(([type, data]) => {
      console.log(
        `${type}: ${data.count} resources, ${(data.totalSize / 1024).toFixed(2)} KB, ${data.totalDuration.toFixed(2)} ms`
      );
    });
    console.groupEnd();

    console.group('Largest Resources');
    summary.largest.forEach((resource, index) => {
      console.log(`${index + 1}. ${resource.name} - ${resource.size} (${resource.duration})`);
    });
    console.groupEnd();

    console.group('Slowest Resources');
    summary.slowest.forEach((resource, index) => {
      console.log(`${index + 1}. ${resource.name} - ${resource.duration} (${resource.type})`);
    });
    console.groupEnd();

    console.groupEnd();

    return summary;
  }

  /**
   * Measure memory usage (if available)
   */
  measureMemory() {
    if (!performance.memory) {
      console.warn('Memory API not available');
      return null;
    }

    const memory = {
      usedJSHeapSize: (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
      totalJSHeapSize: (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
      jsHeapSizeLimit: (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB',
    };

    console.group('💾 Memory Usage');
    console.log('Used:', memory.usedJSHeapSize);
    console.log('Total:', memory.totalJSHeapSize);
    console.log('Limit:', memory.jsHeapSizeLimit);
    console.groupEnd();

    return memory;
  }

  /**
   * Generate full performance report
   */
  generateReport() {
    console.group('🚀 Full Performance Report');
    
    const summary = this.logSummary();
    const resources = this.logResources();
    const memory = this.measureMemory();

    console.groupEnd();

    return {
      summary,
      resources,
      memory,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Cleanup observers
   */
  cleanup() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Create singleton instance
let monitorInstance = null;

/**
 * Get or create performance monitor instance
 */
export const getPerformanceMonitor = () => {
  if (!monitorInstance) {
    monitorInstance = new PerformanceMonitor();
  }
  return monitorInstance;
};

/**
 * Quick access to performance metrics
 */
export const getMetrics = () => {
  return getPerformanceMonitor().getMetrics();
};

/**
 * Quick access to performance summary
 */
export const getSummary = () => {
  return getPerformanceMonitor().getSummary();
};

/**
 * Quick access to full report
 */
export const generateReport = () => {
  return getPerformanceMonitor().generateReport();
};

/**
 * Log performance info to console (for development)
 */
export const logPerformance = () => {
  if (process.env.NODE_ENV === 'development') {
    // Wait for page to fully load
    if (document.readyState === 'complete') {
      setTimeout(() => {
        getPerformanceMonitor().generateReport();
      }, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          getPerformanceMonitor().generateReport();
        }, 1000);
      });
    }
  }
};

// Export the class for advanced usage
export { PerformanceMonitor };

// Auto-initialize in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  logPerformance();
}

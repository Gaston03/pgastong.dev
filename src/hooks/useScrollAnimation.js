import { useEffect, useState } from 'react';

/**
 * Custom hook for scroll-based animations
 * Provides scroll position and progress information for creating scroll-triggered effects
 * @returns {Object} Scroll state object with scrollY, scrollProgress, and scrollDirection
 */
export function useScrollAnimation() {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollProgress: 0,
    scrollDirection: 'down',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        scrollY: currentScrollY,
        scrollProgress,
        scrollDirection,
      });
      
      lastScrollY = currentScrollY;
    };

    // Initial call to set state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}

/**
 * Custom hook to get scroll position only
 * Simpler version when you only need the Y position
 * @returns {number} Current scroll Y position
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

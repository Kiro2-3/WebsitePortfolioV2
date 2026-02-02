import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // If triggerOnce is true, stop observing after first reveal
          if (options?.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options?.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);

      // Force check if element is already in viewport
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
};

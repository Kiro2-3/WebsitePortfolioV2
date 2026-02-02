import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Small delay to ensure element is mounted before observing
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            hasTriggered.current = true;

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
          rootMargin: options?.rootMargin ?? '0px',
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
};

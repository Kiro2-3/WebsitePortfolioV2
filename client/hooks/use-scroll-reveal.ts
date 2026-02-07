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
          // Use setTimeout to ensure the DOM has time to register the transition
          setTimeout(() => {
            setIsVisible(true);
          }, 50);

          // If triggerOnce is true, stop observing after first reveal
          if (options?.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options?.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
};

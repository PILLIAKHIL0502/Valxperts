'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

/**
 * Fades + rises its children into view when they intersect the viewport.
 * Uses IntersectionObserver with a cleanup on unmount.
 */
export default function Reveal({ children, as: Tag = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Element = Tag as 'div';
  return (
    <Element ref={ref as any} className={`reveal ${className}`.trim()}>
      {children}
    </Element>
  );
}

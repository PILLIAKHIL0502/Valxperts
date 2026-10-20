'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders a heading whose words rise one by one on mount.
 * Each word gets a span wrapper with staggered animation-delay.
 */
export default function HeroWords({ text, as: Tag = 'h1', className = 'hero-h1' }: {
  text: string;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = text.trim().split(/\s+/);
    el.innerHTML = words
      .map((w, i) => {
        const delay = (0.08 + i * 0.085).toFixed(2);
        return `<span class="word"><span class="inner" style="animation-delay:${delay}s">${w}</span></span>`;
      })
      .join(' ');
  }, [text]);

  const Element = Tag as 'h1';
  return <Element ref={ref as any} className={className} aria-label={text}></Element>;
}

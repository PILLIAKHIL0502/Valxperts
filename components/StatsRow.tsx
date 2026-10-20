'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 120, suffix: '+', label: 'Validation and testing projects delivered across pharma, biotech, and medical devices.' },
  { value: 15, suffix: '+', label: 'Regulatory inspections supported with zero critical observations on our deliverables.' },
  { value: 40, suffix: '%', label: 'Average reduction in CSV protocol volume after CSA-aligned redesign.' },
  { value: 9, suffix: '/10', label: 'Clients who re-engage us within twelve months of project closeout.' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = `0${suffix}`;

    if (!('IntersectionObserver' in window)) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1300;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = `${Math.round(target * eased)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return <div ref={ref} className="val">0{suffix}</div>;
}

export default function StatsRow() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-row">
          {STATS.map((s, i) => (
            <Reveal key={i} className="stat">
              <CountUp target={s.value} suffix={s.suffix} />
              <div className="label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

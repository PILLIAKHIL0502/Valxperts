import type { ReactNode } from 'react';
import Aurora from './Aurora';

export default function HeroPod({ children }: { children: ReactNode }) {
  return (
    <section className="hero dark-pod">
      <Aurora />
      <div className="wrap">{children}</div>
    </section>
  );
}

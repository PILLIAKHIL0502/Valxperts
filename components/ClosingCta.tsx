import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  heading: string;
  body: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href?: string; modal?: string };
};

export default function ClosingCta({
  heading,
  body,
  primary = { label: 'Start a scoped assessment', href: '/contact' },
  secondary,
}: Props) {
  return (
    <section className="closing-cta">
      <div className="wrap">
        <div className="inner">
          <div>
            <h3>{heading}</h3>
            <p>{body}</p>
          </div>
          <div className="ctas">
            {secondary && (
              secondary.modal ? (
                <a href="#" data-modal={secondary.modal} className="cta ghost">{secondary.label}</a>
              ) : (
                <Link href={secondary.href ?? '/contact'} className="cta ghost">{secondary.label}</Link>
              )
            )}
            <Link href={primary.href} className="cta emerald">{primary.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

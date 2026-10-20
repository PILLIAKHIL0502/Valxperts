import Link from 'next/link';

export default function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const cls = size === 'large' ? 'logo lg' : 'logo';
  return (
    <Link href="/" className={cls} aria-label="ValXperts home">
      Val<span className="x">X</span>perts<span className="dot" aria-hidden="true"></span>
    </Link>
  );
}

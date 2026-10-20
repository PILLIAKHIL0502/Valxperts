'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const PRIMARY = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/approach', label: 'Approach' },
  { href: '/why', label: 'Why us' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click + Esc
  useEffect(() => {
    if (!portalsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setPortalsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPortalsOpen(false); };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [portalsOpen]);

  // Close mobile menu when a link is tapped (handled per-link via onClick below)
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <Logo />

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-label="Primary">
          {PRIMARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'active' : ''}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          {/* Mobile-only drawer entries */}
          <a
            href="https://support.valxperts.zohodesk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-only"
          >
            Customer login ↗
          </a>
          <a
            href="https://projects.zoho.in/portal/valxperts"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-only"
          >
            Project portal ↗
          </a>
          <Link href="/careers" className="mobile-only">Careers</Link>
          <Link href="/contact" className="mobile-only mobile-cta">Book an assessment</Link>
        </nav>

        <div className="nav-actions">
          <div className={`nav-dropdown ${portalsOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button
              type="button"
              className="nav-btn"
              aria-haspopup="true"
              aria-expanded={portalsOpen}
              aria-controls="portalsMenu"
              onClick={(e) => { e.stopPropagation(); setPortalsOpen((v) => !v); }}
            >
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M 11 4 L 15 4 L 15 16 L 11 16" />
                <line x1="4" y1="10" x2="12" y2="10" />
                <polyline points="9,7 12,10 9,13" />
              </svg>
              Portals
              <svg className="chev" viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3,4.5 6,7.5 9,4.5" />
              </svg>
            </button>
            <div className="dropdown-menu" id="portalsMenu" role="menu">
              <a href="https://support.valxperts.zohodesk.com" target="_blank" rel="noopener noreferrer" role="menuitem">
                <span className="menu-icon">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="10" cy="7" r="3" />
                    <path d="M 4 17 C 5 13.5 7 12 10 12 S 15 13.5 16 17" />
                  </svg>
                </span>
                <span className="menu-title">Customer login</span>
              </a>
              <a href="https://projects.zoho.in/portal/valxperts" target="_blank" rel="noopener noreferrer" role="menuitem">
                <span className="menu-icon">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="5" height="12" rx="1" />
                    <rect x="12" y="4" width="5" height="7" rx="1" />
                    <line x1="12" y1="14" x2="17" y2="14" />
                    <line x1="12" y1="16" x2="15" y2="16" />
                  </svg>
                </span>
                <span className="menu-title">Project portal</span>
              </a>
            </div>
          </div>
          <Link href="/careers" className="nav-btn">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="6" width="12" height="10" rx="1" />
              <path d="M 7 6 L 7 4 L 13 4 L 13 6" />
            </svg>
            Careers
          </Link>
          <Link href="/contact" className="cta emerald">Book an assessment</Link>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <line x1="4" y1="7" x2="16" y2="7" />
            <line x1="4" y1="13" x2="16" y2="13" />
          </svg>
        </button>
      </div>
    </header>
  );
}

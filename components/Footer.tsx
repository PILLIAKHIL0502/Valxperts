'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2026');
  useEffect(() => { setYear(String(new Date().getFullYear())); }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo lg" aria-label="ValXperts home">
              Val<span className="x">X</span>perts<span className="dot" aria-hidden="true"></span>
            </Link>
            <p>Validation, GxP testing, and the digital stack behind both. We work close to the sites we serve, because that is where the questions actually come up.</p>
          </div>

          <div className="footer-col">
            <h4>Site</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/approach">Approach</Link></li>
              <li><Link href="/why">Why us</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">CSV &amp; CSA</Link></li>
              <li><Link href="/services">GxP Testing</Link></li>
              <li><Link href="/services">SAP Validation</Link></li>
              <li><Link href="/services">LIMS</Link></li>
              <li><Link href="/services">MES, SCADA &amp; Historian</Link></li>
              <li><Link href="/services">AI &amp; ML Validation</Link></li>
              <li><Link href="/services">IoT &amp; Industry 4.0</Link></li>
              <li><Link href="/services">Validated Spreadsheets</Link></li>
              <li><Link href="/services">Data Integrity &amp; Part 11</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Workspace</h4>
            <ul>
              <li><a href="https://support.valxperts.zohodesk.com" target="_blank" rel="noopener noreferrer">Customer login</a></li>
              <li><a href="https://projects.zoho.in/portal/valxperts" target="_blank" rel="noopener noreferrer">Project portal</a></li>
              <li><a href="https://support.valxperts.zohodesk.com" target="_blank" rel="noopener noreferrer">Help &amp; support</a></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Compliance</h4>
            <ul>
              <li><a href="#" data-modal="gxp">GxP statement</a></li>
              <li><a href="#" data-modal="iso">ISO 9001 approach</a></li>
              <li><a href="#" data-modal="conf">Confidentiality</a></li>
              <li><a href="#" data-modal="privacy">Privacy</a></li>
              <li><a href="#" data-modal="terms">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© <span>{year}</span> ValXperts. All rights reserved.</div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/valxperts" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <line x1="7" y1="9" x2="7" y2="14" />
                <circle cx="7" cy="6.6" r="0.9" fill="currentColor" />
                <path d="M 11 14 V 11 Q 11 9.3 12.5 9.3 Q 14 9.3 14 11.3 V 14" />
              </svg>
            </a>
            <a href="#" aria-label="Email" data-modal="email">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="14" height="10" rx="1.5" />
                <path d="M 3 6.5 L 10 11 L 17 6.5" />
              </svg>
            </a>
            <Link href="/contact" aria-label="Contact form">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="10" cy="10" r="7" />
                <path d="M 10 6 L 10 11" />
                <circle cx="10" cy="14" r="0.6" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

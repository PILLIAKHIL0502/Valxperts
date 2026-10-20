'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type ModalKey = 'gxp' | 'iso' | 'conf' | 'privacy' | 'terms' | 'email';

type ModalData = {
  eyebrow: string;
  title: string;
  body: string; // HTML string (trusted — static content)
};

const MODALS: Record<ModalKey, ModalData> = {
  gxp: {
    eyebrow: 'Compliance',
    title: 'GxP statement',
    body:
      '<p>ValXperts operates to GxP principles across every engagement. Our consultants are trained in Good Manufacturing Practice (GMP), Good Laboratory Practice (GLP), Good Clinical Practice (GCP), and Good Distribution Practice (GDP), and apply them to the design, execution, and documentation of all validation work.</p>' +
      '<p>Deliverables are structured to meet <strong>FDA 21 CFR Part 11</strong>, <strong>EU GMP Annex 11</strong>, <strong>EudraLex Volume 4</strong>, and <strong>MHRA</strong> guidance. We follow <strong>ALCOA+</strong> principles for every record we author, every protocol we run, and every report we file.</p>' +
      '<p>We update this statement whenever the underlying regulations do. If you need a signed copy for a vendor assessment or an audit file, write to us and we will send one on letterhead within a business day.</p>' +
      '<p class="modal-updated">Last reviewed: January 2026</p>',
  },
  iso: {
    eyebrow: 'Compliance',
    title: 'ISO 9001 approach',
    body:
      '<p>We operate to an <strong>ISO 9001-aligned</strong> quality management system. Every engagement follows documented procedures for scope definition, risk assessment, protocol authoring, test execution, deviation management, reporting, and change control.</p>' +
      '<p>Internal reviews happen at defined gates, and findings loop back into procedure updates. Our quality manager owns the system and reports to a governance committee that meets monthly.</p>' +
      '<p>We are preparing for formal <strong>ISO 9001:2015 certification</strong>. Our current status, chosen auditor, and projected certification date are documented and available on request as part of a vendor-qualification pack.</p>' +
      '<p class="modal-updated">Last reviewed: January 2026</p>',
  },
  conf: {
    eyebrow: 'Compliance',
    title: 'Confidentiality',
    body:
      '<p>Everything you share with us stays with you. We sign <strong>mutual NDAs</strong> on request before the first conversation and work from your template or ours.</p>' +
      '<p>We never reference client names in marketing, case studies, references, or on this website without written approval. Deliverables, data, and system access remain inside your environment unless you explicitly ask us to work from ours.</p>' +
      '<p>Internally, access to client material is limited to the engagement team. Our consultants sign personal confidentiality undertakings as a condition of employment, and those obligations survive their time with us.</p>' +
      '<p class="modal-updated">Last reviewed: January 2026</p>',
  },
  privacy: {
    eyebrow: 'Compliance',
    title: 'Privacy',
    body:
      '<p>We collect the minimum information needed to respond to your inquiry: name, work email, company, and whatever you share in your message.</p>' +
      '<p><strong>We do not</strong> sell, share, or syndicate that data. We do not run ad trackers on this site. We do not enrich leads from third-party databases.</p>' +
      '<p>Active-engagement correspondence is retained for the life of the project plus any statutory retention requirements. Inactive leads are purged after 24 months.</p>' +
      '<p>To ask what we hold about you, request a copy, or ask for deletion, write to <strong>contact@valxperts.com</strong>. We will reply within one business day, and complete the request within thirty.</p>' +
      '<p class="modal-updated">Last reviewed: January 2026</p>',
  },
  terms: {
    eyebrow: 'Compliance',
    title: 'Terms',
    body:
      '<p>ValXperts services are governed by a <strong>Master Services Agreement</strong> and a <strong>Statement of Work</strong> signed before any engagement begins.</p>' +
      '<p>The MSA covers scope boundaries, change control, intellectual property, confidentiality, warranty, and limitation of liability. Each SoW names the lead, the deliverables, the acceptance criteria, and the fee structure.</p>' +
      '<p>Payment terms are net 30 unless otherwise agreed. We honor <strong>audit-defense commitments for twelve months</strong> after each engagement closeout at no additional charge.</p>' +
      '<p>This website is a presentation of our services and is not itself an offer or acceptance. Nothing on it creates a client relationship until an MSA is signed.</p>' +
      '<p class="modal-updated">Last reviewed: January 2026</p>',
  },
  email: {
    eyebrow: 'Reach us directly',
    title: 'contact@valxperts.com',
    body:
      '<p>Our inbox is read by a human, not routed to a sales queue. Replies usually come within one business day, always within two.</p>' +
      '<p>Include the system or process you want help with, the deadline or trigger, and whether you have validation partners already. Three sentences is enough.</p>' +
      '<div class="modal-copy-row"><span class="em">contact@valxperts.com</span><button type="button" class="copy-btn" data-copy="contact@valxperts.com">Copy address</button></div>',
  },
};

function isModalKey(x: unknown): x is ModalKey {
  return typeof x === 'string' && x in MODALS;
}

export default function Modal() {
  const [current, setCurrent] = useState<ModalKey | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<Element | null>(null);

  const open = useCallback((key: ModalKey) => {
    lastFocused.current = document.activeElement;
    setCurrent(key);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
    const el = lastFocused.current as HTMLElement | null;
    if (el && 'focus' in el) {
      try { el.focus(); } catch {}
    }
  }, []);

  // Global click delegate for [data-modal="x"] triggers
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || !('closest' in target)) return;
      const trigger = (target as Element).closest('[data-modal]') as HTMLElement | null;
      if (!trigger) return;
      const key = trigger.getAttribute('data-modal');
      if (!isModalKey(key)) return;
      e.preventDefault();
      open(key);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!current) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    // Focus close button on open
    requestAnimationFrame(() => { closeRef.current?.focus(); });
    return () => document.removeEventListener('keydown', onKey);
  }, [current, close]);

  // Copy-to-clipboard inside modal
  useEffect(() => {
    if (!current) return;
    const onCopy = (e: MouseEvent) => {
      const btn = (e.target as Element | null)?.closest('.copy-btn[data-copy]') as HTMLButtonElement | null;
      if (!btn) return;
      const text = btn.getAttribute('data-copy') || '';
      const succeed = () => {
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy address'; btn.classList.remove('copied'); }, 2000);
      };
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(succeed).catch(() => {
          const ta = document.createElement('textarea');
          ta.value = text; ta.style.position = 'absolute'; ta.style.left = '-9999px';
          document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); succeed(); } catch { btn.textContent = 'Copy failed'; }
          document.body.removeChild(ta);
        });
      }
    };
    document.addEventListener('click', onCopy);
    return () => document.removeEventListener('click', onCopy);
  }, [current]);

  if (!current) return null;
  const data = MODALS[current];

  return (
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="modal" role="document">
        <button
          ref={closeRef}
          className="modal-close"
          aria-label="Close"
          onClick={close}
        >
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>
        <p className="meyebrow">{data.eyebrow}</p>
        <h3>{data.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    </div>
  );
}

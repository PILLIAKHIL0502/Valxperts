'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

type Category = 'all' | 'validation' | 'testing' | 'enterprise' | 'emerging';

type Service = {
  category: Exclude<Category, 'all'>;
  sky?: boolean;
  icon: ReactNode;
  title: string;
  oneLiner: string;
  detail: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    category: 'validation',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <path d="M 22 6 A 10 10 0 1 0 22 26" />
        <path d="M 20 10 A 7 7 0 1 0 20 22" className="ghost" />
        <path d="M 18 14 A 4 4 0 1 0 18 18" className="ghost" />
        <circle className="accent" cx="22" cy="16" r="1.8" />
      </svg>
    ),
    title: 'Computer System Validation & CSA',
    oneLiner: 'GAMP 5 Second Edition, scaled to system risk.',
    detail: 'Full lifecycle CSV for GxP systems. CSA thinking so critical thinking replaces redundant scripting. Deliverables map to your SDLC, change control, and periodic review.',
    tags: ['GAMP 5', 'CSA', 'Risk-based', 'Periodic review', 'Change control'],
  },
  {
    category: 'testing',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="7" className="ghost" />
        <circle cx="16" cy="16" r="3" className="ghost" />
        <line x1="3" y1="16" x2="7" y2="16" className="ghost" />
        <line x1="25" y1="16" x2="29" y2="16" className="ghost" />
        <line x1="16" y1="3" x2="16" y2="7" className="ghost" />
        <line x1="16" y1="25" x2="16" y2="29" className="ghost" />
        <circle className="accent" cx="16" cy="16" r="1.6" />
      </svg>
    ),
    title: 'GxP Testing',
    oneLiner: 'Manual, automated, UAT, performance. On the record.',
    detail: 'Scripted and risk-based testing across GxP systems. Automation frameworks regulators accept, with evidence captured natively and tied to requirements and defects.',
    tags: ['Manual', 'Automated', 'UAT', 'Performance', 'Regression', 'Selenium', 'Playwright'],
  },
  {
    category: 'enterprise',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <rect x="5" y="6" width="22" height="5" rx="1" />
        <rect x="5" y="13.5" width="16" height="5" rx="1" className="ghost" />
        <rect x="5" y="21" width="19" height="5" rx="1" className="ghost" />
        <circle className="accent" cx="24" cy="16" r="1.6" />
      </svg>
    ),
    title: 'SAP Validation',
    oneLiner: 'ERP validation across modules, from iDoc to Fiori.',
    detail: 'Risk-based validation of SAP S/4HANA and ECC. Module and interface qualification, master-data controls, Fiori and GUI testing, change control through transport.',
    tags: ['S/4HANA', 'ECC', 'QM', 'WM', 'EWM', 'PP-PI', 'MM', 'BW', 'Fiori'],
  },
  {
    category: 'enterprise',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="8" cy="16" r="2.5" className="ghost" />
        <circle cx="8" cy="23" r="2.5" className="ghost" />
        <line x1="11" y1="9" x2="24" y2="9" />
        <line x1="11" y1="16" x2="22" y2="16" className="ghost" />
        <line x1="11" y1="23" x2="20" y2="23" className="ghost" />
        <circle className="accent" cx="26" cy="9" r="1.6" />
      </svg>
    ),
    title: 'LIMS Implementation & Validation',
    oneLiner: 'Sample lifecycle, instrument interfaces, and the paperwork around both.',
    detail: 'We do vendor-agnostic LIMS projects, URS through go-live. Configuration validation, instrument integration, LES and SDMS tie-ins, and the data integrity layer underneath them all.',
    tags: ['LabWare', 'SampleManager', 'STARLIMS', 'LabVantage', 'ELN', 'SDMS', 'Custom'],
  },
  {
    category: 'enterprise',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <line x1="16" y1="16" x2="7" y2="7" className="ghost" />
        <line x1="16" y1="16" x2="25" y2="7" className="ghost" />
        <line x1="16" y1="16" x2="7" y2="25" className="ghost" />
        <line x1="16" y1="16" x2="25" y2="25" className="ghost" />
        <line x1="7" y1="7" x2="25" y2="7" className="ghost" />
        <line x1="7" y1="25" x2="25" y2="25" className="ghost" />
        <circle cx="7" cy="7" r="1.8" fill="currentColor" opacity="0.65" />
        <circle cx="25" cy="7" r="1.8" fill="currentColor" opacity="0.65" />
        <circle cx="7" cy="25" r="1.8" fill="currentColor" opacity="0.65" />
        <circle cx="25" cy="25" r="1.8" fill="currentColor" opacity="0.65" />
        <circle className="accent" cx="16" cy="16" r="2.2" />
      </svg>
    ),
    title: 'MES, SCADA & Historian',
    oneLiner: 'Shop-floor validation that holds under 24/7 production.',
    detail: 'Qualification of MES recipes, electronic batch records, SCADA control, historian tags, and the OT/IT interfaces that connect them. OEE and process-model validation included.',
    tags: ['Werum PAS-X', 'Siemens Opcenter', 'Rockwell FTPC', 'Wonderware', 'Ignition', 'OSIsoft PI'],
  },
  {
    category: 'emerging',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <circle cx="7" cy="9" r="1.6" />
        <circle cx="7" cy="16" r="1.6" className="ghost" />
        <circle cx="7" cy="23" r="1.6" className="ghost" />
        <circle cx="16" cy="12" r="1.6" className="ghost" />
        <circle cx="16" cy="20" r="1.6" className="ghost" />
        <circle className="accent" cx="25" cy="16" r="2.2" />
        <line x1="8.5" y1="9" x2="14.5" y2="12" className="ghost" />
        <line x1="8.5" y1="16" x2="14.5" y2="12" className="ghost" />
        <line x1="8.5" y1="16" x2="14.5" y2="20" className="ghost" />
        <line x1="8.5" y1="23" x2="14.5" y2="20" className="ghost" />
        <line x1="17.5" y1="12" x2="23" y2="16" />
        <line x1="17.5" y1="20" x2="23" y2="16" />
      </svg>
    ),
    title: 'AI & Machine Learning Validation',
    oneLiner: 'GMLP-aligned validation for models that keep learning.',
    detail: 'Lifecycle validation for ML in GxP. Intended use, training-data integrity, performance monitoring, drift controls, and change control for retraining. Yes, we validate your LLM-powered systems too.',
    tags: ['GMLP', 'Model lifecycle', 'Drift', 'PCCP', 'LLM eval', 'MLOps'],
  },
  {
    category: 'emerging',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <circle cx="16" cy="16" r="4" className="ghost" />
        <circle cx="16" cy="16" r="8" className="ghost" strokeDasharray="3 4" />
        <circle cx="16" cy="16" r="12" className="ghost" strokeDasharray="2 5" />
        <circle className="accent" cx="16" cy="16" r="1.8" />
        <circle cx="27" cy="7" r="1.6" fill="currentColor" opacity="0.65" />
        <circle cx="7" cy="25" r="1.6" fill="currentColor" opacity="0.65" />
      </svg>
    ),
    title: 'IoT & Industry 4.0',
    oneLiner: 'Validate the sensor fleet, not just the dashboard.',
    detail: 'Qualification of connected equipment, edge gateways, time-series ingestion, and analytics on top. ALCOA+ applied to streaming data, with calibration and sync controls built in.',
    tags: ['Edge compute', 'Time series', 'OPC UA', 'MQTT', 'Calibration'],
  },
  {
    category: 'enterprise',
    sky: true,
    icon: (
      <svg className="icon sky" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" rx="1.5" />
        <line x1="5" y1="12" x2="27" y2="12" className="ghost" />
        <line x1="5" y1="19" x2="27" y2="19" className="ghost" />
        <line x1="12" y1="5" x2="12" y2="27" className="ghost" />
        <line x1="20" y1="5" x2="20" y2="27" className="ghost" />
        <rect className="accent" x="20" y="19" width="7" height="8" rx="1" />
      </svg>
    ),
    title: 'Validated Spreadsheets',
    oneLiner: 'Excel-based GxP tools, built and qualified for lifecycle.',
    detail: 'We develop and validate Excel templates for calculations, trending, specification tracking, and lab data processing. ALCOA+ compliant, lifecycle managed, matching regulator expectations.',
    tags: ['Excel', 'VBA', 'Templates', 'Formula QA', 'Audit trail'],
  },
  {
    category: 'validation',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <polygon points="11,6 19,6 23,13 19,20 11,20 7,13" />
        <polygon points="14,14 22,14 26,21 22,28 14,28 10,21" className="ghost" />
        <line x1="14" y1="6" x2="19" y2="28" />
        <circle className="accent" cx="16.5" cy="17" r="1.6" />
      </svg>
    ),
    title: 'Equipment & Facility Qualification',
    oneLiner: 'C&Q that moves assets from FAT to release on schedule.',
    detail: 'Risk-based IQ, OQ, and PQ protocols for process equipment, utilities, cleanrooms, and cold chain. Deviations get triaged with engineering and QA in the room, not two weeks later.',
    tags: ['IQ', 'OQ', 'PQ', 'DQ', 'Utilities', 'Cleanrooms', 'Cold chain'],
  },
  {
    category: 'validation',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <path d="M 4 9 C 12 9, 14 16, 28 16" />
        <path d="M 4 16 L 28 16" className="ghost" />
        <path d="M 4 23 C 12 23, 14 16, 28 16" />
        <circle cx="4" cy="9" r="1.6" fill="currentColor" opacity="0.55" />
        <circle cx="4" cy="23" r="1.6" fill="currentColor" opacity="0.55" />
        <circle cx="4" cy="16" r="1.6" fill="currentColor" opacity="0.55" />
        <circle className="accent" cx="16" cy="16" r="1.8" />
        <circle className="accent" cx="28" cy="16" r="1.8" />
      </svg>
    ),
    title: 'Process Validation (Stages 1–3)',
    oneLiner: 'Lifecycle PV, FDA 2011 and EU Annex 15 aligned.',
    detail: 'Process design, PPQ execution, and continued process verification for drug substance, drug product, and device manufacturing. CPV dashboards so trends surface before deviations.',
    tags: ['Stage 1', 'PPQ', 'CPV', 'Statistical sampling', 'Annex 15'],
  },
  {
    category: 'validation',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="16" r="8" />
        <circle cx="20" cy="16" r="8" className="ghost" />
        <circle className="accent" cx="16" cy="16" r="1.8" />
        <path d="M 4 16 L 2 16" className="ghost" />
        <path d="M 30 16 L 28 16" className="ghost" />
        <path d="M 16 7 L 16 5" className="ghost" />
        <path d="M 16 27 L 16 25" className="ghost" />
      </svg>
    ),
    title: 'Cleaning Validation',
    oneLiner: 'Science and risk-based limits for multi-product facilities.',
    detail: 'MACO and health-based exposure limits, sampling and recovery studies, validation of manual and automated cleaning cycles. Built for cross-contamination control under EMA Chapter 3 and 5.',
    tags: ['MACO', 'HBEL', 'Multi-product', 'Swab recovery', 'EMA Ch 3'],
  },
  {
    category: 'enterprise',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" rx="1.5" />
        <line x1="5" y1="12.3" x2="27" y2="12.3" className="ghost" />
        <line x1="5" y1="19.7" x2="27" y2="19.7" className="ghost" />
        <line x1="12.3" y1="5" x2="12.3" y2="27" className="ghost" />
        <line x1="19.7" y1="5" x2="19.7" y2="27" className="ghost" />
        <rect className="accent" x="12.3" y="12.3" width="7.4" height="7.4" rx="1" />
        <line x1="5" y1="27" x2="27" y2="5" strokeOpacity="0.35" />
      </svg>
    ),
    title: 'Data Integrity & 21 CFR Part 11',
    oneLiner: 'ALCOA+ assessments that find the gaps auditors cite.',
    detail: 'Audits of electronic records, audit trails, user access, and hybrid paper-electronic workflows against Part 11, Annex 11, and MHRA guidance. Findings rated by regulatory and patient risk.',
    tags: ['ALCOA+', 'Part 11', 'Annex 11', 'Audit trail', 'MHRA', 'Hybrid'],
  },
];

const TABS: { id: Category; label: string; count: number; sky?: boolean }[] = [
  { id: 'all', label: 'All', count: SERVICES.length },
  { id: 'validation', label: 'Validation core', count: SERVICES.filter(s => s.category === 'validation').length },
  { id: 'testing', label: 'GxP testing', count: SERVICES.filter(s => s.category === 'testing').length },
  { id: 'enterprise', label: 'Enterprise systems', count: SERVICES.filter(s => s.category === 'enterprise').length, sky: true },
  { id: 'emerging', label: 'Emerging stack', count: SERVICES.filter(s => s.category === 'emerging').length, sky: true },
];

export default function ServicesGrid() {
  const [filter, setFilter] = useState<Category>('all');
  const visible = (s: Service) => filter === 'all' || s.category === filter;

  return (
    <>
      <div className="svc-tabs reveal in" role="tablist" aria-label="Service categories">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`svc-tab${t.sky ? ' sky' : ''}${filter === t.id ? ' active' : ''}`}
            role="tab"
            aria-selected={filter === t.id}
            onClick={() => setFilter(t.id)}
          >
            <span className="count">{t.count}</span> {t.label}
          </button>
        ))}
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <article
            key={i}
            className={`service-card reveal in${s.sky ? ' sky' : ''}${visible(s) ? '' : ' hidden'}`}
            data-category={s.category}
          >
            <div className="svc-head">
              <div className="svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>
            <p className="oneliner">{s.oneLiner}</p>
            <p className="detail">{s.detail}</p>
            <div className="service-tags">
              {s.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <Link href="/contact" className="link">See scope</Link>
          </article>
        ))}
      </div>
    </>
  );
}

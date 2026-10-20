import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';

export const metadata = { title: 'Careers' };

const APPLY = 'https://recruit.zoho.in/recruit/Portal.na?digest=valxperts';

const ROLES = [
  {
    tags: ['Full-time', 'Hyderabad or remote', 'Validation practice'],
    title: 'Senior Validation Consultant',
    sub: 'Lead CSV, equipment qualification, and process validation engagements end to end.',
    bullets: [
      'Author and execute risk-based protocols for GxP systems',
      'Own scope, schedule, and QA sign-off for named engagements',
      'Mentor consultants and junior validators',
      'Represent ValXperts in client QA reviews and inspections',
    ],
    req: '7+ years validation in pharma, biotech, or devices. GAMP 5 fluency. CSA experience is a plus.',
  },
  {
    tags: ['Full-time', 'Hyderabad or remote', 'Testing practice'],
    title: 'GxP Test Automation Engineer',
    sub: 'Build and run automated test frameworks for GxP systems that regulators accept.',
    bullets: [
      'Design Playwright and Selenium test suites for LIMS, MES, and SAP',
      'Capture evidence natively, tie tests to requirements and defects',
      'Introduce automation to clients who have never used it before',
      'Keep test environments and test data traceable',
    ],
    req: '5+ years in test automation, Playwright or Selenium, and some exposure to regulated QA.',
  },
  {
    tags: ['Full-time', 'Hyderabad, hybrid', 'Enterprise systems'],
    title: 'Enterprise Systems Consultant',
    sub: 'Validate the systems that run the plant: SAP modules, LIMS platforms, MES and SCADA stacks.',
    bullets: [
      'Lead implementation and validation on at least one platform family',
      'Configuration validation, master-data controls, interface qualification',
      'Author user requirements with QA, engineering, and IT in the room',
      'Rotate across SAP, LIMS, and MES as projects demand',
    ],
    req: '5+ years, deep in at least one of SAP (QM/WM/EWM), LabWare/SampleManager/STARLIMS/LabVantage, or Werum PAS-X/Siemens Opcenter.',
  },
  {
    tags: ['Full-time', 'Hyderabad or remote', 'Compliance practice'],
    title: 'Compliance & Regulatory Lead',
    sub: 'Lead audit prep, remediation, and QMS engagements for regulated clients.',
    bullets: [
      'Prepare clients for FDA, EMA, MHRA, and PMDA inspections',
      'Lead 483 and warning-letter response projects',
      'Rebuild QMS elements that keep failing internal audits',
      'Serve as subject-matter authority on ALCOA+ and Part 11',
    ],
    req: '10+ years in QA or regulatory. Former inspector or QA head preferred.',
  },
];

export default function CareersPage() {
  return (
    <section className="screen" aria-label="Careers">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>Careers</Eyebrow>
          <h2>We hire people we would want to be led by.</h2>
          <p>Small team, senior work. If you have run validation inside a plant, or built the enterprise stack a plant depends on, we probably have a seat for you. The ones below are open right now. If none fit, scroll down.</p>
        </Reveal>

        <div className="culture-grid">
          <Reveal as="article" className="culture-tile">
            <div className="culture-icon">
              <svg className="icon" viewBox="0 0 32 32" width="26" height="26" strokeWidth="1.6" aria-hidden="true">
                <circle cx="16" cy="16" r="10" />
                <circle cx="16" cy="16" r="6" className="ghost" />
                <circle className="accent" cx="16" cy="16" r="2.5" />
              </svg>
            </div>
            <h3>You stay close to the work</h3>
            <p>No slide-deck roles. Every lead at ValXperts is in protocols, in standups, and on the shop floor when it counts.</p>
          </Reveal>
          <Reveal as="article" className="culture-tile">
            <div className="culture-icon">
              <svg className="icon" viewBox="0 0 32 32" width="26" height="26" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M 4 26 C 5 22 8 20 12 20" />
                <rect x="17" y="10" width="12" height="4" rx="1" className="ghost" />
                <circle className="accent" cx="23" cy="12" r="1.4" />
              </svg>
            </div>
            <h3>Named, not nameless</h3>
            <p>You own the engagement. Your name is on the deliverables and on the client&apos;s phone. Autonomy comes with accountability.</p>
          </Reveal>
          <Reveal as="article" className="culture-tile">
            <div className="culture-icon">
              <svg className="icon" viewBox="0 0 32 32" width="26" height="26" strokeWidth="1.6" aria-hidden="true">
                <polygon points="18,8 18,24 8,20 8,12" />
                <path d="M 20 12 Q 24 16 20 20" className="ghost" />
                <path d="M 23 10 Q 28 16 23 22" className="ghost" />
                <circle className="accent" cx="18" cy="16" r="1.4" />
              </svg>
            </div>
            <h3>Learn out loud</h3>
            <p>We share what we figure out. Internal lunches, open templates, and real time to study the regulation you keep tripping over.</p>
          </Reveal>
        </div>

        <Reveal as="div" className="roles-head">
          <Eyebrow>Open roles</Eyebrow>
          <h3>Four seats open right now.</h3>
        </Reveal>

        <div className="roles-grid">
          {ROLES.map((role) => (
            <Reveal as="article" className="role-card" key={role.title}>
              <div className="role-head">
                {role.tags.map((t, i) => (
                  <span key={t} className={`role-tag${i === 0 ? '' : ' outline'}`}>{t}</span>
                ))}
              </div>
              <h4>{role.title}</h4>
              <p className="role-sub">{role.sub}</p>
              <ul className="role-list">
                {role.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="role-req"><strong>You should have:</strong> {role.req}</div>
              <a href={APPLY} target="_blank" rel="noopener noreferrer" className="cta ghost">Apply via Zoho Recruit</a>
            </Reveal>
          ))}
        </div>

        <Reveal className="no-fit">
          <Eyebrow>Open application</Eyebrow>
          <h3>Not seeing the role that fits you?</h3>
          <p>We hire ahead of demand when we meet the right people. Send a short note about what you have run, and the lead who fits will reply.</p>
          <Link href="/contact" className="cta emerald">Send us a note</Link>
        </Reveal>
      </div>

      <section className="closing-cta">
        <div className="wrap">
          <div className="inner">
            <div>
              <h3>Would rather email your CV than fill a form?</h3>
              <p>Write to contact@valxperts.com with &quot;Careers&quot; in the subject line. A practice lead replies within two business days.</p>
            </div>
            <div className="ctas">
              <a href="#" data-modal="email" className="cta ghost">Open the inbox</a>
              <Link href="/contact" className="cta emerald">Send us a note</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

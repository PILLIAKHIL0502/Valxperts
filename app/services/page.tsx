import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ClosingCta from '@/components/ClosingCta';
import ServicesGrid from '@/components/ServicesGrid';

export const metadata = { title: 'Services' };

const EVERY = [
  {
    title: 'One named lead',
    body: 'Scope, schedule, deliverables. Mobile number, name you remember, and the person you escalate to.',
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="9" r="4" />
        <path d="M 4 20 C 5 16 8 14 12 14 S 19 16 20 20" />
        <circle className="accent" cx="18" cy="7" r="1.6" />
      </svg>
    ),
  },
  {
    title: 'Risk-based protocols',
    body: 'Volume proportional to GxP impact, not system size. Low-risk means a lean protocol, high-risk means more rigor.',
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <polygon points="12,3 20,7 20,13 12,21 4,13 4,7" />
        <circle className="accent" cx="12" cy="11" r="1.8" />
      </svg>
    ),
  },
  {
    title: 'Daily standups',
    body: 'Twenty minutes with your team each morning. A shared tracker so you always know where things are.',
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" className="ghost" />
        <path d="M 3 20 C 4 17 9 16 12 16 C 15 16 20 17 21 20" />
        <circle className="accent" cx="12" cy="4" r="1.6" />
      </svg>
    ),
  },
  {
    title: 'QA-first deliverables',
    body: 'Everything filed in your document system, under your QA signatures. No proprietary tooling, no vendor lock-in.',
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <path d="M 7 4 H 15 L 19 8 V 20 H 7 Z" />
        <polyline points="15,4 15,8 19,8" />
        <path d="M 10 13 L 12 15 L 16 11" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Audit defense, 12 months',
    body: 'If a regulator questions anything we authored, we sit in the room with your QA team at no extra cost.',
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <path d="M 12 3 L 20 6 V 12 C 20 17 16 20 12 21 C 8 20 4 17 4 12 V 6 Z" />
        <path d="M 9 12 L 11 14 L 15 10" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Weekly burn report',
    body: "Hours by workstream, change control for anything that moves scope. You know what's running, what's left, and why.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="1.5" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <line x1="8" y1="13" x2="14" y2="13" className="ghost" />
        <line x1="8" y1="16" x2="12" y2="16" className="ghost" />
        <circle className="accent" cx="17" cy="16" r="1.6" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: 'Do you work on-site or remote?',
    a: 'Both. We travel for site visits, kickoffs, inspections, and whenever the real work is on the shop floor. The rest runs on your preferred collaboration stack. Our usual mix is a week on site at the start, then alternating weeks as the project needs.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Scoped assessments can usually start within a week. Named-lead engagements go within three weeks, sometimes sooner if a lead is between projects. For emergency audit support we have a 48-hour commitment.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Fixed fee for discrete deliverables (a scoped assessment, a single-system qualification, a gap report). Time and materials for programs where scope evolves with findings. You see a weekly burn report with hours by workstream either way, and a change-control process for anything that moves scope.',
  },
  {
    q: 'Do you sign NDAs before the first call?',
    a: 'Yes. We are happy to work from your template, or we can send ours. Either way, nothing proprietary leaves your systems without written agreement from you.',
  },
  {
    q: 'Can you work alongside our existing validation partner?',
    a: 'Yes. We regularly augment internal teams and other consultancies. Our deliverables fit any document system, and we are comfortable sharing credit, not just invoices.',
  },
  {
    q: 'What is your minimum engagement size?',
    a: 'A two-day scoped assessment is the smallest thing we take on. Below that, we would rather point you to a free resource than take your money and under-deliver.',
  },
];

export default function ServicesPage() {
  return (
    <section className="screen" aria-label="Services">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>What we do</Eyebrow>
          <h2>Twelve ways we keep your systems inspection-ready.</h2>
          <p>Our clients call us when the stakes are real and the deadline is next month. Here is how we help them, from the AI pipeline nobody has validated before to the Excel template the lab has been using for ten years.</p>
        </Reveal>
        <ServicesGrid />
      </div>

      <section className="shapes-section">
        <div className="wrap">
          <Reveal className="section-head">
            <Eyebrow>Common engagement shapes</Eyebrow>
            <h2>Three ways most projects start.</h2>
            <p>You rarely need the whole menu. These are the three shapes clients ask for most, with timelines and typical team shapes so you can gut-check what fits before you reach out.</p>
          </Reveal>
          <div className="shapes-grid">
            <Reveal as="article" className="shape-card">
              <span className="shape-tag">Shape 01</span>
              <h3>Scoped assessment</h3>
              <div className="shape-meta"><span>1–2 weeks</span><span>Fixed fee</span><span>One senior lead</span></div>
              <ul className="shape-list">
                <li>Risk map of your GxP systems</li>
                <li>Prioritized gap list with severity</li>
                <li>Roadmap with honest effort estimates</li>
                <li>Readout to QA, engineering, and IT leads</li>
              </ul>
              <div className="shape-footer">Best when you are deciding where to spend first, or defending a budget request internally.</div>
            </Reveal>
            <Reveal as="article" className="shape-card">
              <span className="shape-tag">Shape 02</span>
              <h3>Single-system engagement</h3>
              <div className="shape-meta"><span>6–12 weeks</span><span>Fixed fee</span><span>Named lead + 1–2 consultants</span></div>
              <ul className="shape-list">
                <li>Validation plan agreed with your QA</li>
                <li>Risk-based protocols, authored and executed</li>
                <li>Deviations handled live, not batched for later</li>
                <li>Summary report and traceability matrix for QA sign-off</li>
              </ul>
              <div className="shape-footer">Best when one specific system is the deadline, like a LIMS go-live, a SAP module cutover, or an instrument PQ.</div>
            </Reveal>
            <Reveal as="article" className="shape-card cobalt">
              <span className="shape-tag">Shape 03</span>
              <h3>Program embedment</h3>
              <div className="shape-meta"><span>3–12+ months</span><span>Time &amp; materials</span><span>Lead + rotating specialists</span></div>
              <ul className="shape-list">
                <li>Rolling CSV, qualification, PV, and testing capacity</li>
                <li>Weekly burn report with hours by workstream</li>
                <li>Change-control for anything that moves scope</li>
                <li>Audit standby from day one</li>
              </ul>
              <div className="shape-footer">Best for site-wide remediation, inspection prep, or continuous validation support while your team scales.</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="every-section">
        <div className="wrap">
          <Reveal className="every-head">
            <Eyebrow>What&apos;s in every engagement</Eyebrow>
            <h2>Six things we never charge extra for.</h2>
          </Reveal>
          <div className="every-grid">
            {EVERY.map((item) => (
              <Reveal key={item.title} className="every-item">
                <div className="ei-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <Reveal className="faq-head">
            <Eyebrow>Common questions</Eyebrow>
            <h2>Before you reach out.</h2>
            <p>The things people usually ask us first. Nothing is off limits.</p>
          </Reveal>
          <Reveal className="faq-list">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary>{q}</summary>
                <div className="faq-body">{a}</div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <ClosingCta
        heading="Ready to make a service engagement concrete?"
        body="Bring us the system or the deadline. We will scope it in two business days, name the lead, and show you what the first week looks like."
        primary={{ label: 'Start a scoped assessment', href: '/contact' }}
      />
    </section>
  );
}

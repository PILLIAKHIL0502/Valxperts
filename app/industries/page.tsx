import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ClosingCta from '@/components/ClosingCta';

export const metadata = { title: 'Industries' };

export default function IndustriesPage() {
  return (
    <section className="screen" aria-label="Industries">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>Who we work with</Eyebrow>
          <h2>We work where you work.</h2>
          <p>Our consultants have shipped product inside pharma plants, biotech sites, device companies, and labs. They know your rules, they know your 3 a.m. problems, and they do not need to be shown the way to the shop floor.</p>
        </Reveal>
        <div className="industries-grid">
          <Reveal as="article" className="industry-card">
            <div className="industry-illus mint">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#047857" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="30" y="48" width="40" height="24" rx="12" />
                  <line x1="50" y1="48" x2="50" y2="72" strokeDasharray="2 3" />
                  <rect x="80" y="48" width="40" height="24" rx="12" />
                  <line x1="100" y1="48" x2="100" y2="72" strokeDasharray="2 3" />
                  <rect x="130" y="48" width="40" height="24" rx="12" />
                  <line x1="150" y1="48" x2="150" y2="72" strokeDasharray="2 3" />
                  <circle cx="40" cy="60" r="2" fill="#10B981" />
                  <circle cx="90" cy="60" r="2" fill="#10B981" />
                  <circle cx="140" cy="60" r="2" fill="#10B981" />
                  <path d="M 10 90 Q 90 100 170 90" opacity="0.5" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>Pharmaceutical</h3>
              <p>Branded, generic, OSD, sterile, biologics upstream and downstream. We know the Annexes, we have answered the 483s, and we have seen most of the audit-trail questions before.</p>
              <ul>
                <li>Sterile fill-finish qualification</li>
                <li>Continuous manufacturing readiness</li>
                <li>Lifecycle PV and CPV programs</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="industry-card">
            <div className="industry-illus">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#047857" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M 60 20 Q 120 60 60 100" />
                  <path d="M 120 20 Q 60 60 120 100" />
                  <line x1="68" y1="30" x2="112" y2="30" opacity="0.5" />
                  <line x1="78" y1="45" x2="102" y2="45" opacity="0.5" />
                  <line x1="82" y1="60" x2="98" y2="60" opacity="0.5" />
                  <line x1="78" y1="75" x2="102" y2="75" opacity="0.5" />
                  <line x1="68" y1="90" x2="112" y2="90" opacity="0.5" />
                  <circle cx="68" cy="30" r="2" fill="#10B981" />
                  <circle cx="112" cy="30" r="2" fill="#10B981" />
                  <circle cx="68" cy="90" r="2" fill="#2563EB" />
                  <circle cx="112" cy="90" r="2" fill="#2563EB" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>Biotech &amp; ATMP</h3>
              <p>Monoclonals, recombinant proteins, vaccines, and advanced-therapy medicinal products, where the process is the product and getting it right really matters.</p>
              <ul>
                <li>Bioreactor and single-use qualification</li>
                <li>Chromatography and TFF cycle validation</li>
                <li>Comparability and tech-transfer support</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="industry-card">
            <div className="industry-illus sky">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#1E40AF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="55" y="30" width="70" height="60" rx="4" />
                  <rect x="65" y="42" width="50" height="30" rx="2" fill="rgba(37,99,235,0.08)" />
                  <circle cx="75" cy="82" r="1.8" fill="#2563EB" />
                  <circle cx="90" cy="82" r="1.8" fill="#2563EB" />
                  <circle cx="105" cy="82" r="1.8" fill="#2563EB" />
                  <line x1="55" y1="20" x2="55" y2="30" opacity="0.5" />
                  <line x1="125" y1="20" x2="125" y2="30" opacity="0.5" />
                  <line x1="55" y1="100" x2="55" y2="110" opacity="0.5" />
                  <line x1="125" y1="100" x2="125" y2="110" opacity="0.5" />
                  <circle cx="55" cy="20" r="1.5" fill="#10B981" />
                  <circle cx="125" cy="20" r="1.5" fill="#10B981" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>Medical Devices &amp; IVD</h3>
              <p>ISO 13485 and 21 CFR Part 820 environments. Class II and III devices, software as a medical device, companion diagnostics. We help design teams and QA systems meet in the middle.</p>
              <ul>
                <li>Design verification and validation</li>
                <li>Process validation and TMV</li>
                <li>IEC 62304 software-lifecycle support</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="industry-card">
            <div className="industry-illus mint">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#047857" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="90" cy="60" r="36" />
                  <circle cx="90" cy="60" r="24" opacity="0.5" />
                  <circle cx="82" cy="54" r="4" fill="#10B981" opacity="0.7" />
                  <circle cx="98" cy="56" r="3" fill="#10B981" opacity="0.6" />
                  <circle cx="84" cy="68" r="3.5" fill="#10B981" opacity="0.5" />
                  <circle cx="96" cy="70" r="2.5" fill="#10B981" opacity="0.65" />
                  <circle cx="90" cy="60" r="1.5" fill="#047857" />
                  <path d="M 50 100 L 130 100" opacity="0.4" strokeDasharray="3 4" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>Cell &amp; Gene Therapy</h3>
              <p>Autologous and allogeneic workflows, viral vector manufacturing, lentiviral and AAV platforms. In cell and gene, every batch is for a specific patient, and the paperwork has to prove it.</p>
              <ul>
                <li>Clean-room classification and monitoring</li>
                <li>Chain of identity and chain of custody</li>
                <li>Patient-material traceability systems</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="industry-card">
            <div className="industry-illus">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#047857" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="30" y="40" width="30" height="30" rx="2" />
                  <rect x="68" y="40" width="30" height="30" rx="2" fill="rgba(16,185,129,0.1)" />
                  <rect x="106" y="40" width="30" height="30" rx="2" />
                  <rect x="49" y="78" width="30" height="20" rx="2" opacity="0.6" />
                  <rect x="87" y="78" width="30" height="20" rx="2" opacity="0.6" />
                  <line x1="60" y1="55" x2="68" y2="55" opacity="0.5" />
                  <line x1="98" y1="55" x2="106" y2="55" opacity="0.5" />
                  <circle cx="45" cy="55" r="2" fill="#10B981" />
                  <circle cx="83" cy="55" r="2" fill="#2563EB" />
                  <circle cx="121" cy="55" r="2" fill="#10B981" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>CDMO &amp; CMO</h3>
              <p>Multi-client facilities where cross-contamination control, change management, and audit frequency all run hot. We have been on both sides of that fence.</p>
              <ul>
                <li>Multi-product cleaning programs</li>
                <li>Tech-transfer readiness assessments</li>
                <li>Shared-system data integrity controls</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="industry-card">
            <div className="industry-illus sky">
              <svg viewBox="0 0 180 120" aria-hidden="true">
                <g fill="none" stroke="#1E40AF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 60 30 L 60 60 L 50 90 L 90 90 L 80 60 L 80 30 Z" />
                  <line x1="55" y1="30" x2="85" y2="30" />
                  <line x1="54" y1="75" x2="86" y2="75" opacity="0.4" />
                  <circle cx="70" cy="80" r="2" fill="#2563EB" opacity="0.5" />
                  <circle cx="100" cy="55" r="6" fill="rgba(37,99,235,0.1)" />
                  <circle cx="100" cy="55" r="2" fill="#2563EB" />
                  <path d="M 108 55 L 125 55" opacity="0.5" />
                  <circle cx="130" cy="55" r="4" fill="#10B981" opacity="0.7" />
                  <line x1="100" y1="63" x2="100" y2="90" opacity="0.3" strokeDasharray="2 3" />
                </g>
              </svg>
            </div>
            <div className="industry-body">
              <h3>Clinical &amp; QC Labs</h3>
              <p>CLIA, ISO 15189, GLP, and GCLP environments. Instruments, LIMS, ELN, and the paper-plus-digital workflows that still live between them.</p>
              <ul>
                <li>Method validation and transfer</li>
                <li>LIMS and ELN qualification</li>
                <li>Instrument and analyzer IQ/OQ/PQ</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <ClosingCta
        heading="Not sure which bucket you sit in?"
        body="Our consultants have usually worked in two or three of these worlds. Tell us about the plant, and we will tell you which lead fits."
        primary={{ label: 'Talk to a validation lead', href: '/contact' }}
      />
    </section>
  );
}

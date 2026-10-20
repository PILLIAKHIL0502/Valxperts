import Link from 'next/link';
import HeroPod from '@/components/HeroPod';
import HeroWords from '@/components/HeroWords';
import Reveal from '@/components/Reveal';
import StatsRow from '@/components/StatsRow';
import Eyebrow from '@/components/Eyebrow';

export const metadata = { title: 'ValXperts' };

export default function HomePage() {
  return (
    <section className="screen" aria-label="Home">
      <HeroPod>
        <svg className="hero-illus" viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2563EB" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M 290 60 A 180 180 0 1 0 290 340" fill="none" stroke="url(#arcGrad)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 270 100 A 140 140 0 1 0 270 300" fill="none" stroke="#E6F0EC" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" />
          <path d="M 250 140 A 100 100 0 1 0 250 260" fill="none" stroke="#E6F0EC" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
          <circle cx="290" cy="60" r="3.5" fill="#2563EB" />
          <circle cx="290" cy="340" r="3.5" fill="#10B981" />
          <circle cx="110" cy="200" r="3" fill="#E6F0EC" opacity="0.65" />
          <circle cx="270" cy="100" r="2" fill="#E6F0EC" opacity="0.55" />
          <circle cx="270" cy="300" r="2" fill="#E6F0EC" opacity="0.55" />
          <circle cx="250" cy="140" r="2" fill="#E6F0EC" opacity="0.4" />
          <circle cx="250" cy="260" r="2" fill="#E6F0EC" opacity="0.4" />
          <circle cx="290" cy="200" r="5" fill="#10B981" />
          <line x1="285" y1="200" x2="155" y2="200" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 5" />
        </svg>
        <Reveal><Eyebrow>For the teams building what comes next</Eyebrow></Reveal>
        <HeroWords text="Is your AI application GxP compliant?" />
        <Reveal as="p" className="sub">
          If you are not sure, you are not alone. We help life sciences teams validate and test the systems they run on, from AI pipelines and SAP modules to the LIMS at the back of the lab. Senior consultants, named leads, and the kind of audit support that stays in the room with you.
        </Reveal>
        <Reveal className="hero-ctas">
          <Link href="/contact" className="cta emerald">Book an assessment</Link>
          <Link href="/approach" className="cta ghost">See our approach</Link>
        </Reveal>
        <Reveal className="cred-strip">
          <span>Pharmaceutical</span><span className="dot" aria-hidden="true"></span>
          <span>Biotech &amp; ATMP</span><span className="dot" aria-hidden="true"></span>
          <span>Medical Devices</span><span className="dot" aria-hidden="true"></span>
          <span>CDMO / CMO</span><span className="dot" aria-hidden="true"></span>
          <span>Clinical &amp; QC Labs</span>
        </Reveal>
      </HeroPod>

      <section className="pipeline-section">
        <div className="wrap">
          <Reveal className="pipeline-head">
            <Eyebrow>The engagement, at a glance</Eyebrow>
            <h2>From &quot;we think there&apos;s a gap&quot; to inspection-ready, in five moves.</h2>
            <p>Every project with us travels the same shape. You know what is coming next, what each phase produces, and where you plug in.</p>
          </Reveal>
          <Reveal className="pipeline" as="div">
            <div className="pipeline-step">
              <div className="pipeline-icon">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="14" cy="14" r="7" />
                  <line x1="19.5" y1="19.5" x2="26" y2="26" />
                  <circle className="accent" cx="14" cy="14" r="2" />
                </svg>
              </div>
              <div className="pname">Discover</div>
              <div className="pout">Roadmap</div>
            </div>
            <div className="pipeline-arrow" aria-hidden="true">
              <svg viewBox="0 0 32 12" width="32" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="6" x2="28" y2="6" /><polyline points="22,2 28,6 22,10" />
              </svg>
            </div>
            <div className="pipeline-step">
              <div className="pipeline-icon">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <rect x="6" y="5" width="20" height="22" rx="2" />
                  <line x1="10" y1="11" x2="22" y2="11" />
                  <line x1="10" y1="16" x2="18" y2="16" />
                  <line x1="10" y1="21" x2="20" y2="21" />
                  <circle className="accent" cx="24" cy="21" r="1.6" />
                </svg>
              </div>
              <div className="pname">Plan</div>
              <div className="pout">Validation plan</div>
            </div>
            <div className="pipeline-arrow" aria-hidden="true">
              <svg viewBox="0 0 32 12" width="32" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="6" x2="28" y2="6" /><polyline points="22,2 28,6 22,10" />
              </svg>
            </div>
            <div className="pipeline-step">
              <div className="pipeline-icon">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <path d="M 6 20 L 12 14 L 16 18 L 26 8" />
                  <polyline points="21,8 26,8 26,13" />
                  <circle className="accent" cx="12" cy="14" r="1.6" />
                  <circle className="accent" cx="16" cy="18" r="1.6" />
                </svg>
              </div>
              <div className="pname">Build &amp; test</div>
              <div className="pout">Protocols run</div>
            </div>
            <div className="pipeline-arrow" aria-hidden="true">
              <svg viewBox="0 0 32 12" width="32" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="6" x2="28" y2="6" /><polyline points="22,2 28,6 22,10" />
              </svg>
            </div>
            <div className="pipeline-step">
              <div className="pipeline-icon">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <path d="M 8 4 H 20 L 24 8 V 28 H 8 Z" />
                  <polyline points="20,4 20,8 24,8" />
                  <path d="M 12 15 L 15 18 L 20 13" strokeWidth="1.8" />
                  <circle className="accent" cx="20" cy="22" r="1.6" />
                </svg>
              </div>
              <div className="pname">Document</div>
              <div className="pout">QA-signed records</div>
            </div>
            <div className="pipeline-arrow" aria-hidden="true">
              <svg viewBox="0 0 32 12" width="32" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="6" x2="28" y2="6" /><polyline points="22,2 28,6 22,10" />
              </svg>
            </div>
            <div className="pipeline-step">
              <div className="pipeline-icon">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <path d="M 16 4 L 26 8 V 16 C 26 22 21 26 16 28 C 11 26 6 22 6 16 V 8 Z" />
                  <path d="M 12 16 L 15 19 L 20 13" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="pname">Defend</div>
              <div className="pout">Audit standby</div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsRow />

      <section className="explore-band">
        <div className="wrap">
          <Reveal><Eyebrow>Explore</Eyebrow></Reveal>
          <div className="explore-grid">
            <Link href="/services" className="explore-card reveal in">
              <span className="lbl">01</span>
              <span className="ttl">Services</span>
              <span className="arrow">What we deliver →</span>
            </Link>
            <Link href="/industries" className="explore-card reveal in">
              <span className="lbl">02</span>
              <span className="ttl">Industries</span>
              <span className="arrow">Who we work with →</span>
            </Link>
            <Link href="/approach" className="explore-card reveal in">
              <span className="lbl">03</span>
              <span className="ttl">Approach</span>
              <span className="arrow">How we engage →</span>
            </Link>
            <Link href="/why" className="explore-card reveal in">
              <span className="lbl">04</span>
              <span className="ttl">Why ValXperts</span>
              <span className="arrow">What&apos;s different →</span>
            </Link>
            <Link href="/contact" className="explore-card reveal in">
              <span className="lbl">05</span>
              <span className="ttl">Contact</span>
              <span className="arrow">Start a scoped assessment →</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

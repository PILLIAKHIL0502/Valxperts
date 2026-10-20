import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ClosingCta from '@/components/ClosingCta';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <section className="screen" aria-label="About">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>About us</Eyebrow>
          <h2>A validation firm built by people who have been the client.</h2>
          <p>We started ValXperts because we wanted the firm we wished we could have hired. Validation, testing, and the enterprise stack behind both, delivered by people who have run the systems inside manufacturing sites, not just advised on them.</p>
        </Reveal>

        <Reveal className="about-origin">
          <h3>Where we come from</h3>
          <p>Most validation gets written by people who have never released a batch under deadline. We have. We have been the QA head stuck with a stack of protocols that read like fiction. We have been the plant engineer told the CSV would &quot;take six weeks&quot; and watched it take four months. We have been the IT lead handed a validation report nobody could defend when the inspector finally sat down.</p>
          <p>ValXperts is the firm we wished we could have hired back then. Senior consultants, named leads, risk-based protocols that stop at risk-based, and audit support that stays in the room until the inspector leaves.</p>
        </Reveal>

        <Reveal className="roles-head" as="div">
          <Eyebrow>How we think</Eyebrow>
          <h3>Four operating principles.</h3>
        </Reveal>
        <div className="why-grid">
          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <rect x="5" y="6" width="22" height="22" rx="2" />
                  <line x1="10" y1="12" x2="22" y2="12" />
                  <line x1="10" y1="16" x2="22" y2="16" />
                  <line x1="10" y1="20" x2="18" y2="20" />
                  <circle className="accent" cx="24" cy="22" r="1.6" />
                </svg>
              </div>
              <h3>Protocols a human can read</h3>
            </div>
            <p>No boilerplate, no copy-paste from the last client. Every protocol is risk-based and shaped around how your plant actually runs.</p>
          </Reveal>
          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="16" cy="16" r="10" />
                  <polyline points="16,8 16,16 21,20" />
                  <circle className="accent" cx="16" cy="16" r="1.6" />
                </svg>
              </div>
              <h3>Deadlines counted backward from release</h3>
            </div>
            <p>We work to your production calendar, not ours. If a batch has to release, the engagement works around it.</p>
          </Reveal>
          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="16" cy="12" r="5" />
                  <path d="M 6 26 C 7 21 11 18 16 18 S 25 21 26 26" />
                  <circle className="accent" cx="24" cy="10" r="1.6" />
                </svg>
              </div>
              <h3>Named leads, not nameless teams</h3>
            </div>
            <p>One person owns scope, schedule, and the deliverable. You have their name and their mobile number from day one.</p>
          </Reveal>
          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.6" aria-hidden="true">
                  <path d="M 6 16 L 14 16" className="ghost" />
                  <path d="M 18 16 L 26 16" />
                  <path d="M 22 12 L 26 16 L 22 20" />
                  <circle className="accent" cx="16" cy="16" r="1.8" />
                </svg>
              </div>
              <h3>The engagement ends when it ends</h3>
            </div>
            <p>Scope stays scope. If something new comes up, we re-sign. Projects do not expand to fill the time available.</p>
          </Reveal>
        </div>

        <Reveal className="about-location">
          <div>
            <Eyebrow>Where we work</Eyebrow>
            <h3>Hyderabad, close to the sites we serve.</h3>
            <p>Most of our clients are in India, the EU, and the US. We travel for site visits, kickoffs, and inspections. The rest runs on whichever collaboration stack your team already uses.</p>
          </div>
          <div className="about-location-visual">
            <svg viewBox="0 0 200 160" aria-hidden="true">
              <circle cx="40" cy="60" r="4" fill="#10B981" />
              <circle cx="40" cy="60" r="12" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
              <circle cx="40" cy="60" r="22" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.2" />
              <circle cx="110" cy="100" r="2.5" fill="#2563EB" />
              <circle cx="155" cy="40" r="2.5" fill="#2563EB" />
              <circle cx="80" cy="130" r="2.5" fill="#2563EB" />
              <line x1="40" y1="60" x2="110" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
              <line x1="40" y1="60" x2="155" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
              <line x1="40" y1="60" x2="80" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
            </svg>
          </div>
        </Reveal>
      </div>

      <ClosingCta
        heading="Want to meet the lead who would run your project?"
        body="Tell us a little about what you need, and we will put the right practice lead on the first call. Twenty minutes, no deck."
        primary={{ label: 'Set up a call', href: '/contact' }}
      />
    </section>
  );
}

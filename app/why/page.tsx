import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ClosingCta from '@/components/ClosingCta';

export const metadata = { title: 'Why us' };

export default function WhyPage() {
  return (
    <section className="screen" aria-label="Why ValXperts">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>Why ValXperts</Eyebrow>
          <h2>We know how a 2 a.m. deviation feels.</h2>
          <p>Services firms are a commodity until something goes wrong. These are the four things we do differently so that something stays rare.</p>
        </Reveal>

        <div className="why-grid">
          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="18" cy="20" r="12" />
                  <circle cx="18" cy="20" r="6" className="ghost" />
                  <circle className="accent" cx="30" cy="12" r="2.4" />
                  <line x1="18" y1="20" x2="30" y2="12" className="ghost" />
                </svg>
              </div>
              <h3>Validators who have been the client</h3>
            </div>
            <p>Our consultants have run validation programs inside manufacturing sites, not just advised on them. They know what a 2 a.m. deviation on a PPQ batch feels like, and they write protocols the way they wish someone had written theirs.</p>
          </Reveal>

          <Reveal as="article" className="why-tile accent">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.8" aria-hidden="true">
                  <polygon points="20,5 33,12 33,25 20,34 7,25 7,12" />
                  <polygon points="20,12 27,15.5 27,22 20,27 13,22 13,15.5" className="ghost" />
                  <circle className="accent" cx="20" cy="19.5" r="2.2" />
                </svg>
              </div>
              <h3>Audit defense included</h3>
            </div>
            <p>If a regulator ever questions a deliverable we authored, we sit in the room with your QA team at no extra cost for twelve months after closeout. We have been called in before. Not often, but enough that we take it seriously.</p>
          </Reveal>

          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.8" aria-hidden="true">
                  <line x1="6" y1="12" x2="34" y2="12" />
                  <line x1="6" y1="20" x2="26" y2="20" />
                  <line x1="6" y1="28" x2="18" y2="28" />
                  <circle className="accent" cx="31" cy="28" r="2.2" />
                </svg>
              </div>
              <h3>CSA by default, not by request</h3>
            </div>
            <p>We apply critical thinking and unscripted testing wherever FDA guidance supports it. Our clients typically see 30 to 50 percent less protocol volume on low-risk systems, with the same documented assurance. Less paper to read, less paper to defend.</p>
          </Reveal>

          <Reveal as="article" className="why-tile">
            <div className="why-head">
              <div className="why-icon-wrap">
                <svg className="icon" viewBox="0 0 32 32" width="30" height="30" strokeWidth="1.8" aria-hidden="true">
                  <circle className="accent" cx="16" cy="16" r="2.5" />
                  <line x1="16" y1="16" x2="7" y2="7" className="ghost" />
                  <line x1="16" y1="16" x2="25" y2="7" className="ghost" />
                  <line x1="16" y1="16" x2="7" y2="25" className="ghost" />
                  <line x1="16" y1="16" x2="25" y2="25" className="ghost" />
                  <circle cx="7" cy="7" r="1.4" fill="currentColor" opacity="0.5" />
                  <circle cx="25" cy="7" r="1.4" fill="currentColor" opacity="0.5" />
                  <circle cx="7" cy="25" r="1.4" fill="currentColor" opacity="0.5" />
                  <circle cx="25" cy="25" r="1.4" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <h3>One accountable lead per engagement</h3>
            </div>
            <p>Every project has one named lead who owns scope, schedule, and deliverables from start to finish. You will know their name, their mobile number, and when they are off the clock. No handoffs between a sales contact, a PM, and a rotating bench of consultants.</p>
          </Reveal>
        </div>
      </div>

      <ClosingCta
        heading="Enough from us. Want to meet the lead?"
        body="Tell us a little about the project and we will put the right person on the first call. No decks, no sales rep, just the validator you would actually work with."
        primary={{ label: 'Set up a call', href: '/contact' }}
      />
    </section>
  );
}

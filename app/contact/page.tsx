import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact' };

const FAQ = [
  {
    q: 'What should I include in my first message?',
    a: 'The system or process you would want help with, the deadline or trigger (new project, audit, inspection), and whether you have validation partners already. Three sentences is enough. If a diagram would help, attach it; we can read it.',
  },
  {
    q: 'Do I need to sign an NDA before you will talk?',
    a: 'No. Most first conversations happen without one. If you would rather have one in place, send us your template and we will have it signed before the call.',
  },
  {
    q: 'How long until I hear back?',
    a: 'Usually one business day. Always within two. If more than two business days pass without a reply, something has gone wrong on our end and we would want you to tell us.',
  },
  {
    q: 'Can we skip the form and just hop on a call?',
    a: 'Yes. Email us at contact@valxperts.com with a two-sentence context and a window that works for you. We will put a practice lead on the call. Twenty minutes, no deck.',
  },
  {
    q: 'Will I speak with a sales rep?',
    a: 'No. Every first conversation is with a practice lead. If we think we are not the right fit for your problem, we will say so and point you to someone who is.',
  },
];

export default function ContactPage() {
  return (
    <section className="screen" aria-label="Contact">
      <div className="wrap contact-screen">
        <div className="contact-grid">
          <Reveal className="contact-left">
            <Eyebrow>Say hello</Eyebrow>
            <h2>Tell us what is on your plate.</h2>
            <p className="sub">A real person reads every message, and a real person writes back. Usually within two business days, sometimes faster, never from a template. Bring the problem; we will bring the questions.</p>
            <ContactForm />
          </Reveal>

          <Reveal as="aside" className="contact-right">
            <h3>Reach us directly</h3>
            <div className="info-row">
              <span className="label">Email</span>
              <span className="value">contact@valxperts.com</span>
              <span className="note">We read it. A real person replies, usually within two business days.</span>
            </div>
            <hr />
            <div className="info-row">
              <span className="label">Availability</span>
              <span className="value">Monday to Friday, 9am to 6pm IST</span>
              <span className="note">Site visits and audit standby arranged around your calendar, not ours.</span>
            </div>
            <hr />
            <div className="info-row">
              <span className="label">Office</span>
              <span className="value">Hyderabad, India</span>
              <span className="note">We travel to your site. For remote work, we use whichever tools your team already uses.</span>
            </div>
            <hr />
            <div className="info-row">
              <span className="label">Confidentiality</span>
              <span className="note">Happy to sign a mutual NDA before the first conversation. Nothing proprietary ever leaves your systems without written agreement from you.</span>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="next-section">
        <div className="wrap">
          <Reveal className="next-head">
            <Eyebrow>What happens next</Eyebrow>
            <h2>From &quot;we sent an email&quot; to a scope on your desk.</h2>
            <p>No sales cycle, no decks, no &quot;someone will reach out.&quot; Here is the shape of the first week after you hit send.</p>
          </Reveal>
          <div className="next-grid">
            <Reveal className="next-step">
              <div className="nhead">
                <div className="nicon">
                  <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M 3 7 L 12 13 L 21 7" />
                    <circle className="accent" cx="20" cy="7" r="1.4" />
                  </svg>
                </div>
                <div>
                  <div className="ntag">Within hours</div>
                  <h4>A real person reads it</h4>
                </div>
              </div>
              <p>Not a bot, not an auto-responder, not a sales rep. One of our practice leads sees your note before the end of the working day.</p>
            </Reveal>
            <div className="next-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 10" width="24" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="5" x2="20" y2="5" /><polyline points="16,2 20,5 16,8" />
              </svg>
            </div>
            <Reveal className="next-step">
              <div className="nhead">
                <div className="nicon">
                  <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="7" x2="12" y2="13" />
                    <circle className="accent" cx="12" cy="16" r="1.4" />
                  </svg>
                </div>
                <div>
                  <div className="ntag">Within 2 business days</div>
                  <h4>We reply with questions</h4>
                </div>
              </div>
              <p>Short, direct, specific. The handful of questions we need answered to scope the work. If a call fits better, we propose a twenty-minute slot.</p>
            </Reveal>
            <div className="next-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 10" width="24" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="2" y1="5" x2="20" y2="5" /><polyline points="16,2 20,5 16,8" />
              </svg>
            </div>
            <Reveal className="next-step">
              <div className="nhead">
                <div className="nicon">
                  <svg className="icon" viewBox="0 0 24 24" width="22" height="22" strokeWidth="1.6" aria-hidden="true">
                    <path d="M 6 3 H 15 L 18 6 V 21 H 6 Z" />
                    <polyline points="15,3 15,6 18,6" />
                    <path d="M 9 13 L 11 15 L 15 11" strokeWidth="1.8" />
                  </svg>
                </div>
                <div>
                  <div className="ntag">Within a week</div>
                  <h4>A written scope hits your inbox</h4>
                </div>
              </div>
              <p>Timeline, team shape, estimated effort, and the first week&apos;s plan. Yours to keep, whether you work with us or not.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="wrap">
          <Reveal className="team-head">
            <Eyebrow>Who you will hear from</Eyebrow>
            <h2>Not a sales rep. One of the leads.</h2>
            <p>Depending on what your message is about, one of these three practices will reply. You can also ask for a specific lead by name once you know which fits.</p>
          </Reveal>
          <div className="team-grid">
            <Reveal as="article" className="team-card">
              <div className="team-avatar">
                <svg className="icon" viewBox="0 0 32 32" width="28" height="28" strokeWidth="1.5" aria-hidden="true">
                  <path d="M 22 6 A 10 10 0 1 0 22 26" />
                  <circle className="accent" cx="22" cy="16" r="2" />
                </svg>
              </div>
              <p className="role">Practice lead</p>
              <h4>Validation &amp; GxP testing</h4>
              <p>CSV, CSA, equipment qualification, process and cleaning validation, and all the testing that keeps them standing.</p>
              <div className="scope"><span>CSV</span><span>CSA</span><span>IQ/OQ/PQ</span><span>PV</span><span>GxP testing</span></div>
            </Reveal>
            <Reveal as="article" className="team-card">
              <div className="team-avatar">
                <svg className="icon" viewBox="0 0 32 32" width="28" height="28" strokeWidth="1.5" aria-hidden="true">
                  <rect x="6" y="8" width="20" height="5" rx="1" />
                  <rect x="6" y="16" width="14" height="5" rx="1" className="ghost" />
                  <circle className="accent" cx="23" cy="18.5" r="1.8" />
                </svg>
              </div>
              <p className="role">Practice lead</p>
              <h4>Enterprise systems</h4>
              <p>SAP across modules, LIMS end to end, MES and SCADA on the shop floor, and the data integrity layer underneath them all.</p>
              <div className="scope"><span>SAP</span><span>LIMS</span><span>MES</span><span>SCADA</span><span>Spreadsheets</span></div>
            </Reveal>
            <Reveal as="article" className="team-card">
              <div className="team-avatar">
                <svg className="icon" viewBox="0 0 32 32" width="28" height="28" strokeWidth="1.5" aria-hidden="true">
                  <polygon points="16,4 26,8 26,18 16,27 6,18 6,8" />
                  <path d="M 11 15 L 14 18 L 20 12" strokeWidth="1.8" />
                </svg>
              </div>
              <p className="role">Practice lead</p>
              <h4>Compliance &amp; audit</h4>
              <p>QMS, data integrity, Part 11, audit prep, 483 and warning-letter response, and remediation that actually sticks.</p>
              <div className="scope"><span>QMS</span><span>Part 11</span><span>Audit prep</span><span>483 response</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <Reveal className="faq-head">
            <Eyebrow>Before you write</Eyebrow>
            <h2>A few things worth knowing.</h2>
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
    </section>
  );
}

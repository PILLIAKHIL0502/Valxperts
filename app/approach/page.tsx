import { Fragment } from 'react';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import ClosingCta from '@/components/ClosingCta';

export const metadata = { title: 'Approach' };

const FLOW = [
  {
    num: '01',
    name: 'Scope & risk',
    input: 'In: your questions',
    body: 'Two to five days with your team. We map systems, processes, and GxP risk.',
    out: 'Prioritized roadmap',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="38" height="38" strokeWidth="1.5" aria-hidden="true">
        <circle cx="14" cy="14" r="7" />
        <line x1="19.5" y1="19.5" x2="26" y2="26" />
        <circle className="accent" cx="14" cy="14" r="2" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Validation plan',
    input: 'In: QA + eng input',
    body: 'Approach, deliverables, criteria, roles, schedule. Signed off before anyone writes a protocol.',
    out: 'Approved plan',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="38" height="38" strokeWidth="1.5" aria-hidden="true">
        <rect x="6" y="5" width="20" height="22" rx="2" />
        <line x1="10" y1="11" x2="22" y2="11" />
        <line x1="10" y1="16" x2="18" y2="16" />
        <line x1="10" y1="21" x2="20" y2="21" />
        <circle className="accent" cx="24" cy="21" r="1.6" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Execution',
    input: 'In: your systems',
    body: 'Protocol authoring, test execution, deviations, run beside your team with daily standups.',
    out: 'Test evidence',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="38" height="38" strokeWidth="1.5" aria-hidden="true">
        <path d="M 6 20 L 12 14 L 16 18 L 26 8" />
        <polyline points="21,8 26,8 26,13" />
        <circle className="accent" cx="12" cy="14" r="1.6" />
        <circle className="accent" cx="16" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Reporting & release',
    input: 'In: QA review',
    body: 'Summary reports, traceability matrices, validation state documents, filed in your document system.',
    out: 'Signed records',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="38" height="38" strokeWidth="1.5" aria-hidden="true">
        <path d="M 8 4 H 20 L 24 8 V 28 H 8 Z" />
        <polyline points="20,4 20,8 24,8" />
        <path d="M 12 15 L 15 18 L 20 13" strokeWidth="1.8" />
        <circle className="accent" cx="20" cy="22" r="1.6" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Lifecycle support',
    input: 'In: changes, audits',
    body: 'Periodic reviews, change control, and on-call support when a regulator shows up.',
    out: 'Audit standby',
    icon: (
      <svg className="icon" viewBox="0 0 32 32" width="38" height="38" strokeWidth="1.5" aria-hidden="true">
        <path d="M 16 4 L 26 8 V 16 C 26 22 21 26 16 28 C 11 26 6 22 6 16 V 8 Z" />
        <path d="M 12 16 L 15 19 L 20 13" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function ApproachPage() {
  return (
    <section className="screen" aria-label="Approach">
      <div className="wrap section-pad">
        <Reveal className="section-head">
          <Eyebrow>How a project with us goes</Eyebrow>
          <h2>No surprises, no gotchas.</h2>
          <p>Five phases from the first conversation to lifecycle support, with scope and schedule agreed up front. You stay in the driver&apos;s seat the whole way.</p>
        </Reveal>

        <Reveal className="flow-wrap">
          <div className="flow" role="list" aria-label="Project flow">
            {FLOW.map((step, i) => (
              <Fragment key={step.num}>
                <div className="flow-step" role="listitem">
                  <div className="flow-input">{step.input}</div>
                  <div className="flow-head">
                    <span className="fnum">{step.num}</span>
                    {step.icon}
                  </div>
                  <div className="fname">{step.name}</div>
                  <p className="fbody">{step.body}</p>
                  <div className="fout">{step.out}</div>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="flow-arrow" aria-hidden="true">
                    <svg viewBox="0 0 28 10" width="28" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="2" y1="5" x2="24" y2="5" />
                      <polyline points="19,2 24,5 19,8" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <div className="approach-aside">
          <Reveal as="div" className="aside-card">
            <h4>What you own at the end</h4>
            <p>Every deliverable belongs to you. Protocols, test records, summary reports, traceability matrices, SOPs, and validation state documents all live in your document system under your QA signatures. No proprietary tooling, no vendor lock-in, no &quot;come back for the updates.&quot;</p>
          </Reveal>
          <Reveal as="div" className="aside-card">
            <h4>How we size an engagement</h4>
            <p>Fixed-scope for discrete deliverables, like one system or one qualification or one gap assessment. Time-and-materials for programs where scope evolves with findings. Either way, you see a weekly burn report with hours by workstream, and a change-control process for anything that moves scope.</p>
          </Reveal>
        </div>
      </div>

      <ClosingCta
        heading="Want to see what phase 01 would say about your systems?"
        body="That first assessment is the honest one. We will spend two to five days with your team and come back with a roadmap you can act on, even if you never work with us again."
        primary={{ label: 'Book the assessment', href: '/contact' }}
      />
    </section>
  );
}

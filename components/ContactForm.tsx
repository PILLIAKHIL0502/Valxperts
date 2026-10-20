'use client';

/*
  Zoho CRM webform integration (phase 2 — swap when ready):
  1. In Zoho CRM, go to Setup → Developer Space → Webforms and create a new form.
  2. Zoho generates a form action URL plus a few hidden fields (xnQsjsdp, xmIwtLD, actionType, returnURL).
  3. Replace the <form> opening tag below with Zoho's generated version, e.g.
     <form action="https://crm.zoho.in/crm/WebFormServeServlet?encType=multipart/form-data&..."
           method="POST" acceptCharset="UTF-8" name="WebToLeads...">
  4. Paste Zoho's hidden fields right after the opening tag.
  5. Keep the input ids (cname, cemail, corg, ctopic, cmsg); set each input's name= to the field names Zoho prescribes.
  6. Remove the onSubmit handler below and the status <p>; use Zoho's returnURL for the thanks page.
  7. Point the LinkedIn URL in the footer at the real company page once provisioned.
*/

import { useState, type FormEvent } from 'react';

const TOPICS = [
  'Computer System Validation / CSA',
  'GxP Testing (manual, automated, UAT, performance)',
  'SAP Validation',
  'LIMS Implementation & Validation',
  'MES / SCADA / Historian',
  'AI & Machine Learning Validation',
  'IoT & Industry 4.0',
  'Validated Spreadsheets',
  'Equipment & Facility Qualification',
  'Process Validation',
  'Cleaning Validation',
  'Data Integrity & Part 11',
  'Quality & Regulatory / Audit Remediation',
  'Other',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [topic, setTopic] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    // Reset the fields; Zoho integration will replace this handler entirely.
    setName(''); setEmail(''); setOrg(''); setTopic(''); setMsg('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cname">Your name</label>
          <input id="cname" type="text" placeholder="Jane Doe" required autoComplete="name"
            value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="cemail">Work email</label>
          <input id="cemail" type="email" placeholder="jane@yourcompany.com" required autoComplete="email"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="corg">Company</label>
          <input id="corg" type="text" placeholder="Your organization" autoComplete="organization"
            value={org} onChange={(e) => setOrg(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="ctopic">What&apos;s the engagement about?</label>
          <select id="ctopic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Choose one</option>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cmsg">Tell us a bit more</label>
        <textarea
          id="cmsg"
          placeholder="A couple of sentences about the system, process, or inspection finding you're working through."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <button type="submit" className="cta emerald">
        {submitted ? 'Received' : 'Start a scoped assessment'}
      </button>
      <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--emerald-dark)', minHeight: '1em' }}>
        {submitted ? 'Thanks. We will reply within two business days.' : ''}
      </p>
    </form>
  );
}

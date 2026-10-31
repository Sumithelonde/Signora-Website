'use client';

import { FormEvent, useState } from 'react';
import { brand } from '@/data/content';
import { sound } from './SoundEngine';

const subjects = [
  'Transport / Public Infrastructure (Rail & Metro)',
  'ISL Linguistic Research & Community Co-Design',
  'Accessible Education & Video Companion Pilot',
  'Display, Spatial & Holographic Installation',
  'Enterprise Multi-modal AI & API Integration',
  'Investment, Commercialization & Partnership',
];

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sound.playClick(1400);
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const organization = String(data.get('organization') || '').trim();
    const topic = String(data.get('topic') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = encodeURIComponent(`SIGNORA AI Partnership: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${
        organization || 'Not provided'
      }\nArea of interest: ${topic}\n\nProject or research scope:\n${message}\n\nSent via the SIGNORA AI website.`
    );

    setSending(true);
    setStatus('Opening your email application with your enquiry prepared.');

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setSending(false), 900);
  }

  return (
    <form className="contact-form glass-panel" onSubmit={submit} noValidate={false}>
      <div className="form-heading">
        <div className="form-eyebrow">
          <span className="live-dot" aria-hidden="true" />
          <span>Direct partnership enquiry</span>
        </div>
        <h3 className="form-title">Start a focused conversation.</h3>
        <p className="form-subtitle">
          Share the problem, intended users, operational environment, or proposed collaboration. The enquiry prepares directly in your email client.
        </p>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span className="field-label">
            Full name <span className="field-req" aria-hidden="true">*</span>
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            maxLength={120}
            className="luxury-input"
          />
        </label>

        <label className="form-field">
          <span className="field-label">
            Work email <span className="field-req" aria-hidden="true">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organization.com"
            maxLength={190}
            className="luxury-input"
          />
        </label>
      </div>

      <label className="form-field">
        <span className="field-label">Organization or research group</span>
        <input
          name="organization"
          autoComplete="organization"
          placeholder="e.g. Metro Rail Corporation, University Lab, Public Transit Authority"
          maxLength={190}
          className="luxury-input"
        />
      </label>

      <label className="form-field">
        <span className="field-label">
          Partnership interest <span className="field-req" aria-hidden="true">*</span>
        </span>
        <div className="select-wrapper">
          <select name="topic" defaultValue="" required className="luxury-select">
            <option value="" disabled>
              Select collaboration domain
            </option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <span className="select-arrow" aria-hidden="true">↓</span>
        </div>
      </label>

      <label className="form-field">
        <span className="field-label">
          Project details and research scope <span className="field-req" aria-hidden="true">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="Tell us about the challenge, operational constraints, accessibility requirements, or proposed evaluation."
          className="luxury-textarea"
        />
      </label>

      <div className="form-bottom">
        <button
          className="button button--primary luxury-btn"
          type="submit"
          disabled={sending}
        >
          <span>{sending ? 'Opening email…' : 'Prepare email'}</span>
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </button>

        <p className="form-disclaimer" aria-live="polite" role="status">
          {status || 'Privacy note: no form data is stored on this server. Your email application handles the message.'}
        </p>
      </div>
    </form>
  );
}

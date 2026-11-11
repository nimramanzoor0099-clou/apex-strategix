import { useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services, contact, hasPhone, hasWhatsApp } from '../data.js';
import { PageHero, ServiceSlider } from '../ui.jsx';
import { I, Ico } from '../icons.jsx';

const REQUIRED = ['fullName', 'phone', 'message'];
const MAX_MSG = 1500;
const COLORS = ['#019cf6', '#7ed958', '#febd59', '#fd5757'];

function Field({ i, icon, label, textarea, ...rest }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={`fld ${textarea ? 'ta' : ''}`} style={{ '--i': i }}>
      <Tag placeholder=" " {...rest} />
      <label>{label}</label>
      <span className="fld-ico"><Ico d={icon} size={20} /></span>
      <span className="fld-ok"><Ico d={I.check} size={14} /></span>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const preset = params.get('service');
  const [interests, setInterests] = useState(preset ? [preset] : []);
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [filled, setFilled] = useState(0);
  const [msgLen, setMsgLen] = useState(0);
  const formRef = useRef(null);

  const toggle = (name) => setInterests((c) => (c.includes(name) ? c.filter((x) => x !== name) : [...c, name]));
  const pct = Math.round((filled / REQUIRED.length) * 100);

  // confetti pieces for the success panel (random once per mount)
  const bits = useMemo(
    () => Array.from({ length: 30 }, (_, k) => {
      const a = (k / 30) * Math.PI * 2 + Math.random() * 0.4;
      const d = 90 + Math.random() * 110;
      return { x: Math.cos(a) * d, y: Math.sin(a) * d - 20, r: Math.random() * 540 - 270, c: COLORS[k % 4], w: 6 + Math.random() * 6, dl: Math.random() * 0.15 };
    }),
    []
  );

  function sync() {
    const fd = new FormData(formRef.current);
    setFilled(REQUIRED.filter((k) => String(fd.get(k) || '').trim()).length);
    setMsgLen(String(fd.get('message') || '').length);
  }

  function fail(msg) {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 600);
  }

  // Builds a WhatsApp message from the form and opens WhatsApp. The enquiry arrives on the
  // office number once the visitor presses Send inside WhatsApp.
  function submit(e) {
    e.preventDefault();
    if (!hasWhatsApp) return fail('WhatsApp number is not set up yet.');
    const form = e.target;
    const fd = new FormData(form);
    const get = (k) => String(fd.get(k) || '').trim();
    const lines = [
      '*New website enquiry - Apex Strategix*',
      '',
      `*Name:* ${get('fullName')}`,
      `*Contact no:* ${get('phone')}`,
      `*Email:* ${get('email') || 'Not provided'}`,
      `*Interested in:* ${interests.join(', ') || 'Not specified'}`,
      '',
      '*Message:*',
      get('message'),
    ];
    const url = `${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    setWaUrl(url);
    setError('');
    setSent(true);
    form.reset();
    setInterests([]);
    setFilled(0);
    setMsgLen(0);
  }

  return (
    <>
      <PageHero title="Let's build something great" sub="Tell us about your project and we will reply within one working day." />
      <section className="section contact-sec">
        <i className="blob b1" /><i className="blob b3" />
        <div className="container contact-grid">
          <div className={`fcard ${shake ? 'shake' : ''}`}>
            {sent ? (
              <div className="ok-panel">
                <div className="burst" aria-hidden="true">
                  {bits.map((b, k) => (
                    <i key={k} style={{ '--x': `${b.x}px`, '--y': `${b.y}px`, '--r': `${b.r}deg`, '--c': b.c, '--w': `${b.w}px`, '--dl': `${b.dl}s` }} />
                  ))}
                </div>
                <svg viewBox="0 0 52 52" width="84" height="84"><circle cx="26" cy="26" r="24" fill="none" stroke="#7ed958" strokeWidth="3" /><path className="tick" d="M15 27 l8 8 l15 -17" fill="none" stroke="#7ed958" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <h2>One last step!</h2>
                <p>WhatsApp has opened with your details filled in. Please press <b>Send</b> there so our team receives your enquiry.</p>
                <a className="btn" href={waUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp again</a>
                <button className="btn outline" onClick={() => setSent(false)}>Send another message</button>
              </div>
            ) : (
              <form className="fm" ref={formRef} onSubmit={submit} onInput={sync}>
                <div className="fm-head" style={{ '--i': 0 }}>
                  <span className="fm-badge"><Ico d={I.mail} size={26} /></span>
                  <div>
                    <h2>Send us a message</h2>
                    <p>Fill in your details and we will receive them on WhatsApp.</p>
                  </div>
                </div>

                <div className="prog-wrap" style={{ '--i': 1 }}>
                  <div className="prog" role="progressbar" aria-label="Form completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow={pct}>
                    <i style={{ width: `${pct}%` }} />
                  </div>
                  <span>{filled === REQUIRED.length ? 'All set. Ready to send' : `${filled} of ${REQUIRED.length} required fields`}</span>
                </div>

                <div className="two">
                  <Field i={2} icon={I.user} label="Full name *" name="fullName" required autoComplete="name" />
                  <Field i={3} icon={I.phone} label="Contact no *" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <Field i={4} icon={I.mail} label="Email address (optional)" name="email" type="email" autoComplete="email" />

                <fieldset style={{ '--i': 5 }} className="stg">
                  <legend>What are your interests?</legend>
                  <div className="chips">
                    {services.map((s) => {
                      const on = interests.includes(s.name);
                      return (
                        <button type="button" key={s.id} aria-pressed={on} className={on ? 'chip on' : 'chip'} onClick={() => toggle(s.name)}>
                          <span className="chip-ico">{on ? <Ico d={I.check} size={14} /> : s.icon}</span> {s.name}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="msg-wrap">
                  <Field i={7} icon={I.msg} label="Your message *" name="message" textarea rows="5" required maxLength={MAX_MSG} />
                  <span className={`count ${msgLen > MAX_MSG * 0.9 ? 'warn' : ''}`}>{msgLen}/{MAX_MSG}</span>
                </div>

                <button className="btn block send" style={{ '--i': 8 }}>
                  <span>Send on WhatsApp</span><span className="plane"><Ico d={I.send} size={20} /></span>
                </button>
                {error && <p className="note err" role="alert"><Ico d={I.warn} size={18} /> {error}</p>}
              </form>
            )}
          </div>

          <aside className="cside">
            <h3>Our services</h3>
            <ServiceSlider
              action={(s) => (
                <button type="button" className="btn small" onClick={() => toggle(s.name)}>
                  {interests.includes(s.name) ? 'Added ✓' : 'Add to my interests'}
                </button>
              )}
            />
            <div className="info">
              <a className="info-row" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`} target="_blank" rel="noopener noreferrer"><span className="info-ico"><Ico d={I.mail} /></span><span>{contact.email}</span></a>
              {hasPhone && <a className="info-row" href={contact.phoneHref}><span className="info-ico"><Ico d={I.phone} /></span><span>{contact.phone}</span></a>}
              {hasWhatsApp && <a className="info-row wa" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><span className="info-ico"><Ico d={I.wa} /></span><span>Chat on WhatsApp</span></a>}
              <div className="info-row static"><span className="info-ico"><Ico d={I.clock} /></span><span>{contact.hours}</span></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

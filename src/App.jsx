import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo.jsx';
import { I, Ico } from './icons.jsx';
import { contact, services, socialLinks, hasPhone, hasWhatsApp } from './data.js';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { name: 'Instagram', cls: 'ig', href: socialLinks.instagram,
    d: 'M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { name: 'LinkedIn', cls: 'in', href: socialLinks.linkedin,
    d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z' },
  { name: 'Facebook', cls: 'fb', href: socialLinks.facebook,
    d: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z' },
  { name: 'WhatsApp', cls: 'wa', href: contact.whatsapp,
    d: 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z' },
];

const waPath = socials.find((x) => x.cls === 'wa').d;

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    if (hash) {
      // jump to a section such as /services#web once the page has rendered
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // 3D tilt + spotlight on cards (mouse only)
  useEffect(() => {
    const sel = '.card, .svc2';
    const move = (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = e.target.closest?.(sel);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const k = r.width > 500 ? 5 : 12;
      el.style.setProperty('--ry', `${(x - 0.5) * k}deg`);
      el.style.setProperty('--rx', `${(0.5 - y) * k}deg`);
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
    };
    const reset = (e) => {
      const el = e.target.closest?.(sel);
      if (el && !el.contains(e.relatedTarget)) {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      }
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerout', reset);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', reset);
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav-in">
          <Link to="/" className="brand nav-logo" aria-label="Apex Strategix home">
            <AnimatedLogo variant="row" />
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </button>
          <nav className={`links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <i className="ft-line" aria-hidden="true" />
        <div className="deco" aria-hidden="true">
          <i className="ft-glow g1" /><i className="ft-glow g2" />
        </div>

        <div className="container ft-wrap">
          {pathname !== '/' && pathname !== '/contact' && (
          <div className="ft-cta">
            <div>
              <h3>Have a project in mind?</h3>
              <p>Tell us what you need and we will reply within one working day.</p>
            </div>
            <div className="ft-cta-btns">
              <Link className="btn light" to="/contact">Start a project</Link>
              <a className="btn outline" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`} target="_blank" rel="noopener noreferrer">Email us</a>
            </div>
          </div>
          )}

          <div className="ft-grid">
            <div className="ft-brand">
              <Link to="/" aria-label="Apex Strategix home"><AnimatedLogo variant="row" theme="dark" /></Link>
              <p>Strategy-led digital solutions for growing businesses.</p>
              <div className="social">
                {socials.filter((s) => s.cls !== 'wa' || hasWhatsApp).map((s) => (
                  <a key={s.name} className={`soc ${s.cls}`} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <nav className="ft-col" aria-label="Company">
              <b>Company</b>
              {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </nav>

            <nav className="ft-col" aria-label="Services">
              <b>Services</b>
              {services.map((s) => <Link key={s.id} to={`/services#${s.id}`}>{s.name}</Link>)}
            </nav>

            <div className="ft-col ft-contact">
              <b>Get in touch</b>
              <a className="ft-chip" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`} target="_blank" rel="noopener noreferrer">
                <span className="ft-ico"><Ico d={I.mail} /></span><span className="ft-txt">{contact.email}</span>
              </a>
              {hasPhone && (
              <a className="ft-chip" href={contact.phoneHref}>
                <span className="ft-ico"><Ico d={I.phone} /></span><span className="ft-txt">{contact.phone}</span>
              </a>
              )}
              {hasWhatsApp && (
              <a className="ft-chip wa" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <span className="ft-ico"><Ico d={waPath} /></span><span className="ft-txt">Chat on WhatsApp</span>
              </a>
              )}
              <div className="ft-chip static">
                <span className="ft-ico"><Ico d={I.clock} /></span><span className="ft-txt">{contact.hours}</span>
              </div>
            </div>
          </div>

          <div className="ft-bottom">
            <p>© {new Date().getFullYear()} Apex Strategix. All rights reserved.</p>
            <button type="button" className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top <Ico d={I.up} size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

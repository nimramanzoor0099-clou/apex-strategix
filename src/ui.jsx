import { Fragment, useEffect, useRef, useState } from 'react';
import { services } from './data.js';

export function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView();
  return <div ref={ref} className={`rv ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>{children}</div>;
}

export function Count({ to, suffix = '' }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let start;
    const step = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [seen, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

// Text flow: letters rise in one after another
export function Flow({ text, delay = 0, as: Tag = 'h1' }) {
  let i = 0;
  return (
    <Tag className="flow" aria-label={text}>
      {text.split(' ').map((w, wi) => (
        <Fragment key={wi}>
          <span className="w" aria-hidden="true">
            {[...w].map((ch, ci) => {
              const idx = i++;
              return <span key={ci} className="ch" style={{ '--i': idx, '--base': `${delay}ms` }}>{ch}</span>;
            })}
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}

// Typewriter that cycles through words
export function Typed({ words }) {
  const [t, setT] = useState('');
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    let d = del ? 40 : 90;
    if (!del && t === w) d = 1500;
    const id = setTimeout(() => {
      if (!del && t === w) setDel(true);
      else if (del && t === '') { setDel(false); setWi((wi + 1) % words.length); }
      else setT(del ? w.slice(0, -1 + t.length) : w.slice(0, t.length + 1));
    }, d);
    return () => clearTimeout(id);
  }, [t, del, wi, words]);
  return <span className="typed grad">{t}<i className="caret" /></span>;
}

export function Deco({ zig = true }) {
  return (
    <div className="deco" aria-hidden="true">
      <i className="dc d1" /><i className="dc d2" /><i className="dc d3" />
      {zig && <i className="dc d4" />}
      {zig && (
        <svg className="zz" viewBox="0 0 300 120">
          <path pathLength="1" d="M5 105 L75 45 L125 90 L205 15 L295 40" />
        </svg>
      )}
    </div>
  );
}

export function PageHero({ title, sub }) {
  return (
    <section className="phero">
      <i className="blob b1" /><i className="blob b2" />
      <Deco />
      <div className="container">
        <Flow text={title} />
        <span className="uline" />
        <p className="lead fade">{sub}</p>
      </div>
    </section>
  );
}

// action(service) returns the button/link shown on each slide
export function ServiceSlider({ action, start = 0 }) {
  const [i, setI] = useState(start);
  const [paused, setPaused] = useState(false);
  const n = services.length;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, n]);
  return (
    <div className="sl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="sl-view">
        <div className="sl-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {services.map((s, k) => (
            <div className={`sl-slide ${k === i ? 'on' : ''}`} key={s.id}>
              <span className="sl-ico">{s.icon}</span>
              <div><h3>{s.name}</h3><p>{s.short}</p>{action(s)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="sl-ctrl">
        <button type="button" aria-label="Previous" onClick={() => setI((i - 1 + n) % n)}>‹</button>
        {services.map((s, k) => <i key={s.id} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
        <button type="button" aria-label="Next" onClick={() => setI((i + 1) % n)}>›</button>
      </div>
    </div>
  );
}

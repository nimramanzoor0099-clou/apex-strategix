import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data.js';
import { PageHero, Reveal, ServiceSlider } from '../ui.jsx';

const quote = (s) => `/contact?service=${encodeURIComponent(s.name)}`;

export default function Services() {
  const [active, setActive] = useState(services[0].id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    services.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero title="Our services" sub="Everything you need to plan, build and grow your digital product, in one place." />
      <section className="section">
        <div className="container">
          <ServiceSlider action={(s) => <Link className="btn small" to={quote(s)}>Get a quote</Link>} />

          <div className="svc-layout">
            <aside className="side">
              <b>Services</b>
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>{s.icon} {s.name}</a>
              ))}
              <Link className="btn small" to="/contact">Talk to us</Link>
            </aside>

            <div>
              {services.map((s, i) => (
                <Reveal key={s.id} delay={60}>
                  <div className="svc2" id={s.id}>
                    <div className="svc-ico">{s.icon}</div>
                    <div>
                      <h2>{s.name}</h2>
                      <p>{s.short}</p>
                      <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                      <Link className="btn" to={quote(s)}>Get started with {s.name.split(' ')[0]}</Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

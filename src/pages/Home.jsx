import { Link } from 'react-router-dom';
import AnimatedLogo from '../AnimatedLogo.jsx';
import Illustration from '../Illustration.jsx';
import { services, steps, stack } from '../data.js';
import { Reveal, Flow, Typed, Count, Deco } from '../ui.jsx';

const words = ['modern websites', 'Flutter apps', 'SaaS platforms', 'growth campaigns'];

export default function Home() {
  return (
    <>
      <section className="hero2">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" />
        <Deco zig={false} />
        <div className="container hero-in">
          <div>
            <span className="pill fade">Digital solutions studio</span>
            <Flow text="We turn strategy into software that grows your business." delay={200} />
            <p className="typeline fade">We design &amp; build <Typed words={words} /></p>
            <p className="lead fade">Websites, apps, SaaS products and digital marketing, planned and built by one team that cares about your results.</p>
            <div className="row fade">
              <Link className="btn" to="/contact">Start a project</Link>
              <Link className="btn ghost" to="/services">Explore services</Link>
            </div>
          </div>
          <div className="orb"><div className="ring" /><AnimatedLogo /></div>
        </div>
      </section>

      <div className="marq"><div className="marq-in">{[...stack, ...stack].map((t, i) => <span key={i}>{t}</span>)}</div></div>

      <section className="section">
        <div className="container">
          <Reveal><h2>What we do</h2></Reveal>
          <div className="grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 90}>
                <Link to="/services" className="card">
                  <span className="ico">{s.icon}</span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="more">Learn more <b>→</b></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal><h2>How we work</h2><p className="lead">A simple, transparent workflow from first call to launch day.</p></Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 130} className="step">
                <div className="num">{s.icon}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats">
          {[[50, '+', 'Projects delivered'], [6, '', 'Core services'], [98, '%', 'Client satisfaction'], [24, '/7', 'Support & monitoring']].map(([n, sx, l]) => (
            <Reveal key={l}><b><Count to={n} suffix={sx} /></b><span>{l}</span></Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container showcase">
          <Reveal className="show-text">
            <h2>Planned, designed and built under one roof</h2>
            <p className="lead">
              From the first sketch to the day you go live, one team looks after strategy, design, code and marketing,
              so nothing gets lost between hand-offs.
            </p>
            <ul className="ticks">
              <li>One point of contact from kick-off to launch</li>
              <li>Weekly demos, so you always see real progress</li>
              <li>Support and monitoring after go-live</li>
            </ul>
            <div className="row">
              <Link className="btn" to="/contact">Talk to our team</Link>
              <Link className="btn ghost" to="/services">See what we build</Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="show-art"><Illustration /></Reveal>
        </div>
      </section>

      <section className="cta2">
        <i className="blob b1" /><i className="blob b3" />
        <div className="container">
          <Flow as="h2" text="Have an idea? Let's talk." />
          <Link className="btn light" to="/contact">Contact us</Link>
        </div>
      </section>
    </>
  );
}

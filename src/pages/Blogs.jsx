import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs, blogCats, journey, contact } from '../data.js';
import { PageHero, Reveal, Flow } from '../ui.jsx';
import { CardArt, FeaturedArt } from '../BlogArt.jsx';

const featured = blogs[0];

function BlogCard({ b, i }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`card blog bl-in ${open ? 'open' : ''}`} style={{ '--d': `${i * 70}ms` }}>
      <CardArt cat={b.cat} />
      <div className="bl-top">
        <span className={`tag t${i % 4}`}>{b.tag}</span>
        <span className="bl-read">{b.read} read</span>
      </div>
      <h3>{b.title}</h3>
      <p>{b.text}</p>
      <div className="bl-tips" aria-hidden={!open}>
        <ol>{b.tips.map((t, k) => <li key={k} style={{ '--k': k }}>{t}</li>)}</ol>
      </div>
      <small>{b.date}</small>
      <div className="bl-actions">
        <button type="button" className="bl-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Hide key steps' : 'Show key steps'} <b>{open ? '↑' : '↓'}</b>
        </button>
        <Link to="/contact" className="more">Talk to us <b>→</b></Link>
      </div>
    </article>
  );
}

export default function Blogs() {
  const [cat, setCat] = useState('All');
  const list = blogs.filter((b) => cat === 'All' || b.cat === cat);

  return (
    <>
      <PageHero title="Blogs" sub="Practical insights on websites, apps, SaaS and digital growth from the Apex Strategix team." />

      <section className="section">
        <div className="container showcase feat">
          <Reveal className="show-text">
            <span className="tag t1">Featured · Web design</span>
            <h2>{featured.title}</h2>
            <p className="lead">{featured.text}</p>
            <ul className="ticks">
              {featured.tips.slice(0, 3).map((t, k) => <li key={k}>{t}</li>)}
            </ul>
            <div className="row">
              <Link className="btn" to="/contact">Talk to us</Link>
              <Link className="btn ghost" to="/services">Our services</Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="show-art"><FeaturedArt /></Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <h2>Latest articles</h2>
            <div className="chips bl-filter" role="group" aria-label="Filter articles">
              {blogCats.map((c) => (
                <button type="button" key={c} aria-pressed={cat === c} className={cat === c ? 'chip on' : 'chip'} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </Reveal>
          <div className="grid bl-grid" key={cat}>
            {list.map((b, i) => <BlogCard key={b.id} b={b} i={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2>From visitor to loyal customer</h2>
            <p className="lead">Great digital growth follows one path. Here is how our services support every stage.</p>
          </Reveal>
          <div className="pb">
            {journey.map((s, i) => (
              <Reveal key={s.t} delay={i * 120} className="pb-item">
                <div className="pb-card">
                  <span className="pb-num">{i + 1}</span>
                  <span className="pb-ico">{s.icon}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="pb-svc">{s.s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta2">
        <i className="blob b1" /><i className="blob b3" />
        <div className="container">
          <Flow as="h2" text="Ready to grow your business online?" />
          <p style={{ color: 'rgba(255,255,255,.9)', margin: 0 }}>Tell us your goals and we will plan, design and build the right solution.</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link className="btn light" to="/contact">Start a project</Link>
            <a className="btn outline" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`} target="_blank" rel="noopener noreferrer">Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}

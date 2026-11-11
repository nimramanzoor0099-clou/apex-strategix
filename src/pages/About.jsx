import { Count, PageHero, Reveal } from '../ui.jsx';

const values = [
  ['🔎', 'Clarity', 'Plain-language plans, honest timelines and no surprises.'],
  ['💎', 'Quality', 'Clean code, thoughtful design and thorough testing on every release.'],
  ['🤝', 'Partnership', 'We work as part of your team and stay with you after launch.'],
];

export default function About() {
  return (
    <>
      <PageHero title="About Apex Strategix" sub="We combine strategy, design and engineering to help businesses move up with technology that fits their goals and budget." />
      <section className="section">
        <div className="container">
          <div className="grid">
            <Reveal><div className="card"><h3>Our mission</h3><p>To make professional digital products accessible to ambitious businesses, and to measure our success by theirs.</p></div></Reveal>
            <Reveal delay={120}><div className="card"><h3>Our vision</h3><p>To be the most trusted technology and growth partner for startups and growing companies.</p></div></Reveal>
          </div>
          <Reveal><h2>What we stand for</h2></Reveal>
          <div className="grid">
            {values.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 120}><div className="card"><span className="ico">{ic}</span><h3>{t}</h3><p>{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container stats">
          {[[50, '+', 'Projects delivered'], [30, '+', 'Happy clients'], [5, '+', 'Years of experience'], [98, '%', 'Client satisfaction']].map(([n, sx, l]) => (
            <Reveal key={l}><b><Count to={n} suffix={sx} /></b><span>{l}</span></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

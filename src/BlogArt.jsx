import { useInView } from './ui.jsx';

// Small looping illustration shown at the top of each blog card.
export function CardArt({ cat }) {
  return (
    <div className={`ca ca-${cat.toLowerCase()}`} aria-hidden="true">
      <svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice">
        {cat === 'Web' && (<>
          <rect width="320" height="150" fill="#dff1ff" />
          <circle cx="40" cy="125" r="60" fill="#fff" fillOpacity=".5" /><circle className="ca-fl" cx="285" cy="30" r="9" fill="#febd59" />
          <rect x="70" y="22" width="180" height="108" rx="10" fill="#fff" />
          <path d="M70 32a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v10H70z" fill="#eef4fa" />
          <circle cx="84" cy="32" r="3" fill="#fd5757" /><circle cx="94" cy="32" r="3" fill="#febd59" /><circle cx="104" cy="32" r="3" fill="#7ed958" />
          <rect x="86" y="52" width="90" height="8" rx="4" fill="#d7e3ef" /><rect x="86" y="66" width="60" height="6" rx="3" fill="#e6eef6" />
          <rect x="190" y="52" width="46" height="34" rx="6" fill="#019cf6" fillOpacity=".22" />
          <g className="ca-btn"><rect x="86" y="92" width="70" height="24" rx="12" fill="#7ed958" /><text x="121" y="108" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">Book now</text></g>
          <circle className="ca-rip" cx="121" cy="104" r="10" fill="none" stroke="#019cf6" strokeWidth="2.5" />
          <polygon className="ca-cursor" points="124,102 124,118 128.5,114 132,121 135,119.5 131.5,113 137,113" fill="#10202e" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        </>)}
        {cat === 'Apps' && (<>
          <rect width="320" height="150" fill="#fff1d6" />
          <circle cx="260" cy="120" r="55" fill="#fff" fillOpacity=".55" /><circle className="ca-fl" cx="60" cy="40" r="10" fill="#fd5757" /><circle className="ca-fl d2" cx="95" cy="115" r="7" fill="#019cf6" />
          <rect x="118" y="8" width="84" height="138" rx="16" fill="#10202e" />
          <rect x="124" y="20" width="72" height="116" rx="8" fill="#fff" />
          {[0, 1, 2].map((k) => (
            <g key={k} className="ca-card" style={{ '--k': k }}>
              <rect x="130" y={28 + k * 34} width="60" height="28" rx="7" fill={['#dff1ff', '#eaf9e2', '#ffe9c7'][k]} />
              <circle cx="143" cy={42 + k * 34} r="7" fill={['#019cf6', '#7ed958', '#febd59'][k]} />
              <rect x="155" y={37 + k * 34} width="28" height="5" rx="2.5" fill="#10202e" fillOpacity=".25" /><rect x="155" y={46 + k * 34} width="20" height="4" rx="2" fill="#10202e" fillOpacity=".15" />
            </g>
          ))}
          <g className="ca-pop"><circle cx="204" cy="22" r="10" fill="#fd5757" /><text x="204" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">1</text></g>
        </>)}
        {cat === 'SaaS' && (<>
          <rect width="320" height="150" fill="#e6f8dc" />
          <circle cx="50" cy="20" r="50" fill="#fff" fillOpacity=".55" />
          <rect x="40" y="22" width="240" height="108" rx="10" fill="#fff" /><path d="M50 22h24v108H50a10 10 0 0 1-10-10V32a10 10 0 0 1 10-10z" fill="#10202e" />
          <circle cx="57" cy="40" r="4" fill="#019cf6" /><circle cx="57" cy="56" r="4" fill="#7ed958" /><circle cx="57" cy="72" r="4" fill="#febd59" />
          {[0, 1, 2, 3, 4].map((k) => (
            <rect key={k} className="ca-bar" style={{ '--k': k }} x={92 + k * 26} y={124 - [40, 62, 48, 80, 94][k]} width="16" height={[40, 62, 48, 80, 94][k]} rx="4" fill={['#019cf6', '#7ed958', '#febd59', '#fd5757', '#019cf6'][k]} />
          ))}
          <circle cx="244" cy="58" r="20" fill="none" stroke="#e3eaf2" strokeWidth="8" />
          <circle className="ca-ring" cx="244" cy="58" r="20" fill="none" stroke="#7ed958" strokeWidth="8" strokeLinecap="round" pathLength="100" strokeDasharray="100" transform="rotate(-90 244 58)" />
          <rect className="ca-fl" x="222" y="94" width="48" height="20" rx="10" fill="#019cf6" fillOpacity=".18" />
        </>)}
        {cat === 'Marketing' && (<>
          <rect width="320" height="150" fill="#ffe3e3" />
          <circle cx="270" cy="30" r="48" fill="#fff" fillOpacity=".55" />
          {[0, 1, 2, 3, 4].map((k) => (
            <rect key={k} className="ca-bar" style={{ '--k': k }} x={70 + k * 38} y={128 - [30, 48, 42, 70, 92][k]} width="24" height={[30, 48, 42, 70, 92][k]} rx="6" fill={['#fd5757', '#febd59', '#7ed958', '#019cf6', '#fd5757'][k]} fillOpacity=".92" />
          ))}
          <path className="ca-line" pathLength="1" d="M82 90 L120 70 L158 78 L196 46 L246 24" fill="none" stroke="#10202e" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          <polygon className="ca-fl" points="236,14 258,14 258,36" fill="#10202e" />
          {[60, 120, 190, 270].map((x, k) => <circle key={x} className="ca-rise" style={{ '--k': k }} cx={x} cy="140" r="6" fill="#fd5757" fillOpacity=".55" />)}
        </>)}
        {cat === 'Strategy' && (<>
          <rect width="320" height="150" fill="#e3f1ff" />
          <circle cx="270" cy="125" r="52" fill="#fff" fillOpacity=".55" />
          <circle cx="160" cy="78" r="56" fill="#fff" /><circle cx="160" cy="78" r="42" fill="#fd5757" /><circle cx="160" cy="78" r="28" fill="#fff" /><circle cx="160" cy="78" r="14" fill="#fd5757" />
          <circle className="ca-rip hit" cx="160" cy="78" r="14" fill="none" stroke="#019cf6" strokeWidth="3" />
          <g className="ca-dart"><line x1="160" y1="78" x2="236" y2="22" stroke="#10202e" strokeWidth="4" strokeLinecap="round" /><polygon points="236,12 252,16 240,30" fill="#febd59" /></g>
          <path className="ca-route" d="M20 132 C60 100 90 140 120 118" fill="none" stroke="#019cf6" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" />
          <circle className="ca-fl" cx="40" cy="38" r="8" fill="#7ed958" />
        </>)}
      </svg>
    </div>
  );
}

// Large featured scene: a website that brings in enquiries, orders and reviews.
export function FeaturedArt() {
  const [ref, seen] = useInView();
  const notes = [
    { x: 300, y: 28, c: '#019cf6', t: 'New enquiry' },
    { x: 8, y: 150, c: '#7ed958', t: 'New order' },
    { x: 318, y: 262, c: '#febd59', t: '5-star review' },
  ];
  return (
    <div ref={ref} className={`fa ${seen ? 'play' : ''}`}>
      <svg viewBox="0 0 480 340" role="img" aria-label="Animated illustration of a website bringing in enquiries, orders and reviews">
        <defs>
          <filter id="fa-sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#10202e" floodOpacity=".2" /></filter>
          <linearGradient id="fa-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#dff1ff" /><stop offset="1" stopColor="#fff1d6" /></linearGradient>
        </defs>
        <circle className="fa-bgc" cx="240" cy="168" r="160" fill="url(#fa-bg)" />
        <circle className="fa-orbit" cx="240" cy="168" r="176" fill="none" stroke="#019cf6" strokeOpacity=".45" strokeWidth="2" strokeDasharray="7 11" />
        <g className="fa-laptop" filter="url(#fa-sh)">
          <rect x="90" y="56" width="300" height="196" rx="14" fill="#10202e" />
          <rect x="100" y="66" width="280" height="176" rx="7" fill="#fff" />
          <rect x="100" y="66" width="280" height="22" rx="7" fill="#eef4fa" />
          <circle cx="114" cy="77" r="4" fill="#fd5757" /><circle cx="127" cy="77" r="4" fill="#febd59" /><circle cx="140" cy="77" r="4" fill="#7ed958" />
          <rect x="116" y="104" width="120" height="12" rx="6" fill="#10202e" fillOpacity=".8" />
          <rect x="116" y="124" width="150" height="8" rx="4" fill="#d7e3ef" /><rect x="116" y="138" width="100" height="8" rx="4" fill="#e6eef6" />
          <g className="fa-cta"><rect x="116" y="162" width="96" height="30" rx="15" fill="#019cf6" /><text x="164" y="182" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">Get a quote</text></g>
          <rect x="262" y="104" width="104" height="116" rx="10" fill="#f4f9fe" />
          <path className="fa-line" pathLength="1" d="M274 206 L300 176 L322 190 L350 140" fill="none" stroke="#7ed958" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
          <polygon className="fa-head" points="338,126 362,126 362,150" fill="#7ed958" />
          <rect x="116" y="206" width="64" height="8" rx="4" fill="#d7e3ef" /><rect x="116" y="220" width="44" height="8" rx="4" fill="#e6eef6" />
          <path d="M50 262h380l-24 22H74z" fill="#cfd9e3" /><rect x="200" y="262" width="80" height="6" rx="3" fill="#b3c2d1" />
        </g>
        {notes.map((n, k) => (
          <g key={k} className="fa-note" style={{ '--k': k }}>
            <rect x={n.x} y={n.y} width="150" height="42" rx="21" fill="#fff" filter="url(#fa-sh)" />
            <circle cx={n.x + 24} cy={n.y + 21} r="9" fill={n.c} />
            <path d={`M${n.x + 19.5} ${n.y + 21} l3.2 3.2 6-6.6`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <text x={n.x + 42} y={n.y + 26} fontSize="13" fontWeight="700" fill="#10202e">{n.t}</text>
          </g>
        ))}
        <circle className="fa-fd" cx="440" cy="120" r="10" fill="#fd5757" /><circle className="fa-fd d2" cx="40" cy="60" r="8" fill="#febd59" /><circle className="fa-fd d3" cx="60" cy="290" r="11" fill="#7ed958" />
      </svg>
    </div>
  );
}

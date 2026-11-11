import { useInView } from './ui.jsx';

// Animated "build and grow" scene: browser window with a growing chart,
// a phone with a progress ring, floating status chips and brand-colour dots.
// Animation starts when the scene scrolls into view.
export default function Illustration() {
  const [ref, seen] = useInView();
  const bars = [
    { x: 100, h: 50, c: '#019cf6' },
    { x: 144, h: 80, c: '#7ed958' },
    { x: 188, h: 65, c: '#febd59' },
    { x: 232, h: 110, c: '#fd5757' },
    { x: 276, h: 140, c: '#019cf6' },
  ];
  return (
    <div ref={ref} className={`ill ${seen ? 'play' : ''}`}>
      <svg viewBox="0 0 520 440" role="img" aria-label="Animated illustration of a website and mobile app growing results">
        <defs>
          <filter id="ill-sh" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#10202e" floodOpacity=".18" />
          </filter>
          <linearGradient id="ill-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff1ff" />
            <stop offset="1" stopColor="#eefbe7" />
          </linearGradient>
        </defs>

        <circle className="ill-bgc" cx="260" cy="225" r="196" fill="url(#ill-bg)" />
        <circle className="ill-orbit" cx="260" cy="225" r="212" fill="none" stroke="#019cf6" strokeOpacity=".45" strokeWidth="2" strokeDasharray="7 11" />

        {/* browser window */}
        <g className="ill-win" filter="url(#ill-sh)">
          <rect x="70" y="72" width="330" height="250" rx="18" fill="#fff" />
          <path d="M70 90a18 18 0 0 1 18-18h294a18 18 0 0 1 18 18v14H70z" fill="#f1f6fb" />
          <circle cx="92" cy="88" r="5" fill="#fd5757" />
          <circle cx="110" cy="88" r="5" fill="#febd59" />
          <circle cx="128" cy="88" r="5" fill="#7ed958" />
          <rect x="160" y="81" width="200" height="14" rx="7" fill="#fff" />

          <rect className="ill-sk" x="92" y="122" width="120" height="10" rx="5" fill="#d7e3ef" />
          <rect className="ill-sk s2" x="92" y="140" width="80" height="8" rx="4" fill="#e6eef6" />
          <rect className="ill-sk s3" x="262" y="122" width="116" height="26" rx="13" fill="#019cf6" fillOpacity=".14" />

          <line x1="90" y1="300" x2="384" y2="300" stroke="#dbe6f1" strokeWidth="2" />
          {bars.map((b, i) => (
            <rect key={i} className="ill-bar" style={{ '--k': i }} x={b.x} y={300 - b.h} width="28" height={b.h} rx="6" fill={b.c} fillOpacity=".9" />
          ))}
          <path className="ill-line" pathLength="1" d="M114 222 L158 186 L202 206 L246 150 L302 112" fill="none" stroke="#019cf6" strokeWidth="6" strokeLinejoin="miter" />
          <polygon className="ill-head" points="294,100 324,100 324,130" fill="#019cf6" />
        </g>

        {/* phone */}
        <g className="ill-phone" filter="url(#ill-sh)">
          <rect x="338" y="168" width="116" height="206" rx="24" fill="#10202e" />
          <rect x="346" y="184" width="100" height="174" rx="16" fill="#fff" />
          <rect x="378" y="173" width="36" height="5" rx="2.5" fill="#34485a" />
          <circle cx="396" cy="246" r="30" fill="none" stroke="#e3eaf2" strokeWidth="9" />
          <circle className="ill-prog" cx="396" cy="246" r="30" fill="none" stroke="#7ed958" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray="100" transform="rotate(-90 396 246)" />
          <text x="396" y="252" textAnchor="middle" fontSize="15" fontWeight="800" fill="#10202e">98%</text>
          <rect x="360" y="296" width="72" height="8" rx="4" fill="#d7e3ef" />
          <rect x="370" y="312" width="52" height="8" rx="4" fill="#e6eef6" />
          <rect x="366" y="330" width="60" height="16" rx="8" fill="#019cf6" />
        </g>

        {/* status chips */}
        <g className="ill-chip c1">
          <rect x="22" y="38" width="162" height="42" rx="21" fill="#fff" filter="url(#ill-sh)" />
          <circle cx="45" cy="59" r="8" fill="#7ed958" />
          <path d="M41 59l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="62" y="64" fontSize="13" fontWeight="700" fill="#10202e">Design approved</text>
        </g>
        <g className="ill-chip c2">
          <rect x="236" y="364" width="136" height="42" rx="21" fill="#fff" filter="url(#ill-sh)" />
          <circle className="ill-live" cx="259" cy="385" r="7" fill="#febd59" />
          <text x="276" y="390" fontSize="13" fontWeight="700" fill="#10202e">Launch ready</text>
        </g>

        {/* floating brand dots */}
        <circle className="ill-fd d1" cx="470" cy="110" r="11" fill="#febd59" />
        <circle className="ill-fd d2" cx="42" cy="262" r="9" fill="#7ed958" />
        <circle className="ill-fd d3" cx="64" cy="372" r="12" fill="#fd5757" />
        <circle className="ill-fd d4" cx="480" cy="300" r="8" fill="#019cf6" />
      </svg>
    </div>
  );
}

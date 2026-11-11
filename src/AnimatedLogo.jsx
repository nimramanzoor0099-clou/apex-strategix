// Animated Apex Strategix logo (ported from apex-strategix-animated-logo.html).
// variant: 'stack' (icon above name) | 'row' (icon beside name)
// theme:   'light' (dark text) | 'dark' (white text, for dark backgrounds)
// Size is controlled by CSS: set font-size (or --al-size) on the element/parent.
const NAME = 'Apex Strategix'.split('');
const ZIG = 'M148 207 L222 131 L282 191 L362 111';

export default function AnimatedLogo({ variant = 'stack', theme = 'light', className = '' }) {
  return (
    <div className={`al al-${variant} al-${theme} ${className}`} role="img" aria-label="Apex Strategix">
      <svg className="al-mark" viewBox="128 62 282 180" aria-hidden="true">
        <path className="al-zig" pathLength="1" d={ZIG} />
        <path className="al-sheen" pathLength="1" d={ZIG} />
        <circle className="al-ring" cx="398" cy="75" r="30" />
        <circle className="al-ring b" cx="398" cy="75" r="30" />
        <polygon className="al-head" points="318,68 405,68 405,155" />
        <circle className="al-dot o" cx="281" cy="109" r="22" />
        <circle className="al-dot g" cx="222" cy="214" r="22" />
        <circle className="al-dot r" cx="344" cy="213" r="22" />
      </svg>
      <div className="al-name" aria-hidden="true">
        {NAME.map((ch, i) =>
          ch === ' ' ? (
            <span key={i} className="al-sp" style={{ '--i': i }} />
          ) : (
            <span key={i} style={{ '--i': i }}>{ch}</span>
          )
        )}
      </div>
    </div>
  );
}

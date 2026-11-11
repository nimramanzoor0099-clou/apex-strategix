export default function Logo({ size = 40, animate = false }) {
  const c = (n) => (animate ? n : undefined);
  return (
    <svg width={size * 1.57} height={size} viewBox="128 62 282 180" aria-hidden="true" style={{ overflow: 'visible' }}>
      <path className={c('lg-zig')} pathLength="1" d="M148 207 L222 131 L282 191 L362 111" fill="none" stroke="#019cf6" strokeWidth="44" />
      <polygon className={c('lg-head')} points="318,68 405,68 405,155" fill="#019cf6" />
      <circle className={c('lg-dot d1')} cx="281" cy="109" r="22" fill="#febd59" />
      <circle className={c('lg-dot d2')} cx="222" cy="214" r="22" fill="#7ed958" />
      <circle className={c('lg-dot d3')} cx="344" cy="213" r="22" fill="#fd5757" />
    </svg>
  );
}

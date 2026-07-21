// Basit, el çizimi hissi veren inline SVG ikonlar (stroke tabanlı).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Leaf = (p) => (
  <svg {...base} {...p}>
    <path d="M11 20C6 20 4 15 5 8c6-1 11 1 13 5 1 4-2 7-7 7Z" />
    <path d="M5 8c4 3 6 6 6 12" />
  </svg>
)

export const Sprout = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20v-6" />
    <path d="M12 14c-4 0-6-2-6-6 4 0 6 2 6 6Z" />
    <path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5Z" />
  </svg>
)

export const Brain = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1V5a3 3 0 0 0-3-2Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1" />
  </svg>
)

export const Heart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.5-7-9a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 4.5-7 9-7 9Z" />
  </svg>
)

export const People = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.4" />
    <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" />
    <path d="M14 20c0-2.4 1.6-4 3.5-4S21 17.6 21 20" />
  </svg>
)

export const Run = (p) => (
  <svg {...base} {...p}>
    <circle cx="14" cy="5" r="2" />
    <path d="M6 21l3-5 3 1 1-5-4 1-2 3" />
    <path d="M12 12l3 2 3-1" />
  </svg>
)

export const Spark = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8l1.6 2.4L16 12l-2.4 1.6L12 16l-1.6-2.4L8 12l2.4-1.6Z" />
  </svg>
)

export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5c0 8 7 15 15 15l1-3-4-2-2 2c-2-1-4-3-5-5l2-2-2-4-3 1Z" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </svg>
)

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 0 0-14 0c0 3.5 3 7 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
)

export const Insta = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const Arrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 2.5V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5L12 3Z" />
    <path d="M9.5 12l2 2 3.5-4" />
  </svg>
)

export const Book = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5V5.5Z" />
    <path d="M20 5.5C20 4.7 19.3 4 18.5 4H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5V5.5Z" />
  </svg>
)

export const iconByName = {
  brain: Brain,
  heart: Heart,
  people: People,
  run: Run,
  spark: Spark,
  shield: Shield,
  book: Book,
  sprout: Sprout,
  leaf: Leaf,
}

/* ---------- emoji tarzı doodle'lar ---------- */
export const Cloud = (p) => (
  <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 32h32a8 8 0 0 0 0-16 10 10 0 0 0-19-3 8 8 0 0 0-13 6 6 6 0 0 0 0 13Z" />
  </svg>
)

export const StarDoodle = (p) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" {...p}>
    <path d="M20 4l4.5 9.5L35 15l-7.5 7 2 10.5L20 27l-9.5 5.5 2-10.5L5 15l10.5-1.5L20 4Z" />
  </svg>
)

export const Plane = (p) => (
  <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M40 4L4 20l14 5 5 14L40 4Z" />
    <path d="M40 4L18 25" />
  </svg>
)

export const Sparkle = (p) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" {...p}>
    <path d="M20 6v9M20 25v9M6 20h9M25 20h9" />
  </svg>
)

export const Squiggle = (p) => (
  <svg viewBox="0 0 90 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" {...p}>
    <path d="M3 8 Q 13 1 23 8 T 43 8 T 63 8 T 87 8" />
  </svg>
)

export const Dots = (p) => (
  <svg viewBox="0 0 60 60" fill="currentColor" {...p}>
    {[...Array(4)].map((_, r) =>
      [...Array(4)].map((_, c) => (
        <circle key={`${r}-${c}`} cx={8 + c * 15} cy={8 + r * 15} r="3.4" />
      ))
    )}
  </svg>
)

export const HeartDoodle = (p) => (
  <svg viewBox="0 0 40 38" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" {...p}>
    <path d="M20 34S4 24 4 13a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 11-16 21-16 21Z" />
  </svg>
)

export const DashPath = (p) => (
  <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 9" {...p}>
    <path d="M4 8c40 4 60 20 40 34-14 10-2 12 32 10" />
  </svg>
)

// Dekoratif yaprak dalı doodle'ı
export const Branch = (p) => (
  <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M4 54C30 40 50 30 116 8" />
    <path d="M40 40c-4-8-2-12 2-16 3 5 3 10-2 16Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M66 28c-4-8-2-12 2-16 3 5 3 10-2 16Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M92 18c-4-8-2-12 2-16 3 5 3 10-2 16Z" fill="currentColor" fillOpacity="0.25" />
  </svg>
)

/* Shared: Icon (Lucide injector), Logo lockup, and seed data. */

function Icon({ name, size = 20, color, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      window.lucide.createIcons();
    }
  }, [name]);
  return <span ref={ref} className="lic" style={{ width: size, height: size, color, ...style }} />;
}

const ArchMark = ({ size = 30, color }) => (
  <span className="mk" style={{ width: size, height: size, color, display: 'inline-flex' }}>
    <svg viewBox="0 0 48 48" fill="none" style={{ width: '100%', height: '100%' }}>
      <path d="M9 43 L9 22 A15 15 0 0 1 39 22 L39 43" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M17 43 L17 24 A7 7 0 0 1 31 24 L31 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  </span>
);

function Logo({ markSize = 30 }) {
  return (
    <a className="lock" href="#top">
      <ArchMark size={markSize} />
      <span className="wd">Open<b>Aisle</b></span>
    </a>
  );
}

const GRAD = {
  saffron: 'linear-gradient(150deg, var(--saffron), #B8492F 55%, var(--claret))',
  sage: 'linear-gradient(150deg, var(--sage), #5C6B4A 60%, var(--claret-deep))',
  gold: 'linear-gradient(150deg, #D8A24E, #B07A2E 55%, var(--claret))',
  claret: 'linear-gradient(150deg, #A63B57, var(--claret) 60%, var(--ink))',
};

const WEDDINGS = [
  { id: 1, couple: 'Priya & Daniel', tradition: 'South Asian · Hindu ceremony', region: 'South Asian', city: 'Jaipur, India', date: 'Sat 14 Mar 2026', price: 180, seats: 3, rating: 4.9, reviews: 28, grad: 'saffron', cap: 'Marigold ceremony · Jaipur' },
  { id: 2, couple: 'Amara & Kwame', tradition: 'West African · Yoruba wedding', region: 'West African', city: 'Lagos, Nigeria', date: 'Sun 22 Mar 2026', price: 145, seats: 9, rating: 4.8, reviews: 41, grad: 'gold', cap: 'Aṣọ-ẹbị procession · Lagos' },
  { id: 3, couple: 'Mei & Hiro', tradition: 'East Asian · Shinto ceremony', region: 'East Asian', city: 'Kyoto, Japan', date: 'Fri 3 Apr 2026', price: 220, seats: 2, rating: 5.0, reviews: 19, grad: 'sage', cap: 'San-san-kudo rite · Kyoto' },
  { id: 4, couple: 'Sofía & Mateo', tradition: 'Latin · Mexican boda', region: 'Latin', city: 'Oaxaca, Mexico', date: 'Sat 11 Apr 2026', price: 130, seats: 6, rating: 4.9, reviews: 33, grad: 'claret', cap: 'Lazo & calenda · Oaxaca' },
  { id: 5, couple: 'Hannah & Eli', tradition: 'Jewish · Chuppah ceremony', region: 'Jewish', city: 'Tel Aviv, Israel', date: 'Sun 19 Apr 2026', price: 165, seats: 5, rating: 4.7, reviews: 24, grad: 'sage', cap: 'Hora & chuppah · Tel Aviv' },
  { id: 6, couple: 'Ananya & Rohan', tradition: 'South Asian · Tamil ceremony', region: 'South Asian', city: 'Chennai, India', date: 'Sat 2 May 2026', price: 155, seats: 8, rating: 4.9, reviews: 37, grad: 'saffron', cap: 'Maalai-maatral · Chennai' },
];

const STEPS = {
  guest: [
    { icon: 'search', n: 'Step 01', h: 'Find a celebration', p: 'Browse real weddings by culture, city, or date. Every couple writes a note on their tradition and what the day holds.' },
    { icon: 'ticket', n: 'Step 02', h: 'Reserve your seat', p: 'Pick from a limited number of seats. We brief you on dress code, customs, and when to stand — so you arrive ready.' },
    { icon: 'heart-handshake', n: 'Step 03', h: 'Be welcomed in', p: 'Show up as a guest, not a tourist. Share the feast, the dancing, and a once-in-a-lifetime day with new friends.' },
  ],
  couple: [
    { icon: 'armchair', n: 'Step 01', h: 'Offer a few seats', p: 'Decide how many guests to welcome — from two chairs to a whole back row — and set a fair price per seat.' },
    { icon: 'book-open', n: 'Step 02', h: 'Tell your story', p: 'Share the rituals, the dress code, and what makes your celebration yours. We help you write a warm, clear listing.' },
    { icon: 'gift', n: 'Step 03', h: 'Welcome your guests', p: 'Meet curious, vetted attendees, and let their seats offset a little of the day. Free cancellation, always.' },
  ],
};

Object.assign(window, { Icon, ArchMark, Logo, GRAD, WEDDINGS, STEPS });

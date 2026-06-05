/* App kit shared: Icon, ArchMark, Logo, GRAD, and rich wedding data. */

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

const ArchMark = ({ size = 28, color }) => (
  <span className="mk" style={{ width: size, height: size, color, display: 'inline-flex' }}>
    <svg viewBox="0 0 48 48" fill="none" style={{ width: '100%', height: '100%' }}>
      <path d="M9 43 L9 22 A15 15 0 0 1 39 22 L39 43" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M17 43 L17 24 A7 7 0 0 1 31 24 L31 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  </span>
);

function Logo() {
  return (
    <a className="lock" href="#" onClick={(e) => e.preventDefault()}>
      <ArchMark size={28} />
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
  {
    id: 1, couple: 'Priya & Daniel', region: 'South Asian', tradition: 'Hindu ceremony',
    city: 'Jaipur, India', date: 'Sat 14 Mar 2026', time: '4:00 PM – late', price: 180,
    seats: 3, total: 12, rating: 4.9, reviews: 28, grad: 'saffron', cap: 'Marigold ceremony · Jaipur',
    host: { name: 'Priya R.', meta: 'Bride · hosting 12 guests', since: '2024' },
    dress: 'Bright colours encouraged · avoid black & white',
    about: 'Ours is a North Indian Hindu wedding — three days condensed into one unforgettable evening for our guests. Expect a horse-led baraat, a marigold-draped mandap, the seven vows around a sacred fire, and a feast that does not stop. We open three seats to travellers who want to feel the warmth of an Indian wedding from the inside, not the sidelines.',
    expect: [
      { icon: 'flower', h: 'Marigold mandap', p: 'You\'ll be garlanded on arrival and seated near the canopy for the vows.' },
      { icon: 'utensils', h: 'A full thali feast', p: 'Twelve courses, all vegetarian, served the way family eats.' },
      { icon: 'music', h: 'Baraat & dancing', p: 'A drummed procession, then dhol and Bollywood until midnight.' },
      { icon: 'shirt', h: 'Dress to dazzle', p: 'We\'ll help you find or borrow a kurta or lengha if you\'d like.' },
    ],
    schedule: [
      { t: '4:00 PM', h: 'Baraat procession', p: 'The groom arrives with drums and dancing. Guests join the welcome.' },
      { t: '5:30 PM', h: 'Mandap & the seven vows', p: 'The core ceremony beneath the marigold canopy.' },
      { t: '7:30 PM', h: 'Feast & blessings', p: 'A long, generous dinner with the families.' },
      { t: '9:00 PM', h: 'Sangeet dancing', p: 'Music, dhol, and dancing into the night.' },
    ],
    included: ['Garland & welcome tikka', 'Full vegetarian feast', 'Seat near the mandap', 'Pre-wedding customs brief'],
  },
  {
    id: 2, couple: 'Amara & Kwame', region: 'West African', tradition: 'Yoruba wedding',
    city: 'Lagos, Nigeria', date: 'Sun 22 Mar 2026', time: '2:00 PM – late', price: 145,
    seats: 9, total: 20, rating: 4.8, reviews: 41, grad: 'gold', cap: 'Aṣọ-ẹbị procession · Lagos',
    host: { name: 'Kwame A.', meta: 'Groom · hosting 20 guests', since: '2023' },
    dress: 'Aṣọ-ẹbị colours: deep gold & coral (we\'ll send fabric)',
    about: 'A Yoruba traditional wedding — the engagement, the spraying of money, the prostration, and an aṣọ-ẹbị sea of matching fabric. It is loud, joyful, and impossibly colourful. We welcome nine guests who want to dance, eat jollof, and be folded into a Lagos celebration.',
    expect: [
      { icon: 'shirt', h: 'Aṣọ-ẹbị fabric', p: 'We send you the coral-and-gold cloth to wear with everyone else.' },
      { icon: 'utensils', h: 'Jollof & small chops', p: 'The great jollof debate, settled — at our table.' },
      { icon: 'sparkles', h: 'Spraying the couple', p: 'You\'ll shower the dancing couple with notes, Lagos-style.' },
      { icon: 'music', h: 'Afrobeats live band', p: 'A live band and DJ trade off until the early hours.' },
    ],
    schedule: [
      { t: '2:00 PM', h: 'Arrival & introductions', p: 'Families greet; the alaga (MC) sets the tone.' },
      { t: '3:30 PM', h: 'Prostration & blessing', p: 'The groom\'s side honours the bride\'s family.' },
      { t: '5:00 PM', h: 'Jollof feast', p: 'A generous spread of Nigerian classics.' },
      { t: '7:00 PM', h: 'Spraying & dancing', p: 'Afrobeats, spraying, and dancing late.' },
    ],
    included: ['Aṣọ-ẹbị fabric posted to you', 'Full Nigerian feast', 'Seat with the family', 'Customs & dance brief'],
  },
  {
    id: 3, couple: 'Mei & Hiro', region: 'East Asian', tradition: 'Shinto ceremony',
    city: 'Kyoto, Japan', date: 'Fri 3 Apr 2026', time: '11:00 AM – 4:00 PM', price: 220,
    seats: 2, total: 8, rating: 5.0, reviews: 19, grad: 'sage', cap: 'San-san-kudo rite · Kyoto',
    host: { name: 'Mei T.', meta: 'Bride · hosting 8 guests', since: '2025' },
    dress: 'Quiet, formal tones · we provide a guest yukata',
    about: 'A Shinto wedding at a Kyoto shrine — serene, precise, and deeply moving. The san-san-kudo sake ritual, the procession beneath the torii, and a kaiseki lunch among maple trees. We open just two seats for guests who want stillness and ceremony over spectacle.',
    expect: [
      { icon: 'flower', h: 'Shrine procession', p: 'Walk beneath the torii behind the priest and miko.' },
      { icon: 'wine', h: 'San-san-kudo', p: 'Witness the three-times-three sake vows up close.' },
      { icon: 'utensils', h: 'Kaiseki lunch', p: 'A seasonal multi-course lunch in a garden teahouse.' },
      { icon: 'shirt', h: 'Guest yukata', p: 'We provide and help you into a formal yukata.' },
    ],
    schedule: [
      { t: '11:00 AM', h: 'Shrine arrival', p: 'Purification and the procession beneath the torii.' },
      { t: '11:40 AM', h: 'San-san-kudo rite', p: 'The sacred sake exchange and vows.' },
      { t: '12:30 PM', h: 'Kaiseki lunch', p: 'A quiet, seasonal feast among the maples.' },
      { t: '2:30 PM', h: 'Tea & farewells', p: 'Matcha, photos, and gentle goodbyes.' },
    ],
    included: ['Formal guest yukata', 'Kaiseki lunch', 'Shrine seat', 'Etiquette brief'],
  },
  {
    id: 4, couple: 'Sofía & Mateo', region: 'Latin', tradition: 'Mexican boda',
    city: 'Oaxaca, Mexico', date: 'Sat 11 Apr 2026', time: '5:00 PM – late', price: 130,
    seats: 6, total: 16, rating: 4.9, reviews: 33, grad: 'claret', cap: 'Lazo & calenda · Oaxaca',
    host: { name: 'Sofía G.', meta: 'Bride · hosting 16 guests', since: '2024' },
    dress: 'Festive cocktail · embroidery & colour welcome',
    about: 'A Oaxacan boda — the lazo lassoed around the couple, a calenda parade with giant puppets through the streets, mezcal, mole, and a marimba band. We open six seats for guests who want colour, street processions, and the warmest of welcomes.',
    expect: [
      { icon: 'sparkles', h: 'Calenda parade', p: 'March through Oaxaca with mojigangas and brass.' },
      { icon: 'heart', h: 'El lazo', p: 'Watch the couple bound together by the wedding lasso.' },
      { icon: 'utensils', h: 'Mole & mezcal', p: 'Seven moles and small-batch mezcal from the host\'s town.' },
      { icon: 'music', h: 'Marimba & banda', p: 'Marimba at dinner, banda for the dancing.' },
    ],
    schedule: [
      { t: '5:00 PM', h: 'Calenda parade', p: 'A street procession to the venue.' },
      { t: '6:30 PM', h: 'Ceremony & lazo', p: 'Vows and the binding of the lazo.' },
      { t: '8:00 PM', h: 'Mole feast', p: 'A Oaxacan banquet with mezcal.' },
      { t: '9:30 PM', h: 'Banda dancing', p: 'Dancing in the courtyard until late.' },
    ],
    included: ['Mezcal welcome', 'Oaxacan feast', 'Parade & seat', 'Customs brief'],
  },
  {
    id: 5, couple: 'Hannah & Eli', region: 'Jewish', tradition: 'Chuppah ceremony',
    city: 'Tel Aviv, Israel', date: 'Sun 19 Apr 2026', time: '6:00 PM – late', price: 165,
    seats: 5, total: 14, rating: 4.7, reviews: 24, grad: 'sage', cap: 'Hora & chuppah · Tel Aviv',
    host: { name: 'Hannah L.', meta: 'Bride · hosting 14 guests', since: '2025' },
    dress: 'Smart cocktail · shoulders covered for ceremony',
    about: 'A Jewish wedding on a Tel Aviv rooftop — the chuppah at sunset, the breaking of the glass, and a hora that lifts everyone off their feet. We open five seats for guests ready to dance the couple into the night.',
    expect: [
      { icon: 'flower', h: 'Chuppah at sunset', p: 'Vows beneath the canopy as the sun goes down.' },
      { icon: 'sparkles', h: 'Breaking the glass', p: 'The shout of "Mazel tov!" you\'ll never forget.' },
      { icon: 'music', h: 'The hora', p: 'Be lifted on a chair — or do the lifting.' },
      { icon: 'utensils', h: 'Mezze & feast', p: 'A long Levantine table under the stars.' },
    ],
    schedule: [
      { t: '6:00 PM', h: 'Chuppah ceremony', p: 'Sunset vows and the breaking of the glass.' },
      { t: '7:00 PM', h: 'The hora', p: 'High-energy circle dancing.' },
      { t: '8:00 PM', h: 'Rooftop feast', p: 'Mezze, mains, and toasts.' },
      { t: '9:30 PM', h: 'Dancing', p: 'A DJ takes the rooftop late.' },
    ],
    included: ['Welcome toast', 'Levantine feast', 'Rooftop seat', 'Customs brief'],
  },
  {
    id: 6, couple: 'Ananya & Rohan', region: 'South Asian', tradition: 'Tamil ceremony',
    city: 'Chennai, India', date: 'Sat 2 May 2026', time: '7:00 AM – 1:00 PM', price: 155,
    seats: 8, total: 18, rating: 4.9, reviews: 37, grad: 'saffron', cap: 'Maalai-maatral · Chennai',
    host: { name: 'Ananya K.', meta: 'Bride · hosting 18 guests', since: '2024' },
    dress: 'Silk & bright colours · traditional welcome',
    about: 'A South Indian Tamil wedding — an auspicious morning ceremony with the exchange of garlands, the tying of the thali, and a banana-leaf feast. We open eight seats for early risers who want the sacred, joyful heart of a Tamil celebration.',
    expect: [
      { icon: 'flower', h: 'Maalai-maatral', p: 'The playful exchange of flower garlands.' },
      { icon: 'sparkles', h: 'Tying the thali', p: 'The sacred moment of the wedding necklace.' },
      { icon: 'utensils', h: 'Banana-leaf feast', p: 'A traditional sadhya served on banana leaves.' },
      { icon: 'music', h: 'Nadaswaram', p: 'Live temple music throughout the rites.' },
    ],
    schedule: [
      { t: '7:00 AM', h: 'Morning rites', p: 'Auspicious ceremonies begin at dawn.' },
      { t: '8:30 AM', h: 'Garland exchange', p: 'Maalai-maatral and the thali.' },
      { t: '10:00 AM', h: 'Sadhya feast', p: 'A banana-leaf banquet.' },
      { t: '11:30 AM', h: 'Blessings', p: 'Family blessings and farewells.' },
    ],
    included: ['Welcome & tikka', 'Banana-leaf feast', 'Ceremony seat', 'Customs brief'],
  },
];

const byId = (id) => WEDDINGS.find((w) => w.id === id);

function seatChip(seats) {
  if (seats <= 0) return { cls: { background: 'var(--danger-tint)', color: 'var(--danger)' }, icon: 'x-circle', txt: 'Sold out' };
  if (seats <= 3) return { cls: { background: 'var(--warning-tint)', color: 'var(--warning)' }, icon: 'flame', txt: `${seats} seats left` };
  return { cls: { background: 'var(--positive-tint)', color: 'var(--positive)' }, icon: 'armchair', txt: `${seats} seats available` };
}

Object.assign(window, { Icon, ArchMark, Logo, GRAD, WEDDINGS, byId, seatChip });

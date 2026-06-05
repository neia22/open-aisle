/* WeddingCard, Discover grid, Couples band, Quote, Footer */

function seatChip(seats) {
  if (seats <= 0) return { cls: { background: 'var(--danger-tint)', color: 'var(--danger)' }, icon: 'x-circle', txt: 'Sold out' };
  if (seats <= 3) return { cls: { background: 'var(--warning-tint)', color: 'var(--warning)' }, icon: 'flame', txt: `${seats} seats left` };
  return { cls: { background: 'var(--positive-tint)', color: 'var(--positive)' }, icon: 'armchair', txt: `${seats} seats available` };
}

function WeddingCard({ w }) {
  const [saved, setSaved] = React.useState(false);
  const chip = seatChip(w.seats);
  return (
    <article className="wcard">
      <div className="ph" style={{ background: GRAD[w.grad] }}>
        <span className="chip" style={chip.cls}><Icon name={chip.icon} size={13} /> {chip.txt}</span>
        <button className={'save' + (saved ? ' saved' : '')} aria-label="Save"
          onClick={(e) => { e.stopPropagation(); setSaved((s) => !s); }}>
          <Icon name="heart" size={18} />
        </button>
        <span className="cap"><Icon name="image" size={13} /> {w.cap}</span>
      </div>
      <div className="bd">
        <div className="couple">{w.couple}</div>
        <div className="meta"><Icon name="globe" size={14} /> {w.tradition}</div>
        <div className="meta"><Icon name="map-pin" size={14} /> {w.date} · {w.city}</div>
        <div className="foot">
          <div className="price"><b>${w.price}</b> <span>/ seat</span></div>
          <div className="rev"><Icon name="star" size={14} /> {w.rating.toFixed(1)} <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>({w.reviews})</span></div>
        </div>
      </div>
    </article>
  );
}

const REGIONS = ['All', 'South Asian', 'West African', 'East Asian', 'Latin', 'Jewish'];

function Discover() {
  const [region, setRegion] = React.useState('All');
  const list = region === 'All' ? WEDDINGS : WEDDINGS.filter((w) => w.region === region);
  return (
    <section className="section" id="discover">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Open this season</span>
          <h2>Celebrations <i>welcoming</i> guests</h2>
          <p>A handful of couples have opened their doors. Each seat includes the ceremony, the feast, and a warm welcome.</p>
        </div>
        <div className="filters">
          {REGIONS.map((r) => (
            <button key={r} className={'filter' + (region === r ? ' on' : '')} onClick={() => setRegion(r)}>{r}</button>
          ))}
        </div>
        <div className="grid-w">
          {list.map((w) => <WeddingCard key={w.id} w={w} />)}
        </div>
      </div>
    </section>
  );
}

function CouplesBand() {
  return (
    <section className="section" id="couples">
      <div className="wrap">
        <div className="band">
          <div className="band-inner">
            <div>
              <span className="eyebrow">For couples</span>
              <h2>Offset the day.<br /><i>Open</i> the aisle.</h2>
              <p>Offer a few seats to curious, vetted guests and let their place at your table cover a little of the cost — while sharing your culture with the world.</p>
              <button className="btn btn-primary">Start hosting <Icon name="arrow-right" size={17} color="#fff" /></button>
            </div>
            <div className="band-stats">
              <div className="band-stat"><b>$2,400</b><span>average offset across a back row of seats</span></div>
              <div className="band-stat"><b>14 days</b><span>free cancellation, no questions asked</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="section" id="trust" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="quote">
          <ArchMark size={44} color="var(--saffron-deep)" />
          <p>"I came as a stranger and left with a place card, two dance partners, and a recipe for the wedding stew. You don't visit a culture here — you're handed a seat in it."</p>
          <div className="by">Lena M. · guest at a Yoruba wedding <span>· Lagos</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: 'Discover', items: ['Browse weddings', 'By culture', 'By city', 'Gift a seat'] },
    { h: 'For couples', items: ['Host a wedding', 'How offsets work', 'Pricing', 'Couple stories'] },
    { h: 'Company', items: ['Our story', 'Trust & safety', 'Careers', 'Press'] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="blurb">A seat at the world's celebrations. OpenAisle welcomes curious guests into real weddings — and helps couples share their culture while offsetting the day.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              <ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bot">
          <span>© 2026 OpenAisle, Inc. · Privacy · Terms</span>
          <div className="soc">
            <Icon name="instagram" size={18} /><Icon name="youtube" size={18} /><Icon name="message-circle" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Discover, CouplesBand, Quote, Footer });

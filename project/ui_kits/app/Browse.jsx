/* AppBar, WeddingCard, Browse view */

function AppBar({ onHome }) {
  return (
    <div className="appbar">
      <div className="wrap appbar-in">
        <a className="lock" href="#" onClick={(e) => { e.preventDefault(); onHome(); }}>
          <ArchMark size={28} />
          <span className="wd">Open<b>Aisle</b></span>
        </a>
        <div className="search">
          <Icon name="search" size={18} />
          <input placeholder="Search a culture, city, or couple" defaultValue="" />
        </div>
        <div className="spacer" />
        <button className="iconbtn" aria-label="Saved"><Icon name="heart" size={19} /></button>
        <button className="iconbtn" aria-label="Trips"><Icon name="ticket" size={19} /></button>
        <div className="avatar" />
      </div>
    </div>
  );
}

function WeddingCard({ w, onOpen }) {
  const [saved, setSaved] = React.useState(false);
  const chip = seatChip(w.seats);
  return (
    <article className="wcard" onClick={() => onOpen(w.id)}>
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
        <div className="meta"><Icon name="globe" size={14} /> {w.region} · {w.tradition}</div>
        <div className="meta"><Icon name="map-pin" size={14} /> {w.date} · {w.city}</div>
        <div className="foot">
          <div className="price"><b>${w.price}</b> <span>/ seat</span></div>
          <div className="rev"><Icon name="star" size={14} /> {w.rating.toFixed(1)} <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>({w.reviews})</span></div>
        </div>
      </div>
    </article>
  );
}

const FILTERS = [
  { k: 'All', icon: 'globe' }, { k: 'South Asian', icon: 'flower' }, { k: 'West African', icon: 'sparkles' },
  { k: 'East Asian', icon: 'wine' }, { k: 'Latin', icon: 'music' }, { k: 'Jewish', icon: 'star' },
];

function Browse({ onOpen }) {
  const [region, setRegion] = React.useState('All');
  const list = region === 'All' ? WEDDINGS : WEDDINGS.filter((w) => w.region === region);
  return (
    <div className="wrap">
      <div className="browse-head">
        <div>
          <h1>Celebrations open to guests</h1>
          <div className="sub">{list.length} weddings welcoming attendees this season</div>
        </div>
        <button className="sort"><Icon name="sliders-horizontal" size={15} /> Sort: Soonest</button>
      </div>
      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f.k} className={'filter' + (region === f.k ? ' on' : '')} onClick={() => setRegion(f.k)}>
            <Icon name={f.icon} size={14} /> {f.k}
          </button>
        ))}
      </div>
      <div className="grid-w">
        {list.map((w) => <WeddingCard key={w.id} w={w} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

Object.assign(window, { AppBar, WeddingCard, Browse });

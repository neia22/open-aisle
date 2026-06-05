/* Nav, Hero, How-it-works */

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')} id="top">
      <div className="wrap nav-inner">
        <Logo />
        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#how">How it works</a>
          <a href="#couples">For couples</a>
          <a href="#trust">Trust &amp; safety</a>
        </div>
        <div className="nav-right">
          <span className="nav-lang"><Icon name="globe" size={16} /> EN</span>
          <a href="#" style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)' }}>Sign in</a>
          <button className="btn btn-dark">Host a wedding</button>
        </div>
      </div>
    </nav>
  );
}

function Search() {
  return (
    <div className="search reveal d3">
      <div className="seg">
        <label>Where</label>
        <input placeholder="City, country, or tradition" defaultValue="" />
      </div>
      <div className="divider" />
      <div className="seg">
        <label>When</label>
        <input placeholder="Add dates" />
      </div>
      <div className="divider" />
      <div className="seg">
        <label>Tradition</label>
        <input placeholder="Any culture" />
      </div>
      <button className="go" aria-label="Search"><Icon name="search" size={20} color="#fff" /></button>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow reveal d1">Cultural weddings, open to guests</span>
          <h1 className="reveal d2">A seat at the<br /><i>world's</i> celebrations</h1>
          <p className="lede reveal d3">
            Attend a real wedding from a tradition that isn't your own. Couples open a
            few seats; you pull up a chair, share the day, and leave understanding it like family.
          </p>
          <Search />
          <div className="hero-trust reveal d4">
            <span><Icon name="shield-check" size={16} /> Verified couples</span>
            <span><Icon name="calendar-check" size={16} /> Free cancellation</span>
            <span><Icon name="star" size={16} /> 4.9 average across 1,200 seats</span>
          </div>
        </div>
        <div className="cluster reveal d4">
          <div className="frame frame-a" style={{ background: GRAD.saffron }}>
            <span className="cap"><Icon name="image" size={13} /> Garland exchange · Jaipur</span>
          </div>
          <div className="frame frame-b" style={{ background: GRAD.sage }}>
            <span className="cap"><Icon name="image" size={13} /> First dance · Kyoto</span>
          </div>
          <div className="float-chip">
            <span className="av" />
            <span className="t"><b>Mei &amp; Hiro</b><span>just welcomed 2 guests</span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  const [mode, setMode] = React.useState('guest');
  const steps = STEPS[mode];
  return (
    <section className="section" id="how" style={{ background: 'var(--paper)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps to a seat <i>you'll never forget</i></h2>
        </div>
        <div className="hiw-toggle">
          <button className={mode === 'guest' ? 'on' : ''} onClick={() => setMode('guest')}>For guests</button>
          <button className={mode === 'couple' ? 'on' : ''} onClick={() => setMode('couple')}>For couples</button>
        </div>
        <div className="hiw-steps">
          {steps.map((s) => (
            <div className="step" key={s.h}>
              <div className="ico"><Icon name={s.icon} size={24} /></div>
              <div className="num">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, HowItWorks });

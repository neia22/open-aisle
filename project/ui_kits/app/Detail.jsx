/* Wedding detail page + sticky booking box with seat stepper */

function BookBox({ w, seats, setSeats, onReserve }) {
  const service = 28;
  const sub = w.price * seats;
  const total = sub + service;
  const chip = seatChip(w.seats);
  return (
    <aside className="bookbox">
      <div className="price">
        <b>${w.price}</b><span>/ seat</span>
        <span className="rev"><Icon name="star" size={14} /> {w.rating.toFixed(1)} ({w.reviews})</span>
      </div>
      <div className="stepper-wrap">
        <label>Seats</label>
        <div className="stepper">
          <span className="seats">How many?</span>
          <div className="ctrls">
            <button onClick={() => setSeats(Math.max(1, seats - 1))} disabled={seats <= 1} aria-label="Fewer"><Icon name="minus" size={16} /></button>
            <span className="n">{seats}</span>
            <button onClick={() => setSeats(Math.min(w.seats, seats + 1))} disabled={seats >= w.seats} aria-label="More"><Icon name="plus" size={16} /></button>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="ln"><span>${w.price} × {seats} {seats === 1 ? 'seat' : 'seats'}</span><b>${sub}</b></div>
        <div className="ln"><span>Feast &amp; welcome gift</span><b>Included</b></div>
        <div className="ln"><span>OpenAisle service</span><b>${service}</b></div>
        <div className="ln tot"><span>Total</span><b>${total}</b></div>
      </div>
      <button className="btn btn-primary" onClick={() => onReserve(seats)}>Reserve {seats} {seats === 1 ? 'seat' : 'seats'} <Icon name="arrow-right" size={17} color="#fff" /></button>
      <div className="note"><Icon name="shield-check" size={13} /> Free cancellation up to 14 days before</div>
      <div style={{ textAlign: 'center' }}>
        <span className="seatchip" style={chip.cls}><Icon name={chip.icon} size={14} /> {chip.txt}</span>
      </div>
    </aside>
  );
}

function Detail({ id, seats, setSeats, onBack, onReserve }) {
  const w = byId(id);
  React.useEffect(() => { window.scrollTo(0, 0); }, [id]);
  return (
    <div className="wrap">
      <a className="back" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}><Icon name="arrow-left" size={16} /> Back to all weddings</a>
      <div className="detail-hero">
        <div className="g" style={{ background: GRAD[w.grad] }}><span className="cap"><Icon name="image" size={13} /> {w.cap}</span></div>
        <div className="g" style={{ background: GRAD.sage }}><span className="cap"><Icon name="image" size={13} /> The feast</span></div>
        <div className="g" style={{ background: GRAD.gold }}><span className="cap"><Icon name="image" size={13} /> The dancing</span></div>
      </div>

      <div className="detail-grid">
        <div>
          <div className="dtitle">
            <span className="region"><Icon name="globe" size={13} /> {w.region} · {w.tradition}</span>
            <h1>{w.couple}</h1>
            <div className="row">
              <span><Icon name="map-pin" size={16} /> {w.city}</span>
              <span><Icon name="calendar" size={16} /> {w.date}</span>
              <span><Icon name="clock" size={16} /> {w.time}</span>
              <span><Icon name="armchair" size={16} /> <b>{w.seats}</b> of {w.total} seats open</span>
            </div>
          </div>

          <div className="dsection">
            <h2>A note from {w.host.name.split(' ')[0]}</h2>
            <p>{w.about}</p>
            <div className="host" style={{ marginTop: 18 }}>
              <span className="av" />
              <div>
                <h4>Hosted by {w.host.name}</h4>
                <div className="meta"><Icon name="users" size={14} /> {w.host.meta} · since {w.host.since}</div>
              </div>
              <span className="verified"><Icon name="shield-check" size={14} /> Verified couple</span>
            </div>
          </div>

          <div className="dsection">
            <h2>What to expect</h2>
            <div className="expect">
              {w.expect.map((e) => (
                <div className="item" key={e.h}>
                  <div className="ico"><Icon name={e.icon} size={20} /></div>
                  <div><h4>{e.h}</h4><p>{e.p}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsection">
            <h2>The day, hour by hour</h2>
            <div className="schedule">
              {w.schedule.map((s) => (
                <div className="sched-row" key={s.t}>
                  <span className="t">{s.t}</span>
                  <div><h4>{s.h}</h4><p>{s.p}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsection">
            <h2>Good to know</h2>
            <p style={{ display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="shirt" size={18} color="var(--saffron-deep)" /> <b style={{ color: 'var(--ink)', fontWeight: 600 }}>Dress code:</b> {w.dress}</p>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}><Icon name="gift" size={18} color="var(--saffron-deep)" style={{ marginTop: 2 }} /> <span><b style={{ color: 'var(--ink)', fontWeight: 600 }}>Your seat includes:</b> {w.included.join(' · ')}</span></p>
          </div>
        </div>

        <BookBox w={w} seats={seats} setSeats={setSeats} onReserve={onReserve} />
      </div>
    </div>
  );
}

Object.assign(window, { Detail, BookBox });

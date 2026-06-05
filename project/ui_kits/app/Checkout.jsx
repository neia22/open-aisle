/* Checkout form + summary, and the Confirmation ticket */

function SummaryCard({ w, seats }) {
  const service = 28;
  const sub = w.price * seats;
  const total = sub + service;
  return (
    <aside className="summary-card">
      <div className="top">
        <div className="thumb" style={{ background: GRAD[w.grad] }} />
        <div>
          <h4>{w.couple}</h4>
          <div className="m"><Icon name="globe" size={12} /> {w.region} · {w.tradition}</div>
          <div className="m" style={{ marginTop: 3 }}><Icon name="calendar" size={12} /> {w.date}</div>
        </div>
      </div>
      <div className="body">
        <div className="ln"><span>${w.price} × {seats} {seats === 1 ? 'seat' : 'seats'}</span><b>${sub}</b></div>
        <div className="ln"><span>Feast &amp; welcome gift</span><b>Included</b></div>
        <div className="ln"><span>OpenAisle service</span><b>${service}</b></div>
        <div className="ln tot"><span>Total</span><b>${total}</b></div>
      </div>
    </aside>
  );
}

function Field({ label, icon, placeholder, value, onChange, full }) {
  return (
    <div className={'field' + (full ? ' full' : '')}>
      <label>{label}</label>
      <div className="inp">
        {icon && <Icon name={icon} size={16} />}
        <input placeholder={placeholder} value={value} onChange={(e) => onChange && onChange(e.target.value)} />
      </div>
    </div>
  );
}

function Checkout({ id, seats, onBack, onConfirm }) {
  const w = byId(id);
  const [name, setName] = React.useState('');
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="wrap">
      <a className="back" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}><Icon name="arrow-left" size={16} /> Back to {w.couple}</a>
      <div className="checkout">
        <div>
          <h1>Reserve your {seats === 1 ? 'seat' : 'seats'}</h1>
          <p className="lede">You're {seats} {seats === 1 ? 'seat' : 'seats'} away from {w.couple}'s {w.tradition.toLowerCase()} in {w.city.split(',')[0]}.</p>

          <div className="fieldset">
            <h3><span className="num">1</span> Who's attending</h3>
            <div className="frow">
              <Field label="First name" icon="user" placeholder="Lena" value={name} onChange={setName} />
              <Field label="Last name" icon="user" placeholder="Marchetti" value="" />
            </div>
            <div className="frow">
              <Field label="Email" icon="mail" placeholder="lena@email.com" value="" />
              <Field label="Phone" icon="phone" placeholder="+1 555 0142" value="" />
            </div>
            <Field full label="A note to the couple (optional)" icon="message-circle" placeholder="Thank you for opening your day to us…" value="" />
          </div>

          <div className="fieldset">
            <h3><span className="num">2</span> Payment</h3>
            <Field full label="Card number" icon="credit-card" placeholder="1234 5678 9012 3456" value="" />
            <div className="frow" style={{ marginTop: 14 }}>
              <Field label="Expiry" icon="calendar" placeholder="MM / YY" value="" />
              <Field label="CVC" icon="lock" placeholder="123" value="" />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--ink-3)', fontSize: 13, marginBottom: 18 }}>
            <Icon name="shield-check" size={15} /> You won't be charged until the couple confirms your seat. Free to cancel up to 14 days before.
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }} onClick={() => onConfirm(seats)}>
            Confirm &amp; reserve <Icon name="arrow-right" size={17} color="#fff" />
          </button>
        </div>

        <SummaryCard w={w} seats={seats} />
      </div>
    </div>
  );
}

function Confirmation({ id, seats, onBrowse, onTrips }) {
  const w = byId(id);
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const seatCode = `${w.couple.split(' ')[0].slice(0, 2).toUpperCase()}-${String(w.id).padStart(2, '0')}${seats}`;
  return (
    <div className="wrap">
      <div className="confirm">
        <div className="seal"><Icon name="check" size={44} /></div>
        <span className="eyebrow">Seat reserved</span>
        <h1>You have a seat at<br /><i>{w.couple}'s</i> celebration</h1>
        <p>We've emailed your confirmation and a customs brief — what to wear, what to bring, and when to stand. {w.host.name.split(' ')[0]} will be in touch before the day.</p>

        <div className="ticket">
          <div className="th">
            <ArchMark size={34} color="#fff" />
            <div>
              <h3>{w.couple}</h3>
              <div className="sub">{w.region} · {w.tradition} · {w.city}</div>
            </div>
            <div className="seatno"><b>{seatCode}</b><span>{seats} {seats === 1 ? 'seat' : 'seats'}</span></div>
          </div>
          <div className="gr">
            <div className="cell"><div className="k">Date</div><div className="v"><Icon name="calendar" size={15} /> {w.date}</div></div>
            <div className="cell"><div className="k">Time</div><div className="v"><Icon name="clock" size={15} /> {w.time}</div></div>
            <div className="cell"><div className="k">Dress</div><div className="v"><Icon name="shirt" size={15} /> See brief</div></div>
          </div>
        </div>

        <div className="actions">
          <button className="btn btn-ghost" onClick={onBrowse}><Icon name="arrow-left" size={16} /> Keep exploring</button>
          <button className="btn btn-dark" onClick={onTrips}>View my trips <Icon name="ticket" size={16} color="#fff" /></button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Checkout, Confirmation, SummaryCard });

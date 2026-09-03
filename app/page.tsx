const images = {
  hero: 'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/56213f14-97a7-4bdf-8960-663ee7362913/hero-aerial.webp',
  architecture:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/fd0fca12-8afe-4c92-b8b8-fe7b32ba805b/arch-dusk.webp',
  interior:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/b78e0080-9957-4187-9b3e-a3d72c76f8ae/bamboo-interior.webp',
  gateway:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/9edf6617-eb66-42cd-b970-cd6d0da5a9a7/gateway.webp',
  restaurant:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/73fc21e9-0745-447d-ba88-c5e1703ea5db/restaurant.webp',
  greenhouse:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/cf270f7c-2aa1-4bb0-b28c-faf754648d91/greenhouse.webp',
  butterfly:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/3c3771ed-0dda-4c20-898d-276ba74bb2fb/butterfly.webp',
  neon:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/0d9c1bbd-a85d-47bc-b025-3f00d411cb45/neon-art.webp',
  shuttle:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/bb429c96-af16-45f3-b6c4-4fa63a71588b/shuttle.webp',
  reforestation:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/e9456373-41a7-4262-91ad-7bc0d4e61863/reforestation.webp',
  sunset:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/b2da3db0-7128-494e-a7d0-a9c97eebcdfe/dome-sunset.webp',
  night:
    'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/362bd4a0-c4b4-436d-ae61-4c1e41cdaf6e/sculpture-night.webp',
};

const press = [
  'Forbes',
  'Condé Nast Traveller',
  'Architectural Digest',
  'Vogue Singapore',
  'Wallpaper*',
  'Tatler',
  "Harper's Bazaar",
  'The Jakarta Post',
  'DestinAsian',
  'The Peak',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nuanu home">
          Nuanu<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#what">What this is</a>
          <a href="#numbers">Numbers</a>
          <a href="#ways">Two ways in</a>
          <a href="#city">The city</a>
          <a href="#room">The room</a>
          <a href="#day">The day</a>
          <a href="#apply">Register</a>
        </nav>
        <a className="header-cta" href="#apply">
          Request an interview <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src={images.hero}
          alt="Aerial view of Nuanu Creative City on the Tabanan coast at sunset"
        />
        <div className="hero-wash" />
        <div className="hero-date">
          <span>31</span>
          <span>10</span>
          <span>26</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow light">31 October 2026 · Labyrinth Dome · Nuanu · Bali</p>
          <h1>Investor <em>Day</em></h1>
          <div className="hero-bottom">
            <p>
              Thirty seats. One day. Equity in the commercial layer of a city that already
              exists.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#apply">
                Request an interview
              </a>
              <a className="text-link light" href="#what">
                Read more <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="press-strip" aria-label="Nuanu in the press">
        <p>Nuanu in the press</p>
        <div className="press-list">
          {press.map((title) => (
            <span key={title}>{title}</span>
          ))}
        </div>
      </section>

      <section className="opening-stats" aria-label="Nuanu at a glance">
        <div className="stat-block stat-lead">
          <p className="eyebrow">31 October 2026 · Labyrinth Dome · Nuanu · Bali</p>
          <span className="loop-mark" aria-hidden="true">↻</span>
        </div>
        <div className="stat-block">
          <strong>44<small> ha</small></strong>
          <p>Creative city in Tabanan, Bali</p>
        </div>
        <div className="stat-block">
          <strong>30<small>+</small></strong>
          <p>Projects built and trading</p>
        </div>
        <div className="stat-block">
          <strong>2,500</strong>
          <p>People through Nuanu on an average day</p>
        </div>
        <div className="stat-block stat-dark">
          <strong>30</strong>
          <p>Seats on 31 October</p>
        </div>
      </section>

      <section className="invitation" id="what">
        <aside className="section-index">
          <span>01</span>
          <p>What this is</p>
        </aside>
        <div className="invitation-main">
          <p className="eyebrow">What this is</p>
          <h2>A room of thirty,<br /><em>not an audience.</em></h2>
          <p className="intro-copy">
            On 31 October we open equity participation in the commercial layer of the city —
            the assets that generate its revenue. One day, thirty investors, and a working city
            to walk through afterwards.
          </p>
          <div className="invitation-facts">
            <article>
              <span>Seats</span>
              <p>30 seats — and no more</p>
            </article>
            <article>
              <span>Access</span>
              <p>By interview — both ways</p>
            </article>
            <article>
              <span>Reservation</span>
              <p>$5,000, after your interview, fully refundable</p>
            </article>
          </div>
        </div>
      </section>

      <section className="image-manifesto">
        <img src={images.architecture} alt="Nuanu architecture at dusk" />
        <div className="image-manifesto-shade" />
        <p className="image-caption">The venue · Placeholder until Labyrinth Dome shots arrive</p>
        <blockquote>
          The day happens inside the building you&apos;re being asked to invest around.
        </blockquote>
      </section>

      <section className="numbers" id="numbers">
        <aside className="section-index section-index-light">
          <span>02</span>
          <p>The numbers</p>
        </aside>
        <div className="numbers-content">
          <p className="eyebrow light">The numbers</p>
          <h2>We start with what has<br /><em>already happened.</em></h2>
          <p className="numbers-intro">
            Real transactions, real dates, real occupancy — before a single projection.
          </p>
          <div className="evidence-list">
            <article>
              <span>01</span>
              <h3>Land</h3>
              <p>What land inside the masterplan cost in 2021 — and what it costs today.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Units</h3>
              <p>What a unit sold for at groundbreaking — and what it sold for at handover.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Occupancy</h3>
              <p>Real occupancy across Nuanu&apos;s operating assets, month by month.</p>
            </article>
          </div>
          <p className="projection-note">
            Then the projections — with the assumptions on the same slide, so you can test them
            yourself.
          </p>
        </div>
      </section>

      <section className="ways" id="ways">
        <div className="ways-heading">
          <div>
            <p className="eyebrow">Two ways in</p>
            <span className="chapter-number">03</span>
          </div>
          <h2>Own an asset, or take equity <em>beside the owner.</em></h2>
        </div>
        <div className="ways-grid">
          <article className="way-card">
            <img src={images.architecture} alt="Residence architecture at Nuanu" />
            <div className="way-shade" />
            <div className="way-content">
              <span>Invest in Nuanu</span>
              <div>
                <h3>Own an asset inside the city</h3>
                <p>
                  The next drop of <u>Luna Residence</u>, revealed on the day — plus selected
                  units across other projects, released to the room first.
                </p>
              </div>
            </div>
          </article>
          <article className="way-card">
            <img src={images.interior} alt="Bamboo interior of a Nuanu commercial venue" />
            <div className="way-shade" />
            <div className="way-content">
              <span>Invest with Nuanu</span>
              <div>
                <h3>Take equity beside us</h3>
                <p>
                  Equity in the city&apos;s commercial real estate — retail, dining, wellness,
                  fitness. Nuanu is invested in every project inside this city, and stays
                  invested. You come in beside us, not instead of us.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="table-section">
        <aside className="section-index">
          <span>04</span>
          <p>On the table</p>
        </aside>
        <div className="table-content">
          <p className="eyebrow">On the table</p>
          <h2>Three things you cannot get anywhere else <em>that day.</em></h2>
          <div className="offer-list">
            <article>
              <span>01</span>
              <h3>Commercial equity</h3>
              <p>
                A stake alongside Nuanu in the commercial assets of the city. Presented publicly
                for the first time.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Luna Residence, next drop</h3>
              <p>The next release, revealed on the day, to the room first.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Selected units</h3>
              <p>Across Nuanu&apos;s projects, released to the room on the day.</p>
            </article>
          </div>
          <div className="offer-statement">
            <img src={images.gateway} alt="Guests arriving at Nuanu" />
            <p>
              Investment lots run from <strong>$200,000 to $10 million.</strong> Prices,
              allocations and returns are given in the room, not on a public page — and there is
              no public waiting list. What you reserve on the day is held in your name, at the
              price you are quoted, for thirty days.
            </p>
          </div>
        </div>
      </section>

      <section className="city" id="city">
        <div className="city-intro">
          <p className="eyebrow light">The city</p>
          <span className="chapter-number">05</span>
          <h2>It already exists, and people <em>already come.</em></h2>
          <p>
            Nuanu is 44 hectares on the Tabanan coast. Construction began in 2021. More than
            thirty projects are built and trading, and around 2,500 people come through on an
            average day.
          </p>
        </div>
        <div className="city-notes">
          <article>
            <span>01</span>
            <h3>Where people spend the day</h3>
            <p>
              A beach club above Nyanyi Beach, restaurants, a wellness sanctuary, a media dome,
              an art park and a public park.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Where people stay</h3>
            <p>A boutique hotel, suites and lodges across the site — open and taking bookings.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Where people live</h3>
            <p>
              An international school, residences, and a resident community that grows with
              every phase.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>What is still to come</h3>
            <p>The masterplan runs to 2028. Each phase adds footfall to the assets already trading.</p>
          </article>
        </div>
        <div className="city-gallery" aria-label="Life at Nuanu">
          <figure className="gallery-a">
            <img src={images.restaurant} alt="Dining venue at Nuanu" />
          </figure>
          <figure className="gallery-b">
            <img src={images.greenhouse} alt="Visitors in the Nuanu botanical greenhouse" />
          </figure>
          <figure className="gallery-c">
            <img src={images.butterfly} alt="Butterfly release at Nuanu" />
          </figure>
          <figure className="gallery-d">
            <img src={images.neon} alt="Light art installation at Nuanu" />
          </figure>
          <figure className="gallery-e">
            <img src={images.shuttle} alt="Electric shuttle inside Nuanu" />
          </figure>
          <figure className="gallery-f">
            <img src={images.reforestation} alt="Reforestation programme at Nuanu" />
          </figure>
          <figure className="gallery-g">
            <img src={images.gateway} alt="Visitor entrance at Nuanu" />
          </figure>
          <figure className="gallery-h">
            <img src={images.sunset} alt="Nuanu at sunset" />
          </figure>
        </div>
      </section>

      <section className="room" id="room">
        <div className="room-title">
          <p className="eyebrow">Who&apos;s in the room</p>
          <span className="room-number">30</span>
          <h2>Thirty seats, <em>each one interviewed.</em></h2>
          <p>
            Every guest speaks with a senior Nuanu Real Estate advisor before an invitation is
            issued.
          </p>
        </div>
        <div className="room-grid">
          <article>
            <span>01</span>
            <h3>In the room</h3>
            <p>
              Private investors and family offices from Bali, Jakarta, Surabaya, Singapore,
              Dubai, Doha, Bangkok and Sydney. Operators. Existing Nuanu investors.
            </p>
          </article>
          <article className="room-accent">
            <span>02</span>
            <h3>Not in the room</h3>
            <p>Brokers. Press.</p>
          </article>
          <article>
            <span>03</span>
            <h3>On stage</h3>
            <p>
              Lev Kroll, CEO of Nuanu, and the Nuanu Real Estate team — answering your questions
              directly.
            </p>
          </article>
          <article className="room-image">
            <img src={images.greenhouse} alt="Visitors in the Nuanu botanical greenhouse" />
          </article>
          <article className="room-wide">
            <span>04</span>
            <h3>With you all day</h3>
            <p>A dedicated investment advisor, assigned to you personally.</p>
          </article>
        </div>
      </section>

      <section className="day" id="day">
        <div className="day-copy">
          <div className="day-heading">
            <p className="eyebrow">The day</p>
            <span className="chapter-number">06</span>
            <h2>31 October, <em>at Nuanu.</em></h2>
          </div>
          <ol className="schedule">
            <li>
              <span>Morning</span>
              <p>Nuanu today: what is built, what it earns, what comes next. Presented by the CEO.</p>
            </li>
            <li>
              <span>Midday</span>
              <p>The commercial opportunity. Two tracks — ownership and partnership.</p>
            </li>
            <li>
              <span>Afternoon</span>
              <p>The city, on foot. Then private sessions with your advisor.</p>
            </li>
            <li>
              <span>Evening</span>
              <p>Dinner.</p>
            </li>
          </ol>
          <p className="programme-note">The full programme is shared with confirmed guests.</p>
        </div>
        <div className="day-photo">
          <img src={images.restaurant} alt="Evening at a Nuanu venue" />
        </div>
      </section>

      <section className="keyholder">
        <img className="keyholder-bg" src={images.night} alt="Illuminated sculpture at Nuanu after dark" />
        <div className="keyholder-shade" />
        <div className="keyholder-title">
          <p className="eyebrow light">Upgrade · +$1,000 · Limited</p>
          <h2>Keyholder</h2>
        </div>
        <div className="keyholder-list">
          <article>
            <span>01</span>
            <h3>Priority reservation</h3>
            <p>A 24-hour window to reserve before general release.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Private counsel</h3>
            <p>A one-to-one session with a property lawyer on ownership structure.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Dinner with the CEO</h3>
            <p>A small table with senior management, and time to ask your questions properly.</p>
          </article>
          <article>
            <span>04</span>
            <h3>A private tour</h3>
            <p>With the Experience Team, including places closed to visitors.</p>
          </article>
          <p className="keyholder-note">
            Complimentary above a certain level of investment — your advisor will tell you where
            it sits. The Keyholder upgrade is non-refundable. Your $5,000 reservation remains
            fully refundable.
          </p>
        </div>
      </section>

      <section className="join">
        <div className="join-title">
          <p className="eyebrow">How to join</p>
          <h2>Four <em>steps.</em></h2>
        </div>
        <ol className="join-steps">
          <li>
            <span>1</span>
            <div><h3>Register</h3><p>Leave your contact details. That&apos;s all we need to start.</p></div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>Meet us</h3>
              <p>
                A conversation with a senior advisor. We&apos;ll walk you through the day and answer
                what we can — and we&apos;ll ask about you and what you&apos;re looking for. It has to be a
                fit both ways.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div><h3>Confirm</h3><p>Place your $5,000 reservation. Fully refundable within 14 days.</p></div>
          </li>
          <li>
            <span>4</span>
            <div><h3>31 October</h3><p>One day at Nuanu.</p></div>
          </li>
        </ol>
      </section>

      <section className="faq">
        <aside className="faq-heading">
          <p className="eyebrow">Straight answers</p>
          <h2>The questions <em>we get asked.</em></h2>
        </aside>
        <div className="faq-list">
          <details open>
            <summary>Why is there a $5,000 reservation?<span aria-hidden="true" /></summary>
            <p>
              Thirty seats, and we want all thirty filled by people genuinely considering an
              investment. It is a qualification step, not a payment. Fully refundable within 14
              days — including if you change your mind, and including if you don&apos;t attend. If you
              do invest, it goes toward your investment.
            </p>
          </details>
          <details>
            <summary>Refundable how, exactly?<span aria-hidden="true" /></summary>
            <p>
              Held on a Nuanu account under a signed agreement. Returned within 14 days of your
              request, in the currency you paid, no reason required.
            </p>
          </details>
          <details>
            <summary>Can I attend without it?<span aria-hidden="true" /></summary>
            <p>No. Thirty seats, and this is how we allocate them.</p>
          </details>
          <details>
            <summary>Why not just talk to your sales office?<span aria-hidden="true" /></summary>
            <p>
              You can, any time. This is different. On 31 October the CEO presents Nuanu&apos;s
              commercial pipeline, the operating numbers behind it, and equity terms not offered
              through the sales channel.
            </p>
          </details>
          <details>
            <summary>Can foreigners own property in Indonesia?<span aria-hidden="true" /></summary>
            <p>
              Yes — through leasehold, Hak Pakai, or HGB held via a PT PMA. Each carries different
              terms. Your advisor will walk you through which applies to which asset, and we
              recommend independent counsel. Keyholder includes a private session with a property
              lawyer.
            </p>
          </details>
          <details>
            <summary>Is this the first Nuanu Investor Day?<span aria-hidden="true" /></summary>
            <p>
              No — the second. The first was in February 2025. The projects, assets and terms are
              different this year: commercial equity is offered for the first time.
            </p>
          </details>
          <details>
            <summary>Where do I stay?<span aria-hidden="true" /></summary>
            <p>
              Nuanu has accommodation on site, and there are good options nearby. We&apos;ll share the
              list with confirmed guests.
            </p>
          </details>
        </div>
      </section>

      <section className="night-break">
        <img src={images.night} alt="Illuminated sculpture at Nuanu after dark" />
        <p>Nuanu after dark</p>
      </section>

      <section className="apply" id="apply">
        <div className="apply-intro">
          <p className="eyebrow">Register</p>
          <h2>Leave your <em>details.</em></h2>
          <p>
            We&apos;ll arrange the conversation from there. Thirty seats. Applications close 17
            October.
          </p>
        </div>
        <div className="apply-body">
          <aside className="event-card">
            <p>The day</p>
            <strong>31 October 2026</strong>
            <span>Labyrinth Dome · Nuanu · Bali</span>
            <span>Thirty seats.</span>
            <span>Applications close 17 October.</span>
          </aside>
          <form>
            <label>
              <span>Full name</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              <span>Phone / WhatsApp</span>
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              <span>Where you&apos;re based</span>
              <input type="text" name="based" autoComplete="country-name" />
            </label>
            <button type="button">Request an interview <span>↗</span></button>
            <p>
              No obligation at this stage. The reservation comes only after we&apos;ve both had the
              conversation.
            </p>
          </form>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Nuanu<span>.</span></a>
        <p>© 2026 Nuanu Creative City. All rights reserved.</p>
        <a href="#apply">Register ↗</a>
      </footer>
    </main>
  );
}

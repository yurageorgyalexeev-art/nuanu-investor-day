import type { Metadata } from 'next';
import { PlaneCity } from './plane-city';
import { PlaneEvidence } from './plane-evidence';
import styles from './planes.module.css';

const images = {
  hero: '/images/investor-day/hero-first.jpg',
  dome: '/images/investor-day/labyrinth-dome.webp',
};

const press = [
  { alt: 'Forbes', src: '/images/press/logo-forbes.png' },
  { alt: 'Condé Nast Traveller', src: '/images/press/logo-conde-nast-traveller.png' },
  { alt: 'Architectural Digest', src: '/images/press/logo-architectural-digest.png' },
  { alt: 'Vogue Singapore', src: '/images/press/logo-vogue.png' },
  { alt: 'Wallpaper*', src: '/images/press/logo-wallpaper.png' },
  { alt: 'Tatler', src: '/images/press/logo-tatler.png' },
  { alt: "Harper's Bazaar", src: '/images/press/logo-harpers-bazaar.png' },
  { alt: 'The Jakarta Post', src: '/images/press/logo-jakarta-post.png' },
  { alt: 'DestinAsian', src: '/images/press/logo-destinasian.png' },
  { alt: 'The Peak', src: '/images/press/logo-the-peak.png' },
];

export const metadata: Metadata = {
  title: 'Solid Planes Study — Nuanu Investor Day',
  description: 'An alternate visual direction for selected Nuanu Investor Day sections.',
  robots: { index: false, follow: false },
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ConceptPlanes() {
  return (
    <main className={styles.page}>
      <header className={styles.siteHeader}>
        <a className={styles.siteLogo} href="#top" aria-label="Nuanu Real Estate">
          <img src="/images/brand/nuanu-real-estate-black.svg" alt="Nuanu Real Estate" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#what">What this is</a>
          <a href="#numbers">Numbers</a>
          <a href="#ways">Two ways in</a>
          <a href="#city">The city</a>
        </nav>
        <a className={styles.headerCta} href="#apply">Request an interview ↗</a>
      </header>

      <section className={styles.hero} id="top">
        <img src={images.hero} alt="Nuanu Creative City on the Tabanan coast at sunset" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={styles.heroTopline}>
            <strong>31 October 2026</strong>
            <span>Labyrinth Dome · Nuanu · Bali</span>
          </div>
          <h1>Investor <em>Day.</em></h1>
          <div className={styles.heroBottom}>
            <p>
              Thirty seats. One day. Equity in the commercial layer of a city that already
              exists.
            </p>
            <div className={styles.heroActions}>
              <a href="#apply">Request an interview</a>
              <a href="#what">Read more ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pressStrip} aria-label="Nuanu in the press">
        <div className={styles.pressWindow}>
          <div className={styles.pressTrack}>
            <div className={styles.pressGroup}>
              {press.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} />
              ))}
            </div>
            <div className={styles.pressGroup} aria-hidden="true">
              {press.map((logo) => (
                <img key={logo.alt} src={logo.src} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.openingStats} aria-label="Nuanu at a glance">
        <article className={styles.statLand}>
          <strong>44 <small>ha</small></strong>
          <p>Creative city in Tabanan, Bali</p>
        </article>
        <article className={styles.statProjects}>
          <strong>30<small>+</small></strong>
          <p>Projects built and trading</p>
        </article>
        <article className={styles.statPeople}>
          <strong>2,500</strong>
          <p>People through Nuanu on an average day</p>
        </article>
        <article className={styles.statSeats}>
          <strong>30</strong>
          <p>Seats on 31 October</p>
        </article>
      </section>

      <section className={styles.invitation} id="what">
        <div className={styles.invitationLead}>
          <p>What this is</p>
          <h2>A room of thirty, <em>not an audience.</em></h2>
        </div>
        <div className={styles.invitationBody}>
          <p className={styles.invitationIntro}>
            On 31 October we open equity participation in the commercial layer of the city —
            the assets that generate its revenue. One day, thirty investors, and a working city
            to walk through afterwards.
          </p>
          <div className={styles.invitationFacts}>
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
              <div>
                <p>$5,000 to hold a seat</p>
                <small>Placed after your interview. Fully refundable.</small>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.domeStatement}>
        <img src={images.dome} alt="Labyrinth Dome reflected in water" />
        <div className={styles.domeShade} />
        <div className={styles.domeCopy}>
          <span>The venue · Labyrinth Dome</span>
          <p>The day happens inside the building you&apos;re being asked to invest around.</p>
        </div>
      </section>

      <PlaneEvidence />

      <section className={styles.waysSection} id="ways">
        <div className={styles.waysHeading}>
          <p>Two ways in</p>
          <div>
            <h2>Own an asset, or take equity <em>beside us.</em></h2>
            <p>
              Two formats, one rule: everything on the table is inside the city you can walk
              through the same afternoon.
            </p>
          </div>
        </div>
        <div className={styles.waysGrid}>
          <article className={styles.wayCard}>
            <img src="/images/investor-day/ways-own.jpg" alt="Luna Residence viewed from Nyanyi Beach" />
            <span className={styles.wayShade} aria-hidden="true" />
            <div className={styles.wayContent}>
              <div className={styles.wayMeta}>
                <span>Invest in Nuanu</span>
                <span>Luna Residence</span>
              </div>
              <div>
                <h3>Own an asset inside the city</h3>
                <p>
                  The next drop of <u>Luna Residence</u>, revealed on the day — plus selected
                  units across other projects, released to the room first.
                </p>
              </div>
            </div>
          </article>
          <article className={styles.wayCard}>
            <img src="/images/investor-day/ways-equity.jpg" alt="Operating commercial venue inside Nuanu" />
            <span className={styles.wayShade} aria-hidden="true" />
            <div className={styles.wayContent}>
              <div className={styles.wayMeta}>
                <span>Invest with Nuanu</span>
                <span>Luna Beer Garden · Operating asset</span>
              </div>
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

      <section className={styles.lunaSection}>
        <figure className={styles.lunaHero}>
          <img src="/images/investor-day/luna-river.jpg" alt="Luna Residence seen from the river" />
          <span aria-hidden="true" />
          <figcaption>Luna Residence · Renders</figcaption>
          <p>Stacked terraces <em>above the river.</em></p>
        </figure>
        <div className={styles.lunaLead}>
          <p>Luna Residence</p>
          <h2>Landscape first, <em>building second.</em></h2>
          <p>
            The residence that opens the day: layered slabs, planted edges, and a facade that
            reads as landscape before it reads as a building.
          </p>
        </div>
        <div className={styles.lunaGrid}>
          <figure>
            <img src="/images/investor-day/luna-arrival.jpg" alt="Luna Residence framed by palms" />
            <figcaption><span>Arrival</span><strong>Approach through the garden</strong></figcaption>
          </figure>
          <figure>
            <img src="/images/investor-day/luna-detail.jpg" alt="Luna Residence facade detail" />
            <figcaption><span>Detail</span><strong>Facade and planted slabs</strong></figcaption>
          </figure>
          <article>
            <span>The next drop</span>
            <h3>Released to the room first, on 31 October</h3>
          </article>
        </div>
      </section>

      <section className={styles.offerSection}>
        <div className={styles.offerHeading}>
          <p>On the table</p>
          <div>
            <h2>Three things you cannot get <em>anywhere else.</em></h2>
            <p>Presented in the room, on the day — and nowhere else.</p>
          </div>
        </div>
        <div className={styles.offerGrid}>
          <article>
            <span>Commercial equity</span>
            <h3>A stake alongside Nuanu</h3>
            <p>In the commercial assets of the city. Presented publicly for the first time.</p>
          </article>
          <article>
            <span>Luna Residence</span>
            <h3>The next drop</h3>
            <p>The next release, revealed on the day, to the room first.</p>
          </article>
          <article>
            <span>Selected units</span>
            <h3>Across Nuanu&apos;s projects</h3>
            <p>Released to the room on the day.</p>
          </article>
        </div>
        <div className={styles.offerStatement}>
          <img src="/images/investor-day/offer-property.jpg" alt="OXO The Pavilions residence in Nuanu" />
          <span className={styles.offerShade} aria-hidden="true" />
          <span className={styles.offerObject}>Investment lots · Selected real estate</span>
          <p>
            From <strong>$200,000 to $10 million.</strong>
          </p>
        </div>
        <div className={styles.termsLead}>
          <p>How terms are given</p>
          <div>
            <h2>In the room, <em>not on a public page.</em></h2>
            <p>
              There is no public waiting list. What you reserve on the day is held in your name,
              at the price you are quoted, for thirty days.
            </p>
          </div>
        </div>
        <div className={styles.termsGrid}>
          <article className={styles.termsArrival}>
            <img src="/images/investor-day/room-guests.jpg" alt="Guests arriving at Nuanu" />
            <span aria-hidden="true" />
            <div><small>Arrival</small><h3>The city, on foot</h3></div>
          </article>
          <article>
            <small>Prices</small>
            <h3>Quoted to you personally</h3>
            <p>Allocations and returns are given in the room.</p>
          </article>
          <article>
            <small>Hold</small>
            <h3>Thirty days</h3>
            <p>Your reservation is held in your name at the quoted price.</p>
          </article>
        </div>
      </section>

      <PlaneCity />

      <section className={styles.roomSection} id="room">
        <div className={styles.roomHeading}>
          <p>Who&apos;s in the room</p>
          <div>
            <h2>Thirty seats, <em>each one interviewed.</em></h2>
            <p>
              Every guest speaks with a senior Nuanu Real Estate advisor before an invitation is
              issued.
            </p>
          </div>
          <strong>30</strong>
        </div>

        <figure className={styles.roomImage}>
          <img src="/images/investor-day/room-guests.jpg" alt="Guests at a previous Nuanu Investor Day" />
          <figcaption>Nuanu Investor Day · Previous edition</figcaption>
        </figure>

        <div className={styles.roomCards}>
          <article>
            <span>In the room</span>
            <h3>Investors and operators</h3>
            <p>
              Private investors and family offices from Bali, Jakarta, Surabaya, Singapore,
              Dubai, Doha, Bangkok and Sydney. Operators. Existing Nuanu investors.
            </p>
          </article>
          <article>
            <span>Not in the room</span>
            <h3>Brokers. Press.</h3>
          </article>
          <article>
            <span>On stage</span>
            <h3>Lev Kroll, CEO</h3>
            <p>With the Nuanu Real Estate team — answering your questions directly.</p>
          </article>
          <article>
            <span>With you all day</span>
            <h3>Your advisor</h3>
            <p>A dedicated investment advisor, assigned to you personally.</p>
          </article>
        </div>
      </section>

      <section className={styles.daySection} id="day">
        <div className={styles.dayCopy}>
          <div className={styles.dayHeading}>
            <p>The day</p>
            <h2>31 October, <em>at Nuanu.</em></h2>
            <p className={styles.dayIntro}>
              Morning to evening, inside the city itself. The full programme is shared with
              confirmed guests.
            </p>
          </div>
          <ol className={styles.daySchedule}>
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
        </div>
        <figure className={styles.dayImage}>
          <img src="/images/investor-day/day-dome.jpg" alt="Inside the Labyrinth Dome" />
          <figcaption>Labyrinth Dome · The venue</figcaption>
        </figure>
      </section>

      <section className={styles.keyholderSection} id="keyholder">
        <img
          src="/images/investor-day/keyholder-night.jpg"
          alt="A private residence in Nuanu at dusk"
        />
        <span className={styles.keyholderShade} aria-hidden="true" />
        <div className={styles.keyholderTitle}>
          <p>Keyholder · +$1,000 · Limited</p>
          <h2>A layer on top, <em>for those who want more of it.</em></h2>
        </div>
        <div className={styles.keyholderGrid}>
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
          <p className={styles.keyholderNote}>
            Complimentary above a certain level of investment — your advisor will tell you where
            it sits. The upgrade is non-refundable; your $5,000 reservation remains fully
            refundable.
          </p>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className={styles.joinTitle}>
          <p>How to join</p>
          <h2>Four <em>steps.</em></h2>
          <p className={styles.joinIntro}>From first contact to a seat in the room.</p>
        </div>
        <ol className={styles.joinSteps}>
          <li>
            <span>1</span>
            <div>
              <h3>Register</h3>
              <p>Leave your contact details. That&apos;s all we need to start.</p>
            </div>
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
            <div>
              <h3>Confirm</h3>
              <p>Place your $5,000 reservation. Fully refundable within 14 days.</p>
            </div>
          </li>
          <li>
            <span>4</span>
            <div>
              <h3>31 October</h3>
              <p>One day at Nuanu.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.faqSection}>
        <aside className={styles.faqHeading}>
          <p>Straight answers</p>
          <h2>The questions <em>we get asked.</em></h2>
          <p className={styles.faqIntro}>And the answers we give, before you ask them in the room.</p>
        </aside>
        <div className={styles.faqList}>
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

      <section className={styles.nightBreak}>
        <img src="/images/investor-day/night-break.jpg" alt="THK tower at Nuanu against a red sunset" />
        <span aria-hidden="true" />
        <p>Nuanu after dark</p>
      </section>

      <section className={styles.applySection} id="apply">
        <div className={styles.applyIntro}>
          <p>Register</p>
          <h2>Leave your <em>details.</em></h2>
          <p>
            We&apos;ll arrange the conversation from there. Thirty seats. Applications close 17
            October.
          </p>
        </div>
        <div className={styles.applyBody}>
          <aside className={styles.eventCard}>
            <p>The day</p>
            <strong>31 October 2026</strong>
            <span>Labyrinth Dome · Nuanu · Bali</span>
            <span>Thirty seats.</span>
            <span>Applications close 17 October.</span>
          </aside>
          <form className={styles.applyForm}>
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
              <span>City of residence</span>
              <input type="text" name="location" autoComplete="address-level2" />
            </label>
            <label className={styles.applyMessage}>
              <span>Tell us a little about your interest</span>
              <textarea name="message" rows={4} />
            </label>
            <button type="button">Request an interview <span>↗</span></button>
            <p>
              By submitting, you agree to be contacted about Investor Day. Your information is not
              shared.
            </p>
          </form>
        </div>
      </section>

      <footer className={styles.studyFooter}>
        <a className={styles.footerLogo} href="#top" aria-label="Nuanu Real Estate">
          <img src="/images/brand/nuanu-real-estate-white.svg" alt="Nuanu Real Estate" />
        </a>
        <p>Nuanu Creative City · Investor Day · 31 October 2026</p>
        <div className={styles.footerLinks}><a href="#">Privacy</a><a href="#">Terms</a></div>
      </footer>
    </main>
  );
}

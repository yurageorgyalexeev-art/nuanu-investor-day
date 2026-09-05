import type { Metadata } from 'next';
import { PlaneCity } from './plane-city';
import { PlaneEvidence } from './plane-evidence';
import { PlaneFaq } from './plane-faq';
import { PlaneOffer } from './plane-offer';
import { HeroSlideshow } from './hero-slideshow';
import styles from './planes.module.css';

const featuredPublications = [
  'Forbes France',
  'Wallpaper*',
  'Vogue Singapore',
  'Vogue Korea',
  'Tatler Asia',
  "Harper's Bazaar",
  'Time Out',
];

export const metadata: Metadata = {
  title: 'Nuanu Investor Day 2026 — 31 October, Bali',
  description: 'Thirty investors. One day at Nuanu Creative City in Bali.',
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
          <a href="#table">On the table</a>
          <a href="#city">The city</a>
        </nav>
        <a className={styles.headerCta} href="#apply">Request an interview ↗</a>
      </header>

      <section className={styles.hero} id="top">
        <HeroSlideshow />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={styles.heroTopline}>
            <strong>31 October 2026</strong>
            <span>Labyrinth Dome · Nuanu, Bali</span>
          </div>
          <h1><span>Thirty investors.</span><em>One day.</em></h1>
          <div className={styles.heroBottom}>
            <div className={styles.heroPitch}>
              <p>A first look at what Nuanu opens next — new residences, and the chance to invest in the businesses of a city that is already open and operating.</p>
              <div className={styles.heroActions}>
                <a href="#apply">Request an interview</a>
                <a href="#table">What&apos;s on the table ↓</a>
              </div>
            </div>
            <div className={styles.heroConditions}>
              <span>Seats are limited</span>
              <span>By interview only</span>
              <span><strong>$5,000 reservation</strong>After your interview, fully refundable</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.openingStats} aria-label="Nuanu at a glance">
        <article className={styles.statLand}><strong>44 <small>ha</small></strong><p>A creative city in Tabanan, Bali</p></article>
        <article className={styles.statProjects}><strong>30<small>+</small></strong><p>Projects already operating</p></article>
        <article className={styles.statPeople}><strong>2021</strong><p>Construction began</p></article>
        <article className={styles.statSeats}><strong>30</strong><p>Seats on 31 October</p></article>
      </section>

      <section className={styles.invitation} id="what">
        <div className={styles.invitationLead}>
          <p>What this is</p>
          <h2>Thirty investors, <em>and a genuine first look.</em></h2>
        </div>
        <div className={styles.invitationBodyCanonical}>
          <p>One room, thirty people who actually invest, and the first presentation of what Nuanu opens next. New residences. New businesses to invest in alongside us. And the 2027 plan, before it is public. Every guest is interviewed first, and has an advisor with them all day.</p>
        </div>
      </section>

      <PlaneEvidence />

      <section className={styles.waysSection} id="ways">
        <div className={styles.waysHeading}>
          <p>Two ways in</p>
          <h2>Own property here, <em>or invest in the business with us.</em></h2>
        </div>
        <div className={styles.waysGrid}>
          <article className={styles.wayCard}>
            <img src="/images/investor-day/ways-own-luna-riverside.jpg" alt="Luna Residence between the river and the ocean" />
            <span className={styles.wayShade} aria-hidden="true" />
            <div className={styles.wayContent}>
              <div className={styles.wayMeta}><span>Invest in Nuanu</span><span>Luna Residence</span></div>
              <div><h3>Own a home inside the city</h3><p>Residential releases across Nuanu&apos;s projects — including the next drop of <u>Luna Residence</u>, revealed on the day, and selected units released to the room first.</p></div>
            </div>
          </article>
          <article className={styles.wayCard}>
            <img src="/images/investor-day/ways-business-sutala.jpg" alt="Sutala hospitality and cultural complex at Nuanu" />
            <span className={styles.wayShade} aria-hidden="true" />
            <div className={styles.wayContent}>
              <div className={styles.wayMeta}><span>Invest with Nuanu</span><span>Sutala · Hospitality</span></div>
              <div><h3>Invest in the business with us</h3><p>A share in the businesses that operate inside the city — retail, dining, wellness, fitness. Nuanu is invested in every project inside this city, and stays invested. You invest alongside us, not instead of us.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.offerSection} id="table">
        <div className={styles.offerHeading}><p>On the table</p><h2>Three things that happen <em>in the room.</em></h2></div>
        <PlaneOffer />
        <div className={styles.offerStatement}>
          <img src="/images/investor-day/offer-property.jpg" alt="Selected real estate inside Nuanu" />
          <span className={styles.offerShade} aria-hidden="true" />
          <p>Investment lots run from <strong>$200,000 to $10 million.</strong><small>Prices, allocations and returns are given in the room, not on a public page — and there is no public waiting list.</small></p>
        </div>
      </section>

      <PlaneCity />

      <section className={styles.featuredStrip} aria-label="Featured in">
        <strong>Featured in</strong>
        <div>{featuredPublications.map((publication) => <span key={publication}>{publication}</span>)}</div>
      </section>

      <section className={styles.cityPanorama}><img src="/images/investor-day/city-tower-sunset.jpg" alt="THK tower at Nuanu at sunset" /></section>

      <section className={styles.roomSection} id="room">
        <div className={styles.roomHeading}>
          <p>Who&apos;s in the room</p>
          <div><h2>Thirty <em>seats.</em></h2><p>Every guest is interviewed by a senior Nuanu Real Estate advisor before an invitation is issued.</p></div>
          <strong>30</strong>
        </div>
        <figure className={styles.roomImage}><img src="/images/investor-day/room-guests.jpg" alt="Guests at Nuanu Investor Day" /><figcaption>Nuanu Investor Day · Previous edition</figcaption></figure>
        <div className={`${styles.roomCards} ${styles.roomCardsCanonical}`}>
          <article><span>In the room</span><p>Private investors and family offices from Bali, Jakarta, Surabaya, Singapore, Dubai, Doha, Bangkok and Sydney. Operators. Existing Nuanu investors.</p></article>
          <article><span>Not in the room</span><p>Brokers. Agents. Business developers. Press. Anyone whose reason for being there is to sell you something of their own.</p></article>
          <article><span>With you all day</span><p>A dedicated investment advisor, assigned to you personally — and private tours of the city whenever you want to see something for yourself.</p></article>
        </div>
      </section>

      <section className={styles.daySection} id="day">
        <div className={styles.dayCopy}>
          <div className={styles.dayHeading}><p>The day</p><h2>31 October, <em>at Nuanu.</em></h2></div>
          <ol className={styles.daySchedule}>
            <li><span>Morning</span><p>Nuanu today: what is built, what it earns, what comes next. Presented by the CEO.</p></li>
            <li><span>Midday</span><p>The commercial opportunity. Two tracks — ownership and partnership.</p></li>
            <li><span>Afternoon</span><p>The city, on foot. Then private sessions with your advisor.</p></li>
            <li><span>Evening</span><p>Dinner.</p></li>
          </ol>
          <p className={styles.programmeNote}>The full programme is shared with confirmed guests.</p>
        </div>
        <figure className={styles.dayImage}><img src="/images/investor-day/day-dome.jpg" alt="Inside the Labyrinth Dome" /><figcaption>Labyrinth Dome · The venue</figcaption></figure>
      </section>

      <section className={styles.keyholderSection} id="vip">
        <img src="/images/investor-day/keyholder-night.jpg" alt="A private residence in Nuanu at dusk" />
        <span className={styles.keyholderShade} aria-hidden="true" />
        <div className={styles.keyholderTitle}>
          <p>Optional</p><h2>VIP <em>package.</em></h2>
          <div className={styles.vipIntro}><p>Entirely optional — for guests who want to go deeper into the city and the numbers.</p><strong>+$1,000</strong><span>Limited · Upgrade only</span></div>
        </div>
        <div className={styles.keyholderGrid}>
          <article><span>01</span><h3>Priority reservation</h3><p>A 24-hour window to reserve before general release.</p></article>
          <article><span>02</span><h3>Private counsel</h3><p>A one-to-one session with a property lawyer on ownership structure.</p></article>
          <article><span>03</span><h3>Dinner with the CEO and senior management</h3><p>A small table, with time to ask your questions properly.</p></article>
          <article><span>04</span><h3>A private tour with the Experience Team</h3><p>Designed around what you personally want to see, including places closed to visitors.</p></article>
          <p className={styles.keyholderNote}>The VIP package is non-refundable. Your $5,000 reservation remains fully refundable.</p>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className={styles.joinTitle}><p>How to join</p><h2>Four <em>steps.</em></h2></div>
        <ol className={styles.joinSteps}>
          <li><span>1</span><div><h3>Register</h3><p>Leave your contact details. That&apos;s all we need to start.</p></div></li>
          <li><span>2</span><div><h3>Meet us</h3><p>A conversation with a senior advisor. We&apos;ll walk you through the day and answer what we can — and we&apos;ll ask about you and what you&apos;re looking for. It has to work for both of us.</p></div></li>
          <li><span>3</span><div><h3>Confirm</h3><p>Place your $5,000 reservation. Fully refundable within 14 days.</p></div></li>
          <li><span>4</span><div><h3>31 October</h3><p>One day at Nuanu.</p></div></li>
        </ol>
      </section>

      <section className={styles.faqSection}>
        <aside className={styles.faqHeading}><p>Straight answers</p><h2>The questions <em>we get asked.</em></h2></aside>
        <PlaneFaq />
      </section>

      <section className={styles.applySection} id="apply">
        <div className={styles.applyIntro}><p>Register</p><h2>Leave your <em>details.</em></h2><p>We&apos;ll arrange the conversation from there.</p></div>
        <div className={styles.applyBody}>
          <form className={styles.applyForm}>
            <label><span>Full name</span><input type="text" name="name" autoComplete="name" /></label>
            <label><span>Email</span><input type="email" name="email" autoComplete="email" /></label>
            <label><span>Phone / WhatsApp</span><input type="tel" name="phone" autoComplete="tel" /></label>
            <label><span>Where you&apos;re based</span><input type="text" name="based" autoComplete="country-name" /></label>
            <button type="button">Request an interview <span>↗</span></button>
            <p>No obligation at this stage. The reservation comes only after we&apos;ve both had the conversation.</p>
          </form>
          <aside className={styles.eventCard}><p>The day</p><strong>31 October 2026</strong><span>Labyrinth Dome · Nuanu · Bali</span><span>Thirty seats. Applications close 17 October.</span><a href="#apply">Request an interview ↗</a></aside>
        </div>
      </section>

      <footer className={styles.studyFooter} id="footer">
        <div className={styles.footerIdentity}>
          <a className={styles.footerLogo} href="#top" aria-label="Nuanu Real Estate"><img src="/images/brand/nuanu-real-estate-white.svg" alt="Nuanu Real Estate" /></a>
          <p className={styles.footerContacts}>Legal entity name<br />Registered address<br />Contact email · Phone</p>
        </div>
        <div className={styles.legalCopy}>
          <p className={styles.counselLabel}>For counsel review</p>
          <p>This page is an invitation to an event and is not an offer of securities or an offer to sell property. Any investment opportunity presented at Nuanu Investor Day is subject to separate documentation. Any projected returns shown are projections based on stated assumptions and are not guaranteed. Past performance is not indicative of future results. Prospective investors should take independent legal, tax and financial advice before committing capital.</p>
          <p className={styles.footerCopyright}>© 2026 Nuanu Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

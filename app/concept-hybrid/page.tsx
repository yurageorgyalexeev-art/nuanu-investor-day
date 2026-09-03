import type { Metadata } from 'next';
import { HybridCity } from './hybrid-city';
import styles from './hybrid.module.css';

const dome =
  'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/b2da3db0-7128-494e-a7d0-a9c97eebcdfe/dome-sunset.webp';

export const metadata: Metadata = {
  title: 'Hybrid Study — Nuanu Investor Day',
  description: 'A hybrid visual direction for selected Nuanu Investor Day sections.',
  robots: { index: false, follow: false },
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ConceptHybrid() {
  return (
    <main className={styles.page}>
      <header className={styles.studyHeader}>
        <a className={styles.wordmark} href="/">Nuanu.</a>
        <nav aria-label="Concept navigation">
          <a href="/">Original</a>
          <a href="/concept-planes">Solid planes</a>
          <strong>Hybrid</strong>
        </nav>
      </header>

      <section className={styles.studyIntro}>
        <p>Hybrid visual language</p>
        <h1>Mass for chapters.<br /><em>Lines for detail.</em></h1>
        <p>
          Large images and calm architectural planes carry the story. Fine rules appear only
          where they make complex information easier to read.
        </p>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.domeImage}>
          <img src={dome} alt="Nuanu at sunset" />
          <div className={styles.domeShade} />
          <div className={styles.domeCaption}>
            <span>The venue · Placeholder until Labyrinth Dome shots arrive</span>
            <p>The day happens inside the building you&apos;re being asked to invest around.</p>
          </div>
        </div>
        <div className={styles.statsField}>
          <article>
            <strong>44 <small>ha</small></strong>
            <p>Creative city in Tabanan, Bali</p>
          </article>
          <article>
            <strong>30<small>+</small></strong>
            <p>Projects built and trading</p>
          </article>
          <article>
            <strong>2,500</strong>
            <p>People through Nuanu on an average day</p>
          </article>
          <article className={styles.seatsStat}>
            <strong>30</strong>
            <p>Seats on 31 October</p>
          </article>
        </div>
      </section>

      <section className={styles.evidenceSection}>
        <div className={styles.evidenceTitle}>
          <p>The numbers</p>
          <h2>We start with what has <em>already happened.</em></h2>
          <p>Real transactions, real dates, real occupancy — before a single projection.</p>
        </div>

        <div className={styles.evidenceBody}>
          <div className={styles.evidenceList}>
            <article>
              <h3>Land</h3>
              <p>What land inside the masterplan cost in 2021 — and what it costs today.</p>
            </article>
            <article>
              <h3>Units</h3>
              <p>What a unit sold for at groundbreaking — and what it sold for at handover.</p>
            </article>
            <article>
              <h3>Occupancy</h3>
              <p>Real occupancy across Nuanu&apos;s operating assets, month by month.</p>
            </article>
          </div>
          <p className={styles.projection}>
            Then the projections — with the assumptions on the same slide, so you can test them
            yourself.
          </p>
        </div>
      </section>

      <HybridCity />

      <footer className={styles.studyFooter}>
        <a className={styles.wordmark} href="/">Nuanu.</a>
        <p>End of the hybrid fragment.</p>
        <div>
          <a href="/concept-planes">Solid planes</a>
          <a href="/">Original concept ↗</a>
        </div>
      </footer>
    </main>
  );
}

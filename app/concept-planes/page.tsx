import type { Metadata } from 'next';
import { PlaneCity } from './plane-city';
import styles from './planes.module.css';

const images = {
  dome: 'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/b2da3db0-7128-494e-a7d0-a9c97eebcdfe/dome-sunset.webp',
};

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
      <header className={styles.studyHeader}>
        <a className={styles.wordmark} href="/">Nuanu.</a>
        <p>Design study · Solid planes</p>
        <a href="/">Original concept ↗</a>
      </header>

      <section className={styles.studyIntro}>
        <p>Alternative visual language</p>
        <h1>Same content.<br /><em>A different grammar.</em></h1>
        <p>
          Three fragments rebuilt without decorative numbering or fine-line grids. Large planes,
          image, type and space do the structural work.
        </p>
      </section>

      <section className={styles.statsStage}>
        <div className={styles.domePlane}>
          <img src={images.dome} alt="Nuanu at sunset" />
          <div className={styles.domeShade} />
          <div className={styles.domeCopy}>
            <span>The venue · Placeholder until Labyrinth Dome shots arrive</span>
            <p>The day happens inside the building you&apos;re being asked to invest around.</p>
          </div>
        </div>
        <div className={styles.statsPlanes}>
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
        </div>
      </section>

      <section className={styles.evidenceSection}>
        <div className={styles.evidenceHeading}>
          <p>The numbers</p>
          <h2>We start with what has <em>already happened.</em></h2>
          <p>Real transactions, real dates, real occupancy — before a single projection.</p>
        </div>
        <div className={styles.evidencePlanes}>
          <article className={styles.landPlane}>
            <h3>Land</h3>
            <p>What land inside the masterplan cost in 2021 — and what it costs today.</p>
          </article>
          <article className={styles.unitsPlane}>
            <h3>Units</h3>
            <p>What a unit sold for at groundbreaking — and what it sold for at handover.</p>
          </article>
          <article className={styles.occupancyPlane}>
            <h3>Occupancy</h3>
            <p>Real occupancy across Nuanu&apos;s operating assets, month by month.</p>
          </article>
        </div>
        <p className={styles.projection}>
          Then the projections — with the assumptions on the same slide, so you can test them
          yourself.
        </p>
      </section>

      <PlaneCity />

      <footer className={styles.studyFooter}>
        <a className={styles.wordmark} href="/">Nuanu.</a>
        <p>End of the alternate fragment.</p>
        <a href="/">Return to the original concept ↗</a>
      </footer>
    </main>
  );
}

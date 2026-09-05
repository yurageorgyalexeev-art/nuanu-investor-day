'use client';

import { useState } from 'react';
import styles from './planes.module.css';

const evidence = [
  {
    title: 'Land',
    text: 'What land inside the masterplan cost in 2021 — and what it costs today.',
    image: '/images/investor-day/evidence-land.webp',
    alt: 'Aerial view of Nuanu and the Tabanan coastline',
    caption: 'Nuanu Creative City · Tabanan coast',
  },
  {
    title: 'Units',
    text: 'What a unit sold for at groundbreaking — and what it sold for at handover.',
    image: '/images/investor-day/evidence-units.webp',
    alt: 'Arrival view of Luna Residence at Nuanu',
    caption: 'Luna Residence · Arrival view',
  },
  {
    title: 'Occupancy',
    text: "Real occupancy across Nuanu's operating assets, month by month.",
    image: '/images/investor-day/evidence-occupancy-people.jpg',
    alt: 'A busy day at Luna Beach Club in Nuanu',
    caption: 'Luna Beach Club · Nuanu',
  },
];

export function PlaneEvidence() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.evidenceSection} id="numbers">
      <div className={styles.evidenceHeading}>
        <p>The numbers</p>
        <h2>We start with what has <em>already happened.</em></h2>
        <p>Real transactions, real dates, real occupancy — before a single projection.</p>
      </div>

      <div className={styles.evidencePlanes} onMouseLeave={() => setActive(0)}>
        {evidence.map((item, index) => {
          const isActive = active === index;

          return (
            <button
              key={item.title}
              className={`${styles.evidencePlane} ${isActive ? styles.evidencePlaneActive : ''}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(0)}
              onMouseEnter={() => setActive(index)}
            >
              <img src={item.image} alt={isActive ? item.alt : ''} />
              <span className={styles.evidencePlaneShade} aria-hidden="true" />
              <span className={styles.evidencePlaneContent}>
                <span className={styles.evidencePlaneCaption}>{item.caption}</span>
                <strong>{item.title}</strong>
                <span className={styles.evidencePlaneText}>{item.text}</span>
              </span>
            </button>
          );
        })}
      </div>

      <p className={styles.projection}>
        Then the projections — with the assumptions on the same slide, so you can test them
        yourself.
      </p>
    </section>
  );
}

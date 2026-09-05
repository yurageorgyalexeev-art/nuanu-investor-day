'use client';

import { useState } from 'react';
import styles from './planes.module.css';

const offers = [
  {
    label: '01',
    title: 'The 2027 plan',
    text: 'A preview of where Nuanu goes next — the phases, the projects and the timeline, before any of it is public.',
    image: '/images/investor-day/offer-2027-sutala.jpg',
    alt: 'Architectural details of Sutala at Nuanu',
    caption: 'Sutala · The 2027 plan',
  },
  {
    label: '02',
    title: 'New investment opportunities',
    text: 'Presented for the first time — including the next drop of Luna Residence and the businesses opening to investors.',
    image: '/images/investor-day/ways-business-building.jpg',
    alt: 'A new residence inside Nuanu',
    caption: 'New opportunities · Nuanu',
  },
  {
    label: '03',
    title: 'Selected offers',
    text: 'Available to guests of the event only, on the day.',
    image: '/images/investor-day/offer-selected-luna.jpg',
    alt: 'A private terrace overlooking the ocean at Luna Residence',
    caption: 'Luna Residence · Event only',
  },
];

export function PlaneOffer() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.offerGridInteractive} onMouseLeave={() => setActive(0)}>
      {offers.map((offer, index) => {
        const isActive = active === index;
        return (
          <button
            className={`${styles.offerCardInteractive} ${isActive ? styles.offerCardActive : ''}`}
            key={offer.title}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <img src={offer.image} alt={isActive ? offer.alt : ''} />
            <span className={styles.offerCardShade} aria-hidden="true" />
            <span className={styles.offerCardContent}>
              <span className={styles.offerCardTop}><b>{offer.label}</b><b>{offer.caption}</b></span>
              <strong>{offer.title}</strong>
              <span className={styles.offerCardText}>{offer.text}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

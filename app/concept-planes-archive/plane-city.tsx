'use client';

import { useState } from 'react';
import styles from './planes.module.css';

const cityModes = [
  {
    title: 'Where people spend the day',
    text: 'A beach club above Nyanyi Beach, restaurants, a wellness sanctuary, a media dome, an art park and a public park.',
    image: '/images/investor-day/city-day.jpg',
    alt: 'Guests at Luna Beach Club in Nuanu',
    caption: 'Luna Beach Club · Nyanyi Beach',
  },
  {
    title: 'Where people stay',
    text: 'A boutique hotel, suites and lodges across the site — open and taking bookings.',
    image: '/images/investor-day/city-stay.jpg',
    alt: 'Guest accommodation inside Nuanu',
    caption: 'Accommodation · On site',
  },
  {
    title: 'Where people live',
    text: 'An international school, residences, and a resident community that grows with every phase.',
    image: '/images/investor-day/city-live.jpg',
    alt: 'A resident family at home in Nuanu',
    caption: 'Resident life · Nuanu',
  },
  {
    title: 'What is still to come',
    text: 'The masterplan runs to 2028. Each phase adds footfall to the assets already trading.',
    image: '/images/investor-day/city-future.jpg',
    alt: 'Future phase of the Nuanu masterplan',
    caption: 'Masterplan · Through 2028',
  },
];

export function PlaneCity() {
  const [active, setActive] = useState(0);
  const current = cityModes[active];

  return (
    <section className={styles.citySection} id="city">
      <div className={styles.cityImage}>
        {cityModes.map((mode, index) => (
          <img
            key={mode.title}
            className={index === active ? styles.cityImageActive : undefined}
            src={mode.image}
            alt={index === active ? mode.alt : ''}
          />
        ))}
        <div className={styles.cityImageCaption}>
          <span>{current.caption}</span>
          <strong>{current.title}</strong>
        </div>
      </div>

      <div className={styles.cityControls}>
        <div className={styles.cityLead}>
          <p>The city</p>
          <h2>It already exists, and people <em>already come.</em></h2>
          <p>
            Nuanu is 44 hectares on the Tabanan coast. Construction began in 2021. More than
            thirty projects are built and trading, and around 2,500 people come through on an
            average day.
          </p>
        </div>
        {cityModes.map((mode, index) => (
          <button
            className={`${styles.cityMode} ${index === active ? styles.cityModeActive : ''}`}
            key={mode.title}
            type="button"
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <strong>{mode.title}</strong>
            <span>{mode.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

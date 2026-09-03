'use client';

import { useState } from 'react';
import styles from './hybrid.module.css';

const cityModes = [
  {
    title: 'Where people spend the day',
    text: 'A beach club above Nyanyi Beach, restaurants, a wellness sanctuary, a media dome, an art park and a public park.',
    image:
      'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/73fc21e9-0745-447d-ba88-c5e1703ea5db/restaurant.webp',
    alt: 'Dining venue at Nuanu',
  },
  {
    title: 'Where people stay',
    text: 'A boutique hotel, suites and lodges across the site — open and taking bookings.',
    image:
      'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/cf270f7c-2aa1-4bb0-b28c-faf754648d91/greenhouse.webp',
    alt: 'Visitors in the Nuanu botanical greenhouse',
  },
  {
    title: 'Where people live',
    text: 'An international school, residences, and a resident community that grows with every phase.',
    image:
      'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/fd0fca12-8afe-4c92-b8b8-fe7b32ba805b/arch-dusk.webp',
    alt: 'Residence architecture at Nuanu',
  },
  {
    title: 'What is still to come',
    text: 'The masterplan runs to 2028. Each phase adds footfall to the assets already trading.',
    image:
      'https://nuanu-investor-day-hub.lovable.app/__l5e/assets-v1/56213f14-97a7-4bdf-8960-663ee7362913/hero-aerial.webp',
    alt: 'Aerial view of Nuanu Creative City',
  },
];

export function HybridCity() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.citySection}>
      <div className={styles.cityTitle}>
        <p>The city</p>
        <h2>It already exists, and people <em>already come.</em></h2>
        <p>
          Nuanu is 44 hectares on the Tabanan coast. Construction began in 2021. More than
          thirty projects are built and trading, and around 2,500 people come through on an
          average day.
        </p>
      </div>

      <div className={styles.cityExperience}>
        <div className={styles.cityImage}>
          {cityModes.map((mode, index) => (
            <img
              key={mode.title}
              className={index === active ? styles.cityImageActive : undefined}
              src={mode.image}
              alt={index === active ? mode.alt : ''}
            />
          ))}
          <p>{cityModes[active].title}</p>
        </div>

        <div className={styles.cityList}>
          {cityModes.map((mode, index) => (
            <button
              key={mode.title}
              className={index === active ? styles.cityItemActive : undefined}
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
      </div>
    </section>
  );
}

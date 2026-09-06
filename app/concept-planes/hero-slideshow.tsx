'use client';

import { useEffect, useState } from 'react';
import styles from './planes.module.css';

const slides = [
  { src: '/images/investor-day/slideshow/01-city-aerial.jpg', alt: 'Nuanu Creative City seen from above', position: 'center 50%' },
  { src: '/images/investor-day/slideshow/04-villa-exterior.jpg', alt: 'Contemporary tropical architecture at Nuanu', position: 'center 52%' },
  { src: '/images/investor-day/slideshow/08-people-night.jpg', alt: 'Guests enjoying an evening at Nuanu', position: 'center 47%' },
  { src: '/images/investor-day/slideshow/06-bamboo-interior.jpg', alt: 'Sculptural bamboo interior at Nuanu', position: 'center 48%' },
  { src: '/images/investor-day/slideshow/12-city-panorama.jpg', alt: 'A wide view of Nuanu Creative City and the Bali coastline', position: 'center 52%' },
  { src: '/images/investor-day/slideshow/09-butterfly.jpg', alt: 'A butterfly held gently in the hands of a visitor', position: 'center 48%' },
  { src: '/images/investor-day/slideshow/05-luna-beach.jpg', alt: 'Luna Residence at Nyanyi Beach', position: 'center 55%' },
  { src: '/images/investor-day/slideshow/10-art-crowd.jpg', alt: 'Art and community gathering at sunset', position: 'center 50%' },
  { src: '/images/investor-day/slideshow/02-coast-sunset.jpg', alt: 'Nuanu coastline and THK tower at sunset', position: 'center 54%' },
  { src: '/images/investor-day/slideshow/11-media-art.jpg', alt: 'Immersive media art performance at Nuanu', position: 'center 46%' },
  { src: '/images/investor-day/slideshow/03-dome-aerial.jpg', alt: 'Nuanu architecture between the jungle and the ocean', position: 'center 48%' },
  { src: '/images/investor-day/slideshow/07-lumeria-pool.jpg', alt: 'Lumeria wellness pool surrounded by tropical greenery', position: 'center 52%' },
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 1500;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => {
        setPrevious(current);
        return (current + 1) % slides.length;
      });
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (previous === null) return;

    const timeout = window.setTimeout(() => setPrevious(null), FADE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [previous]);

  return (
    <div className={styles.heroSlideshow} aria-hidden="true">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          className={`${styles.heroSlide} ${styles[`heroMotion${(index % 4) + 1}`]} ${index === previous ? styles.heroSlidePrevious : ''} ${index === active ? styles.heroSlideActive : ''}`}
          src={slide.src}
          alt=""
          style={{ objectPosition: slide.position }}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      ))}
    </div>
  );
}

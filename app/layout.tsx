import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuanu-investor-day.yura-georgy-alexeev.chatgpt.site'),
  title: 'Investor Day — Nuanu Creative City',
  description:
    'Thirty seats. One day. Equity in the commercial layer of a city that already exists.',
  openGraph: {
    title: 'Investor Day — Nuanu Creative City',
    description:
      'Thirty seats. One day. Equity in the commercial layer of a city that already exists.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Investor Day — Nuanu Creative City' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investor Day — Nuanu Creative City',
    description:
      'Thirty seats. One day. Equity in the commercial layer of a city that already exists.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

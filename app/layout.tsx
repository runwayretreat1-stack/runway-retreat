import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://runwayretreat.example.com'),
  title: {
    default: 'Runway Retreat | Homestay Near Bajpe (Mangalore Airport)',
    template: 'Runway Retreat | %s',
  },
  description:
    'A private 3-bedroom homestay minutes from Mangalore Airport—book the entire building with lush views and quick access to beaches & heritage spots.',
  icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head />
      <body className="min-h-screen bg-white text-ink">
        <a href="#content" className="skip-link">Skip to content</a>
        <SEO />
        <Navbar />
        <main id="content" className="min-h-[60vh]">{children}</main>
        <Footer />

        <Script id="analytics-consent" strategy="afterInteractive">
          {`
            try {
              const consent = localStorage.getItem('analytics-consent');
              if (consent === 'granted') {
                var s = document.createElement('script');
                s.defer = true;
                s.setAttribute('data-domain', 'runwayretreat.example.com');
                s.src = 'https://plausible.io/js/script.js';
                document.body.appendChild(s);
              }
            } catch (e) {}
          `}
        </Script>
      </body>
    </html>
  );
}

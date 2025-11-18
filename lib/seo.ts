import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'Runway Retreat | %s',
  defaultTitle: 'Runway Retreat | Homestay Near Bajpe (Mangalore Airport)',
  description:
    'A private 3-bedroom homestay minutes from Mangalore Airport—book the entire building with lush views and quick access to beaches & heritage spots.',
  canonical: 'https://runwayretreat.example.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://runwayretreat.example.com',
    site_name: 'Runway Retreat',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Runway Retreat — Bajpe, Mangalore'
      }
    ]
  },
  twitter: {
    handle: '@runwayretreat',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    { name: 'theme-color', content: '#0F766E' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' }
  ]
};

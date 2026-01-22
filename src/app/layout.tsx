import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Tecurity - Building the Future of Credit | Fintech Solutions',
    template: '%s | Tecurity',
  },
  description:
    'Tecurity is a leading fintech company revolutionizing credit and lending solutions. Access smart loans, digital banking, and innovative financial services.',
  keywords: [
    'Tecurity',
    'fintech',
    'credit',
    'loans',
    'digital banking',
    'lending solutions',
    'financial services',
    'smart loans',
    'online credit',
    'fintech India',
  ],
  authors: [{ name: 'Tecurity Solutions Pvt. Ltd.' }],
  creator: 'Tecurity Solutions Pvt. Ltd.',
  metadataBase: new URL('https://tecurity.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tecurity.tech',
    siteName: 'Tecurity',
    title: 'Tecurity - Building the Future of Credit',
    description:
      'Revolutionizing credit and lending with innovative fintech solutions. Access smart loans and digital financial services.',
    images: [
      {
        url: '/images/Tecurity.png',
        width: 1200,
        height: 630,
        alt: 'Tecurity - Building the Future of Credit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecurity - Building the Future of Credit',
    description:
      'Revolutionizing credit and lending with innovative fintech solutions.',
    images: ['/images/Tecurity.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

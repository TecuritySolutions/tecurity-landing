import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tecurity',
  description: 'Building the future of Credit',
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

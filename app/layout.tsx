import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: {
    default: 'ValXperts',
    template: 'ValXperts · %s',
  },
  description: 'Validation, GxP testing, and the digital stack behind both. For life sciences manufacturers. Named leads, risk-based protocols, and audit support that stays in the room.',
  openGraph: {
    title: 'ValXperts · Validation that holds up under audit',
    description: 'Validation, GxP testing, and the digital stack behind both. For life sciences manufacturers.',
    type: 'website',
    siteName: 'ValXperts',
  },
  twitter: {
    card: 'summary',
    title: 'ValXperts · Validation that holds up under audit',
    description: 'Validation, GxP testing, and the digital stack behind both.',
  },
  icons: {
    icon: [
      {
        url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%230A1420"/><text x="16" y="23" font-family="sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="%2310B981">X</text></svg>`,
        type: 'image/svg+xml',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1420',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body style={{ fontFamily: 'var(--font-ubuntu), ui-sans-serif, system-ui, sans-serif' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}

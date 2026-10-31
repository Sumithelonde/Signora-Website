import type { Metadata, Viewport } from 'next';
import { Footer, Header, ScrollEnhancer } from '@/components/SiteChrome';
import { brand } from '@/data/content';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SIGNORA AI | Every announcement deserves to be understood',
    template: '%s | SIGNORA AI',
  },
  description: brand.description,
  keywords: [
    'SIGNORA AI',
    'Indian Sign Language',
    'accessible communication',
    'public announcement accessibility',
    'hierarchical motion retrieval',
    'inclusive technology',
    'assistive AI',
  ],
  icons: { icon: '/favicon.svg' },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#F8FAF6',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-to-content" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollEnhancer />
      </body>
    </html>
  );
}

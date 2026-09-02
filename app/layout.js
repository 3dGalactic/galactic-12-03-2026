import { Suspense } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';
import BackToTop from './components/BackToTop';
import GoogleAnalytics from './components/GoogleAnalytics';
import SchemaMarkup from './components/SchemaMarkup';

export const metadata = {
  metadataBase: new URL('https://galactic-3d.com'),
  title: {
    default: 'Galactic 3D | Metal 3D Printing Bangalore',
    template: '%s | Galactic 3D',
  },
  description: 'Leading Metal 3D Printing, DMLS, Rapid Prototyping, Additive Manufacturing, Engineering Design and Industrial 3D Printing Solutions in Bangalore, India.',
  keywords: [
    'Metal 3D Printing Bangalore',
    'DMLS Printing Bangalore',
    'Additive Manufacturing India',
    'Rapid Prototyping Bangalore',
    'Industrial 3D Printing',
    'Aerospace 3D Printing',
    'Automotive 3D Printing',
    'Medical 3D Printing',
    'Galactic 3D',
  ],
  authors: [{ name: 'Galactic 3D Engineering Team', url: 'https://galactic-3d.com' }],
  creator: 'Galactic 3D',
  publisher: 'Galactic 3D',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://galactic-3d.com',
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
  openGraph: {
    title: 'Galactic 3D | Metal 3D Printing Bangalore',
    description: 'Leading Metal 3D Printing and Additive Manufacturing Company in Bangalore.',
    url: 'https://galactic-3d.com',
    siteName: 'Galactic 3D',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://galactic-3d.com/articles/aerospace-future.png',
        width: 1200,
        height: 630,
        alt: 'Galactic 3D | Metal 3D Printing Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galactic 3D | Metal 3D Printing Bangalore',
    description: 'Leading Metal 3D Printing and Additive Manufacturing Company in Bangalore.',
    images: ['https://galactic-3d.com/articles/aerospace-future.png'],
    creator: '@Galactic3D',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#D32F2F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

        {/* =====================================================================
            GOOGLE ANALYTICS 4 (GA4) INTEGRATION
            Measurement ID: G-MKPM7732WX
            Global implementation in root layout head (Next.js App Router)
            ===================================================================== */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* JSON-LD Structured Data Schemas */}
        <SchemaMarkup />
      </head>
      <body className="bg-white text-black antialiased selection:bg-[#D32F2F] selection:text-white font-sans">
        <ToastProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}

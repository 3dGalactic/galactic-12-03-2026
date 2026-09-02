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
    default: 'Metal 3D Printing Bangalore & Additive Manufacturing India | Galactic 3D',
    template: '%s | Galactic 3D Pvt Ltd',
  },
  description: 'Galactic 3D Pvt Ltd is Bangalore\'s leading Metal 3D Printing & Additive Manufacturing company. Offering EOS M290 DMLS 20-40 micron precision, Rapid Prototyping, Aerospace, Automotive, Medical & Nuclear 3D printing solutions in India.',
  keywords: [
    'Metal 3D Printing Bangalore',
    '3D Printing Company Bangalore',
    'Additive Manufacturing Bangalore',
    'Industrial 3D Printing India',
    'Rapid Prototyping Bangalore',
    'Aerospace 3D Printing',
    'Automotive 3D Printing',
    'Medical 3D Printing',
    'Metal Additive Manufacturing',
    'EOS M290 Printing',
    'Industrial Manufacturing Solutions',
    'DMLS 3D Printing India',
    'Titanium 3D Printing Bangalore',
    'EV Cooling Plate Manufacturing',
    'Galactic 3D Pvt Ltd',
  ],
  authors: [{ name: 'Galactic 3D Engineering Team', url: 'https://galactic-3d.com' }],
  creator: 'Galactic 3D Pvt Ltd',
  publisher: 'Galactic 3D Pvt Ltd',
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
    title: 'Galactic 3D | Metal 3D Printing Bangalore & Additive Manufacturing India',
    description: 'Leader in Metal 3D Printing & Industrial Additive Manufacturing in Bangalore, India. 20-40 micron DMLS accuracy for Aerospace, EV, Medical, & Industrial production.',
    url: 'https://galactic-3d.com',
    siteName: 'Galactic 3D Pvt Ltd',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://galactic-3d.com/articles/aerospace-future.png',
        width: 1200,
        height: 630,
        alt: 'Galactic 3D Metal Additive Manufacturing Bangalore EOS M290',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galactic 3D - Metal 3D Printing Bangalore & Additive Manufacturing India',
    description: 'Industrial metal & polymer 3D printing company in Bangalore. EOS M290 DMLS precision for aerospace, EV cooling, medical implants & rapid prototyping.',
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

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastProvider } from './components/Toast'
import BackToTop from './components/BackToTop'

export const metadata = {
  title: 'Galactic 3D - Industrial 3D Printing & Additive Manufacturing',
  description: 'High-precision metal & polymer additive manufacturing, rapid prototyping, DMLS, FDM, and production engineering in India.',
  keywords: '3D Printing, DMLS, Additive Manufacturing, Rapid Prototyping, Metal 3D Printing, FDM, SLS, Industrial Manufacturing, India',
  openGraph: {
    title: 'Galactic 3D - High-Precision Additive Manufacturing',
    description: 'Industrial-grade metal and polymer 3D printing services for aerospace, automotive, medical, and robotics.',
    url: 'https://galactic-3d.com',
    siteName: 'Galactic 3D',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="bg-white text-black antialiased selection:bg-black selection:text-white">
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
  )
}

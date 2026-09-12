import { Suspense } from 'react';
import Script from 'next/script';
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
          <script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="su ru ou lu hu init Au Fu Eu Pu Nu zl Ru ju Tu Uu Wu Vu capture getExtension Ou iu Qu calculateEventProperties Zu register register_once register_for_session unregister unregister_for_session Xu Mu Ju getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync th identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset eh shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Ku zu createPersonProfile setInternalOrTestUser Yu cu du opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Bu debug Ul $s getPageViewId captureTraceFeedback captureTraceMetric Su".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_v6AnZyP29MJsRdjMLXWxZecm3KTs6Sa5ZGcvw6Rh7hKY', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2026-05-30',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    })
</script>
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

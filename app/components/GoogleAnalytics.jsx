'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

// =========================================================================
// GOOGLE ANALYTICS 4 (GA4) INTEGRATION
// Measurement ID: G-MKPM7732WX
// =========================================================================
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-MKPM7732WX';
export const GSC_VERIFICATION_ID = process.env.NEXT_PUBLIC_GSC_ID || 'google-site-verification-galactic3d-bangalore';

/**
 * Custom GA4 Event Tracker helper for tracking interactions
 * @param {string} action - Event name (e.g. 'quote_request', 'contact_submit')
 * @param {object} params - Event metadata
 */
export const trackCustomEvent = (action, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      ...params,
      send_to: GA_MEASUREMENT_ID,
    });
  }
};

export const trackQuoteRequest = (material, industry) => {
  trackCustomEvent('request_quote_click', {
    event_category: 'Conversion',
    event_label: `${material}_${industry}`,
  });
};

export const trackContactForm = (subject) => {
  trackCustomEvent('contact_form_submit', {
    event_category: 'Lead',
    event_label: subject,
  });
};

export const trackLinkedInClick = (articleTitle) => {
  trackCustomEvent('linkedin_article_click', {
    event_category: 'Engagement',
    event_label: articleTitle,
  });
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Automatically track page views on Single-Page Application (SPA) route changes
  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      const url = searchParams?.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        send_page_view: true,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* =====================================================================
          Google Search Console Verification Meta Tag
          ===================================================================== */}
      <meta name="google-site-verification" content={GSC_VERIFICATION_ID} />

      {/* =====================================================================
          Google Analytics 4 (GA4) Global Site Tag (gtag.js)
          Measurement ID: G-MKPM7732WX
          Loaded via Next.js next/script with strategy="afterInteractive"
          ===================================================================== */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

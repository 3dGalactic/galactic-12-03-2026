'use client'

export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://galactic-3d.com/#organization',
    name: 'Galactic 3D Pvt Ltd',
    url: 'https://galactic-3d.com',
    logo: 'https://galactic-3d.com/logo.png',
    description: 'Premier Metal 3D Printing & Additive Manufacturing company in Bangalore, India. Specializing in EOS M290 DMLS, Rapid Prototyping, Aerospace, Automotive, Medical, and Space Technology components.',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cambridge Group of Institutions Campus, KR Puram',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560036',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9876543210',
      contactType: 'customer service',
      email: 'contact@galactic-3d.com',
      areaServed: ['IN', 'Bangalore', 'Peenya', 'Whitefield', 'Electronic City', 'Hosur', 'Global'],
      availableLanguage: ['English', 'Kannada', 'Hindi'],
    },
    sameAs: [
      'https://www.linkedin.com/company/galactic-3d/',
      'https://www.linkedin.com/company/galactic-3d/posts/?feedView=articles',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://galactic-3d.com/#localbusiness',
    name: 'Galactic 3D Pvt Ltd - Metal 3D Printing Bangalore',
    image: 'https://galactic-3d.com/articles/aerospace-future.png',
    telephone: '+91-9876543210',
    email: 'contact@galactic-3d.com',
    url: 'https://galactic-3d.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cambridge Group of Institutions Campus, KR Puram',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560036',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0113,
      longitude: 77.7052,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bangalore Metropolitan Region',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Karnataka',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://galactic-3d.com/#services',
    serviceType: 'Metal 3D Printing & Additive Manufacturing Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Galactic 3D Pvt Ltd',
      address: 'KR Puram, Bangalore, Karnataka, India',
    },
    areaServed: 'Bangalore, India & Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Additive Manufacturing Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metal 3D Printing Bangalore (DMLS / DMLS 20-40 Micron Precision)',
            description: 'Direct Metal Laser Sintering using EOS M290 machines for Titanium Ti64, Inconel 718, AlSi10Mg, CoCr, and Stainless Steel 316L.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rapid Prototyping Bangalore',
            description: '24-hour rapid metal and polymer prototyping with DfAM optimization for industrial product development in Bangalore.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aerospace & Defense 3D Printing',
            description: 'AS9100-ready metal additive manufacturing for rocket engine nozzles, turbine blisks, drone frames, and lattice structures.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automotive & EV 3D Printing',
            description: 'Conformal EV battery cooling plates, lightweight structural chassis brackets, and engine manifolds via metal AM.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical & Biomaterials 3D Printing',
            description: 'Patient-specific orthopedic implants and 3D printed bone-like trabecular lattice structures for osseointegration.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Metal 3D Printing (DMLS) and how does Galactic 3D execute it in Bangalore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Direct Metal Laser Sintering (DMLS) is an additive manufacturing process that uses a high-power fiber laser to fuse fine metal powder layer-by-layer (20–40 microns). At Galactic 3D Bangalore, we utilize EOS M290 industrial systems to print fully dense aerospace, automotive, medical, and industrial components with Titanium, Inconel, and Aluminum alloys.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why choose Galactic 3D as your 3D Printing Company in Bangalore, India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Galactic 3D Pvt Ltd combines academic research excellence with industrial AM production capacity. We offer 20–40 micron ultra-fine printing resolution, AS9100 aerospace compliance, 24-hour rapid prototyping turnaround, real-time optical tomography QA, and full DfAM engineering consultation in Bangalore.',
        },
      },
      {
        '@type': 'Question',
        name: 'What materials are available for Metal Additive Manufacturing at Galactic 3D?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We print high-performance metal alloys including Titanium (Ti64 Grade 5), Inconel 718, Stainless Steel 316L, Aluminum (AlSi10Mg), Cobalt Chrome (CoCr), and Tool Steel MS1 for conformal cooling molds.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can Galactic 3D deliver Rapid Prototyping parts in Bangalore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Galactic 3D offers rapid CAD-to-part quotes within 2 hours and 24-48 hour delivery for rapid prototypes across Bangalore industrial hubs like Peenya, Whitefield, Electronic City, and Hosur.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

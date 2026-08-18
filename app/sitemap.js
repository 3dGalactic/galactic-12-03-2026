export default async function sitemap() {
  const baseUrl = 'https://galactic-3d.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/materials',
    '/machines',
    '/projects',
    '/casestudies',
    '/industries',
    '/research',
    '/resources',
    '/blog',
    '/faq',
    '/careers',
    '/contact',
    '/upload',
    '/submit',
    '/marketplace',
    '/dashboard',
    '/admin/dashboard',
    '/auth',
    '/terms',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

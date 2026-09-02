export default async function sitemap() {
  const baseUrl = 'https://galactic-3d.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/services', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.90, changeFrequency: 'daily' },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/materials', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/machines', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/industries', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.90, changeFrequency: 'monthly' },
    { path: '/upload', priority: 0.90, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.80, changeFrequency: 'weekly' },
    { path: '/casestudies', priority: 0.80, changeFrequency: 'weekly' },
    { path: '/research', priority: 0.80, changeFrequency: 'weekly' },
    { path: '/resources', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.70, changeFrequency: 'monthly' },
    { path: '/marketplace', priority: 0.70, changeFrequency: 'weekly' },
    { path: '/terms', priority: 0.30, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.30, changeFrequency: 'yearly' },
  ];

  const articleSlugs = [
    '/blog#ev-battery-cooling-plates',
    '/blog#lattice-structures-armour-drone-frames',
    '/blog#printing-20-40-microns-eos-m290',
    '/blog#supply-chain-disruption-additive-manufacturing',
    '/blog#breakthrough-biomaterials-bone-implants',
    '/blog#enhancing-nuclear-power-additive-manufacturing',
    '/blog#transforming-indian-automobile-industry',
    '/blog#future-of-aerospace-layer-by-layer',
  ];

  const mainSitemapEntries = routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const articleSitemapEntries = articleSlugs.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...mainSitemapEntries, ...articleSitemapEntries];
}

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/']
    },
    sitemap: 'https://ankitkatole.dev/sitemap.xml'
  };
}

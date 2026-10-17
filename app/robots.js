export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Applebot-Extended'],
        allow: '/'
      }
    ],
    sitemap: 'https://ankitkatole.dev/sitemap.xml'
  };
}

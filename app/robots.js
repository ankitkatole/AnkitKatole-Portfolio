export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot'],
        allow: '/'
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Applebot-Extended'],
        allow: '/'
      }
    ],
    sitemap: 'https://ankit-katole-portfolio.vercel.app/sitemap.xml',
    host: 'https://ankit-katole-portfolio.vercel.app'
  };
}

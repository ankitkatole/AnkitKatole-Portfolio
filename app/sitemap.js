import { getAllPosts } from '../lib/blog';

export default function sitemap() {
  const baseUrl = 'https://ankit-katole-portfolio.vercel.app';
  const publishedPosts = getAllPosts({ includeDrafts: false });

  const postUrls = publishedPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...postUrls
  ];
}

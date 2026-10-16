import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

/**
 * Calculates estimated reading time in minutes from markdown content.
 */
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Ensures blog content directory exists
 */
function ensureBlogDirectory() {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
  }
}

/**
 * Validates required frontmatter schema
 */
function validatePostData(slug, data) {
  if (!data.title) {
    throw new Error(`Article [${slug}] is missing required frontmatter property: "title"`);
  }
  if (!data.description) {
    throw new Error(`Article [${slug}] is missing required frontmatter property: "description"`);
  }
  if (!data.publishedAt) {
    throw new Error(`Article [${slug}] is missing required frontmatter property: "publishedAt"`);
  }
}

/**
 * Fetches all blog articles sorted by publication date descending.
 * Drafts are excluded by default to ensure production safety.
 */
export function getAllPosts({ includeDrafts = false } = {}) {
  ensureBlogDirectory();

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  const seenSlugs = new Set();

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(BLOG_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const slug = data.slug || fileName.replace(/\.md$/, '');

      if (seenSlugs.has(slug)) {
        throw new Error(`Duplicate article slug detected: "${slug}" in file ${fileName}`);
      }
      seenSlugs.add(slug);

      validatePostData(slug, data);

      const readingTime = data.readingTime || calculateReadingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt || null,
        tags: Array.isArray(data.tags) ? data.tags : [],
        readingTime,
        draft: Boolean(data.draft),
        coverImage: data.coverImage || null,
        canonicalUrl: data.canonicalUrl || null,
        content
      };
    })
    .filter((post) => (includeDrafts ? true : !post.draft))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

/**
 * Retrieves a single post by slug.
 */
export function getPostBySlug(slug, { includeDrafts = false } = {}) {
  const posts = getAllPosts({ includeDrafts: true });
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  if (post.draft && !includeDrafts) {
    return null;
  }

  return post;
}

/**
 * Extracts all unique tags from published posts
 */
export function getAllTags() {
  const posts = getAllPosts({ includeDrafts: false });
  const tagCounts = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}

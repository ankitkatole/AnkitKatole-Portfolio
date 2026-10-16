# Content Authoring & Publishing Guide

This guide defines how to create, validate, and publish technical articles for Ankit Katole's engineering portfolio.

---

## 1. Directory Structure

All articles reside in `content/blog/` as Markdown (`.md`) files:

```
content/
└── blog/
    ├── clean-spring-boot-exception-handling.md
    ├── resilient-event-driven-microservices-kafka.md
    └── [your-article-slug].md
```

The system automatically discovers all `.md` files in this directory. No central array or router configuration needs to be edited manually.

---

## 2. Article Frontmatter Schema

Every article must begin with YAML frontmatter containing the following required and optional properties:

```yaml
---
title: "Article Title in Sentence Case"
slug: "clean-slug-without-trailing-slashes"
description: "A concise 1-2 sentence summary of the engineering problem and solution."
publishedAt: "YYYY-MM-DD"
tags: ["Java", "Spring Boot", "Kafka"]
draft: false
updatedAt: "YYYY-MM-DD" # Optional
coverImage: "/path/to/image.png" # Optional
canonicalUrl: "https://..." # Optional
---
```

### Field Definitions

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | **Yes** | Clear, specific technical headline. Avoid generic clickbait. |
| `slug` | String | **Yes** | URL path identifier. Must be lowercase, alphanumeric with hyphens. |
| `description` | String | **Yes** | Concise summary used for search snippets, OpenGraph, and index previews. |
| `publishedAt` | String (ISO) | **Yes** | Publication date in `YYYY-MM-DD` format. Used for sorting. |
| `tags` | Array | **Yes** | 2-4 specific technical tags matching genuine skills (e.g. `["Kafka", "Spring Boot"]`). |
| `draft` | Boolean | **Yes** | Set to `true` to keep hidden during drafting; `false` to publish. |
| `updatedAt` | String (ISO) | No | Optional timestamp when major revisions occur. |

---

## 3. Draft Isolation & Publishing Safety

The publishing engine enforces strict safety rules:

1. **Listing Exclusion:** When `draft: true`, the article is omitted from the public index (`/blog`).
2. **Sitemap Exclusion:** Draft articles are never included in `sitemap.xml`.
3. **Route Guard:** Visiting `/blog/[slug]` for a draft post in production immediately returns HTTP 404 (`notFound()`).
4. **Slug Uniqueness:** Duplicate slugs will trigger a build error to prevent collision.

To publish an article, simply change `draft: true` to `draft: false`.

---

## 4. Markdown Formatting & Code Blocks

The reader component supports:

- Headings: `## Heading 2`, `### Heading 3`
- Unordered lists (`- Item`) and numbered steps (`1. Step`)
- Interactive code blocks with language headers and copy buttons:

````markdown
```java
@Service
public class OrderService {
    // Verified implementation code
}
```
````

---

## 5. Automated Build Verification

After adding or editing an article, run the production build to verify metadata integrity and static page generation:

```bash
npm run build
```

If any required frontmatter property is missing or if duplicate slugs exist, the build will fail with a clear, descriptive message identifying the affected file.

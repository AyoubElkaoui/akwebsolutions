import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogFrontmatter } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
      readingTime: `${Math.ceil(stats.minutes)} min`,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: `${Math.ceil(stats.minutes)} min`,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
): BlogPost[] {
  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== currentSlug && post.frontmatter.category === category,
    )
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.frontmatter.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));
  return Array.from(categories);
}

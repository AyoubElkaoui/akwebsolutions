import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { BlogPostContent } from "@/components/sections/blog-post-content";
import { mdxComponents } from "@/components/blog/mdx-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | AK Web Solutions Blog`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags,
    authors: [{ name: post.frontmatter.author }],
    alternates: {
      canonical: `https://akwebsolutions.nl/blog/${slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `https://akwebsolutions.nl/blog/${slug}`,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: [
        {
          url: post.frontmatter.image || "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

function extractTocItems(
  content: string,
): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    items.push({ id, text, level });
  }

  return items;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(
    slug,
    post.frontmatter.category,
  );
  const tocItems = extractTocItems(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image
      ? `https://akwebsolutions.nl${post.frontmatter.image}`
      : "https://akwebsolutions.nl/og-image.jpg",
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
      url: "https://akwebsolutions.nl/over-ons",
    },
    publisher: {
      "@type": "Organization",
      name: "AK Web Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://akwebsolutions.nl/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://akwebsolutions.nl/blog/${slug}`,
    },
    keywords: post.frontmatter.tags.join(", "),
    articleSection: post.frontmatter.category,
    inLanguage: "nl-NL",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://akwebsolutions.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://akwebsolutions.nl/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: `https://akwebsolutions.nl/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />
      <main>
        <BlogPostContent
          post={post}
          relatedPosts={relatedPosts}
          tocItems={tocItems}
        >
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    { behavior: "wrap" },
                  ],
                ],
              },
            }}
          />
        </BlogPostContent>
      </main>
      <Footer />
    </div>
  );
}

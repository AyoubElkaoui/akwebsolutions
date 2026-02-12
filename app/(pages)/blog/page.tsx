import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { BlogContent } from "@/components/sections/blog-content";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Web Development Tips & SEO Inzichten | AK Web Solutions",
  description:
    "Praktische tips over web development, SEO optimalisatie, webshops en online groei. Leer hoe je jouw website naar het volgende niveau tilt. Door AK Web Solutions uit Baarn.",
  keywords: [
    "web development blog",
    "SEO tips",
    "website tips",
    "webshop tips",
    "online marketing blog",
    "web development Nederland",
    "website laten maken tips",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl/blog",
  },
  openGraph: {
    title: "Blog - Web Development Tips & SEO Inzichten | AK Web Solutions",
    description:
      "Praktische tips over web development, SEO optimalisatie, webshops en online groei.",
    url: "https://akwebsolutions.nl/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AK Web Solutions",
    description:
      "Tips en inzichten over web development, SEO en online groei.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <BlogContent posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

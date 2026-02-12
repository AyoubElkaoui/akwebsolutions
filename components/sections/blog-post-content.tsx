"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  Share2,
  Linkedin,
  Facebook,
  Link2,
  ChevronRight,
} from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { TracingBeam } from "@/components/ui/tracing-beam";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-28">
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
        Inhoudsopgave
      </h4>
      <ul className="space-y-2 border-l border-white/10">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`block border-l-2 py-1 text-sm transition-all ${
                item.level === 3 ? "pl-8" : "pl-4"
              } ${
                activeId === item.id
                  ? "border-[#7B4FB5] font-medium text-[#B39DDB]"
                  : "border-transparent text-white/40 hover:border-white/20 hover:text-white/60"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://akwebsolutions.nl/blog/${slug}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5 text-sm text-white/40">
        <Share2 className="h-4 w-4" />
        Deel:
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-[#7B4FB5]/50 hover:bg-[#7B4FB5]/10"
        aria-label="Deel op LinkedIn"
      >
        <Linkedin className="h-4 w-4 text-white/60" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-[#7B4FB5]/50 hover:bg-[#7B4FB5]/10"
        aria-label="Deel op Facebook"
      >
        <Facebook className="h-4 w-4 text-white/60" />
      </a>
      <button
        onClick={copyLink}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-[#7B4FB5]/50 hover:bg-[#7B4FB5]/10"
        aria-label="Kopieer link"
      >
        <Link2 className="h-4 w-4 text-white/60" />
      </button>
    </div>
  );
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]">
        <div className="relative h-40">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#3D2975] to-[#7B4FB5]"
            style={{
              backgroundImage: `url(${post.frontmatter.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {post.frontmatter.category}
            </span>
          </div>
          <h4 className="text-base font-bold text-white transition-colors group-hover:text-[#B39DDB]">
            {post.frontmatter.title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export function BlogPostContent({
  post,
  relatedPosts,
  children,
  tocItems,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
  children: React.ReactNode;
  tocItems: TocItem[];
}) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2975]/10 via-black to-black" />

        <div className="container-custom relative">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-center gap-2 text-sm text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-[#B39DDB]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/blog"
              className="transition-colors hover:text-[#B39DDB]"
            >
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/60">{post.frontmatter.category}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            {/* Category Badge */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#7B4FB5]/30 bg-[#7B4FB5]/10 px-3 py-1 text-xs font-semibold text-[#B39DDB]">
              <Tag className="h-3 w-3" />
              {post.frontmatter.category}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {post.frontmatter.title}
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-3xl text-lg text-white/60 md:text-xl">
              {post.frontmatter.description}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3D2975] to-[#7B4FB5]">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {post.frontmatter.author}
                  </div>
                  <div className="text-xs text-white/40">AK Web Solutions</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.frontmatter.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} leestijd
                </span>
              </div>

              <div className="ml-auto">
                <ShareButtons
                  title={post.frontmatter.title}
                  slug={post.slug}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-32">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_250px]">
              {/* Main Content with TracingBeam */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TracingBeam>
                  <article className="prose-invert max-w-none pl-6 md:pl-12">
                    {children}
                  </article>
                </TracingBeam>
              </motion.div>

              {/* Sidebar — TOC (desktop only) */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Author Card */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3D2975] to-[#7B4FB5]">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    {post.frontmatter.author}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-[#B39DDB]">
                    Oprichter & Lead Developer bij AK Web Solutions
                  </p>
                  <p className="text-sm leading-relaxed text-white/50">
                    Gepassioneerd door moderne webtechnologieën en het bouwen
                    van snelle, mooie websites die resultaat opleveren. Altijd
                    op zoek naar de beste oplossing voor elke klant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white">
                Gerelateerde{" "}
                <span className="text-[#B39DDB]">Artikelen</span>
              </h2>
              <p className="text-white/60">
                Ontdek meer artikelen in dezelfde categorie
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relPost) => (
                <motion.div
                  key={relPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <RelatedPostCard post={relPost} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Hulp nodig met jouw{" "}
              <span className="text-[#B39DDB]">website</span>?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem vrijblijvend contact op en ontdek wat ik voor jouw bedrijf
              kan betekenen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#7B4FB5]/30"
            >
              Neem Contact Op
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

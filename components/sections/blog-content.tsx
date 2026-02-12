"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
  BookOpen,
} from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { Spotlight } from "@/components/ui/spotlight";

const categories = [
  "Alles",
  "Web Development",
  "SEO",
  "E-commerce",
  "Software",
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]">
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden md:h-56">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#3D2975] to-[#7B4FB5]"
              style={{
                backgroundImage: `url(${post.frontmatter.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Category Badge */}
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-[#B39DDB] backdrop-blur-sm">
                <Tag className="h-3 w-3" />
                {post.frontmatter.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            {/* Meta */}
            <div className="mb-3 flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.frontmatter.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} leestijd
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-[#B39DDB] md:text-xl">
              {post.frontmatter.title}
            </h3>

            {/* Description */}
            <p className="mb-4 flex-1 text-sm leading-relaxed text-white/50">
              {post.frontmatter.description}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-semibold text-[#B39DDB] transition-all group-hover:gap-3">
              Lees meer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-full lg:min-h-[380px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#3D2975] to-[#7B4FB5]"
                style={{
                  backgroundImage: `url(${post.frontmatter.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 max-lg:bg-gradient-to-t max-lg:from-black/80 max-lg:to-transparent" />
              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-sm font-semibold text-[#B39DDB] backdrop-blur-sm">
                  Uitgelicht
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.frontmatter.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} leestijd
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="h-4 w-4" />
                  {post.frontmatter.category}
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#B39DDB] md:text-3xl lg:text-4xl">
                {post.frontmatter.title}
              </h2>

              <p className="mb-6 text-base leading-relaxed text-white/60 lg:text-lg">
                {post.frontmatter.description}
              </p>

              <div className="flex items-center gap-2 text-base font-semibold text-[#B39DDB] transition-all group-hover:gap-3">
                Lees het volledige artikel
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function BlogContent({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("Alles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = posts.find((p) => p.frontmatter.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const filteredPosts = otherPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "Alles" ||
      post.frontmatter.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.frontmatter.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#7B4FB5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2975]/10 via-black to-black" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <BookOpen className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Kennis & Inzichten
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Onze{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/60 md:text-xl">
              Tips, trends en inzichten over web development, SEO en online
              groei. Alles wat je nodig hebt om jouw online aanwezigheid naar
              het volgende niveau te tillen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="pb-8">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none transition-colors focus:border-[#7B4FB5]/50 focus:bg-white/[0.05]"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3D2975] to-[#7B4FB5]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeCategory === category
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {category}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "Alles" && searchQuery === "" && (
        <section className="pb-8">
          <div className="container-custom">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredPosts.map((post, idx) => (
                  <PostCard key={post.slug} post={post} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center"
              >
                <p className="text-lg text-white/40">
                  Geen artikelen gevonden voor deze zoekopdracht.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

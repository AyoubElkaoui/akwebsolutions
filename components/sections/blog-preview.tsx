"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  readingTime: string;
}

const categoryColors: Record<string, string> = {
  "Web Development": "bg-[#7B4FB5]/20 text-[#B39DDB]",
  SEO: "bg-green-500/10 text-green-400",
  "E-commerce": "bg-blue-500/10 text-blue-400",
  Software: "bg-orange-500/10 text-orange-400",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#3D2975]/10 blur-[150px]" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7B4FB5]/30 bg-[#7B4FB5]/10 px-3 py-1.5">
              <Tag className="h-3.5 w-3.5 text-[#B39DDB]" />
              <span className="text-xs font-medium text-[#B39DDB]">Web Development Tips</span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Kennis &{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                inzichten
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-white/50">
              Gratis tips over web development, SEO en online groeien voor jouw bedrijf.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-[#7B4FB5]/50 hover:bg-[#7B4FB5]/10 hover:text-white"
            >
              Alle artikelen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Posts grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all hover:border-[#7B4FB5]/30 hover:bg-[#7B4FB5]/[0.04]">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[post.category] ?? "bg-white/10 text-white/70"}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-white/30">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mb-2 flex-1 text-base font-bold leading-snug text-white transition-colors group-hover:text-[#B39DDB]">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-white/40">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#B39DDB]/70 transition-colors group-hover:text-[#B39DDB]">
                      Lees artikel
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

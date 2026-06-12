"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const isDental = post.category === "Dental";
  const categoryColor = isDental ? "#C5A46D" : "#E8748A";
  const categoryBg = isDental ? "rgba(197,164,109,0.1)" : "rgba(232,116,138,0.1)";

  if (featured) {
    return (
      <article
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight: "240px" }}
            aria-hidden="true"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 text-white text-sm font-semibold uppercase tracking-wider opacity-90 z-10 drop-shadow-md">
              Featured Article
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ color: categoryColor, background: categoryBg, fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {post.category}
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ background: "#F3F4F6", color: "#6B7280" }}>
                Featured
              </span>
            </div>
            <h2
              className="font-bold mb-3 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-poppins, sans-serif)",
                color: "#1A1A2E",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                lineHeight: 1.3,
              }}
            >
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p
              className="text-sm leading-relaxed mb-5 line-clamp-3"
              style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
            >
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-4 text-xs"
                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1.5 text-xs font-semibold transition-gap duration-200"
                style={{ color: categoryColor, fontFamily: "var(--font-inter, sans-serif)" }}
                aria-label={`Read more about ${post.title}`}
              >
                Read More
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-200"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
      }}
    >
      {/* Card image area */}
      <div
        className="h-48 relative overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <div
          className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full z-20 shadow-sm"
          style={{ color: categoryColor, background: "#FFFFFF", fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div
          className="flex items-center gap-3 text-xs mb-3"
          style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
        >
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <h3
          className="font-bold mb-2.5 line-clamp-2 flex-1"
          style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            color: "#1A1A2E",
            fontSize: "0.975rem",
            lineHeight: 1.35,
          }}
        >
          {post.title}
        </h3>
        <p
          className="text-xs leading-relaxed mb-4 line-clamp-2"
          style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: "#F3F4F6" }}>
          <span
            className="text-xs"
            style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
            style={{ color: categoryColor, fontFamily: "var(--font-inter, sans-serif)" }}
            aria-label={`Read more about ${post.title}`}
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

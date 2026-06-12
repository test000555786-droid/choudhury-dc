import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import BlogCard from "@/components/shared/BlogCard";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog-posts";
import { siteConfig } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Choudhury Dental & Skin Care Clinic`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);
  const isDental = post.category === "Dental";
  const accent = isDental ? "#C5A46D" : "#E8748A";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  // Parse markdown-like content to HTML-ish JSX
  const renderContent = (content: string) => {
    return content.trim().split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return <h2 key={i} className="font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E", fontSize: "1.3rem" }}>{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("### ")) {
        return <h3 key={i} className="font-semibold mt-6 mb-2" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E", fontSize: "1.1rem" }}>{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith("---")) {
        return <hr key={i} className="my-8" style={{ borderColor: "#E5E7EB" }} />;
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return <p key={i} className="font-semibold text-sm mb-3" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>{trimmed.slice(2, -2)}</p>;
      }
      if (trimmed.startsWith("| ")) {
        const rows = trimmed.split("\n").filter(r => !r.startsWith("| -") && !r.startsWith("|--"));
        return (
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter(c => c.trim()).map(c => c.trim());
                return ri === 0 ? (
                  <thead key={ri}><tr style={{ background: "#F7F8FA" }}>{cells.map((c, ci) => <th key={ci} className="px-4 py-2.5 text-left text-xs font-semibold" style={{ color: "#374151", borderBottom: "1px solid #E5E7EB", fontFamily: "var(--font-poppins, sans-serif)" }}>{c}</th>)}</tr></thead>
                ) : (
                  <tbody key={ri}><tr style={{ borderBottom: "1px solid #F3F4F6" }}>{cells.map((c, ci) => <td key={ci} className="px-4 py-2.5 text-xs" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>{c}</td>)}</tr></tbody>
                );
              })}
            </table>
          </div>
        );
      }
      if (trimmed.startsWith("*") && trimmed.includes("\n")) {
        const items = trimmed.split("\n").filter(l => l.startsWith("* ") || l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-4 pl-4">
            {items.map((item, ii) => (
              <li key={ii} className="text-sm flex items-start gap-2" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} aria-hidden="true" />
                {item.replace(/^[*-]\s/, "")}
              </li>
            ))}
          </ul>
        );
      }
      if (trimmed) {
        // Handle inline bold
        const parts = trimmed.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
            {parts.map((part, pi) => pi % 2 === 1 ? <strong key={pi} style={{ color: "#1A1A2E" }}>{part}</strong> : part)}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="pt-[72px]" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", minHeight: "280px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li>/</li>
              <li style={{ color: accent }} aria-current="page">{post.category}</li>
            </ol>
          </nav>
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4" style={{ background: `${accent}25`, color: accent, fontFamily: "var(--font-inter, sans-serif)" }}>
            {post.category}
          </span>
          <h1 className="font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter, sans-serif)" }}>
            <span>{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-12 px-4 sm:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-[250px] sm:h-[400px] mb-10 rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "#E5E7EB" }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Excerpt */}
          <div className="p-5 rounded-xl mb-8 border-l-4" style={{ background: "#F7F8FA", borderLeftColor: accent }}>
            <p className="text-sm font-medium leading-relaxed italic" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <article className="prose-sm" style={{ maxWidth: "100%" }}>
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t flex flex-wrap gap-2" style={{ borderColor: "#E5E7EB" }}>
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "#F3F4F6", color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E5E7EB" }}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold flex items-center gap-2" style={{ color: "#374151", fontFamily: "var(--font-poppins, sans-serif)" }}>
                <Share2 className="w-4 h-4" aria-hidden="true" /> Share this article:
              </span>
              {[
                { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(post.title + " " + siteConfig.url + "/blog/" + post.slug)}`, color: "#25D366" },
                { label: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${siteConfig.url}/blog/${post.slug}`, color: "#1877F2" },
                { label: "Twitter/X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${siteConfig.url}/blog/${post.slug}`, color: "#000000" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80" style={{ background: s.color, fontFamily: "var(--font-inter, sans-serif)" }} aria-label={`Share on ${s.label}`}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200" style={{ color: accent, fontFamily: "var(--font-inter, sans-serif)" }}>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Related articles">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-bold text-xl mb-8" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <BlogCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }} aria-label="Book appointment">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-[#1F2A37] mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: "1.375rem" }}>
            Ready to Book a Consultation?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
            Our specialists in Salepur are ready to help. Book online or call us today.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}>
            📅 Book Appointment →
          </Link>
        </div>
      </section>
    </>
  );
}

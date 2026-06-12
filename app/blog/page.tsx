import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogCard from "@/components/shared/BlogCard";
import { blogPosts, getFeaturedPost } from "@/lib/data/blog-posts";
import { pageSEO, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSEO.blog.title,
  description: pageSEO.blog.description,
  keywords: pageSEO.blog.keywords,
  openGraph: {
    title: pageSEO.blog.title,
    description: pageSEO.blog.description,
    url: `${siteConfig.url}/blog`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
  ],
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Dental & Skin Care Insights"
        subtitle="Expert tips, treatment guides, and health updates from our clinic in Salepur."
        breadcrumbs={[{ label: "Blog" }]}
        accentColor="dental"
        bgImage="/images/hero/blog-hero.png"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Blog articles">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <div className="mb-12">
              <SectionHeading eyebrow="Featured Article" title="Editor's Pick" align="left" />
              <BlogCard post={featured} featured />
            </div>
          )}

          {/* All Articles */}
          <SectionHeading eyebrow="All Articles" title="Latest from the Blog" subtitle="Dental and skin care knowledge, simplified." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Stay updated">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-4" aria-hidden="true">📬</div>
          <h2 className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
            Have a Question for Our Doctors?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
            Can&apos;t find the answer you&apos;re looking for? Book a consultation and our specialists will give you personalised guidance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}>
              📅 Book a Consultation
            </a>
            <a href="/dental-services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.01]" style={{ borderColor: "#1F2A37", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}>
              Browse Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

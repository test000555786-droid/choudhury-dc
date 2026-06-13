import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "@/components/shared/ReviewCard";
import { testimonials } from "@/lib/data/testimonials";
import { pageSEO, siteConfig } from "@/lib/seo";
import VideoTestimonialsCarousel from "@/components/gallery-reviews/VideoTestimonialsCarousel";

export const metadata: Metadata = {
  title: pageSEO.galleryReviews.title,
  description: pageSEO.galleryReviews.description,
  keywords: pageSEO.galleryReviews.keywords,
  openGraph: {
    title: pageSEO.galleryReviews.title,
    description: pageSEO.galleryReviews.description,
    url: `${siteConfig.url}/gallery-reviews`,
  },
};

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating },
    reviewBody: t.text,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Gallery & Reviews", item: `${siteConfig.url}/gallery-reviews` },
  ],
};

const galleryItems = [
  { label: "Smile Makeover", type: "Dental", image: "/images/gallery/smile_makeover.webp" },
  { label: "Dental Implants", type: "Dental", image: "/images/gallery/dental_implants.webp" },
  { label: "HydraFacial Glow", type: "Skin Care", image: "/images/gallery/hydrafacial_glow.webp" },
  { label: "Braces Transformation", type: "Dental", image: "/images/gallery/braces_transformation.webp" },
  { label: "Laser Hair Removal", type: "Skin Care", image: "/images/gallery/laser_hair_removal.webp" },
  { label: "Teeth Whitening", type: "Dental", image: "/images/gallery/teeth_whitening.webp" },
  { label: "Acne Scar Treatment", type: "Skin Care", image: "/images/gallery/acne_scar_treatment.webp" },
  { label: "Root Canal", type: "Dental", image: "/images/gallery/root_canal.webp" },
  { label: "PRP Hair Therapy", type: "Skin Care", image: "/images/gallery/prp_hair_therapy.webp" },
];

export default function GalleryReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Real Results. Real Smiles. Real Confidence."
        subtitle="See the transformations our patients have experienced at Choudhury Dental & Skin Care Clinic."
        breadcrumbs={[{ label: "Gallery & Reviews" }]}
        accentColor="gold"
        bgImage="/images/hero/gallery-hero.png"
      />

      {/* Photo Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Photo gallery">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Patient Gallery" title="Treatment Transformations" subtitle="A selection of real results from our dental and skin care treatments." />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {galleryItems.map((item, i) => {
              const isDental = item.type === "Dental";
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border aspect-square flex flex-col items-center justify-center relative group"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-0 right-0 z-10 flex flex-col items-center gap-2">
                    <div className="text-sm sm:text-base font-semibold text-center px-4 text-white" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                      {item.label}
                    </div>
                  </div>
                  <div
                    className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full z-10 backdrop-blur-md"
                    style={{
                      background: isDental ? "rgba(31,42,55,0.85)" : "rgba(232,116,138,0.85)",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-inter, sans-serif)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                    }}
                  >
                    {item.type}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Before and after results">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Transformations" title="Before &amp; After" subtitle="Side-by-side comparisons of real patient outcomes." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { treatment: "Smile Makeover", type: "Dental" },
              { treatment: "Acne Scar Treatment", type: "Skin Care" },
              { treatment: "Teeth Whitening", type: "Dental" },
            ].map((item, i) => {
              const isDental = item.type === "Dental";
              return (
                <div key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E5E7EB" }}>
                  <div className="grid grid-cols-2" style={{ minHeight: "180px" }}>
                    <div className="flex flex-col items-center justify-center p-6 gap-2" style={{ background: "rgba(239,68,68,0.05)", borderRight: "1px solid #E5E7EB" }}>
                      <div className="text-3xl" aria-hidden="true">{isDental ? "😕" : "😔"}</div>
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#EF4444" }}>Before</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 gap-2" style={{ background: "rgba(34,197,94,0.05)" }}>
                      <div className="text-3xl" aria-hidden="true">{isDental ? "😁" : "😊"}</div>
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#22C55E" }}>After</div>
                    </div>
                  </div>
                  <div className="px-4 py-3 text-center border-t" style={{ borderColor: "#E5E7EB", background: "#FFFFFF" }}>
                    <div className="text-xs font-semibold" style={{ color: isDental ? "#C5A46D" : "#E8748A", fontFamily: "var(--font-poppins, sans-serif)" }}>{item.treatment}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>{item.type}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Carousel */}
      <VideoTestimonialsCarousel />

      {/* Written Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Patient reviews">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Patient Reviews" title="What Our Patients Say" subtitle="Genuine reviews from real patients treated at our clinic." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <ReviewCard key={t.id} name={t.name} initials={t.initials} rating={t.rating} text={t.text} treatment={t.treatment} type={t.type as "Dental" | "Skin Care"} date={t.date} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Rating Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Google rating">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8 text-center border"
            style={{ background: "#F7F8FA", borderColor: "#E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-6 h-6" style={{ color: "#F59E0B", fill: "#F59E0B" }} aria-hidden="true" />
              ))}
            </div>
            <div className="font-bold text-4xl mb-1" style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }} aria-label="4.9 out of 5 rating">
              4.9 / 5
            </div>
            <div className="text-sm mb-5" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
              Based on 200+ verified Google Reviews
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
              aria-label="Leave a Google review for Choudhury Dental & Skin Care Clinic"
            >
              ⭐ Leave a Google Review →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }} aria-label="Book appointment">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-[#1F2A37] mb-4" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: "clamp(1.4rem, 3vw, 1.875rem)" }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mb-7 text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
            Join 10,000+ patients who trust Choudhury Dental &amp; Skin Care Clinic in Salepur.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}>
            📅 Book Your Appointment →
          </Link>
        </div>
      </section>
    </>
  );
}

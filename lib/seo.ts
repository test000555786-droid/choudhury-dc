export const siteConfig = {
  name: "Choudhury Dental & Skin Care Clinic",
  url: "https://www.choudhurydentalandskincareclinic.com",
  phone: "+91 94393 98911",
  whatsapp: "+919439398911",
  email: "info@choudhurydentalandskincareclinic.com",
  address: "Kendrapada - Cuttack Rd, Salipur, Odisha 754202",
  city: "Salipur",
  state: "Odisha",
  country: "India",
  googleMapsUrl: "https://share.google/Of1scYHgUYWAXHW0q",
  googleRating: 4.9,
  reviewCount: 200,
  yearsOfExperience: 15,
  patientCount: "10,000+",
  lat: "20.478015093279716",
  lng: "86.10826488836399",
};

export const pageSEO = {
  home: {
    title: "Best Dental & Skin Care Clinic in Salipur | Choudhury Clinic",
    description:
      "Choudhury Dental & Skin Care Clinic — Salipur's trusted dual-specialty clinic. Expert dentistry + advanced dermatology under one roof serving Cuttack District and Kendrapada.",
    keywords:
      "dental clinic Salipur, best dentist Salipur, skin care clinic Salipur, dermatologist Salipur, dentist near me, Cuttack district",
  },
  dentalServices: {
    title: "Dental Services in Salipur | Implants, Braces, RCT | Choudhury Clinic",
    description:
      "Comprehensive dental care in Salipur — dental implants, teeth whitening, braces, root canal, pediatric dentistry, and more. Serving Salipur and nearby areas.",
    keywords:
      "dental implants Salipur, teeth whitening Salipur, braces Salipur, root canal Salipur, dentist near me",
  },
  skinCareServices: {
    title: "Skin Care Treatments in Salipur | PRP, Laser, HydraFacial",
    description:
      "Advanced skin care treatments in Salipur — laser hair removal, PRP therapy, acne treatment, anti-ageing, HydraFacial and more. Book a consultation today.",
    keywords:
      "skin care clinic Salipur, laser hair removal Salipur, PRP hair treatment Salipur, acne treatment Salipur, dermatologist Salipur",
  },
  about: {
    title: "About Us | 15+ Years of Trusted Dental & Skin Care | Choudhury Clinic",
    description:
      "Learn about Choudhury Dental & Skin Care Clinic — 15+ years of trusted dual-specialty care in Salipur, Odisha. Meet Dr. Ch. Pritam Pratik Praharaj and our team.",
    keywords:
      "about Choudhury clinic, dental doctor Salipur, skin specialist Salipur, clinic history",
  },
  galleryReviews: {
    title: "Patient Reviews & Gallery | 4.9★ Google Rated | Choudhury Clinic",
    description:
      "See real patient transformations and read genuine reviews for Choudhury Dental & Skin Care Clinic, Salipur. 4.9★ rated with 200+ Google reviews.",
    keywords:
      "dental clinic reviews Salipur, before after dental, patient testimonials, skin treatment results",
  },
  blog: {
    title: "Dental & Skin Care Blog | Expert Tips & Guides | Choudhury Clinic",
    description:
      "Expert dental and skin care tips, treatment guides, and oral health insights from Choudhury Dental & Skin Care Clinic, Salipur.",
    keywords:
      "dental health tips, skin care guide, oral hygiene, dermatology blog",
  },
  contact: {
    title: "Book Appointment | Contact | Choudhury Dental & Skin Care Clinic, Salipur",
    description:
      "Book your dental or skin care appointment at Choudhury Clinic, Salipur. Call, WhatsApp, or fill our online form. We respond within 2 hours.",
    keywords:
      "book dentist appointment Salipur, contact skin clinic Salipur, dental emergency Salipur",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/og-images/home.jpg`,
  description:
    "Choudhury Dental & Skin Care Clinic is a dual-specialty clinic in Salipur, Odisha offering expert dental and dermatological treatments since 2009. Serving Salipur, Cuttack District, and Kendrapada.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kendrapada - Cuttack Rd",
    addressLocality: "Salipur",
    addressRegion: "Odisha",
    postalCode: "754202",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.lat,
    longitude: siteConfig.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.googleRating,
    reviewCount: siteConfig.reviewCount,
    bestRating: "5",
  },
  priceRange: "₹₹",
};

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ch. Pritam Pratik Praharaj",
  jobTitle: "Lead Specialist",
  medicalSpecialty: "Oral & Maxillofacial Surgery",
  address: localBusinessSchema.address,
  telephone: siteConfig.phone,
  url: `${siteConfig.url}/about`,
  image: `${siteConfig.url}/images/team/dr-pritam-pratik.webp`,
  worksFor: {
    "@type": "MedicalBusiness",
    name: siteConfig.name,
  },
};

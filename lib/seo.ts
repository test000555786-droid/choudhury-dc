export const siteConfig = {
  name: "Choudhury Dental & Skin Care Clinic",
  url: "https://www.choudhuryclinic.com",
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91XXXXXXXXXX",
  email: "info@choudhuryclinic.com",
  address: "Kendrapada - Cuttack Rd, Salipur, Odisha 754202",
  city: "Salipur",
  state: "Odisha",
  country: "India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Choudhury+Dental+%26+Skin+Care+Clinic%2C+Kendrapada+-+Cuttack+Rd%2C+Salipur%2C+Odisha+754202",
  googleRating: 4.9,
  reviewCount: 200,
  yearsOfExperience: 15,
  patientCount: "10,000+",
  lat: "20.2961",
  lng: "85.8245",
};

export const pageSEO = {
  home: {
    title: "Best Dental & Skin Care Clinic in Salepur | Choudhury Clinic",
    description:
      "Choudhury Dental & Skin Care Clinic — Salepur's trusted dual-specialty clinic. Expert dentistry + advanced dermatology under one roof. 15+ years, 10,000+ patients. Book today.",
    keywords:
      "dental clinic Salepur, best dentist Salepur, skin care clinic Salepur, dermatologist Salepur",
  },
  dentalServices: {
    title: "Dental Services in Salepur | Implants, Braces, RCT | Choudhury Clinic",
    description:
      "Comprehensive dental care in Salepur — dental implants, teeth whitening, braces, root canal, pediatric dentistry and more. Book your appointment today.",
    keywords:
      "dental implants Salepur, teeth whitening Salepur, braces Salepur, root canal Salepur, dentist near me",
  },
  skinCareServices: {
    title: "Skin Care Treatments in Salepur | PRP, Laser, HydraFacial | Choudhury Clinic",
    description:
      "Advanced skin care treatments in Salepur — laser hair removal, PRP therapy, acne treatment, anti-ageing, HydraFacial and more. Book a consultation today.",
    keywords:
      "skin care clinic Salepur, laser hair removal Salepur, PRP hair treatment Salepur, acne treatment Salepur, dermatologist Salepur",
  },
  about: {
    title: "About Us | 15+ Years of Trusted Dental & Skin Care | Choudhury Clinic",
    description:
      "Learn about Choudhury Dental & Skin Care Clinic — 15+ years of trusted dual-specialty care in Salepur, Odisha. Meet our doctors and team.",
    keywords:
      "about Choudhury clinic, dental doctor Salepur, skin specialist Salepur, clinic history",
  },
  galleryReviews: {
    title: "Patient Reviews & Gallery | 4.9★ Google Rated | Choudhury Clinic",
    description:
      "See real patient transformations and read genuine reviews for Choudhury Dental & Skin Care Clinic, Salepur. 4.9★ rated with 200+ Google reviews.",
    keywords:
      "dental clinic reviews Salepur, before after dental, patient testimonials, skin treatment results",
  },
  blog: {
    title: "Dental & Skin Care Blog | Expert Tips & Guides | Choudhury Clinic",
    description:
      "Expert dental and skin care tips, treatment guides, and oral health insights from Choudhury Dental & Skin Care Clinic, Salepur.",
    keywords:
      "dental health tips, skin care guide, oral hygiene, dermatology blog",
  },
  contact: {
    title: "Book Appointment | Contact | Choudhury Dental & Skin Care Clinic, Salepur",
    description:
      "Book your dental or skin care appointment at Choudhury Clinic, Salepur. Call, WhatsApp, or fill our online form. We respond within 2 hours.",
    keywords:
      "book dentist appointment Salepur, contact skin clinic Salepur, dental emergency Salepur",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/og-images/home.jpg`,
  description:
    "Choudhury Dental & Skin Care Clinic is a dual-specialty clinic in Salepur, Odisha offering expert dental and dermatological treatments since 2009.",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
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

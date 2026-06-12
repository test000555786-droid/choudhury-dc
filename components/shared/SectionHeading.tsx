interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  accentColor = "#C5A46D",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 ${isCenter ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{
            color: accentColor,
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-bold mb-4"
        style={{
          fontFamily: "var(--font-poppins, sans-serif)",
          color: "#1A1A2E",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
          style={{
            color: "#6B7280",
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-12 rounded-full ${isCenter ? "mx-auto" : ""}`}
        style={{ background: accentColor }}
        aria-hidden="true"
      />
    </div>
  );
}

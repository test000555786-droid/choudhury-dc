import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  initials: string;
  rating: number;
  text: string;
  treatment: string;
  type: "Dental" | "Skin Care";
  date?: string;
}

export default function ReviewCard({
  name,
  initials,
  rating,
  text,
  treatment,
  type,
  date,
}: ReviewCardProps) {
  const isDental = type === "Dental";
  const typeColor = isDental ? "#C5A46D" : "#E8748A";
  const typeBg = isDental ? "rgba(197,164,109,0.1)" : "rgba(232,116,138,0.1)";
  const avatarBg = isDental
    ? "linear-gradient(135deg, #1F2A37 0%, #243447 100%)"
    : "linear-gradient(135deg, #E8748A 0%, #c45c73 100%)";

  return (
    <article
      className="rounded-2xl p-6 flex flex-col gap-4 h-full"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            style={{
              color: i < rating ? "#F59E0B" : "#E5E7EB",
              fill: i < rating ? "#F59E0B" : "#E5E7EB",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <blockquote
        className="text-sm leading-relaxed flex-1"
        style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Patient + treatment */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
            style={{ background: avatarBg, fontFamily: "var(--font-poppins, sans-serif)" }}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <div
              className="text-sm font-semibold"
              style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}
            >
              {name}
            </div>
            {date && (
              <div
                className="text-xs"
                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {date}
              </div>
            )}
          </div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{
            color: typeColor,
            background: typeBg,
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          {type}
        </span>
      </div>

      {/* Treatment tag */}
      <div
        className="text-xs font-medium"
        style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
      >
        {treatment}
      </div>
    </article>
  );
}

import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  solidBg?: "primary" | "accent";
  label?: string;
  minHeight?: string;
}

export default function PageHero({ title, subtitle, bgImage, solidBg, label, minHeight }: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center ${minHeight ? "" : "min-h-[400px] lg-min-h-[500px]"}`}
      style={{
        ...(solidBg === "primary" ? { background: "var(--color-primary)" } : solidBg === "accent" ? { background: "var(--color-accent)" } : {}),
        ...(minHeight ? { minHeight } : {}),
      }}
    >
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
      <div className="container relative z-10">
        {label && (
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-white/60" />
            <span className="text-white/60 text-sm font-medium uppercase tracking-widest">{label}</span>
          </div>
        )}
        <h1 className="text-4xl lg-text-6xl font-heading font-medium text-white leading-tight max-w-[700px]">{title}</h1>
        {subtitle && <p className="text-white/80 text-lg mt-4 max-w-[500px]">{subtitle}</p>}
      </div>
    </section>
  );
}

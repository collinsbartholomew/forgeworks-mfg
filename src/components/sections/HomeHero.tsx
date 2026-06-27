import Link from "next/link";
import { GoogleLogo } from "@/components/ui/icons";

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('/uploads/hero-bg.jpg')",
          backgroundColor: "var(--color-primary)",
        }}
      />
      <div className="hero-overlay" />
      <div className="container relative z-10">
        <div className="hero-content">
          <div className="section-label">
            <span className="section-label-line bg-accent" />
            <span className="section-label-text text-accent">
              Precision Manufacturing Solutions
            </span>
          </div>
          <h1 className="hero-title">
            Engineering Excellence in Every Component
          </h1>
          <p className="hero-subtitle">
            From raw steel to precision-machined parts, Fabrik delivers
            manufacturing solutions that power industries worldwide.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn btn-outline">
              Our Products
            </Link>
          </div>
          <div className="hero-reviews">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-lg">{siteConfig.googleRating}</span>
                <GoogleLogo />
              </div>
              <p className="text-white-60 text-xs">{siteConfig.googleReviews} Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const siteConfig = {
  googleRating: "4.8",
  googleReviews: "200",
};

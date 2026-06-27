import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Fabrik's mission, values, and commitment to manufacturing excellence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Fabrik"
        subtitle="Leading the Future of Manufacturing"
        bgImage="/uploads/about-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">
                <span className="section-label-line bg-accent" />
                <span className="section-label-text text-accent">Our Story</span>
              </div>
              <h2 className="section-title mb-6">
                Building the Future with Precision Engineering
              </h2>
              <p className="text-black-60 leading-relaxed mb-6">
                Founded over 25 years ago, Fabrik has grown from a small steel
                processing facility into one of North America&apos;s leading
                manufacturers of precision-machined components and steel products.
                Our journey has been defined by a relentless pursuit of excellence
                and innovation.
              </p>
              <p className="text-black-60 leading-relaxed mb-6">
                Today, we serve customers across automotive, construction, energy,
                and industrial sectors, providing everything from raw steel materials
                to fully finished precision components. Our state-of-the-art
                facilities span over 500,000 square feet, equipped with the latest
                CNC machining centers and manufacturing technology.
              </p>
              <p className="text-black-60 leading-relaxed">
                Our commitment to quality is unwavering. Every product that leaves
                our facilities undergoes rigorous inspection and testing to ensure
                it meets the highest industry standards. This dedication has earned
                us the trust of leading manufacturers worldwide.
              </p>
            </div>
            <div className="about-image">
              <div
                className="w-full h-full bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: "url('/uploads/about-facility.jpg')",
                  backgroundColor: "var(--color-primary)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            <div>
              <div className="section-label">
                <span className="section-label-line bg-accent" />
                <span className="section-label-text text-accent">Our Mission</span>
              </div>
              <h2 className="section-title mb-6">
                Delivering Excellence in Every Component
              </h2>
              <p className="text-black-60 leading-relaxed">
                Our mission is to provide world-class manufacturing solutions that
                empower our customers to build better products, faster. We combine
                advanced technology with skilled craftsmanship to deliver precision
                components that exceed expectations.
              </p>
            </div>
            <div>
              <div className="section-label">
                <span className="section-label-line bg-accent" />
                <span className="section-label-text text-accent">Our Values</span>
              </div>
              <h2 className="section-title mb-6">
                Integrity, Innovation, and Excellence
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Quality First", desc: "Every component undergoes rigorous quality control" },
                  { title: "Continuous Innovation", desc: "Investing in the latest manufacturing technologies" },
                  { title: "Customer Focus", desc: "Building long-term partnerships with our customers" },
                  { title: "Sustainability", desc: "Committed to environmentally responsible manufacturing" },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm">{value.title}</h4>
                      <p className="text-black-60 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection
        title="Partner with Fabrik"
        description="Experience the Fabrik difference in manufacturing excellence."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}

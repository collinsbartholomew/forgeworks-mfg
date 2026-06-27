import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Small Manufacturing",
  description: "Fabrik supports small-scale manufacturers with precision manufacturing solutions.",
};

export default function HomeSmallManufacturingPage() {
  return (
    <>
      <PageHero
        title="Small Manufacturing"
        subtitle="Precision manufacturing solutions for businesses of all sizes."
        bgImage="/uploads/products-hero.jpg"
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose">
            <h2>Manufacturing for Every Scale</h2>
            <p>
              At Fabrik, we believe great manufacturing isn&apos;t limited to large corporations.
              We serve small and medium-sized businesses with the same precision, quality, and
              dedication we bring to our largest clients.
            </p>
            <h3>Small-Batch Production</h3>
            <p>
              Need a smaller production run? Our flexible manufacturing processes accommodate
              orders of all sizes without compromising on quality or precision. From prototypes
              to production runs of 100 or 10,000 units, we deliver consistent results.
            </p>
            <h3>Custom Solutions</h3>
            <p>
              Small businesses often have unique requirements. Our engineering team works closely
              with you to develop custom manufacturing solutions that meet your specific needs
              and budget constraints.
            </p>
            <h3>Quality Without Compromise</h3>
            <ul>
              <li>ISO-certified quality management</li>
              <li>Precision CNC machining for tight tolerances</li>
              <li>Comprehensive quality inspection at every stage</li>
              <li>Material certifications and traceability</li>
              <li>Flexible scheduling and fast turnaround</li>
            </ul>
            <h3>Partnership Approach</h3>
            <p>
              We view our small business clients as partners. When you work with Fabrik, you get
              dedicated support, transparent communication, and a manufacturing partner invested
              in your success.
            </p>
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready to manufacture?"
        description="Contact us to discuss your small-batch manufacturing needs."
        buttonText="Get a Quote"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}

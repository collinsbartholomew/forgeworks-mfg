import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Become a Customer",
  description: "Start your manufacturing partnership with Fabrik today.",
};

export default function BecomeACustomerPage() {
  return (
    <>
      <PageHero
        title="Become a Customer"
        subtitle="Start your manufacturing partnership with Fabrik."
        bgImage="/uploads/contact-hero.jpg"
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose">
            <h2>Why Partner with Fabrik?</h2>
            <p>
              With decades of manufacturing experience, Fabrik delivers precision-engineered products
              to industries worldwide. Our commitment to quality, innovation, and sustainability makes
              us the trusted partner for businesses of all sizes.
            </p>
            <h3>Getting Started</h3>
            <p>
              Becoming a Fabrik customer is straightforward. Our team will work with you to understand
              your requirements, provide a detailed quote, and establish a production timeline that
              meets your needs.
            </p>
            <h3>Our Process</h3>
            <ul>
              <li>Initial consultation to understand your manufacturing needs</li>
              <li>Technical review and feasibility assessment</li>
              <li>Detailed quotation with timeline and specifications</li>
              <li>Prototype development and approval</li>
              <li>Full-scale production and quality assurance</li>
              <li>Ongoing support and partnership</li>
            </ul>
            <h3>Minimum Order Quantities</h3>
            <p>
              We work with both large-volume orders and smaller production runs. Contact us to discuss
              your specific requirements and find the right solution for your business.
            </p>
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready to get started?"
        description="Contact our team to discuss your manufacturing needs."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}

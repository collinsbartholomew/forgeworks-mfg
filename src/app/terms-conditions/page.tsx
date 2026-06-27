import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Fabrik's terms and conditions governing the use of our website and services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Legal terms governing our services"
        bgImage="/uploads/terms-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <article className="prose prose-sm max-w-3xl mx-auto">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the ForgeWorks MFG website and services,
              you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use our
              services.
            </p>

            <h2>Products and Services</h2>
            <p>
              All products and services offered by ForgeWorks MFG are subject
              to availability. We reserve the right to modify or discontinue any
              product or service at any time without prior notice. Specifications for
              all products are subject to change without notice.
            </p>

            <h2>Orders and Pricing</h2>
            <p>
              All orders are subject to acceptance and availability. Prices for our
              products are subject to change without notice. We reserve the right to
              refuse or cancel any order for any reason, including limitations on
              quantities available for purchase.
            </p>

            <h2>Warranties</h2>
            <p>
              ForgeWorks MFG warrants that products will conform to published
              specifications at the time of shipment. Our standard warranty covers
              defects in materials and workmanship. Specific warranty terms may vary
              by product and will be provided with your order confirmation.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ForgeWorks MFG be liable for any direct,
              indirect, incidental, special, exemplary, or consequential damages
              resulting from the use or inability to use our products or services.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the
              laws of the State of Michigan, without regard to its conflict of law
              provisions. Any disputes arising from these terms shall be resolved in
              the courts of Wayne County, Michigan.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms &amp; Conditions, please contact us at
              info@forgeworks.com or call +1 (775) 128-7550.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

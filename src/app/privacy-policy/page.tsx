import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Fabrik's privacy policy and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect your information"
        bgImage="/uploads/privacy-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <article className="prose prose-sm max-w-3xl mx-auto">
            <h2>Introduction</h2>
            <p>
              ForgeWorks MFG (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information that you provide directly to us, such as
              when you fill out a contact form, request a quote, or communicate with
              us. This information may include your name, email address, phone number,
              company name, and any other information you choose to provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide
              requested services, improve our website and products, send periodic
              emails regarding our products and services, and comply with legal obligations.
            </p>

            <h2>Information Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our
              services, provide services on our behalf, or perform service-related
              functions. These third parties have access to your personal information
              only to perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page and
              updating the &quot;effective date&quot; at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at info@forgeworks.com or call us at +1 (775) 128-7550.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

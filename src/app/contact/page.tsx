import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fabrik. Call us or use our contact form to reach our manufacturing experts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your manufacturing needs"
        bgImage="/uploads/contact-hero.jpg"
      />
      <ContactSection />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ISO Certification",
  description: "Fabrik's ISO certifications and quality management system standards.",
};

export default function IsoCertificationPage() {
  return (
    <>
      <PageHero
        title="ISO Certification"
        subtitle="Committed to the highest quality standards"
        bgImage="/uploads/iso-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">Quality Standards</span>
            </div>
            <h2 className="section-title mb-6">Certified Excellence</h2>
            <p className="text-black-60 leading-relaxed mb-8">
              Fabrik maintains the highest international quality and environmental
              management standards. Our certifications demonstrate our commitment
              to continuous improvement, customer satisfaction, and environmental
              responsibility.
            </p>
            <div className="space-y-6 mb-10">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-light rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-accent)">
                        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l6.59-6.59L17 7l-8 8z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-medium text-lg">{cert.name}</h3>
                  </div>
                  <p className="text-black-60 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-heading font-medium text-xl mb-4 text-white">Our Quality Promise</h3>
              <p className="text-white-70 text-sm leading-relaxed max-w-xl mx-auto">
                Every product manufactured at Fabrik undergoes rigorous quality control
                testing. Our dedicated quality assurance team ensures that all products
                meet or exceed customer specifications and international standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

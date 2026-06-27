import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Diversity & Inclusion",
  description: "Fabrik's commitment to diversity, equity, and inclusion in the workplace.",
};

export default function DiversityInclusionPage() {
  return (
    <>
      <PageHero
        title="Diversity & Inclusion"
        subtitle="Building a stronger workforce through inclusion"
        bgImage="/uploads/diversity-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">Our Commitment</span>
            </div>
            <h2 className="section-title mb-6">Fostering an Inclusive Workplace</h2>
            <p className="text-black-60 leading-relaxed mb-8">
              At Fabrik, we believe that diversity drives innovation. Our commitment
              to creating an inclusive workplace where every employee feels valued
              and respected is fundamental to our success. We actively cultivate a
              culture that celebrates differences and leverages diverse perspectives
              to solve complex manufacturing challenges.
            </p>
            <h3 className="font-heading font-medium text-xl mb-4">Our Initiatives</h3>
            <div className="grid sm-grid-cols-2 gap-6 mb-10">
              {[
                { title: "Women in Manufacturing", desc: "Programs to attract and retain women in technical and leadership roles" },
                { title: "Veterans Hiring", desc: "Dedicated recruitment efforts for military veterans" },
                { title: "STEM Education", desc: "Partnerships with schools to promote manufacturing careers" },
                { title: "Employee Resource Groups", desc: "Support networks for underrepresented communities" },
              ].map((initiative) => (
                <div key={initiative.title} className="bg-light rounded-2xl p-6">
                  <h4 className="font-medium text-sm mb-2">{initiative.title}</h4>
                  <p className="text-black-60 text-sm">{initiative.desc}</p>
                </div>
              ))}
            </div>
            <h3 className="font-heading font-medium text-xl mb-4">By the Numbers</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <span className="text-3xl font-heading font-medium text-accent block mb-1">38%</span>
                <span className="text-black-60 text-sm">Women in workforce</span>
              </div>
              <div>
                <span className="text-3xl font-heading font-medium text-accent block mb-1">25%</span>
                <span className="text-black-60 text-sm">Minority representation</span>
              </div>
              <div>
                <span className="text-3xl font-heading font-medium text-accent block mb-1">15%</span>
                <span className="text-black-60 text-sm">Veteran employees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

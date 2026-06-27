import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Students",
  description: "Educational resources and career opportunities for students at Fabrik.",
};

export default function StudentsPage() {
  return (
    <>
      <PageHero
        title="For Students"
        subtitle="Explore manufacturing careers and educational opportunities."
        bgImage="/uploads/rd-labs-hero.jpg"
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose">
            <h2>Careers in Manufacturing</h2>
            <p>
              Manufacturing is one of the most dynamic and rewarding career fields. From engineering
              and design to production and quality control, there are countless paths to build a
              fulfilling career in manufacturing.
            </p>
            <h3>Internship Programs</h3>
            <p>
              Fabrik offers internship opportunities for students pursuing degrees in engineering,
              manufacturing technology, business, and related fields. Our internships provide
              hands-on experience in a real-world manufacturing environment.
            </p>
            <h3>Co-op Programs</h3>
            <p>
              Our cooperative education programs allow students to alternate between academic study
              and full-time employment at Fabrik, gaining valuable work experience while completing
              their degrees.
            </p>
            <h3>Educational Partnerships</h3>
            <p>
              We partner with local schools and universities to provide guest lectures, facility tours,
              and mentorship programs. These partnerships help students understand the realities of
              modern manufacturing and prepare for successful careers.
            </p>
            <h3>Scholarships</h3>
            <p>
              Fabrik sponsors scholarships for students in STEM fields. These awards recognize
              academic excellence and commitment to pursuing careers in manufacturing and engineering.
            </p>
          </div>
        </div>
      </section>
      <CtaSection
        title="Interested in a career at Fabrik?"
        description="Explore our open positions and educational programs."
        buttonText="View Open Positions"
        buttonHref="/open-positions"
        variant="light"
      />
    </>
  );
}

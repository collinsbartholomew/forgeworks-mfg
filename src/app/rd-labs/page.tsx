import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "R&D Labs",
  description: "Fabrik's research and development facilities driving innovation in manufacturing technology.",
};

export default function RDLabsPage() {
  return (
    <>
      <PageHero
        title="R&D Labs"
        subtitle="Innovation driving the future of manufacturing"
        bgImage="/uploads/rd-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">Research & Development</span>
            </div>
            <h2 className="section-title mb-6">Pioneering Manufacturing Innovation</h2>
            <p className="text-black-60 leading-relaxed mb-8">
              Our state-of-the-art research and development labs are at the forefront
              of manufacturing technology. With over $50 million invested in R&D
              infrastructure, we continuously push the boundaries of what&apos;s possible
              in steel processing, precision machining, and materials science.
            </p>
            <div className="grid sm-grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-heading font-medium text-lg mb-4">Materials Lab</h3>
                <p className="text-black-60 text-sm leading-relaxed">
                  Advanced materials characterization and testing capabilities including
                  electron microscopy, spectrometry, and mechanical testing. We develop
                  new alloys and coatings to meet evolving industry requirements.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg mb-4">Process Lab</h3>
                <p className="text-black-60 text-sm leading-relaxed">
                  Pilot-scale manufacturing equipment for testing new processes and
                  optimizing production parameters. From heat treatment to surface
                  finishing, we refine every step of the manufacturing process.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg mb-4">Automation Lab</h3>
                <p className="text-black-60 text-sm leading-relaxed">
                  Robotics and automation research for next-generation manufacturing.
                  We develop intelligent systems that improve productivity, quality,
                  and workplace safety.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg mb-4">Sustainability Lab</h3>
                <p className="text-black-60 text-sm leading-relaxed">
                  Research into green manufacturing processes, including hydrogen-based
                  steelmaking, recycling technologies, and energy-efficient production
                  methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

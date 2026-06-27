import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { teamMembers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership team driving innovation and excellence at ForgeWorks MFG.",
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The people driving manufacturing excellence"
        bgImage="/uploads/team-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label justify-center">
              <span className="section-label-line bg-accent" />
              <span className="section-label-text text-accent">Leadership</span>
            </div>
            <h2 className="section-title">Meet Our Leadership Team</h2>
          </div>
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <span className="text-3xl font-heading text-accent">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-medium text-lg mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-black-60 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

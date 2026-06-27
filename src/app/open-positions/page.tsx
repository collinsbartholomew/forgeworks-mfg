import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Open Positions",
  description: "Join the Fabrik team. Explore career opportunities in manufacturing, engineering, and more.",
};

export default function OpenPositionsPage() {
  const positions = [
    { title: "CNC Machinist", department: "Manufacturing", location: "Detroit, MI", type: "Full-time" },
    { title: "Quality Engineer", department: "Quality Assurance", location: "Detroit, MI", type: "Full-time" },
    { title: "Manufacturing Engineer", department: "Engineering", location: "Pittsburgh, PA", type: "Full-time" },
    { title: "Maintenance Technician", department: "Facilities", location: "Chicago, IL", type: "Full-time" },
    { title: "Production Supervisor", department: "Manufacturing", location: "Houston, TX", type: "Full-time" },
    { title: "Sales Representative", department: "Sales", location: "Remote", type: "Full-time" },
    { title: "Supply Chain Analyst", department: "Operations", location: "Detroit, MI", type: "Full-time" },
    { title: "Process Engineer", department: "Engineering", location: "Pittsburgh, PA", type: "Full-time" },
  ];

  return (
    <>
      <PageHero
        title="Open Positions"
        subtitle="Build your career with Fabrik"
        bgImage="/uploads/careers-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-label justify-center">
                <span className="section-label-line bg-accent" />
                <span className="section-label-text text-accent">Careers</span>
              </div>
              <h2 className="section-title">Join Our Team</h2>
              <p className="text-black-60 mt-4 max-w-xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion
                for manufacturing excellence and innovation.
              </p>
            </div>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="bg-light rounded-2xl p-6 flex flex-col sm-flex-row sm-items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg mb-1">{position.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-black-60">
                      <span>{position.department}</span>
                      <span className="text-black-30">|</span>
                      <span>{position.location}</span>
                      <span className="text-black-30">|</span>
                      <span className="text-accent">{position.type}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

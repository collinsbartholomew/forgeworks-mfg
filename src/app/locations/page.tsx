import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { officeLocations } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find Fabrik manufacturing facilities and offices across the United States.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Our Locations"
        subtitle="Manufacturing facilities across the United States"
        bgImage="/uploads/locations-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="grid sm-grid-cols-2 lg-grid-cols-2 gap-6">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-light rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                    {location.type}
                  </span>
                </div>
                <h3 className="font-heading font-medium text-xl mb-4">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--color-accent)" className="mt-0.5 flex-shrink-0">
                      <path d="M9 1C5.14 1 2 4.14 2 8c0 5.25 7 9 7 9s7-3.75 7-9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-black-60 text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--color-accent)" className="mt-0.5 flex-shrink-0">
                      <path d="M15.5 11.5l-3-1.5c-.5-.2-1-.1-1.3.3l-1.5 2c-2.1-1.1-3.8-2.8-4.9-4.9l2-1.5c.4-.3.5-.8.3-1.3L7.5 2c-.2-.5-.7-.8-1.2-.8H2C1.3 1.2.8 1.8 1 2.5 2.3 7.4 6.6 11.7 11.5 13c.7.2 1.3-.3 1.3-1v-3.8c0-.5-.3-1-.8-1.2z" />
                    </svg>
                    <a href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`} className="text-black-60 text-sm hover:text-accent transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

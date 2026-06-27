import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { events } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming industry events, conferences, and trade shows featuring ForgeWorks MFG.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Connect with us at industry events"
        bgImage="/uploads/events-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-light rounded-2xl p-8">
                  <div className="flex items-center gap-3 text-sm text-accent mb-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M14 1h-1V0h-2v1H5V0H3v1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 12H2V5h12v8z" />
                    </svg>
                    <span>{event.date}</span>
                    <span className="text-black-30">|</span>
                    <span className="text-black-60">{event.location}</span>
                  </div>
                  <h3 className="font-heading font-medium text-xl mb-2">{event.title}</h3>
                  <p className="text-black-60 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

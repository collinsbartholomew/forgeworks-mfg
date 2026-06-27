import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Video & Image Gallery",
  description: "Explore Fabrik's manufacturing facilities, products, and team through our media gallery.",
};

export default function GalleryPage() {
  const galleryItems = [
    { title: "CNC Machining Center", category: "Facilities" },
    { title: "Steel Production Line", category: "Manufacturing" },
    { title: "Quality Control Lab", category: "Quality" },
    { title: "Precision Components", category: "Products" },
    { title: "Assembly Operations", category: "Manufacturing" },
    { title: "Team Collaboration", category: "People" },
    { title: "Warehouse Operations", category: "Logistics" },
    { title: "Heat Treatment Facility", category: "Manufacturing" },
    { title: "Engineering Design", category: "R&D" },
  ];

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our facilities, products, and team"
        bgImage="/uploads/gallery-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="card card-hover">
                <div className="aspect-4-3 bg-black-5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-black-30 text-sm">{item.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-accent font-medium">{item.category}</span>
                  <h3 className="font-heading font-medium text-sm mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { solutions } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Fabrik's industry-specific manufacturing solutions for automotive, construction, energy, and more.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Industry Solutions"
        subtitle="Tailored manufacturing solutions for diverse industries"
        bgImage="/uploads/solutions-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="card card-hover"
              >
                <div className="aspect-4-3 overflow-hidden bg-black-5">
                  <div
                    className="w-full h-full bg-cover bg-center card-img-hover"
                    style={{ backgroundImage: `url('${solution.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">{solution.industry}</span>
                  <h3 className="text-lg font-heading font-medium mb-2 mt-1">{solution.title}</h3>
                  <p className="text-black-60 text-sm leading-relaxed mb-4">{solution.description}</p>
                  <span className="learn-more-link">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

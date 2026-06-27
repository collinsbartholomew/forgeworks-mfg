import type { Metadata } from "next";
import { solutions } from "@/lib/constants";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const industryDetails: Record<string, { overview: string; benefits: string[] }> = {
    automotive: {
      overview: "Fabrik provides advanced steel solutions for the automotive industry, including high-strength steel for body structures, chassis components, and powertrain parts. Our materials help manufacturers reduce vehicle weight while improving safety and performance.",
      benefits: [
        "Advanced High-Strength Steel (AHSS) for lightweight vehicle design",
        "Crash-resistant materials for improved safety ratings",
        "Consistent quality for high-volume production",
        "Custom alloy development for specific applications",
      ],
    },
    construction: {
      overview: "From structural beams to reinforcing bars, Fabrik supplies the construction industry with reliable steel products that meet the most demanding building codes and standards.",
      benefits: [
        "Structural steel beams and columns for commercial buildings",
        "Reinforcing bars and mesh for concrete structures",
        "Weather-resistant coatings for outdoor applications",
        "Custom cutting and fabrication services",
      ],
    },
    energy: {
      overview: "Fabrik serves the energy sector with specialized steel products for oil and gas pipelines, wind turbine components, and solar mounting structures.",
      benefits: [
        "API-certified pipeline products for oil and gas",
        "High-strength steel for wind turbine towers",
        "Corrosion-resistant materials for offshore applications",
        "Custom solutions for renewable energy projects",
      ],
    },
  };

  const details = industryDetails[slug] || {
    overview: `Fabrik delivers comprehensive manufacturing solutions for the ${solution.title.toLowerCase()} sector. Our products and services are designed to meet the specific challenges and requirements of this industry.`,
    benefits: [
      "Custom-engineered solutions for specific applications",
      "Consistent quality and reliability",
      "Technical support and consultation",
      "Competitive pricing and timely delivery",
    ],
  };

  return (
    <>
      <PageHero
        title={solution.title}
        subtitle={solution.description}
        bgImage={solution.image}
      />
      <section className="section">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            <div>
              <div className="section-label">
                <span className="section-label-line bg-accent" />
                <span className="section-label-text text-accent">{solution.industry}</span>
              </div>
              <h2 className="text-2xl lg-text-3xl font-heading font-medium mb-6">
                {solution.title} Solutions
              </h2>
              <p className="text-black-60 leading-relaxed mb-8">
                {details.overview}
              </p>
              <Link href="/contact" className="btn btn-primary">
                Discuss Your Project
              </Link>
            </div>
            <div>
              <div className="bg-light rounded-2xl p-8">
                <h3 className="font-heading font-medium text-lg mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-accent)" className="mt-0.5 flex-shrink-0">
                        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l6.59-6.59L17 7l-8 8z" />
                      </svg>
                      <span className="text-black-70 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

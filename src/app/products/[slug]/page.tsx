import type { Metadata } from "next";
import { products } from "@/lib/constants";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        title={product.title}
        subtitle={product.description}
        bgImage={product.image}
      />
      <section className="section">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg-text-3xl font-heading font-medium mb-6">
                {product.title}
              </h2>
              <p className="text-black-60 leading-relaxed mb-8">
                {product.description}. Our manufacturing processes ensure consistent
                quality and precision across all production runs. With decades of
                experience and state-of-the-art equipment, we deliver products that
                meet the most demanding specifications.
              </p>
              <div className="divider" />
              <h3 className="font-heading font-medium text-lg mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-accent)" className="mt-0.5 flex-shrink-0">
                      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l6.59-6.59L17 7l-8 8z" />
                    </svg>
                    <span className="text-black-70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
            </div>
            <div>
              <div className="bg-light rounded-2xl p-8">
                <h3 className="font-heading font-medium text-lg mb-6">Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-black-10 pb-3">
                      <span className="text-black-60 text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-black-80 text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-8 mt-6">
                <h3 className="font-heading font-medium text-lg mb-4 text-white">Need Assistance?</h3>
                <p className="text-white-70 text-sm mb-4">
                  Our technical team is ready to help you with product selection and specifications.
                </p>
                <Link href="/contact" className="btn btn-accent">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

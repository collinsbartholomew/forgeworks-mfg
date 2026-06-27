import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { products } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Fabrik's complete range of steel products, precision-machined components, and manufacturing solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Comprehensive manufacturing solutions for every industry"
        bgImage="/uploads/products-hero.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="card card-hover"
              >
                <div className="aspect-4-3 overflow-hidden bg-black-5">
                  <div
                    className="w-full h-full bg-cover bg-center card-img-hover"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-medium mb-2">{product.title}</h3>
                  <p className="text-black-60 text-sm leading-relaxed mb-4">{product.description}</p>
                  <span className="learn-more-link">
                    View Details
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

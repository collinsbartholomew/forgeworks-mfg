import Link from "next/link";
import { products } from "@/lib/constants";

export default function ProductsSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            <span className="section-label-line bg-accent" />
            <span className="section-label-text text-accent">Our Products</span>
          </div>
          <h2 className="section-title">Manufacturing Excellence</h2>
        </div>
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
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
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

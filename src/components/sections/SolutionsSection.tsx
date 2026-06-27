import Link from "next/link";
import { solutions } from "@/lib/constants";

export default function SolutionsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-label justify-center">
            <span className="section-label-line bg-accent" />
            <span className="section-label-text text-accent">Industry Solutions</span>
          </div>
          <h2 className="section-title">Solutions for Every Industry</h2>
        </div>
        <div className="grid sm-grid-cols-2 lg-grid-cols-4 gap-4">
          {solutions.slice(0, 8).map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="card card-hover p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5h3V8h4v4h3l-5 5z" />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-sm mb-1">{solution.title}</h3>
              <p className="text-black-60 text-xs leading-relaxed">{solution.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/solutions" className="btn btn-primary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
